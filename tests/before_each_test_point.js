module.exports = {

  beforeEach : function(browser) {
    console.log('Setting up...LOLOLOLOLOLOLOLOLOLOLOLOLOLOLOL')
    browser
    .resizeWindow(800, 600)
    .url('https://www.ecosia.org/')
    .waitForElementVisible('body')
  },
  
  'Verify title exists' : function (browser) {
    browser
      .assert.titleContains('Ecosia')
      .end();
  },

  'Verify we can type into form field' : function (browser) {
    browser
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .end();
  },

};