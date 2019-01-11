// Solution goes here
let emailCheck = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
let nameCheck = /\w[A-Za-z0-9-]{4,}/;
let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/;
let password;
let email;
let name;
let passwordConfirmation;
let strength;

$("#email").keyup(function(){
  email = $("#email").val();
  console.log(emailCheck.test(email));
  if (emailCheck.test(email) === true) {
    $("#email").css("border", "2px solid green")
    $("#hiddenemail").addClass("hidden");
  } else {
    $("#email").css("border", "2px solid red")
    $("#hiddenemail").removeClass("hidden");
  }
  });

  $("#name").keyup(function(){
    name = $("#name").val();
    console.log(nameCheck.test(name));
    if (nameCheck.test(name) === true) {
      $("#name").css("border", "2px solid green")
      $("#hiddenname").addClass("hidden");
    } else {
      $("#name").css("border", "2px solid red")
      $("#hiddenname").removeClass("hidden");
    }
    });

  $("#pass").keyup(function(){
    password = $("#pass").val();
    console.log(passwordCheck.test(password));
    if (passwordCheck.test(password) === true) {
      $("#pass").css("border", "2px solid green")
      $("#hiddenpassword").addClass("hidden");
    } else {
      $("#pass").css("border", "2px solid red")
      $("#hiddenpassword").removeClass("hidden");
    }
    });

  $("#pass-confirm").keyup(function(){
    passwordConfirmation = $("#pass-confirm").val();
    if (passwordConfirmation === password) {
      $("#pass-confirm").css("border", "2px solid green")
      $("#hiddenrepeat").addClass("hidden");
    } else {
      $("#pass-confirm").css("border", "2px solid red")
      $("#hiddenrepeat").removeClass("hidden");
    }
  });

  $("#reset").click(function(){
  location.reload(true);
});

  $("#send").click(function(){
    if(emailCheck.test(email) === true && nameCheck.test(name) === true && passwordCheck.test(password) === true && passwordConfirmation === password){
      alert("Thanks for registering");
    } else {
      alert("Error: invalid input")
    }
  });

  $('#pass').keyup(function(){
    strength = password.length;
    if (strength <=5){
      $("#weak").removeClass("hidden");
      $("#medium").addClass("hidden");
    } else if (strength <=8){
      $("#medium").removeClass("hidden");
      $("#strong").addClass("hidden");
    } else{
      $("#strong").removeClass("hidden");


    }
  });
