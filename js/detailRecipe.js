var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/recipes';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Get parametes from url and call function
request.onload = function () {
  let url_string = window.location.href
  let url = new URL(url_string);
  let titleRecipe = url.searchParams.get("recipe");
  let indexRecipe = url.searchParams.get("index");
  createMoreDetail(titleRecipe, indexRecipe);
}

//Create more detail about recipe
function createMoreDetail(titleRecipe, indexRecipe) {
  
  const recipes = request.response;
  const myMainFlex = document.querySelector(".d-flex");
  let myTitle = document.querySelector(".title");
  let myImg = document.createElement('img');
  let myTextRecipe = document.createElement('div');

  myImg.className = "mainImg";
  myTextRecipe.className = "d-flex justify-content-end flex-wrap";
  myTextRecipe.id = "textRecipe";
  myImg.src = recipes[indexRecipe].image;
  myTitle.textContent = titleRecipe;
  myTextRecipe.textContent = recipes[indexRecipe].fullRecipe;

  myMainFlex.appendChild(myImg);
  myMainFlex.appendChild(myTextRecipe);
}

//Click catagory recipe
$(document).ready(function () {
  $("#startersRecipes, #startersRecipes2").click(function () {
      let mylink = "./homePage.html?type=starters";
      location.replace(mylink);
  });

  $("#mainRecipes, #mainRecipes2").click(function () {
      let mylink = "./homePage.html?type=main";
      location.replace(mylink);
  });

  $("#dessertRecipes, #dessertRecipes2").click(function () {
      let mylink = "./homePage.html?type=dessert";
      location.replace(mylink);
  });
});

//Searchs
$(document).ready(function () {
  $("#searchButton").click(function () {
      let word = searchInput.value;
      window.find(word);
  });
  
  $("#searchInput").keyup(function () {
      let word = searchInput.value;
      if (word.length >= 3) {
          window.find(word);
      }
  });
});