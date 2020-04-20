const requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/recipes';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Get parametes from url and call function
request.onload = function () {
  const url_string = window.location.href
  const url = new URL(url_string);
  const titleRecipe = url.searchParams.get("recipe");
  const indexRecipe = url.searchParams.get("index");
  createMoreDetail(titleRecipe, indexRecipe);
}

//Create more detail about recipe
function createMoreDetail(titleRecipe, indexRecipe) {

  const recipes = request.response;
  const myMainFlex = document.querySelector(".d-flex");
  const myTitle = document.querySelector(".title");
  const myImg = document.createElement('img');
  const myTextRecipe = document.createElement('div');

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
    const mylink = "./homePage.html?type=starters";
    location.replace(mylink);
  });

  $("#mainRecipes, #mainRecipes2").click(function () {
    const mylink = "./homePage.html?type=main";
    location.replace(mylink);
  });

  $("#dessertRecipes, #dessertRecipes2").click(function () {
    const mylink = "./homePage.html?type=dessert";
    location.replace(mylink);
  });
});

//Searchs
$(document).ready(function () {
  $("#searchButton").click(function () {
    const word = searchInput.value;
    window.find(word);
  });

  $("#searchInput").keyup(function () {
    const word = searchInput.value;
    if (word.length >= 3) {
      window.find(word);
    }
  });
});