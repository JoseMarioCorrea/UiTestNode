const assert = require('assert');
const { When, Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');

When('pesquisar por {string} no youtube', async (text) => {
    const driver = global.driver;

    let input = await driver.wait(until.elementLocated(By.id('search')), 3000);  
    await input.sendKeys(text, Key.RETURN);

    return input;
});

Then('o resultado deve ser exibido no youtube', async () => {
    const driver = global.driver;

    let result = await driver.wait(until.elementLocated(By.xpath('//*[@id="thumbnail"]/yt-img-shadow'), 5000));
    assert.ok(!!result);
    
    return result;
});