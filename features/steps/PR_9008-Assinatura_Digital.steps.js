const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');

Given('o usuário está no Processo Assinaura Digital', async() => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");    
    await driver.wait(until.elementLocated(By.css("#filter > div > div.box-header > h3")), 30000).click();
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);      
    await driver.wait(until.elementLocated(By.id("inpDsFlowName")), 30000).sendKeys('PR 9008 - Assinatura Digital', Key.ENTER);        
    await driver.wait(until.elementLocated(By.name("btnPesqFiltro"), 30000)).click();
    await driver.wait(until.elementLocated(By.css("#containertable > div > table > tbody > tr:nth-child(4) > td:nth-child(10) > span > a")), 30000).click();
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
            
})

When('O usuário inicia o teste do Processo de Assinatura Digital', async() => {
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
    await driver.sleep(3000);

    // encaminhar solicitação    
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")), 3000).click();
    

    // verifica se entrou no fluxo correto
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Encaminhar Documento ao Cooperado no DocuSign']`)), 6000);
    let text1 = await results1.getText();    
    assert.strictEqual(text1, "Encaminhar Documento ao Cooperado no DocuSign");

    // Primeiro testar o fluxo de solicitar mais informações 
    await driver.wait(until.elementLocated(By.css("#icon")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[11]/div[3]/div[1]/div/div[1]/h2[text() = 'Finalização']`)), 30000);
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("customBtn_Mais Informações Solicitadas")), 30000).click();
    await driver.sleep(1000);    
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="BoxForceInputReason"]/p[text() = 'Preencha a justificativa abaixo']`)), 30000);
    await driver.wait(until.elementLocated(By.id('inpDsReasonInputReason')), 3000).click();
    await driver.wait(until.elementLocated(By.id('inpDsReasonInputReason')), 3000).sendKeys('Teste Automatizado');
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();    
    
    

    // Verificar se retornou o fluxo "Verificar Solicitação e Repassar Novas Informações"
    let results2 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Solicitação e Repassar Novas Informações']`)), 6000);
    let text2 = await results2.getText();
    assert.strictEqual(text2, "Verificar Solicitação e Repassar Novas Informações");

    // Encaminhar novas informações
    await driver.wait(until.elementLocated(By.css("#icon")), 30000).click();
    await driver.wait(until.elementLocated(By.id("customBtn_Novas Informações Encaminhadas")), 30000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="BoxForceInputReason"]/p[text() = 'Preencha a justificativa abaixo']`)), 30000);
    await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
    
     // verifica se entrou no fluxo correto
     await driver.sleep(3000);
     let results3 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Encaminhar Documento ao Cooperado no DocuSign']`), 5000));
     let text3 = await results3.getText();    
     assert.strictEqual(text3, "Encaminhar Documento ao Cooperado no DocuSign");

     // Testar o fluxo Documento Encaminhado ao Cooperado      
     await driver.wait(until.elementLocated(By.id("customBtn_Documento Encaminhado ao Cooperado")), 30000).click();     
     await driver.wait(until.elementLocated(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")), 30000).click();           

     // testar o fluxo Retornar ao Requisitante para Contato com Cooperado...    
     await driver.wait(until.elementLocated(By.css("#icon")), 30000).click();
     await driver.sleep(1000);
     await driver.wait(until.elementLocated(By.id("customBtn_Retornado ao Requisitante para Contato com Cooperado")),30000).click();
     await driver.wait(until.elementLocated(By.xpath(`//*[@id="BoxForceInputReason"]/p[text() = 'Preencha a justificativa abaixo']`)), 30000);
     await driver.sleep(1000);
     await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")),30000).sendKeys("Teste Automatizado");
     await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
     
     // testar se entrou no fluxo Verificar Solicitação e Repassar Novas Informações
     let results4 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Solicitação e Repassar Novas Informações']`)), 5000);
     let text4 = await results4.getText();
     assert.strictEqual(text4, "Verificar Solicitação e Repassar Novas Informações");

     // Encaminhar novas informações
     await driver.wait(until.elementLocated(By.css("#icon")), 30000).click();
     await driver.wait(until.elementLocated(By.id("customBtn_Novas Informações Encaminhadas")), 30000).click();
     await driver.wait(until.elementLocated(By.xpath(`//*[@id="BoxForceInputReason"]/p[text() = 'Preencha a justificativa abaixo']`)), 30000);
     await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")), 3000).sendKeys("Teste Automatizado");
     await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
     
     // verifica se entrou no fluxo correto
     let results5 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Solicitação e Repassar Novas Informações']`)), 5000);
     let text5 = await results5.getText();    
     assert.strictEqual(text5, "Verificar Solicitação e Repassar Novas Informações");
     
     // testar o fluxo Retornar ao Requisitante para Contato com Cooperado...
     await driver.wait(until.elementLocated(By.css("#icon")), 30000).click();
     await driver.sleep(1000);     
     await driver.wait(until.elementLocated(By.id("customBtn_Documento Encaminhado ao Cooperado")), 30000).click();
     await driver.wait(until.elementLocated(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")),30000).click();
     
     // testar o fluxo Documentos Assinado Digitalmente
     await driver.wait(until.elementLocated(By.css("#icon")), 30000).click();
     await driver.sleep(1000);
     await driver.wait(until.elementLocated(By.id("customBtn_Documentos Assinados Digitalmente")), 30000).click();
     await driver.wait(until.elementLocated(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")), 30000).click();
     
})

Then("O usuário inicia o teste do processo de Assinatura Digital, porém testar o fluxo do cancelamento", async () =>{
     // Primeira rota de cancelamento    
    const driver = global.driver;   
    await driver.wait(until.elementLocated(By.id("HlStartSimulation")), 3000).click();
     // localiza modal de teste
    await driver.sleep(3000);
    await driver.switchTo().frame(4); 
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Cancelada")), 3000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")), 3000).click();
         
})
