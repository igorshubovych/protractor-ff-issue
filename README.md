Protractor Firefox issue demo
=============================

This project is created to demonstrate issue with Firefox.
The code is copied from example in [EggHead.io lesson](https://egghead.io/lessons/angularjs-getting-started-with-protractor).

Installation
------------

```bash
npm install
bower install
./node_modules/protractor/bin/webdriver-manager update
```

Running
-------

Run app, Selenium WebDriver and tests in separate shells.

```bash
npm start # start project
npm run wd # start Selenium WebDriver
npm run test # run protractor tests
npm run test-ff # run protractor tests in Firefox
```

Explanation
-----------

app/stylesheets/app.css
```css
.my-sick-button {
  text-transform: uppercase;
}
```

app/templates/index.tpl.html
```html
<button>Button 1</button>
```

test/e2e/index/index.spec.js
```js
function () {
  element(by.buttonText('Button 1')).click(); // fails in Chrome
  element(by.buttonText('BUTTON 1')).click(); // fails in Firefox
}
```
