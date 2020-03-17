module.exports = {

  'TEST 1 : Visit SquareSpace home screen': function (browser) {
    browser
    .url('https://www.squarespace.com/')
    .waitForElementVisible('body')
    .assert.titleContains('Build a Website – Website Builder – Squarespace')
    .end();
  },

  'TEST 2 : I click on GET STARTED button': function (browser) {
    browser
    .url('https://www.squarespace.com/')
    // <a class="link cta link--is-button" data-component-name="link" data-component-id="4" href="/templates" data-identifier="cta" data-section="hero">Get Started</a>
    // .assert.containsText(".link", "Get Started")
    .assert.attributeContains('.link', 'data-identifier', 'cta')
    .assert.cssProperty(".link", "font-family", "Clarkson, Helvetica, sans-serif")
    .click('.link')
    .pause(4000)
    .end();
  },
};