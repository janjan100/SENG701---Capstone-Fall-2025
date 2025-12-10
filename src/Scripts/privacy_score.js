
function calculatePrivacyScore(privacyData1) { //Privacy Score function
    let score = 100;

    // Check third-party cookies
    if (privacyData1.thirdPartyCookiesAllowed === true) {
        score -= 15;
    }

    // Check WebRTC IP policy
    if (privacyData1.webRTCIPHandlingPolicy === 'default') {
        score -= 10; // IP can leak
    }

    // Check password saving
    if (privacyData1.passwordSavingEnabled === true) {
        score -= 20; // Anyone can access your passwords on your local device if they have it or if compromised
    }

    // Check safe browsing
    if (privacyData1.safeBrowsingEnabled === false) {
        score -= 20; // If enabled, blocks popups of browser, and detects phishings attacks and fake websites
    }
     // Check if doNotTrack is on
    if(privacyData1.doNotTrackEnabled === false){
      score -=15;
    }   return score;
}
// Object for yourPrivacyData based on current value of browser values. Excluded high entropy values
const yourPrivacyData1 ={
    webRTCIPHandlingPolicy: "default",
    passwordSavingEnabled: true,
    thirdPartyCookiesAllowed: true, 
    safeBrowsingEnabled: true, 
    doNotTrackEnabled: false, 
};
// prints and stores function of privacyScore 
let result = calculatePrivacyScore(yourPrivacyData1);
console.log('Ranking score. Score range 0 - 65: Low security(Needs security).Score Range 66 - 80: Moderate security(Room for improvemnt, needs higher security). || Score Range 81 - 100 : High security(room for improvement). Your browser has this privacy Score: ' + result + ' (excluding high entropy surfaces value). ' + ' Your privacy score is low: 40. Please take actions based on recommendations. Secure your day today!');
