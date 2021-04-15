const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Contas a Pagar']`)), 60000);  
});

Given ('O usuário clica no Objetivo 0 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("objetivo-0")), 3000).click();
});

When ('Selecionar a Destinação 0 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("destinacao-0")), 30000).click();
});

Then ('Preencher os dados de inicio', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35368"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#div-cooperativa > div > select > option:nth-child(17)")), 30000).click();
    await driver.wait(until.elementLocated(By.name("inp35394")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select > option:nth-child(2)")), 30000).click();
});

Then ('Clicar em Encaminhar a solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
}); 

Given ('O usuário verificou o aviso informando que o Motivo e o Valor total são obrigatório', async() => {
    let mensagem = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textMensagem = await mensagem.getText();
    assert.deepStrictEqual(textMensagem, "Atenção aos campos obrigatórios: Motivo, Valor, Valor");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

When ('for preenchido o Motivo e o Valor Total', async() => {
    await driver.wait(until.elementLocated(By.name("inp35378")), 3000).sendKeys("Motivo Teste Automatizado");
    await driver.wait(until.elementLocated(By.name("inp35490")), 3000).sendKeys("98043");
});

Given ('Está localizado na atividade Analisar Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contas a Pagar']`)), 60000);  
});

When ('O usuário Assumir a Atividade', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("claim-unclaim-task"))), 30000).click();
}); 

Then ('É necessário validar os dados', async() => {
    let cooperativa =  await driver.wait(until.elementLocated(By.id("div35368")), 3000);
    let resultsCooperativa = await cooperativa.getText();
    await assert.deepStrictEqual(resultsCooperativa, "0515");
    let objetivo =  await driver.wait(until.elementLocated(By.id("div35344")), 3000);
    let resultsobjetivo = await objetivo.getText();
    await assert.deepStrictEqual(resultsobjetivo, "Adiantamento Financeiro");
}); 

Given ('O usuário Aprovou Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Aprovada"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
});

When ('O usuário estiver localizado na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar e Realizar Pagamento de Solicitação de Contas a Pagar']`)), 60000);  
});

Then ('Assumir a atividade', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("claim-unclaim-task"))), 30000).click();
});

Given ('O usuário clicou em Sem Pendências', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("button-verification-ok"))), 30000).click();
}); 

When ('habilitar o botão Solicitação Realizada e for clicado', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Realizada"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
}); 

Then ('Encaminhou para a atividade Realizar Prestação de Contas de Adiantamento', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Realizar Prestação de Contas de Adiantamento']`)), 60000);  
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btnFinish"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
});

Given ('Está localizado na atividade Verificar Prestação de Contas de Adiantamento', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Prestação de Contas de Adiantamento']`)), 60000);  
});

Then ('Aprovar Prestação', async () => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Aprovar Prestação"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
});


