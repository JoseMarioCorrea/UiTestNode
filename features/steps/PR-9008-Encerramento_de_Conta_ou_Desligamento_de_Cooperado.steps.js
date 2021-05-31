const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');
const {Builder} = require('selenium-webdriver');
const fs = require('fs');

Then ('Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Iniciar Solicitação de  Encerramento de Conta ou Desligamento de Cooperado']`))), 60000);  
});

Given ('O usuário selecionou Desligamento de Cooperato', async() => {
    await driver.wait(until.elementLocated(By.id("objetivo-0")), 30000).click();
}); 

When ('Apresentar os contextos', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-0")), 30000);
}); 

Then ('Validar os contextos apresentados estão corretos para Desligamento de Cooperado', async() => {
    let obj0 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).getText();
    let obj1 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-1"))), 30000).getText();
    let obj2 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-2"))), 30000).getText();
    let obj3 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-3"))), 30000).getText();
    assert.deepStrictEqual(obj0, "Demissão");
    assert.deepStrictEqual(obj1, "Eliminação");
    assert.deepStrictEqual(obj2, "Exclusão");
    assert.deepStrictEqual(obj3, "Falecimento");
});

Given ('O usuário Selecionou o Contexto Demissão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).click();
});

When ('Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-0"))), 30000).click();
}); 

Then ('Preencher as Informações da Solicitação e pesquisar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36635"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#dadosSolicitacao > div > div:nth-child(1) > div > select > option:nth-child(19)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36651"))), 30000).sendKeys("54896215087");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-cpfCnpj"))), 30000).click();
}); 

Given ('O usuário clicou em Já Possui Formulário Assinado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#formularioAssinado > div.custom-control.custom-switch > label"))), 30000).click();
}); 

Then ('O campo Documentos Serão Assinados Digitalmente deve ser ocultado', async() => {
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.css("#AssinadoDigitalmente > div.custom-control.custom-switch > label"))), 30000);
});

When ('O usuário clicar em Já Possui Formulário Assinado', async() => {
    await driver.wait(until.elementLocated(By.css("#formularioAssinado > div.custom-control.custom-switch > label")), 30000).click();
}); 

Then ('O campo Documentos Serão Assinados Digitalmente deve ser retornado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#AssinadoDigitalmente > div.custom-control.custom-switch > label"))), 30000);
});

Given ('O usuário clicou em Documentos Serão Assinados Digitalmente', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#AssinadoDigitalmente > div.custom-control.custom-switch > label"))), 30000).click();
});

When ('Contatos for habilitado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contatos"))), 30000);
});

Then ('Será preenchido os dados de contato', async() => {
    //Verifica dados de telefone importado
    let telefone = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36654"))), 30000).getAttribute("value");
    assert.deepStrictEqual(telefone, "48996625230");
    //Verifica Email 
    let email = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36671"))), 30000).getAttribute("value");;
    assert.deepStrictEqual(email, "marialgarve@hotmail.com");
}); 

Given ('O campo Informações de Cooperado foi habilitado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("infoAssinatura"))), 30000);
});

Then ('Validar os dados apresentados', async() => {
    //Verifica Nome
    let nome = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36653"))), 30000).getAttribute("value");
    assert.deepStrictEqual(nome, "MARIELIM ANTUNES");
    //Verifica Posto
    let posto = await driver.wait(until.elementLocated(By.css("#dadosSolicitacao > section.solicitacao > div:nth-child(3) > div:nth-child(2) > div > select > option")), 30000).getAttribute("value");
    assert.deepStrictEqual(posto, "7");
    //Verifica Matricula
    let matricula = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36645"))), 30000).getAttribute("value");
    assert.deepStrictEqual(matricula, "");
    //Verifica Admitido em
    let admitido = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36646"))), 30000).getAttribute("value");
    assert.deepStrictEqual(admitido, "12/01/2007");
});

When ('Desmarcar o campo Há Saldo de Capital a Restituir', async() => {
    await driver.wait(until.elementLocated(By.css("#saldoRestituir > div.custom-control.custom-switch > label")), 3000).click();
});

Then ('Deve ocultar informações do favorecido', async() => {
    await driver.wait(until.elementIsNotVisible(driver.findElement(By.css("#dadosSolicitacao > section.dadosBancarios"))), 30000);
}); 

Given ('O usuário marcou novamente o campo Há Saldo de Capital a Restituir', async() => {
    await driver.wait(until.elementLocated(By.css("#saldoRestituir > div.custom-control.custom-switch > label")), 3000).click();
});

When ('Marcar o campo Há Parcelamento', async() => {
    await driver.wait(until.elementLocated(By.css("#parcelamento > div.custom-control.custom-switch > label")), 3000).click();
}); 

Then ('Deve habilitar o campo Parcelamento', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36637"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infoComplementar > div > div.col-xs-12.col-md-3.isValorParcelamento > div > select > option:nth-child(2)"))), 30000).click();
});

Given ('O usuário marcou o campo É mesma titularidade', async() => {
    await driver.wait(until.elementLocated(By.css("#titularidade > div.custom-control.custom-switch > label")), 3000).click();
});

When ('For auto preenchido o Nome Favorecido e CPF CNPJ Favorecido', async() => {
    let nomeFavorecido = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36661"))), 30000).getAttribute("value");
    assert.deepStrictEqual(nomeFavorecido, "MARIELIM ANTUNES");
    let cnpjFavorecido = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36662"))), 30000).getAttribute("value");
    assert.deepStrictEqual(cnpjFavorecido, "54896215087");
});

Then ('Preencher os campos Banco, Agência, Conta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36658"))), 30000).sendKeys("22");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36659"))), 30000).sendKeys("9132");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36660"))), 30000).sendKeys("68971");
}); 

Given ('O usuário marcou o campo Estorno de Juros, IOF e Tarifas', async() => {
    await driver.wait(until.elementLocated(By.css("#estorno > div.custom-control.custom-switch.mb-3 > label")), 3000).click();
});

When ('Habilitar o Valor para Estorno', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36639"))), 3000);
}); 

Then ('Preencher o Valor para Estorno', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36639"))), 3000).sendKeys("1234567");
}); 

Given ('O usuário marcou o campo Haverá baixa de capital para liquidação de valores em aberto?', async() => {
    await driver.wait(until.elementLocated(By.css("#capital > div.custom-control.custom-switch.mb-3 > label")), 3000).click();
});

When ('Habilitar o Valor para Baixa', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36656"))), 3000);
});

Then ('Preencher o Valor para Baixa', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36656"))), 3000).sendKeys("98614");
});

Given ('O usuário marcou o campo Possui Exceção', async() => {
    await driver.wait(until.elementLocated(By.css("#excecao > div.custom-control.custom-switch.mb-3 > label")), 3000).click();
});

When ('Habilitar o Detalhamento Exceção', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36672"))), 3000);
});

Then ('Preencher o Detalhamento Exceção', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36672"))), 3000).sendKeys("Detalhamento Teste");
});

Given ('Preencher o Parecer', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36676"))), 3000).sendKeys("Parecer Teste");
}); 

When ('O usuário verificar se os dados de CheckList estão correto', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[1]/label[text() = 'Alteração forma de pagamento ou Cancelamento de Seguros']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[2]/label[text() = 'Alterar a forma de pagamento do Precaver para boleto ou Cancelar o Plano']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[3]/label[text() = 'Cancelamento Seguro de Vida em Grupo']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[4]/label[text() = 'Entregar Cheques Devolvidos que estejam na Agência']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[5]/label[text() = 'Ficha Matrícula assinada (Quando não for Assinatura Digital)']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[6]/label[text() = 'Formulário assinado (Quando não for Assinatura Digital)']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[7]/label[text() = 'Informar que não receberá mais benefícios que porventura receba em conta']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[8]/label[text() = 'Informar que será efetuado cancelamento de Agendamentos']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[9]/label[text() = 'Informar que será efetuado cancelamento de Cheques Custodiados no Mobile']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[10]/label[text() = 'Informar que será efetuado cancelamento de Talões e Folhas de Cheque']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[11]/label[text() = 'Informar que será efetuado cancelamento Débitos Automáticos']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[12]/label[text() = 'Providenciar Resgate de aplicações']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[13]/label[text() = 'Providenciar Resgate de Cheques Custodiados na Agência']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[14]/label[text() = 'Providenciar saldo para baixas de Empréstimos']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[15]/label[text() = 'Verificar Depósitos Bloqueados e aguardar liberação']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[16]/label[text() = 'Verificar e informar boletos de Cobrança em aberto']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[17]/label[text() = 'Verificar matrículas vinculadas e providenciar desligamento quando necessário']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[18]/label[text() = 'Verificar saldo de Cartões Mastercard/Visa Bancoob e providenciar valor para liquidação']`)), 3000);
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[19]/label[text() = 'Verificar saldo de Cartões Unicred Visa e providenciar valor para liquidação']`)), 3000);
}); 

Then ('Marcar todos os itens da CheckList', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[1]/label[text() = 'Alteração forma de pagamento ou Cancelamento de Seguros']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[2]/label[text() = 'Alterar a forma de pagamento do Precaver para boleto ou Cancelar o Plano']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[3]/label[text() = 'Cancelamento Seguro de Vida em Grupo']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[4]/label[text() = 'Entregar Cheques Devolvidos que estejam na Agência']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[5]/label[text() = 'Ficha Matrícula assinada (Quando não for Assinatura Digital)']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[6]/label[text() = 'Formulário assinado (Quando não for Assinatura Digital)']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[7]/label[text() = 'Informar que não receberá mais benefícios que porventura receba em conta']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[8]/label[text() = 'Informar que será efetuado cancelamento de Agendamentos']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[9]/label[text() = 'Informar que será efetuado cancelamento de Cheques Custodiados no Mobile']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[10]/label[text() = 'Informar que será efetuado cancelamento de Talões e Folhas de Cheque']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[11]/label[text() = 'Informar que será efetuado cancelamento Débitos Automáticos']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[12]/label[text() = 'Providenciar Resgate de aplicações']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[13]/label[text() = 'Providenciar Resgate de Cheques Custodiados na Agência']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[14]/label[text() = 'Providenciar saldo para baixas de Empréstimos']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[15]/label[text() = 'Verificar Depósitos Bloqueados e aguardar liberação']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[16]/label[text() = 'Verificar e informar boletos de Cobrança em aberto']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[17]/label[text() = 'Verificar matrículas vinculadas e providenciar desligamento quando necessário']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[18]/label[text() = 'Verificar saldo de Cartões Mastercard/Visa Bancoob e providenciar valor para liquidação']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[19]/label[text() = 'Verificar saldo de Cartões Unicred Visa e providenciar valor para liquidação']`)), 3000).click();
});

Then ('Gerar Template', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Template Gerado"))), 30000).click();
}); 

Then ('Desabilitar a Assinatura Digital para gerar Template', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#AssinadoDigitalmente > div.custom-control.custom-switch > label"))), 30000).click();
});

Given ('Estamos localizados na atividade Coletar Assinatura nos Templates Gerados', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Coletar Assinatura nos Templates Gerados']`)), 60000);  
});

When ('Validar o template Solicitacao Demissao Pagamentos', async() => {
    //Clica no botão para abrir arquivo
    await driver.wait(until.elementLocated(By.css("#div36673 > a:nth-child(1) > button")), 3000).click()
    await driver.sleep(3000);
    
    //Verifica se Arquivo já está criado 
    let naoencontra = await driver.wait(until.elementLocated(By.css("head > title")),3000).getText();

    while (naoencontra == "") 
    {
        await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
        await driver.wait(until.elementLocated(By.css("#div36673 > a:nth-child(1) > button")), 3000).click()
        await driver.sleep(3000);
        naoencontra = await driver.wait(until.elementLocated(By.css("head > title")),3000).getText();
    }  

    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/TemplateSolicitacaoDemissaoPagamentos.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
    
});












