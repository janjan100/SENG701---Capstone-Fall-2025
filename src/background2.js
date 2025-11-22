const button1 = document.getElementById('myBtn1');
button1.addEventListener("click",lightColor);
function lightColor(){
document.body.style.backgroundColor = "rgba(200, 182, 159, 1)";
document.body.style.color = "black";
}

//function that changes background color when clicked 

const button2 = document.getElementById('myBtn2');
button2.addEventListener("click",darkColor);
function darkColor(){
document.body.style.backgroundColor = "#141479ff";
document.body.style.color = "white";
}

const element3 = document.getElementById('myBtn3');
element3.addEventListener("click",changeSize);
function changeSize(){
document.body.style.fontSize = "large";
}

const element4 = document.getElementById()

