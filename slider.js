var Slide = document.getElementById("Slide");
var BackBtn = document.getElementById("BackBtn");
var NextBtn = document.getElementById("NextBtn");

var slideimages = new Array(
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
);

var i=0;

NextBtn.onclick=function()
{
   
    if(i<3){  
    Slide.src =slideimages[i+1] ;
    i++;
    }
}

BackBtn.onclick = function()
{
    if(i>0){
        Slide.src = slideimages[i-1];
        i--;
    }
}