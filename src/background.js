
console.log("View the console below for information.");
	/* Part of instruction for user to check console for data and shows data below */



chrome.management.getAll((extensions) => { 
  extensions.forEach(ext => {
    let extensions_name = ext.name;
    let extensions_version = ext.version; 
    let extensions_enabled = ext.enabled;
    let exetensions_permissions = ext.permissions;
    console.log("Names, version, enabled state, and permissons of your installed extensions: ", extensions_name, 
    extensions_version, extensions_enabled, exetensions_permissions);
  // variable declared for easier changing and removal
  /*This is an API reference that collects meta data about extension. Returns data to console. GetAll is a getter, and requires mangement permission in manifest.json to work properly */

  });
});
 // API for webRTCIP
chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (details) => {
  const webpRTCIPolicies  = details.value;
  console.log("WebRTCIPHandlingPolicy enabled:", webpRTCIPolicies); 
});

//API for passwordSavingEnabled browser setting. Returns state of password Saving Browser setting 
chrome.privacy.services.passwordSavingEnabled.get({}, (details) => {
    const passwordSaving = details.value;
    console.log("Password saving enabled:", passwordSaving);
});
chrome.privacy.websites.thirdPartyCookiesAllowed.get({}, (details) => {
    const thirdPartyCookies = details.value;
    console.log("Third-party cookies allowed:", thirdPartyCookies);
});

chrome.privacy.services.safeBrowsingEnabled.get({}, (details) => {
  const safeBrowsing = details.value;
  console.log("Safe browsing setting enabled:" + safeBrowsing);
});

chrome.privacy.websites.doNotTrackEnabled.get({},(details) => {
  const doNotTrackEnabled = details.value;
  console.log("DoNotTrack setting enabled:" +  doNotTrackEnabled);
});

//
const fields = ["platform", "architecture", "model", "brands", "mobile"];
 //
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
  .catch(err => console.error(err));

  console.log("These are the low entropy values of your browser:", navigator.userAgentData.brands);

// Calculate Privacy Score and produces a numerical score of browser
function calculatePrivacyScore(PrivacyScore){
let score = 100;

// Check WebRTC IP policy
function calculatePrivacyScore(PrivacyScore) {
  let score = 100;

  // Check WebRTC IP policy
  if (PrivacyScore.webpRTCIPolicies === 'default') {
    score -= 10;
  }

  // Check PasswordSaving Enabled setting
  if (PrivacyScore.passwordSaving === 'true') {
    score -= 20;
  }

  // Check third-party cookies setting
  if (PrivacyScore.thirdPartyCookies === 'true') {
    score =- 20;
  }

  return PrivacyScore;
}
console.log('Privacy Score:', calculatePrivacyScore(PrivacyScore))}

