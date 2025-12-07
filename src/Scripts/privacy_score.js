  //Privacy Score function
function calculatePrivacyScore(privacyData) {
    let score = 100;

    // Check third-party cookies
    if (privacyData.thirdPartyCookiesAllowed) {
        score -= 15;
    }

    // Check WebRTC IP policy
    if (privacyData.webRTCIPHandlingPolicy === 'default') {
        score -= 10; // IP can leak
    }

    // Check password saving
    if (privacyData.passwordSavingEnabled === 'true' ||  privacyData.passwordSavingEnabled === true) {
        score -= 20;
    }

    // Check safe browsing
    if (privacyData.safeBrowsingEnabled === 'false' ||  privacyData.safeBrowsingEnabled === false) {
        score -= 20;
    }
     // Check if doNotTrack is on
    if(privacyData.doNotTrackEnabled === 'false' ||  privacyData.doNotTrackEnabled === false){
      score -=15;
    }   return score;
}
// Object for yourPrivacyData based on current value of browser values. Excluded high entropy values
const yourPrivacyData ={
    webRTCIPHandlingPolicy: "default",
    passwordSavingEnabled: true,
    thirdPartyCookiesAllowed: true, 
    safeBrowsingEnabled: true, 
    doNotTrackEnabled: false, 
};
let result = calculatePrivacyScore(yourPrivacyData);
console.log('Your browser has this privacy Score: ' + result + ' (excluding high entropy surfaces value). ' + ' Please take actions based on recommendations. Thank you for using.');
