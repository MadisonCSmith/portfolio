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
    pill.innerHTML= currSkills[i].toUpperCase()
    var image = document.createElement("img")
    image.src = "../src/imgs/cross.png";
    image.className = "cross";
    image.id = currSkills[i] + "-cross"
    pill.append(image)
    pill.className = "skills-pill";
    pill.id = currSkills[i];
    document.getElementById("skills-filter").append(pill);
  }

  var showAll = document.createElement("div");
  showAll.innerHTML = "SHOW ALL";
  showAll.id = "show-all";
  showAll.className = "skills-all";
  document.getElementById("skills-filter").append(showAll);
}

function createProjectCards() {
  for (var i = 0; i < data.length; i++) {
    var a = document.createElement("a"); 
    a.href = "project.html"; 
    
    var card = document.createElement("div");
    card.id = data[i].Title + "-card";

    imageSource =  data[i].Photo_Source;
    card.style.backgroundImage= 'url(' + imageSource + ')';
    if (data[i].Photo_Orientation == "horizontal") {
      card.className = "card horizontal";
    } else {
      card.className = "card vertical";
    }
    // card.innerHTML = "<a href='project.html'></a>"
    
    var cardOverlay = document.createElement("div");
    cardOverlay.className = "card-overlay";

    var cardText = document.createElement("p");
    cardText.innerHTML = data[i].Title;
    cardText.className = "card-text";

    cardOverlay.append(cardText);
    card.append(cardOverlay)
    a.append(card)
    document.getElementById("project-cards").append(a);
    
  }
}

/* remove skill filter pill when clicked */
$(document).ready(function(){
  $(".skills-pill").on("click", function(){
    console.log("working");
    var skill;
    if (event.target.id.includes("-cross")) {
      skill = event.target.parentElement.id;
    } else {
      skill = event.target.id;
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

$("body").on("click", function(){
  console.log("The paragraph was clicked.");
});

/* add all skills filters when show all is clicked */
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
      $("#" + data[i].Title + "-card").remove();
      console.log("test");
    }
  }
}
