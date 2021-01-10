var checkEmail = function(){
    var email = document.getElementById('email').value;
    var regexCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // console.log(regexCheck.test(email));
    return regexCheck.test(email);

    //check if it is email
}
var checkFocus = function(){
    var box = document.getElementById('email');
    box.addEventListener( 'focus', function() {
         if( box.focus ) {
            // console.log( 'box has focus' );
            return true;
            }
         },false);

    //check if it is focus
}
var subscribe = function(){
    if(!checkEmail() & !checkFocus()){
        document.getElementById("alert").innerHTML = "A valid email is required";
        document.getElementById("email").style.outlineColor="red"
        document.getElementById("email").style.borderColor="red"
        //highlight the box red
    }else{
    showSuccess();}

//check if it is email return true
//check if not focus and not email return false
}

var showSuccess = function(){
    document.getElementsByClassName("success-card")[0].style.display = "block";
    document.getElementById("success-h1").innerHTML = "Thank you";
    document.getElementById("success-p").innerHTML = "Your subscription was a success !"
    document.getElementsByClassName("subscribe-card")[0].style.display = "none";

//show Success message
}