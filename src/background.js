
console.log("View the console below for information.");
	/* Part of instruction for user to check console for data and shows data below */


  /*This is an API reference from https://developer.chrome.com/docs/extensions/reference/api/management that collects meta data about extension. Returns data to console. GetAll is a getter, and requires mangement permission in manifest.json to work properly. Prints data about extensions such as name, version, permission, etc... */


chrome.management.getAll((extensions) => { 
  extensions.forEach(ext => {
    let extensions_name = ext.name;
    let extensions_version = ext.version; 
    let extensions_enabled = ext.enabled;
    let exetensions_permissions = ext.permissions;
    console.log("Names, version, enabled state, and permissons of your installed extensions: ", extensions_name, 
    extensions_version, extensions_enabled, exetensions_permissions);


  });
});
 // API for webRTCIP handling from https://developer.chrome.com/docs/extensions/reference/api/privacy

 /*This is an API reference that collects meta data about extension. Returns data to console. GetAll is a getter, and requires mangement privacy in manifest.json to work properly. WebRTC IP handling policy controls how a browser exposes your IP address during peer-to-peer connections. */

 chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (details) => {
  const webpRTCIPolicies  = details.value;
  console.log("WebRTCIPHandlingPolicy enabled:", webpRTCIPolicies); 
});

//API for passwordSavingEnabled browser setting from https://developer.chrome.com/docs/extensions/reference/api/privacy. Returns state of password Saving Browser setting such as true/false/default
chrome.privacy.services.passwordSavingEnabled.get({}, (details) => {
    const passwordSaving = details.value;
    console.log("Password saving enabled:", passwordSaving);
});



//API for thirdPartyCookies browser setting from https://developer.chrome.com/docs/extensions/reference/api/privacy. Privacy key toogle that returns state of thirdPartyCookies Browser setting such as true/false/default.Checks if browser can share cookies with third party
chrome.privacy.websites.thirdPartyCookiesAllowed.get({}, (details) => {
    const thirdPartyCookies = details.value;
    console.log("Third-party cookies allowed:", thirdPartyCookies);
});

//API for safeBrowsingEnabled browser setting from https://developer.chrome.com/docs/extensions/reference/api/privacy. Privacy key toogle that Returns state of safeBrowsing setting such as true/false/default.This setting check if website has phishing and blocks popups. 

chrome.privacy.services.safeBrowsingEnabled.get({}, (details) => {
  const safeBrowsing = details.value;
  console.log("Safe browsing setting enabled:" + safeBrowsing);
});

//API for doNotTracked from https://developer.chrome.com/docs/extensions/reference/api/privacy. Privacy key toogle that returns state of doNotTracked setting such as true/false/default.This setting prevent cookies be collected and tracking browsing although not effective by itself

chrome.privacy.websites.doNotTrackEnabled.get({},(details) => {
  const doNotTrackEnabled = details.value;
  console.log("DoNotTrack setting enabled:" +  doNotTrackEnabled);
});

// High Entropy Values and low entropy values
const fields = ["platform", "architecture", "model", "brands", "mobile"];
 //
// Return whether the state of high entrophy values is available on the browser without sharing specific data 
navigator.userAgentData.getHighEntropyValues(fields)
  .then(result => {
    fields.forEach(field => {
      if(result[field]) {
        console.log(`${field} High entropy property is available`);
      } else {
        console.log(`${field} High entropy property is  not available.`);
      }
    });
  })
  // catch error function and will print what is the error in case of prob;em
  .catch(err => console.error(err));
  
  // will print low entrophy hints
  console.log("These are the low entropy hint of your browser:", navigator.userAgentData.brands);


// Display the score
// Calculate privacy score based on your existing data collection
function calculatePrivacyScore(privacyData) {
let score = 100;

if (privacyData.thirdPartyCookies === "true") {
score -= 15;
}
// Check WebRTC IP policy
if (privacyData.webRTCIPHandlingPolicy === 'default') {
score -= 10; // IP can leak
}
// Check Safe Browsing level
if (privacyData.safeBrowsingEnabled === 'none') {
score -= 20;
}

if(privacyData.doNotTrackEnabled === 'none'){
  score -=20;
}

if(privacyData.passwordSavingEnabled === 'true'){
score =-20;
}
  
{
  // Count high-entropy fingerprinting surfaces
const fingerprintRisk = privacyData.getHighEntropyValues.filter(s =>
s.available).length;
score -= fingerprintRisk * 5;
return Math.max(score, 0); // Keep between 0-100
}

}

//let result = calculatePrivacyScore(privacyData);
// Display the score
//console.log('Privacy Score:', result);





const opt = {
type: "basic",
  iconUrl: "Images/cookie_icon.png",
  title: "This is a notification",
  message: "Hello there!",
  buttons: [{ title: "iBrowse notifications" }],
  imageUrl: "Images/cookie_icon.png",
}


chrome.notifications.create(
  "extension-notification",   // Notification ID
  notificationOptions,        // Options object
  (message) => {       // Callback after creation
    console.log("Notification created:",notificationOptions());
  }
);