const assert = require('assert');
const { Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then('inserir a senha {string} no sistema', async (string) => {
    const driver = global.driver;

    let input = await driver.wait(until.elementLocated(By.id('TxtPassword')), 3000);  
    await input.sendKeys("uNIJUI2421", Key.RETURN);

    return input;
});
