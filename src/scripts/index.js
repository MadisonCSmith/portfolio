var data;

Papa.parse('../src/data/project_data.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function(results) {
    console.log(results.data);
    data = results.data;
    processData(data);
  }
});

var allSkills = []
var currSkills = [];

function processData(data) {
  
  // gets all the skills from all the project entries
  for (var i = 0; i < data.length; i++) {
    currSkills = data[i].Skills.split(", ");
    allSkills = allSkills.concat(currSkills);
  }

  // gets all unique skills
  for (var i = 0; i < allSkills.length; i++) {
    if (allSkills.slice(i + 1, allSkills.length).includes(allSkills[i])) {
      allSkills.splice(i, 1);
      i = i - 1;
    } else if (allSkills[i].includes(" ")) {
      allSkills[i] = allSkills[i].replace(" ", "-");
    }
  }
  currSkills = allSkills.concat([]);
  createSkillsFilters();
  createProjectCards(data);
}


function createSkillsFilters() {
  $("#skills-filter").empty();
  currSkills = allSkills.concat([]);

  for (var i = 0; i < currSkills.length; i++) {

    // create filter pill
    var pill = document.createElement("div");
    pill.innerHTML= currSkills[i].toUpperCase().replace("-", " ");
    pill.className = "skills-pill";
    var idValue = currSkills[i].replace(" ", "-");
    pill.setAttribute('onClick', "filterCards('" + idValue + "')");
    pill.id = idValue;

    // create image to put in filter
    var image = document.createElement("img")
    image.src = "../src/imgs/cross.png";
    image.className = "cross";
    image.id = currSkills[i] + "-cross"
    
    // put image and pill together
    pill.append(image)
    document.getElementById("skills-filter").append(pill);
  }

  // create "show all" button
  var showAll = document.createElement("div");
  showAll.innerHTML = "SHOW ALL";
  showAll.id = "show-all";
  showAll.className = "skills-all";
  showAll.setAttribute('onClick', "showAll()");
  document.getElementById("skills-filter").append(showAll);
}

function createProjectCards() {
  for (var i = 0; i < data.length; i++) {

    /* create link to go around card */
    var a = document.createElement("a"); 
    a.href = data[i].File_URL.toLowerCase() + ".html"; 
    a.id = data[i].Title.replace(/ /g, "-") + "-card";
    
    /* create card */
    var card = document.createElement("div");
    if (data[i].Photo_Orientation == "horizontal") {
      card.className = "card horizontal";
    } else {
      card.className = "card vertical";
    }

    /* create image to go in card */
    imageSource =  "../src/imgs/" + data[i].Photo_Source;
    card.style.backgroundImage= 'url(' + imageSource + ')';
    
    /* create div to go over card and tint with color */
    var cardOverlay = document.createElement("div");
    cardOverlay.className = "card-overlay";

    /* add text to go over card */
    var cardText = document.createElement("p");
    cardText.innerHTML = data[i].Title;
    cardText.className = "card-text";

    /* attach to each other and DOM */
    card.append(cardOverlay)
    card.append(cardText);
    a.append(card)
    document.getElementById("project-cards").prepend(a);
    
  }
}

/* removes pill and cards with id of parameter */
function filterCards(id) {
  index = currSkills.indexOf(id);
  currSkills.splice(index, 1);

  $("#" + id).hide();
  
  // if currSkills doesn't contain any skill listed in data, take off
  for (var i = 0; i < data.length; i++) {
    if (currSkills.filter(value => data[i].Skills.includes(value)).length == 0) {
      $("#" + data[i].Title.replace(/ /g, "-") + "-card").hide();
      console.log("#" + data[i].Title.replace(/ /g, "-") + "-card");
      console.log(id)
    }
  }
}

/* add all skills filters when "show all" div is clicked */
function showAll() {
  console.log("testttt");
  $("#project-cards").empty();
  createSkillsFilters();
  createProjectCards();
}

/* scrolls down when arrow clicked */
$("#down-arrow").click(function() {
  $('html,body').animate({
      scrollTop: $("#project-section").offset().top},
      'medium');
});