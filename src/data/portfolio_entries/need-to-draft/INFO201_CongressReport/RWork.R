
library("httr")
library("jsonlite") 
library("dplyr")
source('apikeys.R')
library(knitr)


base.uri <- "https://api.propublica.org/congress/v1/"

# finds the five most recent bills enacted in both the house and
# senate by the 115 congress 
end.point <- paste0(base.uri, "115/both/bills/enacted.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
bill.data <- parsed.data$results$bills[[1]]

five.recent.bill <- select(bill.data, bill_id, short_title, sponsor_name,
                           sponsor_state, sponsor_party, enacted, 
                           congressdotgov_url) %>%
  top_n(5, enacted)

# finds the five most recent votes in both the house and the senate
# by the 115 congress
end.point <- paste0(base.uri, "both/votes/recent.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
vote.data <- flatten(parsed.data$results$votes)

five.recent.vote <- select(vote.data, bill.bill_id, description,
                           vote_type, result, url) %>%
  slice(1:5)

# rename bill.bill_id and description so it's easier to read in the
# report and more consistent with other tables
colnames(five.recent.vote)[colnames(five.recent.vote)
                           =="bill.bill_id"]<- "bill_id"

# finds the three most recent bills relating to immigration from 
# both the house and senate
end.point <- paste0(base.uri, "bills/search.json?query=", "immigration")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
immigration.data <- parsed.data$results$bills[[1]]

immigration.data <- select(immigration.data, bill_id, title) %>%
  slice(1:3)

# finds information about the specific bill 
end.point <- paste0(base.uri, "115", "/bills/", "hr4508", ".json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
education.bill <- parsed.data$results

bill.title <- education.bill[1, "short_title"]
bill.sponsor <- education.bill[1, "sponsor"]
sponsor.party <- education.bill[1, "sponsor_title"]
sponsor.state <- education.bill[1, "sponsor_state"]
introduced.data <- education.bill[1, "introduced_date"]
num.cosponsors <- education.bill[1, "cosponsors"]
last.action <- education.bill[1, "latest_major_action_date"]
education.url <- education.bill[1, "congressdotgov_url"]

# finds the related bills to s2380-115 ammend National something
# or another to for undocumented immigrants in gangs
end.point <- paste0(base.uri, "115", "/bills/", "hr4508-115", "/related.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
immigration.related.data <- parsed.data$results$bills[[1]]

related.immigration.bill <- select(immigration.data, bill_id, title) %>%
  slice(1:3)

kable(related.immigration.bill, row.names = NA, col.names = NA)

# information about Patty Murray

# finds Patty's Murray's representative id
end.point <- paste0(base.uri, "115/senate/members.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
member.data <- parsed.data$results$members
member.data <- flatten(member.data[[1]]) %>%
  filter(last_name == "Murray") %>%   #"M001111"
  filter(first_name == "Patty")

representative.id <- member.data[1, "id"] 
  
# finds a data frame with Patty Murray's information
end.point <- paste0(base.uri, "members/", representative.id, ".json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
rep.data <- parsed.data$results

# finds her specific contact information
twitter <- rep.data[1, "twitter_account"]
youtube <- rep.data[1, "youtube_account"]
website <- rep.data[1, "url"]
phone <- member.data[1, "phone"]
first.name <- member.data[1, "first_name"]
last.name <- member.data[1, "last_name"]

# get her list of bill sponsored/cosponsored

# lists of things she has sponsored
end.point <- paste0(base.uri, "members/", representative.id, "/votes.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
sponsored.data <- parsed.data$results$votes
sponsored.data <- flatten(sponsored.data[[1]])

# lists of things she has cosponsored
end.point <- paste0(base.uri, "members/", representative.id,
                    "/bills/", "cosponsored", ".json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
cosponsored.data <- parsed.data$results$bills
cosponsored.data <- flatten(cosponsored.data[[1]])

# rename columns so there's common values between the sponsored and
# cosponsored data
colnames(sponsored.data)[7] <- "title"
colnames(sponsored.data)[13] <- "bill_id"

# joins sponsored and cosponsored tables
all.bills <- full_join(sponsored.data, cosponsored.data, by="title") %>%
  select("title") %>%
  distinct()


# percentage of recent votes in which she voted with the majority
# of the Democractic party

# her recent votes
end.point <- paste0(base.uri, "members/", representative.id, "/votes.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
murray.votes <- parsed.data$results$votes
murray.votes <- flatten(murray.votes[[1]])

# creates data frame recent votes in the senate (in the senate 
# because patty murray is in the senate)
end.point <- paste0(base.uri, "senate", "/votes/recent.json")
response <- GET(end.point, add_headers('X-API-Key' = api.key))
body <- content(response, "text")
parsed.data <- fromJSON(body)
recent.votes <- flatten(parsed.data$results$votes)

# joins all recent votes in senate to her votes
# can't vote twice in the same minute- composite key of date 
# and time is a unique value
all.vote.info <- left_join(murray.votes, recent.votes, by 
                           = c("date" = "date", "time" = "time"))

# calculates number of times she voted
num.times.voted <- summarize(all.vote.info, count = n())
num.times.voted <- num.times.voted[1, 1]

# calculates number of times she votes with Democrats
num.times.votes.with.democrats <- filter(all.vote.info, position 
                                         == democratic.majority_position) %>%
summarize(count = n())
num.times.votes.with.democrats <- num.times.votes.with.democrats[1, 1]

# calculate percent she votes with democrats
percent <- (num.times.votes.with.democrats / num.times.voted) * 100



  




