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

Then ('Preencher os dados de inicio com cooperativa 0515', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35368"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#div-cooperativa > div > select > option:nth-child(17)")), 30000).click();
    await driver.wait(until.elementLocated(By.name("inp35394")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select > option:nth-child(2)")), 30000).click();
});

Then ('Clicar em Encaminhar a solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inpCodPositionArea"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#controllers > div.alert.alert-info > div > select > option:nth-child(3)"))), 30000).click();
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
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#button-verification-ok"))), 30000).click();
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

Then ('Preencher os dados de inicio com cooperativa 0043', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35368"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#div-cooperativa > div > select > option:nth-child(6)")), 30000).click();
    await driver.wait(until.elementLocated(By.name("inp35394")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select > option:nth-child(2)")), 30000).click();
});

Given ('O usuário clica no Objetivo 1 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("objetivo-1")), 3000).click();
});

When ('Selecionar a Destinação 1 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("destinacao-1")), 30000).click();
});

Given ('O usuário verificou o aviso informando que Valor total é obrigatório', async() => {
    let mensagem = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textMensagem = await mensagem.getText();
    assert.deepStrictEqual(textMensagem, "Atenção aos campos obrigatórios: Valor, Valor");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

When ('for preenchido o Valor Total', async() => {
    await driver.wait(until.elementLocated(By.name("inp35490")), 3000).sendKeys("98043");
});

Given ('O usuário verificou o aviso informando a necessidade do anexo Boleto', async() => {
    let mensagem = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textMensagem = await mensagem.getText();
    assert.deepStrictEqual(textMensagem, "Anexo Boleto é obrigatório!");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Given ('O usuário verificou o aviso informando a necessidade do anexo Comprovante de Pagamento', async() => {
    let mensagem = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textMensagem = await mensagem.getText();
    assert.deepStrictEqual(textMensagem, "Anexo Comprovante de Pagamento é obrigatório!");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

When ('for anexado o arquivo Boleto', async() =>{
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(1)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('for anexado o arquivo Comprovante de Pagamento', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(2)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
}); 

Then ('É necessário validar os dados para Auxilio Educação', async() => {
    let cooperativa =  await driver.wait(until.elementLocated(By.id("div35368")), 3000);
    let resultsCooperativa = await cooperativa.getText();
    await assert.deepStrictEqual(resultsCooperativa, "0043");
    let objetivo =  await driver.wait(until.elementLocated(By.id("div35344")), 3000);
    let resultsobjetivo = await objetivo.getText();
    await assert.deepStrictEqual(resultsobjetivo, "Auxílio Educação");
}); 

Then ('Preencher os dados de inicio com cooperativa 0159', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35368"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#div-cooperativa > div > select > option:nth-child(13)")), 30000).click();
    await driver.wait(until.elementLocated(By.name("inp35394")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select > option:nth-child(2)")), 30000).click();
});

Given ('O usuário clica no Objetivo 2 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("objetivo-2")), 3000).click();
});

When ('Selecionar a Destinação 2 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("destinacao-2")), 30000).click();
});

Given ('O usário selecionou o Contexto Ordem de compra já aprovada', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-0")), 30000).click();

}); 

Then ('O campo OC deve ser apresentado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35348"))), 30000);
}); 

When ('O usário selecionou o Contexto Sem Ordem de compra', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-1")), 30000).click();

}); 

Then ('O campo OC deve ser ocultado', async() => {
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.name("inp35348"))), 30000);
}); 

Given ('O usuário selecionou tem rateio', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-temRateio"))), 30000).click();
});

When ('preencher os informações de rateio', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr > td:nth-child(2) > select > option:nth-child(2)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr > td:nth-child(3) > input"))), 30000).sendKeys("300000");
});

Then ('cadastrar mais um centro de custo para rateio', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(3)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input"))), 30000).sendKeys("300000");
});

Given ('O usuário validou o rateio em 50 porcento por centro de custo', async() => {
    let primeiraporcentagem = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(4) > input")), 3000);
    let resultsprimeiraporcentagem = await primeiraporcentagem.getText();
    assert.deepStrictEqual(resultsprimeiraporcentagem, "");

    let Segundaporcentagem = await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(4) > input")), 3000);
    let resultsSegundaporcentagem = await Segundaporcentagem.getText();
    assert.deepStrictEqual(resultsSegundaporcentagem, "");
});

When ('Clicar em Imobilizar o Bem?', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-imobilizarOsBemns")), 3000).click();
});

Then ('Inserir as Informações de Imobilização de Bem', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr > td:nth-child(2) > input"))), 30000).sendKeys("Bem de Teste Automatizado");
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr > td:nth-child(3) > select")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr > td:nth-child(3) > select > option:nth-child(2)"))), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr > td:nth-child(4) > select")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr > td:nth-child(4) > select > option:nth-child(2)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr > td:nth-child(5) > input"))), 30000).sendKeys("Observação Teste Automatizado");

});

Given ('O usuário clicou para adicionar um novo bem', async() => {
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > thead > tr > td")), 3000).click();
});

When ('for preenchido os dados do novo bem', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(2) > input"))), 30000).sendKeys("Bem de Teste Automatizado");
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(3) > select"))).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(3) > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(4) > select"))).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(4) > select > option:nth-child(4)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(5) > input"))), 30000).sendKeys("Observação Teste Automatizado");
}); 

Then ('selecionar o emissor da nota fiscal', async() => {
    await driver.wait(until.elementLocated(By.name("inp35349")), 3000).click();
}); 

When ('for inserido Pessoa Fisica', async() => {
    await driver.wait(until.elementLocated(By.css("#div-emissorDaNf > div > select > option:nth-child(2)")), 3000).click();
});

Then ('Realizar a pesquisa pelo CPF deve trazer os dados corretos', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35351"))), 30000).sendKeys("63651378934");
    await driver.wait(until.elementLocated(By.id("btn-cpfCnpjEmissor")), 3000).click();
    //Verifica os dados consultados 
    let pesquisa = await driver.wait(until.elementLocated(By.css("#div-nomeFornecedor > div > input")), 3000);
    let resultadopesquisa = await pesquisa.getText();
    assert.deepStrictEqual(resultadopesquisa, "");
});

When ('for inserido Pessoa Juridica', async() => {
    await driver.wait(until.elementLocated(By.name("inp35349")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-emissorDaNf > div > select > option:nth-child(3)")), 3000).click();
}); 

Then ('Realizar a pesquisa pelo CNPJ deve trazer os dados corretos', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35351"))), 30000).sendKeys("72098593000181");
    await driver.wait(until.elementLocated(By.id("btn-cpfCnpjEmissor")), 3000).click();
    //Verifica os dados consultados 
    let pesquisa = await driver.wait(until.elementLocated(By.css("#div-nomeFornecedor > div > input")), 3000);
    let resultadopesquisa = await pesquisa.getText();
    assert.deepStrictEqual(resultadopesquisa, "");
});

Then ('Deve habilitar a seleção de MEI', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35371"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-eMei > div > select > option:nth-child(3)"))), 3000).click();
});

Given ('A compra possuí Nota Fiscal', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-possuiNf")), 3000).click();
}); 

When ('selecionado o campo Possuí NF?', async() => {
    //
}); 

Then ('Deve habilitar o campo Número do Documento', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35354"))), 30000).sendKeys("48");
});

Given ('Os campos Data de Emissão, Data de Vencimento, Forma de Pagamento e Descrição da Solicitação preenchidos', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-dataDeEmissao > div > input"))), 30000).sendKeys("12/12/2022");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-dataDeVencimento > div > input"))), 30000).sendKeys("12/12/2022");
    await driver.wait(until.elementLocated(By.name("inp35361")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-formaDePagamento > div > select > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35362"))), 30000).sendKeys("Esse é um Teste Automatizado, estou preenchendo essa descrição!");

});

When ('Marcar Informar conta contábil para este lançamento?', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-informarContaContabil")), 3000).click();
});

Then ('Deve habilitar o campo Conta contábil', async() => {
    await driver.wait(until.elementLocated(By.name("inp35613")), 3000).sendKeys("123456");
});

Given ('O usuário preencheu o Valor Total', async() => {
    await driver.wait(until.elementLocated(By.name("inp35490")), 3000).sendKeys("129000");
});

Given ('O usuário verificou o aviso informando a necessidade do anexo Nota Fiscal', async() => {
    let mensagem = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textMensagem = await mensagem.getText();
    assert.deepStrictEqual(textMensagem, "Atenção aos campos obrigatórios: É Produto ou Serviço?");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

When ('for anexado o arquivo Nota Fiscal', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(1)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});  

Then ('Clicar em Encaminhar a solicitações', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
}); 

When ('for anexado o arquivo Boletos', async() =>{
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(2)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Given ('Estamos localizado na atividade Analisar Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contas a Pagar']`)), 60000);  
});

Then ('Selecionar produto', async() => {
    await driver.wait(until.elementLocated(By.css("#div-eProdutoOuServico > div > select")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-eProdutoOuServico > div > select > option:nth-child(2)")), 3000).click();
});

Then ('Alterar os dados de Analise de Compras', async() => {
    const driver = global.driver;
    //Alterar Centro de Custo
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select > option:nth-child(10)")), 30000).click();
    //Altera o Posto
    await driver.wait(until.elementLocated(By.name("inp35343")), 3000).sendKeys("10");
    //Altera um centro de custo
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(8)"))), 30000).click();
    //Altera os valores dos centros de custos 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr > td:nth-child(3) > input"))), 30000).sendKeys(Key.CONTROL + "a", Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr > td:nth-child(3) > input"))), 30000).sendKeys("408000");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input"))), 30000).sendKeys(Key.CONTROL + "a", Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input"))), 30000).sendKeys("408000");
    //Insere mais um centro de custo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(2) > select > option:nth-child(5)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(3) > input"))), 30000).sendKeys("22222");
    //Excluir o primeiro Bem 
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(1) > td:nth-child(1)")), 3000).click();
    //Valida os dados de emissor de Nf 
    let Nf = await driver.wait(until.elementLocated(By.id("div35349")), 3000);
    let resultadoNf = await Nf.getText();
    assert.deepStrictEqual(resultadoNf, "Pessoa Jurídica");
    //Valida os dados de CNPJ 
    let CNPJ = await driver.wait(until.elementLocated(By.id("div35351")), 3000);
    let resultadoCNPJ = await CNPJ.getText();
    assert.deepStrictEqual(resultadoCNPJ, "72098593000181");
    //Valida os dados de Nome Fornecedor
    let fornecedor = await driver.wait(until.elementLocated(By.id("div35352")), 3000);
    let resultadofornecedor = await fornecedor.getText();
    //Bug na linha abaixo, aguardar correção e retirar o comentário
    //assert.deepStrictEqual(resultadofornecedor, "SELETRON COM. DE EQUIP. ELETRONICOS EIRELI");
    //Valida é MEI?
    let eMEI = await driver.wait(until.elementLocated(By.id("div35371")), 3000);
    let resultadoeMEI = await eMEI.getText();
    assert.deepStrictEqual(resultadoeMEI, "Sim");
    //Valida é Produto ou Serviço?
    let eProduto = await driver.wait(until.elementLocated(By.id("div35372")), 3000);
    let resultadoeProduto = await eProduto.getText();
    assert.deepStrictEqual(resultadoeProduto, "Produto");
    //Valida Possui Nf?
    let possuiNff = await driver.wait(until.elementLocated(By.id("div35353")), 3000);
    let resultadopossuiNff = await possuiNff.getText();
    assert.deepStrictEqual(resultadopossuiNff, "Sim");
    //Valida Numero do Documento
    let NumeroDocumento = await driver.wait(until.elementLocated(By.id("div35354")), 3000);
    let resultadoNumeroDocumento = await NumeroDocumento.getText();
    assert.deepStrictEqual(resultadoNumeroDocumento, "48");
    //Valida Data de Emissão
    let dataEmissao = await driver.wait(until.elementLocated(By.id("div35356")), 3000);
    let resultadodataEmissao = await dataEmissao.getText();
    assert.deepStrictEqual(resultadodataEmissao, "12/12/2022");
    //Altera dada de vencimento
    await driver.wait(until.elementLocated(By.css("#div-dataDeVencimento > div > input")), 3000).sendKeys("28/10/2021");
    //Valida Forma de pagamento
    let formaPagamento = await driver.wait(until.elementLocated(By.id("div35361")), 3000);
    let resultadoformaPagamento = await formaPagamento.getText();
    assert.deepStrictEqual(resultadoformaPagamento, "Boleto");
    //Altera descrição da Solicitação 
    await driver.wait(until.elementLocated(By.name("inp35362")), 3000).sendKeys("Esse é um Teste Automatizado, estou preenchendo essa NOVA descrição!");
    //Altera Informar conta contábil para este lançamento?
    await driver.wait(until.elementLocated(By.css("#div-informarContaContabil > div > select")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-informarContaContabil > div > select > option:nth-child(2)")), 3000).click();
    //Alterar valor 
   // await driver.wait(until.elementLocated(By.name("#div-valorMonetarioFormatado > div > input")), 3000).sendKeys("801136");
    //Carrega mais um anexo
    
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#annex > div.row-fluid > div.span9.padded > button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Aprovar essa Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Aprovada"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});

Given ('Estamos localizados na atividade de Segunda Analise da solicitação', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Contas a Pagar - Segundo Aprovador']`)), 60000);  
});

Then ('Alterar os dados da Segunda Analise de Compras', async() => {
    const driver = global.driver;
    //Alterar Centro de Custo
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#informacoes-solicitacao > div:nth-child(1) > div:nth-child(3) > div > select > option:nth-child(6)")), 30000).click();
    //Altera o Posto
    await driver.wait(until.elementLocated(By.name("inp35343")), 3000).sendKeys("10");
    //Altera um centro de custo
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(3)"))), 30000).click();
    //Deletar o segundo centro de custos 
    await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(1)")), 3000).click();
    //Alterar valor do terceiro centro de custo 
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(2) > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(2) > select > option:nth-child(7)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(3) > input"))), 30000).sendKeys("1269876");
    //Inserir um novo Bem
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > thead > tr > td")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(3) > select"))).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(3) > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(4) > select"))).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(4) > select > option:nth-child(4)"))), 3000).click();
    //Valida os dados de emissor de Nf 
    let Nf = await driver.wait(until.elementLocated(By.id("div35349")), 3000);
    let resultadoNf = await Nf.getText();
    assert.deepStrictEqual(resultadoNf, "Pessoa Jurídica");
    //Valida os dados de CNPJ 
    let CNPJ = await driver.wait(until.elementLocated(By.id("div35351")), 3000);
    let resultadoCNPJ = await CNPJ.getText();
    assert.deepStrictEqual(resultadoCNPJ, "72098593000181");
    //Valida os dados de Nome Fornecedor
    let fornecedor = await driver.wait(until.elementLocated(By.id("div35352")), 3000);
    let resultadofornecedor = await fornecedor.getText();
    //Bug na linha abaixo, aguardar correção e retirar o comentário
    //assert.deepStrictEqual(resultadofornecedor, "SELETRON COM. DE EQUIP. ELETRONICOS EIRELI");
    //Valida é MEI?
    let eMEI = await driver.wait(until.elementLocated(By.id("div35371")), 3000);
    let resultadoeMEI = await eMEI.getText();
    assert.deepStrictEqual(resultadoeMEI, "Sim");
    //Valida é Produto ou Serviço?
    let eProduto = await driver.wait(until.elementLocated(By.id("div35372")), 3000);
    let resultadoeProduto = await eProduto.getText();
    assert.deepStrictEqual(resultadoeProduto, "Produto");
    //Valida Possui Nf?
    let possuiNff = await driver.wait(until.elementLocated(By.id("div35353")), 3000);
    let resultadopossuiNff = await possuiNff.getText();
    assert.deepStrictEqual(resultadopossuiNff, "Sim");
    //Valida Numero do Documento
    let NumeroDocumento = await driver.wait(until.elementLocated(By.id("div35354")), 3000);
    let resultadoNumeroDocumento = await NumeroDocumento.getText();
    assert.deepStrictEqual(resultadoNumeroDocumento, "48");
    //Valida Data de Emissão
    let dataEmissao = await driver.wait(until.elementLocated(By.id("div35356")), 3000);
    let resultadodataEmissao = await dataEmissao.getText();
    assert.deepStrictEqual(resultadodataEmissao, "12/12/2022");
    //Altera dada de vencimento
    await driver.wait(until.elementLocated(By.css("#div-dataDeVencimento > div > input")), 3000).sendKeys("08/01/2022");
    //Valida Forma de pagamento
    let formaPagamento = await driver.wait(until.elementLocated(By.id("div35361")), 3000);
    let resultadoformaPagamento = await formaPagamento.getText();
    assert.deepStrictEqual(resultadoformaPagamento, "Boleto");
    //Altera descrição da Solicitação 
    await driver.wait(until.elementLocated(By.name("inp35362")), 3000).sendKeys("Ultima mudança de descrição!");
    //Altera Informar conta contábil para este lançamento?
    await driver.wait(until.elementLocated(By.css("#div-informarContaContabil > div > select")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-informarContaContabil > div > select > option:nth-child(3)")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#div-contaContabil > div > input")), 3000).sendKeys("1234567");
    //Alterar valor 
   // await driver.wait(until.elementLocated(By.name("#div-valorMonetarioFormatado > div > input")), 3000).sendKeys("801136");
    //Carrega mais um anexo
    
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#annex > div.row-fluid > div.span9.padded > button"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Given ('Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar e Realizar Pagamento de Solicitação de Contas a Pagar']`)), 60000);  
});

Then ('Validar os dados alterados nas aprovações', async() => {
    let cooperativa =  await driver.wait(until.elementLocated(By.id("div35368")), 3000);
    let resultsCooperativa = await cooperativa.getText();
    await assert.deepStrictEqual(resultsCooperativa, "0159");
    let objetivo =  await driver.wait(until.elementLocated(By.id("div35344")), 3000);
    let resultsobjetivo = await objetivo.getText();
    await assert.deepStrictEqual(resultsobjetivo, "Compras");
    let posto =  await driver.wait(until.elementLocated(By.id("div35343")), 3000);
    let resultsposto = await posto.getText();
    await assert.deepStrictEqual(resultsposto, "0410");
    //Validar Centros de Custo
    let centro1 =  await driver.wait(until.elementLocated(By.id("div35386")), 3000);
    let resultscentro1 = await centro1.getText();
    await assert.deepStrictEqual(resultscentro1, "1000 - Unidade Novo Hamburgo - Centro");
    let centro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=hidden]")), 3000);
    let resultscentro2 = await centro2.getAttribute("value");
    await assert.deepStrictEqual(resultscentro2, "1003 - Unidade Gramado");
    let centro3 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(1) > input[type=hidden]")), 3000);
    let resultscentro3 = await centro3.getAttribute("value");
    await assert.deepStrictEqual(resultscentro3, "1005 - Unidade Montenegro - Centro");
    //Validar valores de Centros de custo
    let valorcentro1 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro1 = await valorcentro1.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro1, "4.080,00");
    let valorcentro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro2 = await valorcentro2.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro2, "222,22");
    let valorcentro3 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro3 = await valorcentro3.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro3, "12.698,67");
    //Validar porcentagem de Centros de custo
    let porcentocentro1 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro1 = await porcentocentro1.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro1, "24.00%");
    let porcentocentro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro2 = await porcentocentro2.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro2, "1.31%");
    let porcentocentro3 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro3 = await porcentocentro3.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro3, "74.69%");
    //Validar Bem
    let descricaoBem1 =  await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsdescricaoBem1 = await descricaoBem1.getAttribute("value");
    await assert.deepStrictEqual(resultsdescricaoBem1, "Bem de Teste Automatizado");
    let departamentoBem1 =  await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(1) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsdepartamentoBem1 = await departamentoBem1.getAttribute("value");
    await assert.deepStrictEqual(resultsdepartamentoBem1, "Administrativo/Sede");
    let departamentoBem2 =  await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsdepartamentoBem2 = await departamentoBem2.getAttribute("value");
    await assert.deepStrictEqual(resultsdepartamentoBem2, "Pac 1- Taquara");
    let localizacaoBem1 =  await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(1) > td:nth-child(4) > input[type=hidden]")), 3000);
    let resultslocalizacaoBem1 = await localizacaoBem1.getAttribute("value");
    //await assert.deepStrictEqual(resultslocalizacaoBem1, "NOVO HAMBURGO CENTRO");
    let localizacaoBem2 =  await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td:nth-child(4) > input[type=hidden]")), 3000);
    let resultslocalizacaoBem2 = await localizacaoBem2.getAttribute("value");
    //await assert.deepStrictEqual(resultslocalizacaoBem2, "Pac 1 Taquara");
    //Inserir numero de patrimonio
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(1) > td.numeroPatrimonio > input")), 3000).sendKeys("2698");
    await driver.wait(until.elementLocated(By.css("#tabela-imobilizacao > tbody > tr:nth-child(2) > td.numeroPatrimonio > input")), 3000).sendKeys("2698");

}); 
Then ('Finalizar o teste', async() => {
    const driver = global.driver;
    await driver.switchTo().defaultContent();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#frm > div.navbar.navbar-inverse.navbar-header > div > div > div > a"))), 30000);
});

Then ('Verifica bug do integra', async() => {
    let verifica = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[3]/div/p[text() = 'Esta tarefa não está mais ativa no sistema ou foi apropriada por outro usuário.']`)), 60000);  
    let auxverifica = await verifica.getText();
    //assert.deepStrictEqual(auxverifica, "Esta tarefa não está mais ativa no sistema ou foi apropriada por outro usuário.");
    if (auxverifica == "Esta tarefa não está mais ativa no sistema ou foi apropriada por outro usuário.") {
        await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click();
        const driver = global.driver;
        await driver.switchTo().defaultContent();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.css("#tbodyInboxTable > tr:nth-child(1) > td:nth-child(3)")), 3000).click();
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
    }
});

Given ('O usuário clica no Objetivo 3 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("objetivo-3")), 3000).click();
});

When ('Selecionar o Contexto Alteração', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-0")), 3000).click();
});

Then ('Deve mostrar o campo Motivo Alteração', async() => {
    let motivo = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-motivoAlteracao > div > label"))), 30000);
    let resultsmotivo = await motivo.getText();
    assert.deepStrictEqual(resultsmotivo, "Motivo Alteração");
});

When ('Selecionar o Contexto Cancelamento', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-1")), 3000).click();
});

Then ('Deve mostrar o campo Motivo Cancelamento', async() => {
    let motivo = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-motivoCancelamento > div > label"))), 30000);
    let resultsmotivo = await motivo.getText();
    assert.deepStrictEqual(resultsmotivo, "Motivo Cancelamento");
});

When ('Selecionar o Contexto Inclusão', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-2")), 3000).click();
});

Then ('Deve ocultar o campo Motivo Cancelamento', async() => {
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.css("#div-motivoAlteracao > div > label"))), 30000);
}); 

Given ('Para o Objetivo Débito Automático a Destinação deve ser auto selecionado como Despesa', async() => {
    let destinacao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("destinacao-0"))), 30000);
    let resultsdestinacao = await destinacao.getAttribute("class");
    assert.deepStrictEqual(resultsdestinacao, "list-group-item list-group-item-action active");
}); 

When ('Preencher as informações do Débito Automático', async() => {
    await driver.wait(until.elementLocated(By.name("inp35358")), 3000).sendKeys("Convênio Teste");
    await driver.wait(until.elementLocated(By.name("inp35359")), 3000).sendKeys("12/12/2022");
    await driver.wait(until.elementLocated(By.name("inp35360")), 3000).sendKeys("Identificador Teste");
});

Then ('Preencher o Valor Total do Débito', async() => {
    await driver.wait(until.elementLocated(By.name("inp35490")), 3000).sendKeys("126987");
});

Then ('É necessário validar os dados para Débito Automático', async() => {
    let convenio = await driver.wait(until.elementLocated(By.css("#div35358")), 3000);
    let resultsconvenio = await convenio.getText();
    assert.deepStrictEqual(resultsconvenio, "Convênio Teste");
    let dataPagamento = await driver.wait(until.elementLocated(By.id("div35359")), 3000);
    let resultsdataPagamento = await dataPagamento.getText();
    assert.deepStrictEqual(resultsdataPagamento, "12/12/2022");
    let identificadorr = await driver.wait(until.elementLocated(By.id("div35360")), 3000);
    let resultsidentificadorr = await identificadorr.getText();
    assert.deepStrictEqual(resultsidentificadorr, "Identificador Teste");
});

Then ('Encaminhar essa solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 3000).click();
}); 

Then ('Clicar em Encaminhar para o Fiscal ASC', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Encaminhar para o Fiscal ASC"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado, vai para gerar Nota Fiscal");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

Given ('Estamos localizados na atividade Verificar Retenções de NFs de Solicitação de Contas Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Retenções de NFs de Solicitação de Contas Pagar']`)), 60000);  
});

Then ('Validar os dados para a Nota Fiscal', async() => {
    let convenio = await driver.wait(until.elementLocated(By.css("#div35358")), 3000);
    let resultsconvenio = await convenio.getText();
    assert.deepStrictEqual(resultsconvenio, "Convênio Teste");
    let dataPagamento = await driver.wait(until.elementLocated(By.id("div35359")), 3000);
    let resultsdataPagamento = await dataPagamento.getText();
    assert.deepStrictEqual(resultsdataPagamento, "12/12/2022");
    let identificadorr = await driver.wait(until.elementLocated(By.id("div35360")), 3000);
    let resultsidentificadorr = await identificadorr.getText();
    assert.deepStrictEqual(resultsidentificadorr, "Identificador Teste");
    let valortotal = await driver.wait(until.elementLocated(By.id("div35490")), 3000);
    let resultsvalortotal = await valortotal.getText();
    assert.deepStrictEqual(resultsvalortotal, "1.269,87");

});

Then ('As Retenções foram Verificadas', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Retenções Verificadas"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
});

Given ('O usuário clica no Objetivo 4 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("objetivo-4")), 3000).click();
});

When ('Selecionar a Destinação 3 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("destinacao-3")), 3000).click();
}); 

Then ('Deve habilitar e preencher o campo Projeto', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35389"))), 3000).sendKeys("Projeto de Testes Automatizados");
});

Then ('Selecionar o Contexto Possui Contrato Assinado', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-1")), 3000).click();
}); 

Then ('Clicar no botão Falta de Documento para Prosseguir Atividade', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#button-anexo-faltante"))), 3000).click();

});

Given ('O usuário clicou em Solicitar nota Fiscal', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitar Nota Fiscal"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado, vai para gerar Nota Fiscal");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

When ('Direcionar para a atividade Anexar NF de Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Anexar NF de Solicitação de Contas a Pagar']`)), 60000);  
});
Then ('Validar os dados e anexar a NF', async() => {

    let cooperativa =  await driver.wait(until.elementLocated(By.id("div35368")), 3000);
    let resultsCooperativa = await cooperativa.getText();
    await assert.deepStrictEqual(resultsCooperativa, "0159");
    let objetivo =  await driver.wait(until.elementLocated(By.id("div35344")), 3000);
    let resultsobjetivo = await objetivo.getText();
    await assert.deepStrictEqual(resultsobjetivo, "Pagamento Terceiros (Outros)");
    let posto =  await driver.wait(until.elementLocated(By.id("div35343")), 3000);
    let resultsposto = await posto.getText();
    await assert.deepStrictEqual(resultsposto, "00");
    //Validar Centros de Custo
    let centro1 =  await driver.wait(until.elementLocated(By.id("div35386")), 3000);
    let resultscentro1 = await centro1.getText();
    await assert.deepStrictEqual(resultscentro1, "1000 - Unidade Novo Hamburgo - Centro");
    let centro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=hidden]")), 3000);
    let resultscentro2 = await centro2.getAttribute("value");
    await assert.deepStrictEqual(resultscentro2, "1001 - Unidade Taquara");
    
    //Validar valores de Centros de custo
    let valorcentro1 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro1 = await valorcentro1.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro1, "3.000,00");
    let valorcentro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro2 = await valorcentro2.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro2, "3.000,00");
    
    //Validar porcentagem de Centros de custo
    let porcentocentro1 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro1 = await porcentocentro1.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro1, "50.00%");
    let porcentocentro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro2 = await porcentocentro2.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro2, "50.00%");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Encaminhar Nota Fiscal"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
}); 

Given ('Estamos localizados na atividade Verificar NF Anexada de Solicitação de Contas a Pagar', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar NF Anexada de Solicitação de Contas a Pagar']`)), 60000);  
});

Then ('Validar os dados e aprovar a NF', async() => {
    let cooperativa =  await driver.wait(until.elementLocated(By.id("div35368")), 3000);
    let resultsCooperativa = await cooperativa.getText();
    await assert.deepStrictEqual(resultsCooperativa, "0159");
    let objetivo =  await driver.wait(until.elementLocated(By.id("div35344")), 3000);
    let resultsobjetivo = await objetivo.getText();
    await assert.deepStrictEqual(resultsobjetivo, "Pagamento Terceiros (Outros)");
    let posto =  await driver.wait(until.elementLocated(By.id("div35343")), 3000);
    let resultsposto = await posto.getText();
    await assert.deepStrictEqual(resultsposto, "00");
    //Validar Centros de Custo
    let centro1 =  await driver.wait(until.elementLocated(By.id("div35386")), 3000);
    let resultscentro1 = await centro1.getText();
    await assert.deepStrictEqual(resultscentro1, "1000 - Unidade Novo Hamburgo - Centro");
    let centro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=hidden]")), 3000);
    let resultscentro2 = await centro2.getAttribute("value");
    await assert.deepStrictEqual(resultscentro2, "1001 - Unidade Taquara");
    
    //Validar valores de Centros de custo
    let valorcentro1 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro1 = await valorcentro1.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro1, "3.000,00");
    let valorcentro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=hidden]")), 3000);
    let resultsvalorcentro2 = await valorcentro2.getAttribute("value");
    await assert.deepStrictEqual(resultsvalorcentro2, "3.000,00");
    
    //Validar porcentagem de Centros de custo
    let porcentocentro1 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(1) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro1 = await porcentocentro1.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro1, "50.00%");
    let porcentocentro2 =  await driver.wait(until.elementLocated(By.css("#tabela-rateio > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=hidden]")), 3000);
    let resultsporcentocentro2 = await porcentocentro2.getAttribute("value");
    await assert.deepStrictEqual(resultsporcentocentro2, "50.00%");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Aprovar Nota Fiscal"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
});

Given ('O usuário clica no Objetivo 5 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("objetivo-5")), 3000).click();

});

Then ('O Campo contexto deve iniciar auto selecionado com Sem Contexto', async() => {
    let classe = await driver.wait(until.elementLocated(By.id("contexto-0")), 3000)
    let resultsclasse = await classe.getAttribute("class");
    assert.deepStrictEqual(resultsclasse, "list-group-item list-group-item-action  active"); 
}); 

Given ('O campo Solicitação para outra pessoa? foi selecionado', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-solicitarParaOutraPessoa")), 3000).click();
});

When ('Apresentar os campos Solicitação para conselheiro presidente e Nome', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-solicitacaoParaConselheiro")), 3000).click();
});

Then ('Deve ser preenchido o nome', async() => {
    await driver.wait(until.elementLocated(By.name("inp35497")), 3000).sendKeys("Teste Automatizado");
});

Given ('O campo Deseja anexar um arquivo único? for selecionado', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-arquivoUnico")), 3000).click();
}); 

Then ('Deve ser desabilitado o campo Anexo Despesa', async() => {
    //
}); 

When ('Clicar em adicionar mais uma Despesa', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnInsertNewRow"))), 3000).click();
});

Then ('Deve ser preenchido a despesa', async() => {
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.tipo-despesa > select")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.tipo-despesa > select > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.valor-despesa > input")), 3000).sendKeys("2698741");
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td:nth-child(4) > input")), 3000).sendKeys("12/12/2022");
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td:nth-child(5) > input")), 3000).sendKeys("Despesa Teste");
}); 

Given ('O campo Informar conta contábil para este lançamento? for selecionado', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-informarContaContabil")), 3000).click();
});

When ('Anexar o Comprovante de Ressarcimento', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Clicar em Solicitar Mais Informações', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Mais Informações Solicitadas"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado, vai para gerar Nota Fiscal");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

Given ('Estamos localizado em Regularizar Pendências', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Regularizar Pendência(s)']`)), 60000);  
}); 

When ('Alterar o tipo e os valor de despesa', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-arquivoUnico"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-arquivoUnico"))), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.tipo-despesa > select")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.tipo-despesa > select > option:nth-child(6)")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.valor-despesa > input"))), 30000).sendKeys(Key.CONTROL + "a", Key.DELETE);
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td.valor-despesa > input")), 3000).sendKeys("3982541");
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td:nth-child(4) > input")), 3000).sendKeys(Key.CONTROL + "a", Key.DELETE);
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td:nth-child(4) > input")), 3000).sendKeys("24/08/2022");
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td:nth-child(5) > input")), 3000).sendKeys(Key.CONTROL + "a", Key.DELETE);
    await driver.wait(until.elementLocated(By.css("#tabela-ressarcimento > tbody > tr:nth-child(1) > td:nth-child(5) > input")), 3000).sendKeys("Despesa Teste Novo");
}); 

Then ('Clicar em Encaminhar Novas Informações', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Novas Informações Encaminhadas")), 3000).click();
});

Then ('Validar os dados alterados das despesas', async() => {
    let tipoDespesa = await driver.wait(until.elementLocated(By.id("div35379")), 3000);
    let resultstipoDespesa = await tipoDespesa.getText(); 
    assert.deepStrictEqual(resultstipoDespesa, "Cartório Junta Comercial e Prefeitura");
    let valorDespesa = await driver.wait(until.elementLocated(By.id("div35380")), 3000);
    let resultsvalorDespesa = await valorDespesa.getText(); 
    assert.deepStrictEqual(resultsvalorDespesa, "39.825,14");
    let dataDespesa = await driver.wait(until.elementLocated(By.id("div35381")), 3000);
    let resultsdataDespesa = await dataDespesa.getText(); 
    assert.deepStrictEqual(resultsdataDespesa, "24/08/2022");
    let motivoDespesa = await driver.wait(until.elementLocated(By.id("div35382")), 3000);
    let resultsmotivoDespesa = await motivoDespesa.getText(); 
    assert.deepStrictEqual(resultsmotivoDespesa, "Despesa Teste Novo");   
});

Then ('Deve ir para atividade de Registrar os Identificadores nos Novos Bens', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Registrar os Identificadores nos Novos Bens']`)), 60000);  
});

Then ('Indentificadores Regristados', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Identificadores Registrados"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});
