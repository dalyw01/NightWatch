# NightWatch
A little repo for me to play with NightWatch

Install node from here - https://nodejs.org/en/

Create new_folder

```
mkdir new_folder
```

Create nightwatch.js file and put this in

```
require('./node_modules/nightwatch/bin/runner.js');
```

From the command line run an npm init

```
daly:learnNightwatch dalyw01$ npm init
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

Then run this command to initiate nightwatch

```
npm install nightwatch --save
```

Make 2 new folders

```
mkdir tests 
mkdir libs
```

Your directory should look like - 

```
daly:learnNightwatch dalyw01$ ls
Testplan.md 
nightwatch.js 
package.json 
tests 
lib	
node_modules		
package-lock.json	
```

Download selenium-standalone JAR (e.g selenium-server-standalone-3.141.59.jar) from here - https://www.selenium.dev/downloads/

Download chrome-driver here - https://chromedriver.chromium.org/downloads

Place both in lib/drivers folder

```
MC-S104581:learnNightwatch dalyw01$ ls lib/drivers
chromedriver				
selenium-server-standalone-3.141.59.jar
```

Create a file called nightwatch.json in the main directory

```
MC-S104581:nw dalyw01$ ls
chromedriver.log	nightwatch.js		node_modules		package.json		tests_output
lib			nightwatch.json		package-lock.json	tests
```

It's contents should be the following - 

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

To run a test - 

```
node nightwatch tests/use_xpath_and_variables.js
```

To run a folder of tests 

```
node nightwatch tests/
```

To run a single test point in a test script

```
node nightwatch tests/basic_checks_squarespace.js --testcase "TEST 2: I verify GET STARTED cta works"
```

Need to do more research into - https://nightwatch-api.netlify.com/

