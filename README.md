# NightWatch
A little repo for me to play with NightWatch

Install node from here - https://nodejs.org/en/

Create new folder

Create nightwatch.js file and put this in

require('./node_modules/nightwatch/bin/runner.js');

From the command line run an "npm init", you will be prompted with commands and enter the following - 

daly:learnNightwatch dalyw01$ npm init
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



Then run this command to initiate nightwatch - npm install nightwatch --save


Make 3 new folders - 

mkdir pages 
mkdir tests 
mkdir libs


Your directory should look like - 

daly:learnNightwatch dalyw01$ ls
Testplan.md		nightwatch.js		notes.txt			package.json		tests
lib				node_modules		package-lock.json	pages


Download selenium-standalone JAR from here - https://www.selenium.dev/downloads/

Download chrome-driver here - https://chromedriver.chromium.org/downloads

Place in drivers folder - lib/drivers/chromedriver

Change nightwatch.js -  "server_path": "lib/drivers/chromedriver",

To run a test - node nightwatch tests/ecosia.js

Need to do more research into - https://nightwatch-api.netlify.com/




