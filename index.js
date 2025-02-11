var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSource1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1);// array[0]start from dice/img number 0// name dice1png



var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2); //src from attrubute .HTML call src for img / array[1]start from dice/img number 1// name dice1png
//**setattribute to do a new img from HTML that have only one img

if (randomImageSource1 > randomImageSource2){
     document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!!"
}else if(randomImageSource1 < randomImageSource2){
    document.querySelector("h1").innerHTML = "Player 2 🚩 Wins!!"
}else {
    document.querySelector("h1").innerHTML = "🚩 !Draw! 🚩 "
}
