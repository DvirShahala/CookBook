//click reset button
$(document).ready(function () {
  $("#reset").click(function () {
    $(".form-control").val('');
    $("#errorMessage").empty();
    $("#warningMessage").empty();
  });
});

//click submit button
$(document).ready(function () {
  $("#submit").click(function () {

    /*let requestURL = 'C:/Users/p0024269/Desktop/WebStudying/Exercise03/CookBook/json/users.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
      const usersJsonnew = request.response;
    }*/
    const data = '[{"username": "dvir", "password": 1},{"username": "admin", "password": 123}]';

    let usersJson = JSON.parse(data);
    let userName = $("#userName").val();
    let password = $("#password").val();
    let is_valid = false;

    $("#errorMessage").empty();
    $("#warningMessage").empty();
    //check if username or password empty
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
