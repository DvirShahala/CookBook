var requestURL = 'https://my-json-server.typicode.com/DvirShahala/DBjson/users';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Click submit button
$(document).ready(function () {
  $("#submit").click(function () {
    let usersJson = request.response;
    let userName = $("#userName").val();
    let password = $("#password").val();
    let is_valid = false;

    $(".errorMessage").empty();

    //Check if username or password empty
    if (userName.length != 0 && password.length != 0) {
      for (let i = 0; i < usersJson.length; i++) {
        if (usersJson[i].username == userName && usersJson[i].password == password) {
          is_valid = true;
          break;
        }
      }
      if (is_valid == true) {
        location.replace("./homePage.html");
      } else {
          $(".errorMessage").html(
            "Username or password is not valid!");
      }
      return false;
    }
  });
});