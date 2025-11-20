const element = document.getElementById('myBtn1');
element.addEventListener("click",changeColor1);
function changeColor1(){
document.body.style.backgroundColor = 'purple';
}


//function that changes background color when clicked 


const element2 = document.getElementById('myBtn2');
element2.addEventListener("click",changeSize);
function changeSize(){
document.body.style.fontSize = "large";
}
