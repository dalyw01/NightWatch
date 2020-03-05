module.exports = {
  
  // '@tags': ['ecosia', 'will_google'],

  before : function(browser) {
    // console.log('Setting up...')
    browser
    .url('https://www.ecosia.org/')
    .waitForElementVisible('body')
  },
  
  'Demo test Ecosia.org 1': function (browser) {
    browser
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .end();
  },

  'Demo test Ecosia.org 2': function (browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .end();
  },


};