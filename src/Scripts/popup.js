
// Button and event listener that responses with get action data and data from console
document.getElementById("myBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "getData" }, (response) => {
    if (response.success) { // if response is true, print these values and add to HTML document / webpage 
      document.getElementById("output").innerText = //defined values and innerText values
      `Here are the privacy security states
      Third-party cookies Setting enabled:  ${response.thirdPartyCookies}.
       Do Not track Setting enabled: ${response.doNotTrackEnabled}.
       PassSaving Setting enabled: ${response.passwordSaving}. 
       WebpRTCIPolicies Setting enabled: ${response.webpRTCIPolicies}. 
       Safe Browsing Setting enabled: ${response.safeBrowsing}.`
    } // .innerText: Prints Plain text print on the UI.This is safe way to print!!
    // Seperate each line for break line. Easy run to break line. 
  });
});
