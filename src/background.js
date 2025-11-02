

alert("Please your console to inspect values! ")

//core function 1
 //prints meta data about installed extensions. Needs array to print
//uses managament API. Cannot connect directly. Need getAll()
chrome.management.getAll((extensions) => { //arrow function 
  extensions.forEach(ext => {
    let extensions_name = ext.name;
    let exetensions_version = ext.version; 
    let extensions_enabled = ext.enabled;
    let exetensions_permissions = ext.permissions;
   console.log("These are the data about your installed extensions: " + exetensions_version, extensions_name, extensions_enabled, exetensions_permissions);
  // variable declared for easier changing and removal 

  });
});
 

 
 // API for webRTCIPHandlingPolicy
chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (details) => {
  let boolValue  = details.value;
  console.log("The value of webRTCIPHandlingPolicy is " + boolValue); 
});

//API for passwordSavingEnabled 
chrome.privacy.services.passwordSavingEnabled.get({}), (details) => {
  console.log(details.value);//
};

chrome.privacy.websites.thirdPartyCookiesAllowed.get({}), (details) => {
  const thirdParty = details.value;
  console.log("The third party value cookies allowed value is:  " + thirdParty);
}

//high 
const fields = ["platform", "architecture", "model", "brands", "mobile"];
 //
navigator.userAgentData.getHighEntropyValues(fields)
  .then(result => {
    fields.forEach(field => {
      if(result[field]) {
        console.log(`${field} is available`);
      } else {
        console.log(`${field} is NOT available`);
      }
    });
  })
  .catch(err => console.error(err));


  console.log(navigator.userAgentData.brands);


  //notification API, not working and needs additional info
let extendNotification = "plugin-Notification";
chrome.notifications.create("notificationId",{
  type:"basic",
iconUrl:extensionicon.png,
title: "Notification example",
message:"Welcome",
}
)


