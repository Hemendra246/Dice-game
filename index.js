function handleClick(){
var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDice = "dice" +randomNumber1+ ".png";

var imgSrc = "images/" +randomDice;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgSrc)


var randomNumber2 = Math.floor((Math.random()*6)+1);

var imgSrc2 = "images/dice" +randomNumber2+ ".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgSrc2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Win"
}
else if(randomNumber1===randomNumber2)
    {
        document.querySelector("h1").innerHTML="Draw"
    }
    else{
        document.querySelector("h1").innerHTML="Player 2 Win "
    }
setTimeout(function(){
    document.querySelector('h1').innerHTML="Play again"
},2000)

}

document.querySelector('button').addEventListener("click", handleClick)
