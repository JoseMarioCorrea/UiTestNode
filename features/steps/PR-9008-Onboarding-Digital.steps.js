const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Direcionar para Analisar Solicitação de Cadastro', async() => {
    //Verifica a nova aba
    const driver = global.driver;  
    const originalWindow = await driver.getWindowHandle();
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 3,
            10000
          );
          const windows = await driver.getAllWindowHandles();
          windows.forEach(async handle => {
             if (handle !== originalWindow) {
             await driver.switchTo().window(handle);
              }
          });
   
   await driver.sleep(2000);
   //await driver.wait(until.elementLocated(By.xpath(`//*[@id="infos-gerais"]/h4[text() = 'Informações Gerais']`)), 6000);  
  
});

When ('Validar os dados Onboarding', async() => {
    let titulo = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#BoxFrmExecute > div > div.card.bg-primary.text-white.text-center.mb-3 > div > h4"))), 30000).getText();
    assert.deepStrictEqual(titulo, "Onboarding Digital");

    let inpnome = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29279"))), 30000).getText();
    assert.deepStrictEqual(inpnome, "Teste Automatizado");

    let inpcpf = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29278"))), 30000).getText();
    assert.deepStrictEqual(inpcpf, "07518199998");

    let inptipoDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29280"))), 30000).getText();
    assert.deepStrictEqual(inptipoDocumento, "RG");

    let inpnumeroDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29281"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroDocumento, "94285330");

    let inpdataNascimento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29285"))), 30000).getText();
    assert.deepStrictEqual(inpdataNascimento, "09/02/1982");

    let inporgaoExpedidorDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29282"))), 30000).getText();
    assert.deepStrictEqual(inporgaoExpedidorDocumento, "SSP");

    let inpufDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29283"))), 30000).getText();
    assert.deepStrictEqual(inpufDocumento, "SP");

    let inpdataEmissaoDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29284"))), 30000).getText();
    assert.deepStrictEqual(inpdataEmissaoDocumento, "24/06/2017");

    let inpnacionalidade = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29287"))), 30000).getText();
    assert.deepStrictEqual(inpnacionalidade, "Brasil");

    let inpnaturalidadeCidade = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29359"))), 30000).getText();
    assert.deepStrictEqual(inpnaturalidadeCidade, "Maringá");

    let inpnaturalidadeUF = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29288"))), 30000).getText();
    assert.deepStrictEqual(inpnaturalidadeUF, "PR");

    let inpsexo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29286"))), 30000).getText();
    assert.deepStrictEqual(inpsexo, "F");

    let inpfiliacao1 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29290"))), 30000).getText();
    assert.deepStrictEqual(inpfiliacao1, "Teste Mãe");

    let inpfiliacao2 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29291"))), 30000).getText();
    assert.deepStrictEqual(inpfiliacao2, "Teste Pai");

    let inpnomeConjuge = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29360"))), 30000).getText();
    assert.deepStrictEqual(inpnomeConjuge, "Teste Esposa");

    let inpcpfConjuge = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29361"))), 30000).getText();
    assert.deepStrictEqual(inpcpfConjuge, "04591974952");

    let inpdataNascimentoConjuge = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29362"))), 30000).getText();
    assert.deepStrictEqual(inpdataNascimentoConjuge, "24/06/1984");

    let inpregimeCasamento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29363"))), 30000).getText();
    assert.deepStrictEqual(inpregimeCasamento, "Comunhão Parcial de Bens");

    let inpcep = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29302"))), 30000).getText();
    assert.deepStrictEqual(inpcep, "83505715");

    let inplogradouro = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29303"))), 30000).getText();
    assert.deepStrictEqual(inplogradouro, "Antônia Maria Xavier");

    let inpnumeroEndereco = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29304"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroEndereco, "99");

    let inpbairro = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29306"))), 30000).getText();
    assert.deepStrictEqual(inpbairro, "Campina do Arruda");
    
    let inpuf = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div29289"))), 30000).getText();
    assert.deepStrictEqual(inpuf, "PR");

    let inpddd = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-contatos > div > div.col-xs-12.col-md-1 > input"))), 30000).getAttribute("value");
    assert.deepStrictEqual(inpddd, "15");

    let inpnumeroTelefone = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-contatos > div > div:nth-child(2) > input"))), 30000).getAttribute("value");
    assert.deepStrictEqual(inpnumeroTelefone, "996761185");

    let inpenderecoEmail = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-contatos > div > div.col-xs-12.col-md-3 > input"))), 30000).getAttribute("value");
    assert.deepStrictEqual(inpenderecoEmail, "teste@gmail.com");

    let inprendaBruta = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div31610"))), 30000).getText();
    assert.deepStrictEqual(inprendaBruta, "5000.00");

    let inpvalorCotaCapital = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-unicred > div > div:nth-child(2) > div > input"))), 30000).getAttribute("value");
    assert.deepStrictEqual(inpvalorCotaCapital, "1000.00");

    let inpvalorPrimeiraParcela = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div29366"))), 30000).getText();
    assert.deepStrictEqual(inpvalorPrimeiraParcela, "1000.00");

    let inpvalorDemaisParcelas = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div29369"))), 30000).getText();
    assert.deepStrictEqual(inpvalorDemaisParcelas, "1000.00");

    let inpnumeroParcelas = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div29365"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroParcelas, "1");

    let inpcooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div29354"))), 30000).getText();
    //assert.deepStrictEqual(inpcooperativa, "0582");

    let inpnomeCooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div30655"))), 30000).getText();
    assert.deepStrictEqual(inpnomeCooperativa, "UNICRED UNIAO");

    let inpagencia = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div29356"))), 30000).getText();
    assert.deepStrictEqual(inpagencia, "9 - Ag. Mafra");

    let inptipoConta = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div36951"))), 30000).getText();
    assert.deepStrictEqual(inptipoConta, "Regular");

});

Then ('Rejeitar Cadastro', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Rejeitar Cadastro"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
});

Then ('Enviar para Analise da Cooperativa', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Enviar para Análise da Cooperativa"))), 30000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
    await driver.sleep(8000);
    await driver.switchTo().alert().accept();
});

Then ('Aprovar Cadastro Onboarding', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Aprovar Cadastro"))), 30000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
    await driver.sleep(8000);
    await driver.switchTo().alert().accept();    
});

Given ('Estamos localizados na atividade Analisar entrada do cooperado com exceção', async() => {
    //Verifica a nova aba
    const driver = global.driver;  
    const originalWindow = await driver.getWindowHandle();
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 5,
            10000
          );
          const windows = await driver.getAllWindowHandles();
          windows.forEach(async handle => {
             if (handle !== originalWindow) {
             await driver.switchTo().window(handle);
              }
          });
   
   await driver.sleep(2000);
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar entrada do cooperado com exceção']`)), 60000);  

}); 

Given ('Estamos localizados na atividade Analisar entrada do cooperado', async() => {
    //Interação com a nova aba
    const driver = global.driver;  
    const originalWindow = await driver.getWindowHandle();
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 7,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
        }
    });
   await driver.sleep(2000);
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Cadastro']`)), 60000);  

}); 

Then ('Clicar em Rejeitar entrada de Cooperado e finalizar o teste', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Rejeitar Cadastro"))), 3000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
});

Then ('Validar se o botão Aprovar é habilitado após marcar o check List', async() => {
    await driver.wait(until.elementLocated(By.css("#checklist > div:nth-child(3) > label")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#checklist > div:nth-child(4) > label")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#checklist > div:nth-child(5) > label")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#checklist > div:nth-child(6) > label")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Aprovar Cadastro"))), 3000);
});
