const assert = require('assert');
const { When, Then, Given } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');

Given ('O usuário está localizado no site de pesquisa Google', async() => {
    //Acessa o site do google
    await driver.get("https://www.google.com.br");
    //Verifica se realmente está localizado no site
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("q"), 30000)));
});

When ('O usuário digitar {string} e pesquisar', async (string) => {
    //escreve a string passada pelo cenário de teste no campo de pesquisa e aperta enter para pesquisar
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("q"), 30000))).sendKeys(string);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("q"), 30000))).sendKeys(Key.RETURN);

}); 

Then ('Deve realizar a pesquisa corretamente', async() => {
    let result = await driver.wait(until.elementIsVisible(driver.findElement(By.id('result-stats'), 30000)));
    let text = await result.getText();
    assert.ok(!!text);
    return text;
}); 