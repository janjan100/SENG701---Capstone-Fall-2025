
// button and event listener that responses with get action data and data from console
document.getElementById("myBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "getData" }, (response) => {
    if (response.success) { // if response is true, print these values and add to HTML document / webpage 
      document.getElementById("output").innerText = 
        "Here are enabled privacy key toggles. Third-party cookies enabled: " + response.thirdPartyCookies  + " Do Not tracket enabled: "+response.doNotTrackEnabled;

       
      
    

    }
  });
});
