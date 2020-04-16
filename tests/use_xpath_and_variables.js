var feeling_lucky_class = '.RNmpXc';

module.exports = 
{

  'Visit Google site and verify we have landed on it': function (browser) 
  {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body')
      .assert.titleContains('Google')
      .end();
  },

  'Click on feeling lucky button': function (browser) 
  {
    browser
    .url('https://www.google.com/')
    .waitForElementVisible('body')
    .assert.titleContains('Google')

    .perform(function() {
      var array = [feeling_lucky_class];
      console.log('This is a DEBUG DEBUG DEBUG');
      console.log(Math.floor((Math.random() * 100) + 1)); //between 1 and 100
      console.log(array[0]);
    })

    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
    // HTML
    // <input class="RNmpXc" 
    // value="I'm Feeling Lucky" 
    // aria-label="I'm Feeling Lucky" 
    // name="btnI" 
    // type="submit" 
    // jsaction="sf.lck" 
    // data-ved="0ahUKEwjPnom3tOzoAhWk2-AKHXGSDMYQ19QECA4">
    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

    .pause(1000)
    .useXpath().click('//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[2]')

    .pause(5000)
    .end();
  }
};













