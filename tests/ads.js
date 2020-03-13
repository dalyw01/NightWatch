module.exports = {

  '@disabled': false, // This will prevent the test module from running.

  before : function (browser) // Before the whole test is run
  {
      browser.resizeWindow(1500, 1500)
      .url('https://is.gd/afitip')
      .click('div#content input#adType-skippable')
      .click('button#loadAdButton')
      .pause(1000)
  },

  'Skippable Ads': function (browser) 
  {
    browser
      .frame('smphtml5iframemp')
        .pause(1000)
        .click('div.p_accessibleHitArea')
        .click('div.p_accessibleHitArea')
        .pause(4000)
        .click('#ads_adsUX')
    browser.end();
  }

};

















