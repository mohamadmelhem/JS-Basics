function reset(){
    var b=confirm("are you sure to reset all text?");
    document.getElementById("name").value= " ";
    document.getElementById("surname").value= " ";
    document.getElementById("city").value= " ";
}
document.querySelector("button").onclick=function(){reset()};

