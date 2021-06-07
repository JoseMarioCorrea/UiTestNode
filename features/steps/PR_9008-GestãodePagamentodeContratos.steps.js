const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Given ("Estamos na tela de busca de processos e Realizar a busca do Processo - {string}", async (string) => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#filter > div > div.box-header > h3"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsFlowName"))), 30000);
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);      
    await driver.wait(until.elementLocated(By.id("inpDsFlowName")), 30000).sendKeys(string, Key.ENTER);        
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("btnPesqFiltro"), 30000))).click();
    await driver.wait(until.elementLocated(By.css("#containertable > div > table > tbody > tr:nth-child(2) > td:nth-child(10) > span")), 30000).click();
    
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

Then ('Deve direcionar para a tela de Iniciar Solicitação de Contrato Firmado com Fornecedor', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Contrato Firmado com Fornecedor']`)), 60000);  
});

Given ('O selecionamento da Cooperativa', async() => {
    await driver.wait(until.elementLocated(By.name("inp35160")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-cooperativa > div > select > option:nth-child(45)")), 3000).click();
}); 

When ('Preencher o CPFCNPJ Fornecedor', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36746"))), 3000).sendKeys("07518199998");
});

Then ('Clicar em Buscar o CPF do Fornecedor', async() => {
    await driver.wait(until.elementLocated(By.id("btn-cpfCnpjFornecedor")), 3000).click();
    await driver.sleep(3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/div[3]/div/div/div/div[3]/div/div/button'))), 3000).click();

}); 

Given ('O Objetivo foi selecionado como - Adicionar Contrato', async() => {
    let text = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-objetivo > div > select > option:nth-child(2)"))), 3000).getText();
    assert.deepStrictEqual(text, "Adicionar Contrato");
});

When ('Selecionado o Centro de Custo', async() => {
    await driver.wait(until.elementLocated(By.name("inp36749")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-centroCustoSelecionado > div > select > option:nth-child(2)"))), 3000).click();
});

Then ('Preencher os dados da Informações do Fornecedor', async() =>{
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36741"))), 3000).sendKeys("Fornecedor Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36750"))), 3000).sendKeys("41999999999");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36751"))), 3000).sendKeys("teste@automatizado.com.br");
});

Given ('As Informações de Contrato foram preenchidas', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36742"))), 3000).sendKeys("Descritivo Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36754"))), 3000).sendKeys("24122022");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36755"))), 3000).sendKeys("100");
}); 
When ('A Vigência de Oferto for igual a Determinado', async() => {
    await driver.wait(until.elementLocated(By.name("inp36752")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-vigenciaContrato > div > select > option:nth-child(2)"))), 3000).click();
});

Then ('Deve habilitar o campo Data Vigência', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36753"))), 3000);
});

When ('A Vigência de Oferto for igual a Evento', async() => {
    await driver.wait(until.elementLocated(By.name("inp36752")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-vigenciaContrato > div > select > option:nth-child(3)"))), 3000).click();
});

When ('A Vigência de Oferto for igual a Indeterminado', async() => {
    await driver.wait(until.elementLocated(By.name("inp36752")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-vigenciaContrato > div > select > option:nth-child(4)"))), 3000).click();
});

Then ('Deve ocultar o campo Data Vigência', async() => {
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.name("inp36753"))), 3000);
});

Given ('O Contrato possuí rateio', async() => {
    await driver.wait(until.elementLocated(By.name("inp36743")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-temRateio > div > select > option:nth-child(3)"))), 3000).click();
});

When ('habilitar o campo Tipo de Rateio e selecionar o tipo Váriavel', async() => {
    //await driver.wait(until.elementLocated(By.name("inp36756")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-tipoRateio > div > select > option:nth-child(3)")), 30000).click();
}); 

Then ('habilitar Critério Rateio', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36766"))), 300000);
});

When ('Selecionar o tipo de rateio Fixo', async() => {
    await driver.wait(until.elementLocated(By.name("inp36756")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoRateio > div > select > option:nth-child(2)"))), 3000).click();
    await driver.wait(until.elementLocated(By.name("inp36757")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-tipoValorContrato > div > select > option:nth-child(2)"))), 3000).click();
});

Then ('Deve habilitar a seção para preenchimento do Centro de Custo do Rateio, Valor, Porcentagem', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("tabela-rateio"))), 3000);
});

Given ('O usuário preencheu o centro de custo, valor e porcentagem', async() => {
    await driver.wait(until.elementLocated(By.name("inp36758")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr > td:nth-child(2) > select > option:nth-child(2)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36759"))), 3000).sendKeys("1000");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36760"))), 3000).sendKeys("50");
});

When ('Clicar em adicionar um novo Centro de Custo', async() => {
    await driver.wait(until.elementLocated(By.id("BtnInsertNewRow")), 3000).click();
});

Then ('Preencher os campos do Centro de Custo adicionado', async() => {
    await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input"))), 3000).sendKeys("1000");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(4) > input"))), 3000).sendKeys("50");
});

Then ('Preencher os dados restantes', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36761"))), 3000).sendKeys("200000");
    await driver.wait(until.elementLocated(By.name("inp36762")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-modalidadePagamento > div > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36764"))), 3000).sendKeys("24122022");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36765"))), 3000).sendKeys("Observação Geral Teste Automatizado");
});
When ('Selecionar a Forma de Pagamento - Transferência', async() => {
    await driver.wait(until.elementLocated(By.name("inp36763")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-formaPagamento > div > select > option:nth-child(3)"))), 3000).click();
});

Then ('Deve habilitar os campos para inserir a conta para Transferência', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36767"))), 3000).sendKeys("3332");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36768"))), 3000).sendKeys("198532");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36769"))), 3000).sendKeys("404184728");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36770"))), 3000).sendKeys("2");
});

Then ('Encaminhar Novas Informações da Gestão de Pagamento de Contratos', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 3000).click();
}); 

Given ('Estamos localizado na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor', async() => {
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Contrato para Estruturar Pagamentos ao Fornecedor']`)), 60000);  
});

When ('Assumir a atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor', async() => {
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 3000).click();
});

Then ('Validar os dados apresentados na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor', async() => {
    let cooperativa = await driver.wait(until.elementLocated(By.id("div35160")), 3000).getText();
    assert.deepStrictEqual(cooperativa, "9184");
    let cnpj = await driver.wait(until.elementLocated(By.id("div36746")), 3000).getText();
    assert.deepStrictEqual(cnpj, "07518199998");
    let objetivo = await driver.wait(until.elementLocated(By.id("div36747")), 3000).getText();
    assert.deepStrictEqual(objetivo, "Adicionar Contrato");
    let custo = await driver.wait(until.elementLocated(By.id("div36749")), 3000).getText();
    assert.deepStrictEqual(custo, "1000 - 1000 - COOPNORE");
    let nomeFornecedor = await driver.wait(until.elementLocated(By.id("div36741")), 3000).getText();
    assert.deepStrictEqual(nomeFornecedor, "Fornecedor Teste Automatizado");
    let telefone = await driver.wait(until.elementLocated(By.id("div36750")), 3000).getText();
    assert.deepStrictEqual(telefone, "41999999999");
    let emailFornecedor = await driver.wait(until.elementLocated(By.id("div36751")), 3000).getText();
    assert.deepStrictEqual(emailFornecedor, "teste@automatizado.com.br");
    let descritivo = await driver.wait(until.elementLocated(By.id("div36742")), 3000).getText();
    assert.deepStrictEqual(descritivo, "Descritivo Teste Automatizado");
    let vigencia = await driver.wait(until.elementLocated(By.id("div36752")), 3000).getText();
    assert.deepStrictEqual(vigencia, "Indeterminado");
    let dataReajuste = await driver.wait(until.elementLocated(By.id("div36754")), 3000).getText();
    assert.deepStrictEqual(dataReajuste, "24/22/2201");
    let nomeFornecedores = await driver.wait(until.elementLocated(By.id("div36741")), 3000).getText();
    assert.deepStrictEqual(nomeFornecedores, "Fornecedor Teste Automatizado");
    let indicador = await driver.wait(until.elementLocated(By.id("div36755")), 3000).getText();
    assert.deepStrictEqual(indicador, "100");

    let temRateio = await driver.wait(until.elementLocated(By.id("div36743")), 3000).getText();
    assert.deepStrictEqual(temRateio, "Sim");
    let tipoRateio = await driver.wait(until.elementLocated(By.id("div36756")), 3000).getText();
    assert.deepStrictEqual(tipoRateio, "Fixo");
    let valorDoContrato = await driver.wait(until.elementLocated(By.id("div36757")), 3000).getText();
    assert.deepStrictEqual(valorDoContrato, "Fixo");
    let centroCustoRateio = await driver.wait(until.elementLocated(By.id("div36758")), 3000).getText();
    assert.deepStrictEqual(centroCustoRateio, "1000 - 1000 - COOPNORE");
    let centroCustoRateio2 = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=hidden]")), 3000).getAttribute("value");
    assert.deepStrictEqual(centroCustoRateio2, "1010 - 1010 - SC - ADMINISTRATIVO");
    let valorRateio = await driver.wait(until.elementLocated(By.id("div36759")), 3000).getText();
    assert.deepStrictEqual(valorRateio, "10,00");
    let valorRateio2 = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=hidden]")), 3000).getAttribute("value");
    assert.deepStrictEqual(valorRateio2, "10,00");
    let porcentagemRateio = await driver.wait(until.elementLocated(By.id("div36760")), 3000).getText();
    assert.deepStrictEqual(porcentagemRateio, "50");
    let porcentagemRateio2 = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=hidden]")), 3000).getAttribute("value");
    assert.deepStrictEqual(porcentagemRateio2, "50");
    let valorMensal = await driver.wait(until.elementLocated(By.id("div36761")), 3000).getText();
    assert.deepStrictEqual(valorMensal, "2.000,00");
    let modalidadedePagamento = await driver.wait(until.elementLocated(By.id("div36767")), 3000).getText();
    assert.deepStrictEqual(modalidadedePagamento, "3332");
    let divobservacoesGerais = await driver.wait(until.elementLocated(By.id("div36765")), 3000).getText();
    assert.deepStrictEqual(divobservacoesGerais, "Observação Geral Teste Automatizado");


    let divmodalidadePagamento = await driver.wait(until.elementLocated(By.id("div36762")), 3000).getText();
    assert.deepStrictEqual(divmodalidadePagamento, "Pós");
    let divagencia = await driver.wait(until.elementLocated(By.id("div36768")), 3000).getText();
    assert.deepStrictEqual(divagencia, "198532");
    let divcontaCorrente = await driver.wait(until.elementLocated(By.id("div36769")), 3000).getText();
    assert.deepStrictEqual(divcontaCorrente, "404184728");
    let divformaPagamento = await driver.wait(until.elementLocated(By.id("div36763")), 3000).getText();
    assert.deepStrictEqual(divformaPagamento, "Transferência");
    let divdigito = await driver.wait(until.elementLocated(By.id("div36770")), 3000).getText();
    assert.deepStrictEqual(divdigito, "2");
    let divvencimento = await driver.wait(until.elementLocated(By.id("div36764")), 3000).getText();
    assert.deepStrictEqual(divvencimento, "24/22/2201");
});

When ('Abertura Automática NFX for igual a Não', async() => {
    await driver.wait(until.elementLocated(By.css("#informacoes-nfx > div > div > div > select > option:nth-child(2)")), 3000).click();
}); 

Then ('Solicitar Mais informações ao Requisitante', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitar Mais Informações"))), 3000).click();
    await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")), 3000).sendKeys("Teste");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Regularização de Pendências de Gestão de Contrato com Fornecedor']`)), 60000);  
}); 

Given ('O usuário regulariza os dados pendentes', async() => {
    //await driver.sleep(100000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#informacoes-pagamento > div.alert.alert-warning"))), 30000);
    await driver.wait(until.elementLocated(By.css("#div-tipoRateio > div > select > option:nth-child(3)")), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36766"))), 300000).sendKeys("Rateio");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36767"))), 3000).sendKeys("3332");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36768"))), 3000).sendKeys("198532");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36769"))), 3000).sendKeys("404184728");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36770"))), 3000).sendKeys("2");
});

When ('Encaminhar as novas informações das regularizações pendentes', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Novas Informações Encaminhadas"))), 3000).click();
}); 

Then ('Validar os dados apresentados na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor após alterações', async() => {
    let tipoRateio = await driver.wait(until.elementLocated(By.id("div36756")), 3000).getText();
    assert.deepStrictEqual(tipoRateio, "Variável");
    let criterioRateio = await driver.wait(until.elementLocated(By.id("div36766")), 3000).getText();
    assert.deepStrictEqual(criterioRateio, "Rateio");
});

Then ('Contrato de Acordo para Controle Interno', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Contrato de Acordo para Controle Interno"))), 3000).click();
    await driver.switchTo().defaultContent();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#frm > div.navbar.navbar-inverse.navbar-header > div > div > div > a"))), 30000);
});

Then ('Clicar em Buscar o CPF do Fornecedor e localizar o contrato para edição', async() => {
    await driver.wait(until.elementLocated(By.id("btn-cpfCnpjFornecedor")), 3000).click();
    await driver.sleep(3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="modal-content"]/div/div[1]/div/div/button'))), 3000).click();
}); 

Given ('Selecionado o Objetivo Atualizar Contrato', async() => {
    await driver.wait(until.elementLocated(By.name("inp36747")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-objetivo > div > select > option:nth-child(3)"))), 3000).click();
}); 

Then ('Validar os dados apresentados na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor para atualização', async() => {
    let cooperativa = await driver.wait(until.elementLocated(By.id("div35160")), 3000).getText();
    assert.deepStrictEqual(cooperativa, "9184");
    let cnpj = await driver.wait(until.elementLocated(By.id("div36746")), 3000).getText();
    assert.deepStrictEqual(cnpj, "07518199998");
    let objetivo = await driver.wait(until.elementLocated(By.id("div36747")), 3000).getText();
    assert.deepStrictEqual(objetivo, "Atualizar Contrato");
    let custo = await driver.wait(until.elementLocated(By.id("div36749")), 3000).getText();
    assert.deepStrictEqual(custo, "1000 - 1000 - COOPNORE");
    let nomeFornecedor = await driver.wait(until.elementLocated(By.id("div36741")), 3000).getText();
    assert.deepStrictEqual(nomeFornecedor, "Fornecedor Teste Automatizado");
    let telefone = await driver.wait(until.elementLocated(By.id("div36750")), 3000).getText();
    assert.deepStrictEqual(telefone, "41999999999");
    let emailFornecedor = await driver.wait(until.elementLocated(By.id("div36751")), 3000).getText();
    assert.deepStrictEqual(emailFornecedor, "teste@automatizado.com.br");
    let descritivo = await driver.wait(until.elementLocated(By.id("div36742")), 3000).getText();
    assert.deepStrictEqual(descritivo, "Descritivo Teste Automatizado");
    let vigencia = await driver.wait(until.elementLocated(By.id("div36752")), 3000).getText();
    assert.deepStrictEqual(vigencia, "Indeterminado");
    let dataReajuste = await driver.wait(until.elementLocated(By.id("div36754")), 3000).getText();
    assert.deepStrictEqual(dataReajuste, "24/22/2201");
    let nomeFornecedores = await driver.wait(until.elementLocated(By.id("div36741")), 3000).getText();
    assert.deepStrictEqual(nomeFornecedores, "Fornecedor Teste Automatizado");
    let indicador = await driver.wait(until.elementLocated(By.id("div36755")), 3000).getText();
    assert.deepStrictEqual(indicador, "100");

    let temRateio = await driver.wait(until.elementLocated(By.id("div36743")), 3000).getText();
    assert.deepStrictEqual(temRateio, "Sim");
    let tipoRateio = await driver.wait(until.elementLocated(By.id("div36756")), 3000).getText();
    assert.deepStrictEqual(tipoRateio, "Fixo");
    let valorDoContrato = await driver.wait(until.elementLocated(By.id("div36757")), 3000).getText();
    assert.deepStrictEqual(valorDoContrato, "Fixo");
    let centroCustoRateio = await driver.wait(until.elementLocated(By.id("div36758")), 3000).getText();
    assert.deepStrictEqual(centroCustoRateio, "1000 - 1000 - COOPNORE");
    let centroCustoRateio2 = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=hidden]")), 3000).getAttribute("value");
    assert.deepStrictEqual(centroCustoRateio2, "1010 - 1010 - SC - ADMINISTRATIVO");
    let valorRateio = await driver.wait(until.elementLocated(By.id("div36759")), 3000).getText();
    assert.deepStrictEqual(valorRateio, "10,00");
    let valorRateio2 = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=hidden]")), 3000).getAttribute("value");
    assert.deepStrictEqual(valorRateio2, "10,00");
    let porcentagemRateio = await driver.wait(until.elementLocated(By.id("div36760")), 3000).getText();
    assert.deepStrictEqual(porcentagemRateio, "50");
    let porcentagemRateio2 = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=hidden]")), 3000).getAttribute("value");
    assert.deepStrictEqual(porcentagemRateio2, "50");
    let valorMensal = await driver.wait(until.elementLocated(By.id("div36761")), 3000).getText();
    assert.deepStrictEqual(valorMensal, "2.000,00");
    let modalidadedePagamento = await driver.wait(until.elementLocated(By.id("div36767")), 3000).getText();
    assert.deepStrictEqual(modalidadedePagamento, "3332");
    let divobservacoesGerais = await driver.wait(until.elementLocated(By.id("div36765")), 3000).getText();
    assert.deepStrictEqual(divobservacoesGerais, "Observação Geral Teste Automatizado");


    let divmodalidadePagamento = await driver.wait(until.elementLocated(By.id("div36762")), 3000).getText();
    assert.deepStrictEqual(divmodalidadePagamento, "Pós");
    let divagencia = await driver.wait(until.elementLocated(By.id("div36768")), 3000).getText();
    assert.deepStrictEqual(divagencia, "198532");
    let divcontaCorrente = await driver.wait(until.elementLocated(By.id("div36769")), 3000).getText();
    assert.deepStrictEqual(divcontaCorrente, "404184728");
    let divformaPagamento = await driver.wait(until.elementLocated(By.id("div36763")), 3000).getText();
    assert.deepStrictEqual(divformaPagamento, "Transferência");
    let divdigito = await driver.wait(until.elementLocated(By.id("div36770")), 3000).getText();
    assert.deepStrictEqual(divdigito, "2");
    let divvencimento = await driver.wait(until.elementLocated(By.id("div36764")), 3000).getText();
    assert.deepStrictEqual(divvencimento, "24/22/2201");
});
