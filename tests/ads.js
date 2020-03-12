module.exports = {

  '@disabled': false, // This will prevent the test module from running.

  before : function (browser) // Before the whole test is run
  {
      browser.resizeWindow(1500, 1500);
  },

  'Skippable Ads': function (browser) 
  {
    browser.url('https://is.gd/afitip')
    .click('div#content input#adType-skippable')
    .click('button#loadAdButton')
    .frame('smphtml5iframemp')
      .click('div.p_accessibleHitArea')
      .click('div.p_accessibleHitArea')
      .pause(5000)
      //.click('.videoAdUiSkipButton')
      .pause(10000)
      .click('div.p_accessibleHitArea')
      .click('div.p_accessibleHitArea')
      .click('.p_pauseIcon')
      .pause(5000)
    browser.end();
  }

};

















