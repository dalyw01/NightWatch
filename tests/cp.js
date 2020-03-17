module.exports = {

  '@disabled': false,

  before : function (browser)
  {
      browser.resizeWindow(1500, 1500);
  },

  'CP': function (browser) {
    browser
      .url('https://is.gd/kowapa')
      .waitForElementVisible('body')
      .assert.cssProperty('body'       , 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')
      .assert.cssProperty('h1'         , 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')
      .assert.cssProperty('.box-right' , 'font-family' , 'ReithSans, Arial, Helvetica, freesans, sans-serif')

      .moveToElement('#smphtml5iframemp', 10, 10)
      .waitForElementVisible('#smphtml5iframemp', 500)

      // Initiate playback using raw Javascript
      .execute(function(x) {
        embeddedMedia.players[0].play();
        setTimeout(function(){ embeddedMedia.players[0].currentTime( ( embeddedMedia.players[0].duration() - 3 )); }, 1000);
      })

      .frame('smphtml5iframemp')
        .click('div.p_accessibleHitArea') // Hover over player
        .pause(6000)
        .click('.gcp_panelsClose .gcp_closeSVG')
        .pause(2000)
      .frame(null)

      .execute(function(x) {
        alert("Yay we got to the end!");
      })

      .pause(4000)

    browser.end();
  },
};























