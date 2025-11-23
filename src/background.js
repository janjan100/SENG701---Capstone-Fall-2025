//uses managament API. Cannot connect directly. Need getAll()
console.log("Inspect the console for metadata.");


//uses managament API. Cannot connect directly. Need getAll()
chrome.management.getAll((extensions) => { 
  extensions.forEach(ext => {
    let extensions_name = ext.name;
    let exetensions_version = ext.version; 
    let extensions_enabled = ext.enabled;
    let exetensions_permissions = ext.permissions;
    console.log("Names, version, enabled state, and permissons of your installed extensions: ", extensions_name, 
    exetensions_version, extensions_enabled, exetensions_permissions);
  // variable declared for easier changing and removal 

  });
});
 // API for webRTCIPHandlingPolicy
chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (details) => {
  const webpRTCIPolicies  = details.value;
  console.log("WebRTCIPHandlingPolicy enabled:", webpRTCIPolicies); 
});

//API for passwordSavingEnabled 
chrome.privacy.services.passwordSavingEnabled.get({}, (details) => {
    const passwordSaving = details.value;
    console.log("Password saving enabled:", passwordSaving);
});
chrome.privacy.websites.thirdPartyCookiesAllowed.get({}, (details) => {
    const thirdParty = details.value;
    console.log("Third-party cookies allowed:", thirdParty);
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
console.log("These are the general values of your browser:", navigator.userAgentData.brands);


