const assert = require('assert');
const { Then } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then('inserir a senha {string} no sistema', async (string) => {
    const driver = global.driver;

    let input = await driver.wait(until.elementLocated(By.id('TxtPassword')), 3000);  
    await input.sendKeys("Bernardo2017", Key.RETURN);

    return input;
});

Then ('Clicar em Solicitar Mais Informações', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Mais Informações Solicitadas"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado, vai para gerar Nota Fiscal");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});