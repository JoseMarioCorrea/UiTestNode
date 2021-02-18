const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');

Given('o usuário está no Processo Assinaura Digital', async() => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");
    await driver.sleep(3000);
    await driver.findElement(By.css("#filter > div > div.box-header > h3")).click();
    await driver.sleep(3000);
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);  
    await driver.findElement(By.id("inpDsFlowName")).sendKeys('PR 9008 - Assinatura Digital', Key.ENTER);        
    await driver.findElement(By.name("btnPesqFiltro")).click();
  await driver.sleep(3000);    
    await driver.findElement(By.css("#containertable > div > table > tbody > tr:nth-child(4) > td:nth-child(10) > span > a")).click();
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
    await driver.sleep(3000);
        
})

When('O usuário inicia o teste do Processo de Assinatura Digital', async() => {
    const driver = global.driver;
    await driver.sleep(3000);
    await driver.findElement(By.css("#HlOpenSimulation")).click();

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
    await driver.sleep(3000);
    await driver.findElement(By.id("HlStartSimulation")).click();

    // localiza modal de teste
    await driver.switchTo().frame(4); 
    await driver.sleep(3000);

    // encaminhar solicitação    
    await driver.findElement(By.id("customBtn_Solicitação Encaminhada")).click();
    await driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")).click();
    await driver.sleep(3000);

    // verifica se entrou no fluxo correto
    let results1 = await driver.wait(until.elementLocated(By.css('#frm > div.title > h1'), 5000));
    let text1 = await results1.getText();    
    //assert.strictEqual(text1, "Encaminhar Documento ao Cooperado no DocuSign");

    // Primeiro testar o fluxo de solicitar mais informações 
    await driver.findElement(By.css("#icon")).click();
    await driver.sleep(3000);   
    await driver.findElement(By.id("customBtn_Mais Informações Solicitadas")).click();
    await driver.sleep(3000);    
    await driver.findElement(By.id('inpDsReasonInputReason')).sendKeys('Teste Automatizado');
    await driver.sleep(3000);
    await driver.findElement(By.id("BtnConfirmReason")).click();    
    await driver.sleep(3000);
    

    // Verificar se retornou o fluxo "Verificar Solicitação e Repassar Novas Informações"
    let results2 = await driver.wait(until.elementLocated(By.css('#frm > div.title > h1'), 5000));
    let text2 = await results2.getText();
    //assert.strictEqual(text2, "Verificar Solicitação e Repassar Novas Informações");

    // Encaminhar novas informações
    await driver.findElement(By.css("#icon")).click();
    await driver.sleep(3000);
    await driver.findElement(By.id("customBtn_Novas Informações Encaminhadas")).click();
    await driver.sleep(3000);
    await driver.findElement(By.id("inpDsReasonInputReason")).sendKeys("Teste Automatizado");
    await driver.sleep(3000);
    await driver.findElement(By.id("BtnConfirmReason")).click();
    await driver.sleep(3000);
    

     // verifica se entrou no fluxo correto
     await driver.sleep(3000);
     let results3 = await driver.wait(until.elementLocated(By.css('#frm > div.title > h1'), 5000));
     let text3 = await results3.getText();    
     assert.strictEqual(text3, "Encaminhar Documento ao Cooperado no DocuSign");

     // Testar o fluxo Documento Encaminhado ao Cooperado 
     await driver.sleep(3000);
     await driver.findElement(By.id("customBtn_Documento Encaminhado ao Cooperado")).click();
     await driver.sleep(3000);
     await driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")).click();   
     await driver.sleep(3000);
     

     // testar o fluxo Retornar ao Requisitante para Contato com Cooperado...    
     await driver.findElement(By.css("#icon")).click();
     await driver.sleep(3000);
     await driver.findElement(By.id("customBtn_Retornado ao Requisitante para Contato com Cooperado")).click();
     await driver.sleep(3000);
     await driver.findElement(By.id("inpDsReasonInputReason")).sendKeys("Teste Automatizado");
     await driver.sleep(3000);
     await driver.findElement(By.id("BtnConfirmReason")).click();
     await driver.sleep(5000);
    

     // testar se entrou no fluxo Verificar Solicitação e Repassar Novas Informações
     let results4 = await driver.wait(until.elementLocated(By.css('#frm > div.title > h1'), 5000));
     let text4 = await results4.getText();
     assert.strictEqual(text4, "Verificar Solicitação e Repassar Novas Informações");

     // Encaminhar novas informações
     await driver.findElement(By.css("#icon")).click();
     await driver.sleep(3000);     
     await driver.findElement(By.id("customBtn_Novas Informações Encaminhadas")).click();
     await driver.sleep(3000);     
     await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")), 3000).sendKeys("Teste Automatizado");
     await driver.sleep(3000);     
     await driver.findElement(By.id("BtnConfirmReason")).click();
     await driver.sleep(3000);        

     // verifica se entrou no fluxo correto
     let results5 = await driver.wait(until.elementLocated(By.css('#frm > div.title > h1'), 5000));
     let text5 = await results5.getText();    
     //assert.strictEqual(text5, "Encaminhar Documento ao Cooperado no DocuSign");
     await driver.sleep(3000);


     // testar o fluxo Retornar ao Requisitante para Contato com Cooperado...
     await driver.findElement(By.css("#icon")).click();
     await driver.sleep(3000);     
     await driver.findElement(By.id("customBtn_Documento Encaminhado ao Cooperado")).click();
     await driver.sleep(3000);
     await driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")).click();
     await driver.sleep(3000);
    

     // testar o fluxo Documentos Assinado Digitalmente
     await driver.findElement(By.css("#icon")).click();
     await driver.sleep(4000);
     await driver.findElement(By.id("customBtn_Documentos Assinados Digitalmente")).click();
     await driver.sleep(4000);
     await driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")).click();
     await driver.sleep(8000);
     
})

Then("O usuário inicia o teste do processo de Assinatura Digital, porém testar o fluxo do cancelamento", async () =>{
         
    const driver = global.driver;   
    await driver.findElement(By.id("HlStartSimulation")).click();
     // localiza modal de teste
    await driver.sleep(3000);
    await driver.switchTo().frame(4); 
    await driver.sleep(3000);
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Cancelada")), 3000).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")).click();
         
})
