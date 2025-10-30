 //uses managament API. Cannot connect directly. Need getAll()



//core function 1
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
 

 
 
chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (details) => {
  let boolValue  = details.value;
  console.log("The value of webRTCIPHandlingPolicy is " + boolValue); 
});
 
chrome.privacy.services.passwordSavingEnabled.get({}), (details) => {
  console.log(details.value);//
};

chrome.privacy.websites.thirdPartyCookiesAllowed.get({}), (details) => {
  let thirdParty = details.value;
  console.log("The third party value cookies allowed value is:  " + thirdParty);
}

     //prints meta data about installed extensions. Needs array to print
     // 
    
