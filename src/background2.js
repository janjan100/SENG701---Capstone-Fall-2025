

let darkMode = false;
const button2 = document.getElementById('myBtn3');
button2.addEventListener("click", toggleDarkMode);
function toggleDarkMode() {
    darkMode = !darkMode; // flips between true/false
    if (darkMode) {
        document.body.style.backgroundColor = "#141479ff";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}


let largeText = false;
const element3 = document.getElementById('myBtn2');
element3.addEventListener("click", toggleFontSize);
function toggleFontSize(){
largeText = !largeText;
 if (largeText) {
document.body.style.fontSize = "large";
 } else 
    {
    document.body.style.fontSize = "small"; // resets to default
    }
}

function calculatePrivacyScore(PrivacyScore){
    
}