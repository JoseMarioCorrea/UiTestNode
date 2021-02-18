const assert = require('assert');
const { Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');

Then('inserir a senha {string} no sistema', async (text) => {
    const driver = global.driver;

    let input = await driver.wait(until.elementLocated(By.id('TxtPassword')), 3000);  
    await input.sendKeys(text, Key.RETURN);

    return input;
});