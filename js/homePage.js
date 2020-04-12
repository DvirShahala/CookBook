var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/recipes';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const recipes = request.response;
    makeCards(recipes);
}

function makeCards(recipes)
{
    for (let i = 0; i < recipes.length; i++) {
        
        var myCard = document.createElement('div');
        myCard.className = "card";
        var myImg = document.createElement('img');
        myImg.className = "card-img-top";
        var myCard = document.createElement('div');
        var myCard = document.createElement('div');
        var myCard = document.createElement('div');

    }


  //  $(".card-deck").html(
   //     "<div class='card'> <img class='card-img-top' src='images/pastaPomadoro.jpg' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>Card title</h5> <p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p> </div> </div>");

    /*<div class="card">
          <img class="card-img-top" src="images/pastaPomadoro.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src=".../100px200/" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src=".../100px200/" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>*/
}