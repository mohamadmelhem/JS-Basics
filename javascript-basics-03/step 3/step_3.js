var green = document.querySelector('.green') 
var red = document.querySelector('.red')
var blue = document.querySelector('.blue')
var text = document.getElementById("text")

console.log(green)
function green_red_blue ( greencolor,redcolor,bluecolor,targetText ) {
    greencolor.onclick =  function () {
        targetText.style.color = 'green'
    }
    redcolor.onclick = function () {
        targetText.style.color = 'red'
    }
    bluecolor.onclick =function(){
        targetText.style.color = "blue"

    }
}
green_red_blue(green ,red, blue, text)