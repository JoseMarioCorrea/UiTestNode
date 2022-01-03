const assert = require('assert');
const { When, Then, Given } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');

Given ('O usuário está localizado no site do Youtube', async() => {
    //Acessa o site do youtube
    await driver.get("https://www.youtube.com");
    //Verifica se realmente está localizado no site
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("search_query"), 30000)));
});

When ('O usuário no youtube digitar {string} e pesquisar', async (string) => {
    //escreve a string passada pelo cenário de teste no campo de pesquisa e aperta enter para pesquisar
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("search_query"), 30000))).sendKeys(string);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("search-icon-legacy"), 30000))).click();
});

Then ('Deve realizar a pesquisa de videos corretamente', async () => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contents"), 30000)));
}); 