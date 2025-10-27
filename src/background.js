 
chrome.management.getAll((extensions) => { //uses managament API. Cannot connect directly. Need getAll()
  extensions.forEach(ext => {
    console.log(ext.name, ext.version, ext.enabled, ext.permissions);
     //prints meta data about installed extensions. Needs array to print

  });
});