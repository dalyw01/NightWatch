module.exports = {
  
  'Visit Google site and verify we have landed on it': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body')
      .assert.titleContains('Google')
      .end();
  },

  'Click on feeling lucky button': function (browser) {
    browser
    .url('https://www.google.com/')
    .waitForElementVisible('body')
    .assert.titleContains('Google')
    // Used xpath here as the BUTTON "I'm Feeling Lucky" did not have an ID but class .RNmpXc
    .useXpath().click('//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[2]')
    .pause(2000)
    .end();
  }

};