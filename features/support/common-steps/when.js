const assert = require('assert');
const { When } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

When('Realizar o Login {string} no sistema', function (string) {
    const driver = global.driver;

    let input = driver.wait(until.elementLocated(By.id('TxtLogin')), 3000);  
    input.sendKeys(string, Key.TAB);

    return input;

    
   // const element = driver.findElement(By.id('TxtLogin'));
    //assert.strictEqual(await element.getText(), 'jose.correa');
});

When ('Inicia o teste do Processo {string}', async (string) => {
    const driver = global.driver;    
    await driver.wait(until.elementLocated(By.css("#HlOpenSimulation")), 30000).click();

    // identifica nova Aba
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
      }
    });    
     // inicia o teste     
    await driver.wait(until.elementLocated(By.id("HlStartSimulation")), 30000).click();
    // localiza modal de teste
    await driver.switchTo().frame(4); 
    await driver.sleep(1000);
});

When ('Localizar a instância iniciada através do Post na API o teste do Processo', async() => {
    const driver = global.driver;    
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
        }
    });
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.css("#HlOpenSimulation")), 30000).click();

    // identifica nova Aba
    await driver.switchTo().frame(1);
     // inicia o teste     
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tbodyInboxTable"))), 3000).click();
});

When ('O usuário Assumiu Atividade', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("claim-unclaim-task"))), 30000).click();
});

When ('Localizar a instância de teste do Processo', async() => {
    const driver = global.driver;    
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 4,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
        }
    });
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.css("#HlOpenSimulation")), 30000).click();

    // identifica nova Aba
    await driver.switchTo().frame(1);
     // inicia o teste     
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tbodyInboxTable"))), 3000).click();
});

When ('Localizar a instância com a atividade de teste do Processo', async() => {
    const driver = global.driver;    
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.css("#HlOpenSimulation")), 30000).click();

    // identifica nova Aba
    await driver.switchTo().frame(1);
     // inicia o teste     
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tbodyInboxTable"))), 3000).click();
    await driver.sleep(2000);


});