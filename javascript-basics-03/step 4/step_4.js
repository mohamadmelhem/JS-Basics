var password=document.getElementById("password")
var confirmation=document.getElementById("confirmation")
var test=document.querySelector("button")

test.onclick = function () {
    if(password.value!=confirmation.value){
        password.style.border = "2px solid red"
        confirmation.style.border = "2px solid red"
    }
}