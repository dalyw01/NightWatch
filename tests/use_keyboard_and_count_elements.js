module.exports = {

  '@disabled': false, // This will prevent the test module from running.

  before : function (browser) // Before the whole test is run
  {
      browser.resizeWindow(1500, 1500);
  },

  'Test 1': function (browser)
  {
    browser.url('https://www.google.com/')
    .assert.visible('input[type=text]')
    .setValue('input[type=text]', 'Capybara')
    .pause(2000)
    .keys(browser.Keys.ENTER)
    .pause(2000)
    browser.expect.elements('.LC20lb').count.to.equal(12);
    browser.expect.elements('h3').count.to.not.equal(1);
    browser.expect.elements('h3').count.to.equal(14);
    browser.end();
  },

  'Test 2': function (browser) 
  {
    browser.url('https://www.google.com/')
    .assert.visible('input[type=text]')
    .setValue('input[type=text]', ['Komodo Dragon', browser.Keys.ENTER])
    .pause(2000)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    .keys(browser.Keys.TAB)
    browser.expect.elements('.LC20lb').count.to.equal(11)
    browser.expect.elements('h3').count.to.equal(13)
    browser.end();
  },

};




