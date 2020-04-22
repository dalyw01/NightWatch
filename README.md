# NightWatch
A little repo for me to play with NightWatch

Install node from here - https://nodejs.org/en/

Create a folder called **new_folder**

```
mkdir new_folder
```

Create **nightwatch.js** file with the following contents - 

```
require('./node_modules/nightwatch/bin/runner.js');
```

From the command line run, inside new_folder tun the following - 

```
npm init
```

You will be prompted with commands, press ENTER to the following (or enter the information) - 

```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (learnnightwatch) 
version: (1.0.0) 
description: to learn automation testing
entry point: (nightwatch.js) 
test command: npm test
git repository: 
keywords: 
author: William Daly
license: (ISC) 
About to write to /Users/dalyw01/Desktop/learnNightwatch/package.json:

{
  "name": "learnnightwatch",
  "version": "1.0.0",
  "description": "to learn automation testing",
  "main": "nightwatch.js",
  "scripts": {
    "test": "npm test"
  },
  "author": "William Daly",
  "license": "ISC"
}
```

Then run an npm install command to initiate nightwatch - 

```
npm install nightwatch --save
```

Make 2 new folders - 

```
mkdir tests 
mkdir lib
```

Your directory should look something like - 

```
lib			node_modules		package.json
nightwatch.js		package-lock.json	tests
```

Download selenium-standalone JAR (e.g selenium-server-standalone-3.141.59.jar) from here - https://www.selenium.dev/downloads/

Download chrome-driver here - https://chromedriver.chromium.org/downloads

Download geckdriver from here - https://github.com/mozilla/geckodriver/releases

Extract gecko and chrome driver from zip folders

Create a folder inside lib called **drivers**

Place all above drivers and JAR file in lib/drivers folder

```
dalyw01$ ls
chromedriver				geckodriver				selenium-server-standalone-3.141.59.jar
```

Create a file called **nightwatch.json** in the root directory

```
dalyw01$ ls
nightwatch.js		node_modules		  package.json		    tests_output
lib			        nightwatch.json		package-lock.json	  tests
```

Copy the "Manual Configuration" from this here onto nightwatch.json - https://nightwatchjs.org/gettingstarted/configuration/

We will tweak the "server_path" value slightly to reflect our folder structure

```
    "server_path": "lib/drivers/chromedriver",
    "port": 9515
```

It's contents should be similar to the following -

```
{
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "lib/drivers/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
```

To run a test with firefox quick you can tweak the nightwatch.json file -

```
  "webdriver" : {
    "start_process": true,
    "server_path": "lib/drivers/geckodriver",
    "port": 4444
  },

  "test_settings" : {
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    }
```

To run a test you need to be in the root folder and not the test folder - 

```
node nightwatch tests/use_xpath_and_variables.js
```

To run a folder of tests with the default run either of the 2 commands - 

```
node nightwatch tests/
node nightwatch -e default
```

To run a single test point in a test script

```
node nightwatch tests/basic_checks_squarespace.js --testcase "TEST 2: I verify GET STARTED cta works"
```

For more info - https://nightwatch-api.netlify.com/

