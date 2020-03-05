module.exports = {
  
  'Verify title exists': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body')
      .assert.titleContains('Google')
      .end();
  },

    'Demo test for visiting Google': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body')
      .assert.titleContains('Google')
      // Used xpath here as the BUTTON "I'm Feeling Lucky" did not have an ID
      .useXpath().click('//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[2]')
      // .click("button[value=I'm Feeling Lucky]")
      // .click('.RNmpXc button')
      .pause(2000)
      .end();
  }

};