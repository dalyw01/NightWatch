module.exports = {

  '@disabled': false,

  before : function (browser){
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

      // <iframe id="smphtml5iframemp" name="smphtml5iframemp" 
      // frameborder="0" scrolling="no" 
      // src="abc.com/iframe.html" 
      // allowfullscreen="" allowtransparency="" 
      // lang="en" allow="autoplay" 
      // style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"></iframe>

      // Initiate playback using raw Javascript
      .execute(function(x) {
        embeddedMedia.players[0].play();
        setTimeout(function(){ embeddedMedia.players[0].currentTime( ( embeddedMedia.players[0].duration() - 3 )); }, 1000);
      })

      .frame('smphtml5iframemp')
        .click('div.p_accessibleHitArea')
        .pause(8000) // This is sleep in NightWatch
        .click('.gcp_panelsClose .gcp_closeSVG')
        .pause(2000)
      .frame(null)

      // Can't run javascript inside an iframe
      .execute(function(x) {
        alert("Yay we got to the end!");
      })

      .pause(2000)

    browser.end();
  },
};























