const { Given } = require('cucumber');
const assert = require('assert');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Given('o usuário esta na url {string}', (url) => {
    const driver = global.driver;
    driver.get(url);
    
    return driver;
});

Given ("O usuário está na tela de busca de processos e Realizar a busca do Processo - {string}", async (string) => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#filter > div > div.box-header > h3"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsFlowName"))), 30000);
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);      
    await driver.wait(until.elementLocated(By.id("inpDsFlowName")), 30000).sendKeys(string, Key.ENTER);        
    await driver.wait(until.elementLocated(By.id("inpStDeploy")),30000).click();
    await driver.wait(until.elementLocated(By.css("#inpStDeploy > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("btnPesqFiltro"), 30000))).click();
    await driver.wait(until.elementLocated(By.css("#containertable > div > table > tbody > tr > td:nth-child(10) > span")), 30000).click();
    
    //Interação com a nova aba
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

});

Given ("O usuário está na tela de busca de processos e Realizar a busca novamente do Processo - {string}", async (string) => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsFlowName"))), 30000);
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);      
    await driver.wait(until.elementLocated(By.id("inpDsFlowName")), 30000).sendKeys(string, Key.ENTER);        
    await driver.wait(until.elementLocated(By.id("inpStDeploy")),30000).click();
    await driver.wait(until.elementLocated(By.css("#inpStDeploy > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("btnPesqFiltro"), 30000))).click();
    await driver.wait(until.elementLocated(By.css("#containertable > div > table > tbody > tr > td:nth-child(10) > span")), 30000).click();
    
    //Interação com a nova aba
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

});

Given ("O usuário está na tela de busca de processos e Realizar novamente a busca do Processo - {string}", async (string) => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsFlowName"))), 30000);
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);      
    await driver.wait(until.elementLocated(By.id("inpDsFlowName")), 30000).sendKeys(string, Key.ENTER);        
    await driver.wait(until.elementLocated(By.id("inpStDeploy")),30000).click();
    await driver.wait(until.elementLocated(By.css("#inpStDeploy > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("btnPesqFiltro"), 30000))).click();
    await driver.wait(until.elementLocated(By.css("#containertable > div > table > tbody > tr > td:nth-child(10) > span")), 30000).click();
    
    //Interação com a nova aba
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 6,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
        }
    });

});