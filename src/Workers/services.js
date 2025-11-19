console.log("Please check below to  console to view metadata about extensions and values. Thank you. ")


// Button 1
const element1 = document.getElementById('myBtn1');
element1.addEventListener("click", changeColor1);
 
function changeColor1() {
    document.body.style.backgroundColor = 'purple';
}
 
// Button 2
const element2 = document.getElementById('myBtn2');
element2.addEventListener("click", changeColor2);
 
function changeColor2() {
    document.body.style.backgroundColor = 'red';
}
