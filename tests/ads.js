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
    .pause(1000)
    .frame('smphtml5iframemp')
      .click('div.p_accessibleHitArea')
      .click('div.p_accessibleHitArea')
      .pause(3000)
      //.click('.videoAdUiSkipIcon')
      //.frame(null)
      .frame('ima-sdk-frame')
        .click('body > div.videoAdUi.imaVideoAdUi > div.videoAdUiBottomBar > div > div.videoAdUiSkipContainer.html5-stop-propagation > button')
    //.assert.cssProperty('h1', 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')
    // we are now back to the main page
    // ... more code here ...
    //.click('.videoAdUi')
      //.click('.videoAdUiSkipButton')
        //videoAdUiSkipButton videoAdUiAction videoAdUiRedesignedSkipButton
        //.click('.videoAdUiRedesignedSkipButton')
      //.pause(10000)
      // .click('div.p_accessibleHitArea')
      // .click('div.p_accessibleHitArea')
      // .click('.p_pauseIcon')
      //.pause(5000)
    browser.end();
  }

};

















