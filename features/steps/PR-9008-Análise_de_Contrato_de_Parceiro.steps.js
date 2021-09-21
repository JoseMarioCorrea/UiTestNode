const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro', async() =>{
    await driver.sleep(2000);
   //await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Análise de Contrato de Parceiro']`)), 6000);  
});

Given ('O usuário Selecionou o Mercado Interno', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39419"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-mercado > div > select > option:nth-child(3)"))), 30000).click();
});

When ('Preencher um CPF', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39328"))), 30000).sendKeys("07518199998");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39328"))), 30000).sendKeys(Key.TAB);
});

Then ('o Tipo de Pessoa deve ser igual a Física', async() => {
    let inptipoPessoa = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39329"))), 30000).getAttribute("value");
    assert.deepStrictEqual(inptipoPessoa, "Pessoa Física");
});

When ('Preencher um CNPJ', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39328"))), 30000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39328"))), 30000).sendKeys(Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39328"))), 30000).sendKeys("64006027000174");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39375"))), 30000).click();
}); 

Then ('o Tipo de Pessoa deve ser igual a Jurídica', async() => {
    let inptipoPessoa = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39329"))), 30000).getAttribute("value");
    assert.deepStrictEqual(inptipoPessoa, "Pessoa Jurídica");
});

Given ('o usuário selecionou o Tipo de Documento - Aditivo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(2)"))), 30000).click();
});  

Then ('deve habilitar a section Informações da Minuta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("informacoes-minuta"))), 30000);
}); 

When ('o usuário selecionou o Tipo de Documento - Contrato', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(3)"))), 30000).click();
});

When ('o usuário selecionou o Tipo de Documento - Convênio Débito Automático', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(4)"))), 30000).click();
}); 

When ('o usuário selecionou o Tipo de Documento - Convênio Órgão Público', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(5)"))), 30000).click();
}); 

When ('o usuário selecionou o Tipo de Documento - Distrato', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(6)"))), 30000).click();
}); 

Then ('deve habilitar a section Informações da Minuta e mostrar somente as justificativas', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39353"))), 30000).sendKeys("Teste 1");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39354"))), 30000).sendKeys("Teste 2");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39355"))), 30000).sendKeys("Teste 3");
});

Then ('Não deve habilitar a section Informações da Minuta', async() => {
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.id("informacoes-minuta"))), 3000);
});

When ('o usuário selecionou o Tipo de Documento - Notificação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(7)"))), 30000).click();
});  

When ('o usuário selecionou o Tipo de Documento - Notificação ExtraJudicial', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(8)"))), 30000).click();
});

When ('o usuário selecionou o Tipo de Documento - Parecer de Contrato', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(9)"))), 30000).click();
}); 

Then ('deve habilitar o campo Parecer', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39943"))), 30000).sendKeys("Teste Parecer");
});

When ('o usuário selecionou o Tipo de Documento - Proposta Comercial  Técnica', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(10)"))), 30000).click();
});

When ('o usuário selecionou o Tipo de Documento - Qualificação de Fornecedor  Análise Saúde Financeira', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(11)"))), 30000).click();
});

When ('o usuário selecionou o Tipo de Documento - Registro de Ocorrência de Fornecedor', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(12)"))), 30000).click();
});

When ('o usuário selecionou o Tipo de Documento - Solicitação de Contratos e Documentos Assinados', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(13)"))), 30000).click();
}); 

When ('o usuário selecionou o Tipo de Documento - Termo de Adesão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(14)"))), 30000).click();
});

When ('o usuário selecionou o Tipo de Documento - Termo de Confidencialidade', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39374"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoDocumento > div > select > option:nth-child(15)"))), 30000).click();
});

Then ('deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39347"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-localPrestacaoServico > div > select > option:nth-child(2)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39349"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-vigencia > div > select > option:nth-child(3)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39353"))), 30000).sendKeys("Teste 1");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39354"))), 30000).sendKeys("Teste 2");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39355"))), 30000).sendKeys("Teste 3");
});

Given ('O usuário inseriu os anexos para Análise de Contrato de Parceiro', async() => {
    const driver = global.driver;
    let element = await driver.wait(until.elementLocated(By.name("inp39355")), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    for (var i = 0; i < 5; i++){
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/thead/tr/td/button"))), 30000).click();
        }
        
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(1) > td:nth-child(2) > select"))), 30000).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(1) > td:nth-child(2) > select > option:nth-child(2)"))), 30000).click();

        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(2) > td:nth-child(2) > select"))), 30000).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(3)"))), 30000).click();
    
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(3) > td:nth-child(2) > select"))), 30000).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(3) > td:nth-child(2) > select > option:nth-child(4)"))), 30000).click();

        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(4) > td:nth-child(2) > select"))), 30000).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(4)"))), 30000).click();

        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(5) > td:nth-child(2) > select"))), 30000).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(5) > td:nth-child(2) > select > option:nth-child(5)"))), 30000).click();

        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(6) > td:nth-child(2) > select"))), 30000).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(6) > td:nth-child(2) > select > option:nth-child(6)"))), 30000).click();

    
        //Primeiro Anexo
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnUploadanexo"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
        //Segundo Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[2]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
          //Terceiro Anexo 
          await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[3]/td[3]/button"))), 3000).click();
          await driver.sleep(1000);
          await driver.switchTo().frame(1)
          await driver.sleep(1000);
          let fileInput3 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
          await fileInput3.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
          await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
          await driver.sleep(1000);
          await driver.switchTo().frame(4);
           //Quarto Anexo 
           await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[4]/td[3]/button"))), 3000).click();
           await driver.sleep(1000);
           await driver.switchTo().frame(1)
           await driver.sleep(1000);
           let fileInput4 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
           await fileInput4.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
           await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
           await driver.sleep(1000);
           await driver.switchTo().frame(4);
            //Quinto Anexo 
          await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[5]/td[3]/button"))), 3000).click();
          await driver.sleep(1000);
          await driver.switchTo().frame(1)
          await driver.sleep(1000);
          let fileInput5 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
          await fileInput5.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
          await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
          await driver.sleep(1000);
          await driver.switchTo().frame(4);
           //Sexto Anexo 
           await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[6]/td[3]/button"))), 3000).click();
           await driver.sleep(1000);
           await driver.switchTo().frame(1)
           await driver.sleep(1000);
           let fileInput6 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
           await fileInput6.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
           await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
           await driver.sleep(1000);
           await driver.switchTo().frame(4);
}); 

When ('preencher o responsável pela assinatura', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39925"))), 30000).sendKeys("Testemunha");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39926"))), 30000).sendKeys("Gerente");
});

Then ('marcar as Informações Complementares e Encaminhar Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-aplicaseLgpd"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-aplicaseResolucao4658"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
    await driver.sleep(2000);
});

When ('o usuário preencheu o Assunto', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39375"))), 30000).sendKeys("Assunto");
});

Then ('preencher informaçoes de Parceiro', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39339"))), 30000).sendKeys("Nome do Fornecedor");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39340"))), 30000).sendKeys("Nome Completo do Contato no Fornecedor");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39341"))), 30000).sendKeys("41996669512");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39342"))), 30000).sendKeys("Teste@teste.com.br");
});

Given ('o usuário está localizado em Analisar Solicitação de Contrato com Parceiro', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contrato com Parceiro']`)), 6000);
});

When ('validar os dados do contrato com Parceiro', async() => {
    let inpcooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39327"))), 3000).getText();
    assert.deepStrictEqual(inpcooperativa, "9008");

    let inpmercado = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39419"))), 3000).getText();
    assert.deepStrictEqual(inpmercado, "Interno");

    let inpcpfCnpj = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39328"))), 3000).getText();
    assert.deepStrictEqual(inpcpfCnpj, "07518199998");

    let inptipoDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39374"))), 3000).getText();
    assert.deepStrictEqual(inptipoDocumento, "Termo de Confidencialidade");

    let inptipoPessoa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39329"))), 3000).getText();
    assert.deepStrictEqual(inptipoPessoa, "Pessoa Física");

    let inpnomeFornecedor = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39339"))), 3000).getText();
    assert.deepStrictEqual(inpnomeFornecedor, "Nome do Fornecedor");

    let inpnomeCompletoContatoFornecedor = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39340"))), 3000).getText();
    assert.deepStrictEqual(inpnomeCompletoContatoFornecedor, "Nome Completo do Contato no Fornecedor");

    let inptelefoneContato = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39341"))), 3000).getText();
    assert.deepStrictEqual(inptelefoneContato, "41996669512");

    let inpemailContato = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39342"))), 3000).getText();
    assert.deepStrictEqual(inpemailContato, "Teste@teste.com.br");

    let inplocalPrestacaoServico = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39347"))), 3000).getText();
    assert.deepStrictEqual(inplocalPrestacaoServico, "UBR - Porto Alegre");

    let inpvigencia = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39349"))), 3000).getText();
    assert.deepStrictEqual(inpvigencia, "Evento");

    let inpdescricaoServico = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39353"))), 3000).getText();
    assert.deepStrictEqual(inpdescricaoServico, "Teste 1");

    let inppossiveisPenalidades = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39354"))), 3000).getText();
    assert.deepStrictEqual(inppossiveisPenalidades, "Teste 2");

    let inpconsideracoesNegociacao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39355"))), 3000).getText();
    assert.deepStrictEqual(inpconsideracoesNegociacao, "Teste 3");

    let inptestemunha = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39925"))), 3000).getText();
    assert.deepStrictEqual(inptestemunha, "Testemunha");

    let inpgerenteProcurador = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39926"))), 3000).getText();
    assert.deepStrictEqual(inpgerenteProcurador, "Gerente");
}); 

Then ('Selecionar o Tipo de Contrato', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoContrato > div > select"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoContrato > div > select > option:nth-child(3)"))), 3000).click();
}); 

Then ('Selecionar Análise Jurídico', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-analiseJuridico"))), 3000).click();
    await driver.sleep(2000);
});

Then ('Análise Controladoria deve vir já habilitado', async() => {
    let customSwitch = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-analiseControladoria"))), 3000).getText();
    assert.deepStrictEqual(customSwitch, "Sim");
});

When ('desabilitar a Análise Controladoria', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-analiseControladoria"))), 3000).click();
}); 

Then ('clicar em Análise Realzada', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Análise Realizada"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
    await driver.sleep(2000);
});

Given ('o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada Jurídico', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contrato com Parceiro [Alçada Jurídico]']`)), 6000);
});

When ('Validar a regra de rateio para cooperativas Fixo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-rateioCooperativas"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39942"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoRateio > div > select > option:nth-child(2)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39929"))), 3000);
});

Then ('Validar a regra de rateio para cooperativas Variável', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-rateioCooperativas"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39942"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoRateio > div > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39956"))), 3000);
});

Then ('Selecionar Análise SI', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-analiseSi"))), 3000).click();
}); 

Given ('o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada SI', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contrato com Parceiro [Alçada SI]']`)), 6000);
});


Then ('preencher Informações Segurança da Informação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39332"))), 3000).sendKeys("31122021");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39361"))), 3000).sendKeys('Brasil');
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39362"))), 3000).sendKeys('Curitiba');
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39364"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-servicoRelevante > div > select > option:nth-child(2)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tiposServicos > div > label:nth-child(2)"))), 3000).click();
}); 

Given ('o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada Controladoria', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contrato com Parceiro [Alçada Controladoria]']`)), 6000);
});

Then ('preencher Informações Controladoria', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39944"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-centroCustoCorreto > div > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39932"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-orcamentoDisponivel > div > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39933"))), 3000).sendKeys("12345");
});

Given ('o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Após Validação Times UBR', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contrato com Parceiro Após Validação Times UBR']`)), 6000);
});

Then ('Clicar em Devolver para Analise', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Devolver para Análise"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});

Given ('O usuário inseriu o primeiro anexo para Análise de Contrato de Parceiro', async() => {
    const driver = global.driver;
    //await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/thead/tr/td/button"))), 30000).click();
    //Primeiro Anexo
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(1) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(1) > td:nth-child(2) > select > option:nth-child(2)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnUploadanexo"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Selecionar Análise Controladoria', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customSwitch-label-analiseControladoria"))), 3000).click();
});  

Then ('anexar o segundo anexo', async() => {
    const driver = global.driver;
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.sleep(1500);
    //Segundo Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(2) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(3)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[2]/td[3]/button"))), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('anexar o terceiro anexo', async() => {
    const driver = global.driver;
    //Terceiro Anexo
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(3) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(3) > td:nth-child(2) > select > option:nth-child(4)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[3]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput3 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput3.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('anexar o quarto anexo', async() => {
    const driver = global.driver;
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.sleep(1500);
    //Quarto Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(4) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(4)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[4]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput4 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput4.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('anexar o quinto anexo', async() => {
    const driver = global.driver;
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.sleep(1500);
    //Quinto Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(5) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(5) > td:nth-child(2) > select > option:nth-child(5)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[5]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput5 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput5.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('anexar o sexto anexo', async() => {
    const driver = global.driver;
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.sleep(1500);
    //Sexto Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(6) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(6) > td:nth-child(2) > select > option:nth-child(6)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[6]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput6 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput6.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Solicitar ao requisitante mais informações', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Mais Informações Solicitadas"))), 3000).click();
});

Then ('Clicar em Coletar Visto Jurídico', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Coletar Visto Jurídico"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});

Given ('o usuário está localizado Coletar Visto do Jurídico em Contrato com Parceiro', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Coletar Visto do Jurídico em Contrato com Parceiro']`)), 6000);
});

Then ('anexar o sétimo arquivo', async() => {
    const driver = global.driver;
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/thead/tr/td/button"))), 30000).click();
    await driver.sleep(1500);
    //Sétimo Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(7) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(7) > td:nth-child(2) > select > option:nth-child(2)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[7]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput6 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput6.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('clicar em Coleta Realizada', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Coleta Realizada"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});

Given ('o usuário está localizado Encaminhar Documentos de Solicitação de Contrato com Parceiro para Assinatura Digital', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Encaminhar Documentos de Solicitação de Contrato com Parceiro para Assinatura Digital']`)), 6000);
});

Then ('anexar o oitavo arquivo', async() => {
    const driver = global.driver;
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.sleep(1500);
    //Oitavo Anexo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(8) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-documentos > tbody > tr:nth-child(8) > td:nth-child(2) > select > option:nth-child(2)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[4]/div/div/div/table/tbody/tr[8]/td[3]/button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput6 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput6.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('clicar em Documentos Encaminhados', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.id("customBtn_Documentos Encaminhados")), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});

Then ('Selecionar forma de pagamento', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39333"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[10]/div/div[1]/div/select/option[3]"))), 3000).click();
});

Then ('selecionar os procuradores', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39367"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[2]/div[1]/div[4]/div[2]/div/div[2]/section[11]/div/div[2]/div/select/option[2]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39934"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[2]/div[1]/div[4]/div[2]/div/div[2]/section[11]/div/div[3]/div/select/option[3]"))), 3000).click();
}); 

When ('inserir o Contrato Assinado', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span")), 30000).click();
    await driver.switchTo().frame(1)
    await driver.sleep(2000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await driver.wait(until.elementLocated(By.css("#fileupload > div.row-fluid.fileupload-buttonbar > div.span7 > span.btn.btn-info.fileinput-button")), 30000);
    //await fileInput.click();
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(2000);
    await driver.switchTo().frame(4);    
}); 

Then ('Clicar em Contrato Assinado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Contrato Assinado"))), 3000).click();

});

Given ('o usuário está localizado na atividade Digitalizar o Contrato Assinado', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Digitalizar o Contrato Assinado']`)), 6000);
});

Given ('o usuário está localizado em Aguardar Assinatura de Documentos de Solicitação de Contrato com Parceiro', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Aguardar Assinatura de Documentos de Solicitação de Contrato com Parceiro']`)), 6000);
});
