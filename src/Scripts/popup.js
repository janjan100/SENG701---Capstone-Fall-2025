document.getElementById("myBtn").addEventListener("click",() => {
chrome.runtime.sendMessage({ action: "getData" }, (response) => {
document.getElementById("output").innerHTML = response.message;
});
});