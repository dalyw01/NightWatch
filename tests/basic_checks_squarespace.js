module.exports = {

  'TEST 1: Visit SquareSpace home screen': function (browser) {
    browser
    .url('https://www.squarespace.com/')
    .waitForElementVisible('body')
    .assert.titleContains('Build a Website – Website Builder – Squarespace')
    .end();
  },

  'TEST 2: I click on GET STARTED button': function (browser) {
    browser
    .url('https://www.squarespace.com/')

    // Here is the HTML
    // <a class="www-navigation__desktop__cta cta"
    // href="/templates" 
    // data-object-type="button"
    // data-identifier="cta">Get Started</a>

    .assert.containsText(".www-navigation__desktop__cta", "GET STARTED")
    .assert.attributeContains('.www-navigation__desktop__cta', 'data-identifier', 'cta')
    .assert.cssProperty(".www-navigation__desktop__cta", "font-family", "Clarkson, Helvetica, sans-serif")
    .click('.www-navigation__desktop__cta')
    .pause(4000)
    .end();
  },
};