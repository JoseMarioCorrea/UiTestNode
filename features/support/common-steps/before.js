const chrome = require('selenium-webdriver/chrome');
const {Builder} = require('selenium-webdriver');
const chromedriver = require('chromedriver');

const { Before } = require('cucumber');

Before(() => {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    global.driver = new Builder().forBrowser("chrome").build();
});