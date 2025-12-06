// Display the score
// Calculate privacy score based on your existing data collection

function calculatePrivacyScore(privacyData) {
let score = 100;



if (privacyData.webRTCIPHandlingPolicy === 'default') {
score -= 10; // IP can leak
}

if (privacyData.passwordSavingEnabled) {
score -= 15;
}

// Check Safe Browsing level
if (privacyData.thirdPartyCookiesAllowed === 'none') {
score -= 20;
}

if(privacyData.safeBrowsingEnabled === 'none'){
  score -=20;
}

if(privacyData.doNotTrackEnabled){
score =-20;
}
  
{
  // Count high-entropy fingerprinting surfaces
const fingerprintRisk = (privacyData.getHighEntropyValues || []).filter(s => s.available).length;
score -= fingerprintRisk * 5;
return Math.max(score, 0); // Keep between 0-100
}

}
const privacyData = {
  
  },



let result = calculatePrivacyScore(privacyData);
// Display the score
//(console.log('Privacy Score:', privacyData));

