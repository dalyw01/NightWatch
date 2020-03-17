module.exports = {

  '@disabled': false, // This will prevent the test module from running

  before : function (browser) // Before the whole test is run
  {
      browser.resizeWindow(1500, 1500);
  },

  'Test 1 - Run through core functionality for a media player on different sites': function (browser) {

    links = [ 
      'link1',
      'link2'
    ];

    for (i = 0; i < links.length; i++) 
    {
      console.log(`Running for the ${i}`)

      browser
        .url(links[i])
        .waitForElementVisible('body')
        .assert.cssProperty('body'       , 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')
        .assert.cssProperty('h1'         , 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')
        .assert.cssProperty('.box-right' , 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')

        .moveToElement('#smphtml5iframemp', 10, 10)
        .waitForElementVisible('#smphtml5iframemp', 500)

        .frame('smphtml5iframemp')
          //.assert.cssProperty(".p_iconHolder" , "background-color" , "rgba(0, 0, 0, 0)")
          
          .click('div.p_accessibleHitArea')
          .click('div.p_accessibleHitArea') // This is to HOVER over after pressing CTA and allow more interactions

          .click('.p_pauseIcon')
          .pause(2000)
          .assert.attributeContains('.p_playButton', 'aria-label', 'Play')
          .click('.p_playButton')
          .pause(2000)
          .click('.p_volumeButton')
          .pause(2000)
          .click('.p_seekBar')
          .pause(2000)
          .click('.p_fullscreenButton')
          .pause(2000)
          .click('.p_subtitleButton') // Loads subtitles menu
          .pause(2000)
          .click('#p_subtitleSizeButton_useSmallFontSize')
          .assert.attributeContains('#p_subtitleSizeButton_useSmallFontSize', 'aria-pressed', 'true')
          .pause(2000)
    }
  browser.end();
  },
};























