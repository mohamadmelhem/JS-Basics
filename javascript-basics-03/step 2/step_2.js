var show = document.getElementById('show')
var hide = document.getElementById('hide')
var text  = document.getElementById('texte')


function show_hide (showBtn , hideBtn , targetText) {
    hideBtn.onclick =  function () {
        targetText.style.display = 'none'
    }
    showBtn.onclick = function () {
        targetText.style.display = 'block'
    }
}

show_hide(show , hide , text);