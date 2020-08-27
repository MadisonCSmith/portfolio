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

    var pill = document.createElement("div");
    pill.innerHTML= currSkills[i].toUpperCase().replace("-", " ");
    var image = document.createElement("img")
    image.src = "../src/imgs/cross.png";
    image.className = "cross";
    image.id = currSkills[i] + "-cross"
    pill.append(image)
    pill.className = "skills-pill";
    pill.id = currSkills[i].replace(" ", "-");
    document.getElementById("skills-filter").append(pill);
  }

  var showAll = document.createElement("div");
  showAll.innerHTML = "SHOW ALL";
  showAll.id = "show-all";
  showAll.className = "skills-all";
  document.getElementById("skills-filter").append(showAll);
}

function createProjectCards() {
  $("#project-cards").empty();
  for (var i = 0; i < data.length; i++) {
    /* create link to go around card */
    var a = document.createElement("a"); 
    a.href = data[i].File_URL.toLowerCase() + ".html"; 
    a.id = data[i].Title + "-card";
    
    /* create card */
    var card = document.createElement("div");

    /* create image to go in card */
    imageSource =  "../src/imgs/" + data[i].Photo_Source;
    card.style.backgroundImage= 'url(' + imageSource + ')';

    /* assign classes to card */
    if (data[i].Photo_Orientation == "horizontal") {
      card.className = "card horizontal";
    } else {
      card.className = "card vertical";
    }
    
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

/* remove skill filter pill when clicked */
$(document).ready(function(){
  $(".skills-pill").on("click", function(){
    console.log("working");
    var skill;
    if (event.target.id.includes("-cross")) {
      skill = event.target.parentElement.id.replace(" ", "-");
    } else {
      skill = event.target.id.replace(" ", "-");
    }
    console.log(skill);
    index = currSkills.indexOf(skill);
    currSkills = currSkills.splice(0, index).concat(currSkills.splice(index + 1, currSkills.length - 1));
    
    console.log(" ");
    console.log("deleted skill: " + skill);
    console.log("curr skills: " + currSkills);

    $("#" + skill).hide();
    rearrangeCards();
  });
});

/* delete later */
$(".skills-pill").on("click", function(){
  console.log("The paragraph was clicked.");
});

/* add all skills filters when "show all" div is clicked */
$(document).ready(function(){
  $("#show-all").on("click", function(){
    createSkillsFilters();
    createProjectCards();
    rearrangeCards();
  });
});

function rearrangeCards() {
  // if currSkills doesn't contain any skill listed in data, take off
  for (var i = 0; i < data.length; i++) {
    if (currSkills.filter(value => data[i].Skills.includes(value)).length == 0) {
      $("#" + data[i].Title.replace() + "-card").remove();
      console.log("test");
    }
  }
}

$("#down-arrow").click(function() {
  $('html,body').animate({
      scrollTop: $("#project-section").offset().top},
      'medium');
});