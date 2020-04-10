var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/users';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Click reset button
$(document).ready(function () {
  $("#reset").click(function () {
    $(".form-control").val('');
    $("#errorMessage").empty();
    $("#warningMessage").empty();
  });
});

//Click submit button
$(document).ready(function () {
  $("#submit").click(function () {
    let usersJson =  request.response;
    let userName = $("#userName").val();
    let password = $("#password").val();
    let is_valid = false;

    $("#errorMessage").empty();
    $("#warningMessage").empty();
    //Check if username or password empty
    if (userName.length == 0 || password.length == 0) {
      $("#warningMessage").html(
        "<div class='alert alert-warning' role='alert'> Username or password cannot be empty. </div>")
    } else {
      for (let i = 0; i < usersJson.length; i++) {
        if (usersJson[i].username == userName && usersJson[i].password == password) {
          is_valid = true;
        }
      }
      if (is_valid == false) {
        $("#errorMessage").html(
          "<div class='alert alert-danger' role='alert'> Username or password is not valid! </div>")
      } else {
        location.replace("C:/Users/p0024269/Desktop/WebStudying/Exercise03/CookBook/homePage.html");
      }
    }
  });
});