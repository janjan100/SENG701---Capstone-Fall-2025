

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


const opt = {
type: "basic",
  iconUrl: "Images/cookie_icon.png",
  title: "This is a notification",
  message: "Hello there!",
  buttons: [{ title: "iBrowse notifications" }],
  imageUrl: "Images/cookie_icon.png",
}


//
/**import puppeteer from ../'puppeteer' ../

async function scrapeBrowser(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);
    await page.goto(url);
     const [el] = await page.$x('//*[@id="yDmH0d"]/c-wiz[5]/div/div/main/div/div[1]/div[2]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValues();
    console.log({srcTxt});
    browser.close();
}
 scrapeBrowser('https://chromewebstore.google.com/category/extensions?utm_campaign=21676428212&utm_content=167305930939&utm_medium=cpc&utm_source=google&utm_term=chrome%20extension');**/
import * as cheerio from 'cheerio';

const $ = cheerio.load('<h1>Hello, world!</h1>');

console.log($('h1').text());







