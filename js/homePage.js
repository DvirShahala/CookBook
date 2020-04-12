const FLEX = document.querySelector(".d-flex");
var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/recipes';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  const recipes = request.response;
  makeCards(recipes, "all");
}

function makeCards(recipes, categoryType) {

  for (let i = 0; i < recipes.length; i++) {

    var myCard = document.createElement('div');
    var myContainer = document.createElement('div');
    var myImg = document.createElement('img');
    var myMiddleCard = document.createElement('div');
    var myButton = document.createElement('button');
    var myBodyCard = document.createElement('div');
    var myTitleCard = document.createElement('h5');
    var myDescription = document.createElement('p');

    myCard.className = "card";
    myContainer.className = "container";
    myImg.className = "card-img-top";
    myImg.alt = "Card image cap";
    myMiddleCard.className = "middle";
    myButton.className = "btn btn-secondary";
    myButton.id = "text";
    myBodyCard.className = "card-body";
    myTitleCard.className = "card-title";
    myDescription.className = "card-text";
    myButton.textContent = "Recipe";

    if (recipes[i].type == categoryType || categoryType == "all") {
      myImg.src = recipes[i].image;
      myTitleCard.textContent = recipes[i].title;
      myDescription.textContent = recipes[i].description;

      myContainer.appendChild(myImg);
      myContainer.appendChild(myMiddleCard);
      myMiddleCard.appendChild(myButton);
      myBodyCard.appendChild(myTitleCard);
      myBodyCard.appendChild(myDescription);
      myCard.appendChild(myContainer);
      myCard.appendChild(myBodyCard);

      FLEX.appendChild(myCard);
    }
  }
}
$(document).ready(function () {
  $("#allRecipes").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "all");
  });
});

$(document).ready(function () {
  $("#startersRecipes").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "starters");
  });
});

$(document).ready(function () {
  $("#mainRecipes").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "main");
  });
});

$(document).ready(function () {
  $("#dessertRecipes").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "dessert");
  });
});