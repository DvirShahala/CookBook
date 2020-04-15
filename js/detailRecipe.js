var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/recipes';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Get parametes from url and call function
request.onload = function () {
  var url_string = window.location.href
  var url = new URL(url_string);
  var titleRecipe = url.searchParams.get("recipe");
  var indexRecipe = url.searchParams.get("index");
  createMoreDetail(titleRecipe, indexRecipe);
}

//Create more detail about recipe
function createMoreDetail(titleRecipe, indexRecipe) {
  
  const recipes = request.response;
  const myTitle = document.querySelector(".title");
  const myMainFlex = document.querySelector(".d-flex");

  var myImg = document.createElement('img');
  var myTextRecipe = document.createElement('div');

  myImg.className = "mainImg";
  myTextRecipe.className = "d-flex justify-content-end flex-wrap";
  myTextRecipe.id = "textRecipe";
  myImg.src = recipes[indexRecipe].image;
  myTitle.textContent = titleRecipe;
  myTextRecipe.textContent = recipes[indexRecipe].fullRecipe;

  myMainFlex.appendChild(myImg);
  myMainFlex.appendChild(myTextRecipe);

  /*<div class="title">Pasta Pomadoro</div>
<div class="d-flex justify-content-around">
  <img class="mainImg" src="images/pastaPomadoro.jpg">
  <div class="d-flex justify-content-end flex-wrap" id="textRecipe">
    safsffdsfffddsafsffdsfffdd
  </div>
  </div>*/
}

//Searchs
$(document).ready(function () {
  $("#searchButton").click(function () {
    var word = searchInput.value;
    window.find(word);
  });

  $("#searchInput").keyup(function () {
    var word = searchInput.value;
    if (word.length >= 3) {
      window.find(word);
    }
  });
});