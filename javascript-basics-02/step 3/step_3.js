const newDiv= document.createElement("div");
newDiv.id = "div1";
document.body.appendChild(newDiv);
 
function change(){
    let i=document.getElementById("name").value;
    document.getElementById("div1").innerHTML=i;

}
let p=document.querySelector("#name").oninput=function(){change()}