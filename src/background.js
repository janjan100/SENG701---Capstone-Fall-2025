 //uses managament API. Cannot connect directly. Need getAll()




chrome.management.getAll((extensions) => {
  extensions.forEach(ext => {
    console.log(ext.name, ext.version, ext.enabled, ext.permissions);
  });
});
 

 



     //prints meta data about installed extensions. Needs array to print
     // 
    
