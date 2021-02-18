const assert = require('assert');
const { When } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');

When('Realizar o Login {string} no sistema', function (string) {
    const driver = global.driver;

    let input = driver.wait(until.elementLocated(By.id('TxtLogin')), 3000);  
    input.sendKeys(string, Key.TAB);

    return input;

    
   // const element = driver.findElement(By.id('TxtLogin'));
    //assert.strictEqual(await element.getText(), 'jose.correa');
});