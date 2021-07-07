const assert = require('assert');
const { When, Then, Given, FormatterBuilder } = require('cucumber');
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
    await driver.wait(until.elementLocated(By.id("objetivo-1")), 30000).click();
}); 

Then ('Validar Tooltip informativo sobre o desligamento e encerramento', async() => {
    let divobjetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo")), 3000).getAttribute("data-pt-title");
    assert.strictEqual(divobjetivo, "Desligamento de Cooperado: Baixa de Matrícula e Conta(s) <br> Encerramento de Conta: Exclusivamente encerramento da conta, sem baixa da matrícula e saque de capital.");
});

When ('Apresentar os Contextos', async() => {
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

Then ('Validar os Motivos apresentados estão corretos', async() => {
    let motivo1 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-1"))), 30000).getText();
    let motivo2 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-2"))), 30000).getText();
    let motivo3 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-3"))), 30000).getText();
    let motivo4 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-4"))), 30000).getText();
    let motivo5 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-5"))), 30000).getText();
    let motivo6 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-6"))), 30000).getText();
    let motivo7 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-7"))), 30000).getText();
    let motivo8 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-8"))), 30000).getText();
    let motivo9 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-9"))), 30000).getText();
    let motivo10 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-10"))), 30000).getText();
    let motivo11 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-11"))), 30000).getText();
    let motivo12 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-12"))), 30000).getText();
    let motivo13 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-13"))), 30000).getText();
    let motivo14 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-14"))), 30000).getText();
    let motivo15 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-15"))), 30000).getText();
    let motivo16 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-16"))), 30000).getText();

    assert.deepStrictEqual(motivo1, "Ausência de Convênio para Recebimento de Salário/Aposentadoria");
    assert.deepStrictEqual(motivo2, "Baixa de CNPJ");
    assert.deepStrictEqual(motivo3, "Cooperado Desenquadrado");
    assert.deepStrictEqual(motivo4, "Desinteresse");
    assert.deepStrictEqual(motivo5, "Eliminação por Dívida");
    assert.deepStrictEqual(motivo6, "Ex-colaborador");
    assert.deepStrictEqual(motivo7, "Falecimento");
    assert.deepStrictEqual(motivo8, "Fim de Convênio Conta-Salário");
    assert.deepStrictEqual(motivo9, "Insatisfação com a Cooperativa");
    assert.deepStrictEqual(motivo10, "Liquidação de Dívida");
    assert.deepStrictEqual(motivo11, "Movimenta em outra IF");
    assert.deepStrictEqual(motivo12, "Mudança de Cidade");
    assert.deepStrictEqual(motivo13, "Operação de Crédito Não Aprovada");
    assert.deepStrictEqual(motivo14, "Outros");
    assert.deepStrictEqual(motivo15, "Prejuízo");
    assert.deepStrictEqual(motivo16, "Salário/Aposentadoria");
});

Given ('O usuário selecionou Encerramento de Conta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("objetivo-2"))), 30000).click();
}); 

Then ('Validar os contextos apresentados para o Encerramento de Conta', async() => {
    await driver.sleep(2000);
    let obj0 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).getText();
    let obj1 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-1"))), 30000).getText();
    let obj2 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-2"))), 30000).getText();
    let obj3 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-3"))), 30000).getText();
    assert.deepStrictEqual(obj0, "Conta Conjunta");
    assert.deepStrictEqual(obj1, "Conta Individual");
    assert.deepStrictEqual(obj2, "Conta Menor de Idade");
    assert.deepStrictEqual(obj3, "Conta Salário");
});

When ('Selecionar o Contexto Falecimento', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-3"))), 30000).click();
});

Then ('Deve ser auto selecionado o Motivo Falecimento e ser Obrigatório anexar o Atestado de Óbito', async() => {
    let falecimento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-7"))), 30000).getAttribute("class");
    assert.deepStrictEqual(falecimento, "list-group-item list-group-item-action  active");
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span")), 3000);
}); 

Given ('O usuário selecionou o Contexto Demissão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).click();
});

When ('Selecionar um motivo Outros', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-14"))), 30000).click();
});

Then ('Deve habilitar o campo para preenchimento de OUTRO MOTIVO', async() => {
    let outromotivo = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-outroMotivo > div > input"))), 3000).getAttribute("required");
    assert.deepStrictEqual(outromotivo, "true");
}); 

Given ('O usuário Selecionou o Contexto Demissão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).click();
});

When ('Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("motivo-1"))), 30000).click();
}); 

Then ('Selecionar Contexto Conta Conjunta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).click();
});

Then ('Preencher as Informações da Solicitação e pesquisar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38632"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-cooperativa > div > select > option:nth-child(5)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys(Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys("00317923080");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-cpfCnpj"))), 30000).click();
}); 

When ('Possuir mais de uma conta atividade', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-contasSelecionadas > div > label"))), 30000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#contas > div:nth-child(1) > label"))), 30000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#contas > div:nth-child(2) > label"))), 30000);
});

Then ('É possível selecionar a conta em que desejar encerrar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#contas > div:nth-child(2)"))), 30000).click();
}); 

Given ('O usuário selecionou o Termo - Já Tenho o Termo Assinado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-termos > div > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-termos > div > select > option:nth-child(2)"))), 30000).click();
}); 

Then ('Deve ser Obrigatório anexar o Termo Assinado para Encerramento de Conta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span"))), 3000);
}); 

Then ('Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span"))), 3000);
}); 

Then ('Selecionar Contexto Demissão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).click();
}); 

When ('Selecionar Quero Gerar o Template do INTEGRA', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-termos > div > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-termos > div > select > option:nth-child(3)"))), 30000).click();
});

Then ('Deve habilitar a flag de Documentos serão Assinados Digitalmente', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-assinaturaDigital"))), 3000).click();
}); 

Given ('O usuário selecionou a Forma de pagamento - Pagamento Capital Imediado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-formaPagamento > div > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-formaPagamento > div > select > option:nth-child(3)"))), 30000).click();
}); 

Then ('Deve ser selecionado a Flag - Possuí exceção e habilitar o campo para preenchimento da exceção', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-detalhamentoExcecao > div > label"))), 30000);
    await driver.wait(until.elementLocated(By.css("#div-detalhamentoExcecao > div > textarea")), 3000).sendKeys("Teste de Exceção");
}); 

When ('Desmarcar a opção - Há Dados de Favorecido', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-haDadosFavorecido")), 3000).click(); 
});

Then ('Deve mostrar um alert com informações de saldo a restituir', async() => {
    let alert = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#alert-haDadosFavorecido > div"))), 3000).getText();
    assert.deepStrictEqual(alert, "Atenção: Selecionando “Não” você está informando que não há saldo a restituir ou que no momento você não possui os dados para transferência do capital. Desta forma, exceto para Falecidos, o fluxo não seguirá para pagamento do capital a restituir. Caso posteriormente tenha algum valor a ser restituído, este deverá ser solicitado a parte via demanda específica no Portal de Demandas.");
});

When ('Marcar a opção - Há Dados de Favorecido', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-haDadosFavorecido")), 3000).click(); 
});

When ('Marcar a opção - É mesma titularidade', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-mesmaTitularidade")), 3000).click(); 
});

Then ('Deve preencher o nome e CNPJ-CPF Favorecido', async() => {
    let nomeFavorecido = await driver.wait(until.elementLocated(By.css("#div-nomeFavorecido > div > input")), 3000).getAttribute("value");
    assert.strictEqual(nomeFavorecido, "CAROLINE BERG DA CUNHA");
    let cpfCnpjFavorecido = await driver.wait(until.elementLocated(By.css("#div-cpfCnpjFavorecido > div > input")), 3000).getAttribute("value");
    assert.strictEqual(cpfCnpjFavorecido, "00317923080");
    await driver.wait(until.elementLocated(By.css("#div-bancoFavorecido > div > input")), 3000).sendKeys("123");
    await driver.wait(until.elementLocated(By.css("#div-agenciaFavorecido > div > input")), 3000).sendKeys("4567");
    await driver.wait(until.elementLocated(By.css("#div-contaFavorecido > div > input")), 3000).sendKeys("8901");
});

Then ('Desmarcar a exceção', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-isExcecao")), 3000).click();
});


Given ('O usuário selecionou Há Parcelamento', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-haParcelamento")), 3000).click();
});

When ('o campo do Parcelamento estiver visível', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-parcelamento > div > select"))), 3000).click();
});

Then ('Selecionar o Parcelamento de 12x', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-parcelamento > div > select > option:nth-child(13)"))), 3000).click();
});

Given ('o Usuário selecionou Estorno de Juros, IOF e Tarifas', async() => {
    await driver.wait(until.elementLocated(By.id("customSwitch-label-isEstorno")), 3000).click();
});

When ('ficar visível o campo Valor Estorno', async() => {
    await driver.wait(until.elementLocated(By.css("#div-valorEstornoFormatado > div > input")), 3000);
});

Then ('preencher o valor do Estorno', async() => {
    await driver.wait(until.elementLocated(By.css("#div-valorEstornoFormatado > div > input")), 3000).sendKeys("45000");
});

Given ('o Usuário selecionou Haverá baixa de capital para liquidação de valores em aberto', async() =>{
    await driver.wait(until.elementLocated(By.id("customSwitch-label-isBaixa")), 3000).click();
});

When ('ficar visível o campo Valor Baixa', async() => {
    await driver.wait(until.elementLocated(By.css("#div-valorBaixaFormatado > div > input")), 3000);
});

Then ('Preencher o valor da Baixa', async() => {
    await driver.wait(until.elementLocated(By.css("#div-valorBaixaFormatado > div > input")), 3000).sendKeys("50000");
});

When ('Preencher o Parecer', async() => {
    await driver.wait(until.elementLocated(By.css("#div-parecer > div > textarea")), 3000).sendKeys("Teste Automatizado Parecer");
});

Then ('Validar se o CheckList está presente e correto', async() => {
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
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[15]/label[text() = 'Solicitar descadastramento de chaves PIX no Unicred Mobile']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[16]/label[text() = 'Verificar Depósitos Bloqueados e aguardar liberação']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[17]/label[text() = 'Verificar e informar boletos de Cobrança em aberto']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[18]/label[text() = 'Verificar matrículas vinculadas e providenciar desligamento quando necessário']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[19]/label[text() = 'Verificar saldo de Cartões Mastercard/Visa Bancoob e providenciar valor para liquidação']`)), 3000).click();
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="checklist"]/div[20]/label[text() = 'Verificar saldo de Cartões Unicred Visa e providenciar valor para liquidação']`)), 3000).click();
}); 

Then ('Clicar em Cancelar para encerrar o teste de Formulário', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Cancelada")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
});
