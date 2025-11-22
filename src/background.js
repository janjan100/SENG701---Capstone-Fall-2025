//uses managament API. Cannot connect directly. Need getAll()
console.log("Inspect the console for metadata.");


chrome.management.getAll((extensions) => { 
  extensions.forEach(ext => {
    let extensions_name = ext.name;
    let exetensions_version = ext.version; 
    let extensions_enabled = ext.enabled;
    let exetensions_permissions = ext.permissions;
   console.log("These are the names, version, enabled states, and permissons of your installed extensions: " + extensions_name, 
    exetensions_version, extensions_enabled, exetensions_permissions);
  // variable declared for easier changing and removal 

  });
});
 // API for webRTCIPHandlingPolicy
chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (details) => {
  const webpRTCIPolicies  = details.value;
  console.log("The webRTCIPHandlingPolicy state is " + webpRTCIPolicies); 
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
//
const fields = ["platform", "architecture", "model", "brands", "mobile"];
 //
navigator.userAgentData.getHighEntropyValues(fields)
  .then(result => {
    fields.forEach(field => {
      if(result[field]) {
        console.log(`${field} high entropy property is available`);
      } else {
        console.log(`${field} high entropy property is  not available.`);
      }
    });
  })
  .catch(err => console.error(err));
console.log("These are the low hint values which are general information of your browser:", navigator.userAgentData.brands);


