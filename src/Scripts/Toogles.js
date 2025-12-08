

// toogle for dark background color and orginal white background color. Presents an error Google chrome extension manager however has full functionality
let darkMode = false;
const element1 = document.getElementById('myBtn2')
element1.addEventListener("click",toggleDarkMode);
function toggleDarkMode() {
 darkMode = !darkMode; // flips between true/false
if (darkMode) {
document.body.style.backgroundColor = "#202029ff";
document.body.style.color = "white";
} else {
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
}



// toogle for increased font and orginal font.
let largeText = false;
const element2 = document.getElementById('myBtn1');
element2.addEventListener("click", toggleFontSize);
function toggleFontSize(){
largeText = !largeText;
 if (largeText) {
document.body.style.fontSize = "large";
 } else 
    {
    document.body.style.fontSize = "small"; // resets to default
    }
}}
