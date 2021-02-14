const assert = require('assert');
const { When, Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');

When('pesquisar por {string} no google', async (text) => {
    const driver = global.driver;

    let input = await driver.wait(until.elementLocated(By.name('q')), 3000);  
    await input.sendKeys(text, Key.RETURN);

    return input;
});

Then('o resultado deve ser exibido no google', async () => {
    const driver = global.driver;

    let results = await driver.wait(until.elementLocated(By.id('result-stats'), 5000));
    let text = await results.getText();
    assert.ok(!!text);
    
    return text;
});