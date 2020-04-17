const FLEX = document.querySelector(".d-flex");

//Get from db JSON details about recipes 
var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/recipes';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  const recipes = request.response;
  makeCards(recipes, "all");
}

//Make cards from json into html page 
function makeCards(recipes, categoryType) {

  var myTitle = document.querySelector('.title');

  switch (categoryType) {
    case 'all':
      myTitle.textContent = 'All Recipes';
      break;
    case 'starters':
      myTitle.textContent = 'Starters';
      break;
    case 'main':
      myTitle.textContent = 'Main';
      break;
    case 'dessert':
      myTitle.textContent = 'Dessert';
      break;
  }

  for (let i = 0; i < recipes.length; i++) {

    var myCard = document.createElement('div');
    var myContainer = document.createElement('div');
    var myImg = document.createElement('img');
    var myMiddleCard = document.createElement('div');
    var myBodyCard = document.createElement('div');
    var myTitleCard = document.createElement('h5');
    var myDescription = document.createElement('p');

    myCard.className = "card";
    myContainer.className = "container";
    myImg.className = "card-img-top";
    myImg.alt = "Card image cap";
    myImg.href = "detailRecipe.html";
    myMiddleCard.className = "middle";
    myBodyCard.className = "card-body";
    myTitleCard.className = "card-title";
    myTitleCard.href = "detailRecipe.html";
    myDescription.className = "card-text";


    //Events onclick
    myImg.addEventListener("click", function () {
      var thisRecipe = recipes[i].title;
      var indexRecipe = i;
      var mylink = "./detailRecipe.html?recipe=" + thisRecipe + "&index=" + indexRecipe;
      location.replace(mylink);
    });

    myTitleCard.addEventListener("click", function () {
      var thisRecipe = recipes[i].title;
      var indexRecipe = i;
      var mylink = "./detailRecipe.html?recipe=" + thisRecipe + "&index=" + indexRecipe;
      location.replace(mylink);
    });

    //Filter by catagory or all
    if (recipes[i].type == categoryType || categoryType == "all") {
      myImg.src = recipes[i].image;
      myTitleCard.textContent = recipes[i].title;
      myDescription.textContent = recipes[i].description;

      myContainer.appendChild(myImg);
      myContainer.appendChild(myMiddleCard);
      myBodyCard.appendChild(myTitleCard);
      myBodyCard.appendChild(myDescription);
      myCard.appendChild(myContainer);
      myCard.appendChild(myBodyCard);

      FLEX.appendChild(myCard);
    }
  }
}

//Click category recipe
$(document).ready(function () {

  $("#allRecipes, #allRecipes2").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "all");
  });

  $("#startersRecipes, #startersRecipes2").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "starters");
  });

  $("#mainRecipes, #mainRecipes2").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "main");
  });

  $("#dessertRecipes, #dessertRecipes2").click(function () {
    $(".d-flex").empty();
    recipes = request.response;
    makeCards(recipes, "dessert");
  });
});

//Searchs
$(document).ready(function () {
  $("#searchButton").click(function () {
    //var searchFrom = document.querySelector('#allCard');
    var word = searchInput.value;
    //searchFrom.find(word);
    window.find(word);
  });

  $("#searchInput").keyup(function () {
    var word = searchInput.value;
    if (word.length >= 3) {
      window.find(word);
    }
  });
});