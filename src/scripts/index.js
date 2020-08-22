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
  currSkills = allSkills;
  createSkillsFilters();
  createProjectCards(data);
}

function createSkillsFilters() {

  for (var i = 0; i < allSkills.length; i++) {

    var pill = document.createElement("div");
    pill.innerHTML= allSkills[i].toUpperCase()
    var image = document.createElement("img")
    image.src = "../src/imgs/cross.png";
    image.className = "cross";
    image.id = allSkills[i] + "-cross"
    pill.append(image)
    pill.id = "skills-pill";
    document.getElementById("skills-filter").append(pill);
  }
}

function createProjectCards(data) {
  for (var i = 0; i < data.length; i++) {
    var card = document.createElement("div");
    card.id = data[i].Title + "-card";

    imageSource =  data[i].Photo_Source;
    card.style.backgroundImage= 'url(' + imageSource + ')';
    if (data[i].Photo_Orientation == "horizontal") {
      card.className = "card horizontal";
    } else {
      card.className = "card vertical";
    }
    
    var cardOverlay = document.createElement("div");
    cardOverlay.className = "card-overlay";

    var cardText = document.createElement("p");
    cardText.innerHTML = data[i].Title;
    cardText.className = "card-text";

    cardOverlay.append(cardText);
    card.append(cardOverlay)
    document.getElementById("project-cards").append(card);
    
  }
}

$(document).ready(function(){
  $(".cross").click(function(){
    console.log(currSkills);
    console.log(allSkills);
  });
});
