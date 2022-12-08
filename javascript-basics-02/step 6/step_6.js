var image= document.querySelectorAll("img");
for (let i=0;i<=image.length;i++){
    image[i].addEventListener("mouseover", function(){
        document.getElementById("image"+ (i+1)).src="images/image" + (i+1)+ "_2.jpg"
    })
    image[i].addEventListener("mouseout",function(){
        document.getElementById("image"+ (i+1)).src="images/image" + (i+1) + ".jpg"
    })
}
