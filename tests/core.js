module.exports = {

  before : function (browser) {
      browser.resizeWindow(1400, 1400);
  },

  'Test 1 - Run through core functionality for a media player on different sites': function (browser) {

    links = [ 
      "https://is.gd/egubug",
      "https://is.gd/uyajiw" 
    ];

    for (i = 0; i < links.length; i++) {
      console.log(`Running for the ${i}`)
      browser
        .url(links[i])
        .waitForElementVisible('body')
        .assert.cssProperty("body"       , "font-family" , "ReithSans, Arial, Helvetica, freesans, sans-serif")
        .assert.cssProperty("h1".        , "font-family" , "ReithSans, Arial, Helvetica, freesans, sans-serif")
        .assert.cssProperty(".box-right" , "font-family" , "ReithSans, Arial, Helvetica, freesans, sans-serif")

        .frame('smphtml5iframemp')
          .click('div.p_accessibleHitArea')
          .click('div.p_accessibleHitArea') // This is to HOVER over after pressing CTA and allow more interactions
         
          .click('.p_pauseIcon')
          .pause(2000)
          .click('.p_playButton')
          .pause(2000)
          .click('.p_volumeButton')
          .pause(2000)
          .click('.p_volumeButton')
          .pause(2000)
          .click('.p_seekBar')
          .pause(2000)
          // .click('.p_fullscreenButton')
          // .pause(2000)
          .click('.p_subtitleButton')
          .pause(2000)
          .click('.p_subsToggle') // Turn OFF subtitles
          .pause(2000)
          .click('.p_subtitleButton')
          .pause(2000)
          .click('.p_subsToggle') // Turn ON subtitles
          .pause(2000)
          // .click('#p_subtitleSizeButton_useSmallestFontSize')
          // .assert.attributeContains('#p_subtitleSizeButton_useSmallestFontSize', 'aria-pressed', 'true')
          // .pause(2000)
          // .click('#p_subtitleSizeButton_useSmallFontSize')
          // .assert.attributeContains('#p_subtitleSizeButton_useSmallFontSize', 'aria-pressed', 'true')
          // .pause(2000)
    }
    browser.end();
  },
};