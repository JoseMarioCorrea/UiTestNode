const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Direcionar para Receber Solicitação de Onboarding Digital e Realizar Trâmites Iniciais', async() => {
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
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Receber Solicitação de Onboarding Digital e Realizar Trâmites Iniciais']`)), 6000);  
  
});

When ('Validar os dados Onboarding', async() => {
    let titulo = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#BoxFrmExecute > div > div.card.bg-primary.text-white.text-center.mb-3 > div > h4"))), 30000).getText();
    assert.deepStrictEqual(titulo, "Onboarding Digital");

    let inpnome = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39581"))), 30000).getText();
    assert.deepStrictEqual(inpnome, "Teste Testando & Teste");

    let inpcpf = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39582"))), 30000).getText();
    assert.deepStrictEqual(inpcpf, "02739661037");

    let inptipoDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39583"))), 30000).getText();
    assert.deepStrictEqual(inptipoDocumento, "CPF");

    let inpnumeroDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39584"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroDocumento, "111111111111");

    let inpdataNascimento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39585"))), 30000).getText();
    assert.deepStrictEqual(inpdataNascimento, "20/12/1988");

    let inporgaoExpedidorDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39586"))), 30000).getText();
    assert.deepStrictEqual(inporgaoExpedidorDocumento, "Detran");

    let inpufDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39587"))), 30000).getText();
    assert.deepStrictEqual(inpufDocumento, "RS");

    let inpdataEmissaoDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39588"))), 30000).getText();
    assert.deepStrictEqual(inpdataEmissaoDocumento, "02/07/1997");

    let inpnacionalidade = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39589"))), 30000).getText();
    assert.deepStrictEqual(inpnacionalidade, "Brasileiro");

    let inpnaturalidadeCidade = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39590"))), 30000).getText();
    assert.deepStrictEqual(inpnaturalidadeCidade, "Porto Alegre");

    let inpnaturalidadeUF = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39591"))), 30000).getText();
    assert.deepStrictEqual(inpnaturalidadeUF, "RS");

    let inpsexo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39592"))), 30000).getText();
    assert.deepStrictEqual(inpsexo, "M");

    let inpfiliacao1 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39593"))), 30000).getText();
    assert.deepStrictEqual(inpfiliacao1, "João");

    let inpfiliacao2 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39594"))), 30000).getText();
    assert.deepStrictEqual(inpfiliacao2, "Maria");

    let inpnomeConjuge = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39640"))), 30000).getText();
    assert.deepStrictEqual(inpnomeConjuge, "Esposa Teste");

    let inpcpfConjuge = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39641"))), 30000).getText();
    assert.deepStrictEqual(inpcpfConjuge, "07518199998");

    let inpdataNascimentoConjuge = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39642"))), 30000).getText();
    assert.deepStrictEqual(inpdataNascimentoConjuge, "08/01/1988");

    let inpregimeCasamento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39643"))), 30000).getText();
    assert.deepStrictEqual(inpregimeCasamento, "Separação Parcial de Bens");

    let inpgrauInstrucao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39598"))), 30000).getText();
    assert.deepStrictEqual(inpgrauInstrucao, "POS_GRADUADO");

    let inplogradouro = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39604"))), 30000).getText();
    assert.deepStrictEqual(inplogradouro, "Av. X");

    let inpnumeroEndereco = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39605"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroEndereco, "1");

    let inpcomplemento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39606"))), 30000).getText();
    assert.deepStrictEqual(inpcomplemento, "12");

    let inpbairro = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39607"))), 30000).getText();
    assert.deepStrictEqual(inpbairro, "XYZ");

    let inpcidade = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39608"))), 30000).getText();
    assert.deepStrictEqual(inpcidade, "Porto Alegre");

    let inpuf = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39609"))), 30000).getText();
    assert.deepStrictEqual(inpuf, "RS");

    let inpddd = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39610"))), 30000).getText();
    assert.deepStrictEqual(inpddd, "41");

    let inpnumeroTelefone = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39611"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroTelefone, "996669512");

    let inpenderecoEmail = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39612"))), 30000).getText();
    assert.deepStrictEqual(inpenderecoEmail, "jose.santos@zallpy.com");

    let inprendaBruta = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39613"))), 30000).getText();
    assert.deepStrictEqual(inprendaBruta, "6.000,00");

    let inpvalorCotaCapital = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39614"))), 30000).getText();
    assert.deepStrictEqual(inpvalorCotaCapital, "1.200,00");

    let inpvalorPrimeiraParcela = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39615"))), 30000).getText();
    assert.deepStrictEqual(inpvalorPrimeiraParcela, "1.000,00");

    let inpdataPrimeiraParcela = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39616"))), 30000).getText();
    assert.deepStrictEqual(inpdataPrimeiraParcela, "25/07/2020");

    let inpvalorDemaisParcelas = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39617"))), 30000).getText();
    assert.deepStrictEqual(inpvalorDemaisParcelas, "200,00");

    let inpnumeroParcelas = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39619"))), 30000).getText();
    assert.deepStrictEqual(inpnumeroParcelas, "1");

    let inpcooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39620"))), 30000).getText();
    assert.deepStrictEqual(inpcooperativa, "0515");

    let inpcentral = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39627"))), 30000).getText();
    assert.deepStrictEqual(inpcentral, "0507");

    let inpnomeCooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39621"))), 30000).getText();
    assert.deepStrictEqual(inpnomeCooperativa, "UNICRED VALOR CAPITAL");

    //let inpagencia = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39622"))), 30000).getText();
   // assert.deepStrictEqual(inpagencia, "01");

    let inptipoConta = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39624"))), 30000).getText();
    assert.deepStrictEqual(inptipoConta, "Conta Individual");

    let inpusuarioUnicred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39625"))), 30000).getText();
    assert.deepStrictEqual(inpusuarioUnicred, "BRN");
});

Then ('Documentos Não Aceitos - Rejeitar Associação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Documentos Não Aceitos - Rejeitar Associação"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
});

Then ('Anexar arquivo IdWall', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Comprovante de renda (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
});


Then ('Enviar para Analise da Cooperativa', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Encaminhado para a Cooperativa"))), 30000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
    await driver.sleep(8000);
    await driver.switchTo().alert().accept();
});

Then ('Aprovar Cadastro Onboarding', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Associação Aprovada"))), 30000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
    await driver.sleep(8000);
    await driver.switchTo().alert().accept();    
});

Given ('Estamos localizados na atividade Analisar Solicitação de Onboarding Digital', async() => {
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
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Onboarding Digital']`)), 60000);  

}); 

Given ('Estamos localizados na atividade Encaminhar Documento de Onboarding para Assinatura Digital', async() => {
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
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Encaminhar Documento de Onboarding para Assinatura Digital']`)), 60000);  

}); 

Then ('Clicar em Rejeitar entrada de Cooperado e finalizar o teste', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Rejeitar Associação"))), 3000).click();
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

Then ('Preencher Carteiras e Colaborador Responsável', async() => {
    await driver.wait(until.elementLocated(By.name("inp39648")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-listaCarteiras > div > select > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementLocated(By.name("inp39635")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-colaboradorResponsavel > div > select > option:nth-child(2)")), 3000).click();
});

Then ('Clicar em Documento Encaminhado ao Cooperado', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Documento Encaminhado ao Cooperado")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
    await driver.sleep(8000);
    await driver.switchTo().alert().accept();
});

Then ('Clicar em Solicitação Cancelada Sem Notificar o Prospect', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Cancelada Sem Notificar o Prospect"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
    await driver.sleep(8000);
    await driver.switchTo().alert().accept();
});