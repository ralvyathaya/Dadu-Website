var randomNumber1 = Math.floor((Math.random()* 6) + 1);
var randomNumber2 = Math.floor((Math.random()* 6) + 1);
var randomImageSource1 = "images/dice" + randomNumber1 + ".png" 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png" 
var img1 = document.querySelector("img.img1")
var img2 = document.querySelector("img.img2")

img1.setAttribute("src", randomImageSource1);
img2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Pemain 1 Menang!"
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Pemain 2 Menang!"
} 

else {
    document.querySelector("h1").innerHTML = "Permainan seri :("
}