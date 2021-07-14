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
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-cooperativa > div > select > option:nth-child(28)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys(Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys("02957634180");
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
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-0"))), 30000).click();
}); 

When ('Selecionar Quero Gerar o Template do INTEGRA', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-termos > div > select"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-termos > div > select > option:nth-child(3)"))), 30000).click();
});

Then ('Deve habilitar a flag de Documentos serão Assinados Digitalmente', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-assinaturaDigital"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39153"))), 3000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39154"))), 3000).sendKeys("teste@teste.com.br");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39155"))), 3000).sendKeys("41996669512");

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
    assert.strictEqual(nomeFavorecido, "FERNANDO PAES DA SILVA");
    let cpfCnpjFavorecido = await driver.wait(until.elementLocated(By.css("#div-cpfCnpjFavorecido > div > input")), 3000).getAttribute("value");
    assert.strictEqual(cpfCnpjFavorecido, "02957634180");
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

Then ('Clicar em Gerar Template', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Template Gerado"))), 300000).click();
    await driver.sleep(3000);
}); 

Then ('Selecionar Contexto Conta Salário', async() => {
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-3"))), 30000).click();
});

Then ('Preencher as Informações da Solicitação Conta Salário e pesquisar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38632"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-cooperativa > div > select > option:nth-child(5)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys(Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38633"))), 30000).sendKeys("03280331030");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-cpfCnpj"))), 30000).click();
}); 

Given ('O usuário preencheu as informações do cooperado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38635"))), 30000).sendKeys("120");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38638"))), 30000).sendKeys("5687");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp38636"))), 30000).sendKeys("21/12/2020");
});

Given ('O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Encaminhar Documento ao Cooperado no DocuSign']`)), 60000);  
});

Then ('Validar o Template Conta Salário', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateContaSalario > div > input[type=hidden]")), 3000);
    await driver.sleep(180000);
    await driver.wait(until.elementLocated(By.css("#div38662 > a:nth-child(1) > button")), 3000).click();
    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    await driver.sleep(2000);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/Encerramento de Conta/TemplateSolicitacaoEncerramentoContaSalario.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
}); 

Then ('Selecionar Contexto Conta Individual', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.id("contexto-1")), 30000).click();
});

Then ('Validar o Template Conta', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateEncerramentoConta > div > input[type=hidden]")), 3000);
    await driver.sleep(180000);
    await driver.wait(until.elementLocated(By.css("#div38663 > a:nth-child(1) > button")), 3000).click();
    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    await driver.sleep(2000);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/Encerramento de Conta/TemplateSolicitacaoEncerramentoConta.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
}); 

Then ('Validar o Template Pagamento Imediato', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateDemissaoPagamentoImediato > div > input[type=hidden]")), 3000);
    await driver.sleep(180000);
    await driver.wait(until.elementLocated(By.css("#div38664 > a:nth-child(1) > button")), 3000).click();
    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    await driver.sleep(2000);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/Encerramento de Conta/TemplateSolicitacaoDesligamentoPagamentoAGO.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
}); 

Then ('Validar o Template Pagamento AGO', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateDemissaoAgo > div > input[type=hidden]")), 3000);
    await driver.sleep(180000);
    await driver.wait(until.elementLocated(By.css("#div38665 > a:nth-child(1) > button")), 3000).click();
    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    await driver.sleep(2000);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/Encerramento de Conta/TemplateSolicitacaoDesligamentoPagamentoAGO.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
}); 

Then ('Selecionar Contexto Eliminação', async() => {
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-1"))), 30000).click();
});

Then ('Validar o Template Eliminado', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateEliminado > div > input[type=hidden]")), 3000);
    await driver.sleep(180000);
    await driver.wait(until.elementLocated(By.css("#div38666 > a:nth-child(1) > button")), 3000).click();
    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    await driver.sleep(2000);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/Encerramento de Conta/TemplateEliminado.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
}); 

Then ('Selecionar Contexto Exclusão', async() => {
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("contexto-2"))), 30000).click();
});

Then ('Validar o Template Exclusão', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateExcluido > div > input[type=hidden]")), 3000);
    await driver.sleep(180000);
    await driver.wait(until.elementLocated(By.css("#div38667 > a:nth-child(1) > button")), 3000).click();
    //Tira Screenshot do template e eu valido Manualmente se está gerado Correto
    await driver.sleep(2000);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('C:/Unicred/Uploads/Encerramento de Conta/TemplateExclusão.png', encodedString, 'base64');
    //Fecha frame do template
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click()
}); 

When ('Anexado o termo assinado', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Clicar em Encaminhar a Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
    await driver.sleep(2000);
});

Then ('O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado [Alçada Agência]']`)), 60000);
});

Then ('Validar os dados de Desligamento', async() => {
    //cabeçalho
    let divobjetivo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38628"))), 30000).getText();
    assert.deepStrictEqual(divobjetivo, "Desligamento de Cooperado");
    let divcontexto = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38629"))), 30000).getText();
    assert.deepStrictEqual(divcontexto, "Demissão");
    let divmotivo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38630"))), 30000).getText();
    assert.deepStrictEqual(divmotivo, "Ausência de Convênio para Recebimento de Salário/Aposentadoria");
    let divcooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38632"))), 30000).getText();
    assert.deepStrictEqual(divcooperativa, "3050");
    let divcpfCnpj = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38633"))), 30000).getText();
    assert.deepStrictEqual(divcpfCnpj, "02957634180");
    //Informações do Cooperado
    let divnome = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38634"))), 30000).getText();
    assert.deepStrictEqual(divnome, "FERNANDO PAES DA SILVA");
    let divmatricula = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38635"))), 30000).getText();
    assert.deepStrictEqual(divmatricula, "25143");
    let divposto = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38638"))), 30000).getText();
    assert.deepStrictEqual(divposto, "0");
    let divadmitidoEm = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38636"))), 30000).getText();
    assert.deepStrictEqual(divadmitidoEm, "06/02/2019");
    let dividadeCooperado = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38685"))), 30000).getText();
    assert.deepStrictEqual(dividadeCooperado, "29");
    let divcontasSelecionadas = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38639"))), 30000).getText();
    assert.deepStrictEqual(divcontasSelecionadas, "900532,901326");
    //Informações de Formalização
    let divtermos = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38640"))), 30000).getText();
    //assert.deepStrictEqual(divtermos, "Já Tenho o Termo Assinado");
    //Informações do Capital
    let divformaPagamento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38642"))), 30000).getText();
    assert.deepStrictEqual(divformaPagamento, "Pagamento de Capital Imediato");
    let divhaSaldoCapitalRestituir = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38643"))), 30000).getText();
    assert.deepStrictEqual(divhaSaldoCapitalRestituir, "Sim");
    let divhaParcelamento = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38644"))), 30000).getText();
    assert.deepStrictEqual(divhaParcelamento, "Não");
    //Informações do Favorecido
    let divhaDadosFavorecido = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38646"))), 30000).getText();
    assert.deepStrictEqual(divhaDadosFavorecido, "Não");
    //Informações Complementares
    let divisEstorno = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38653"))), 30000).getText();
    assert.deepStrictEqual(divisEstorno, "Sim");
    let divisBaixa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38656"))), 30000).getText();
    assert.deepStrictEqual(divisBaixa, "Sim");
    let divisExcecao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38659"))), 30000).getText();
    assert.deepStrictEqual(divisExcecao, "Sim");
    let divvalorEstornoFormatado = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38654"))), 30000).getText();
    assert.deepStrictEqual(divvalorEstornoFormatado, "450,00");
    let divvalorBaixaFormatado = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38658"))), 30000).getText();
    assert.deepStrictEqual(divvalorBaixaFormatado, "500,00");
    let divdetalhamentoExcecao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38660"))), 30000).getText();
    assert.deepStrictEqual(divdetalhamentoExcecao, "Teste de Exceção");
    let divparecer = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38661"))), 30000).getText();
    assert.deepStrictEqual(divparecer, "Teste Automatizado Parecer");
});

Then ('Clicar em Aprovar Solicitação', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Aprovada"))), 30000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
});

Given ('O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Exceção', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado [Alçada Exceção]']`)), 60000);   
});

Given ('O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado [Alçada Estorno ou Baixa]']`)), 60000);    
});

Given ('Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Conselho', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado [Alçada Conselho]']`)), 60000);
});

Given ('Analisar Solicitação e Realizar Encerramento de Conta ou Desligamento de Cooperado', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Analisar Solicitação e Realizar Encerramento de Conta ou Desligamento de Cooperado']`)), 60000);     
});

Given ('O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado [Alçada Núcleo Estratégico]']`)), 60000);
});

Then ('Finalizar o teste e Limpar instâncias', async() => {
    const driver = global.driver;
    await driver.switchTo().defaultContent();
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 3000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#frm > div.navbar.navbar-inverse.navbar-header > div > div > div > a"))), 30000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#simulate-top-bar > div > button:nth-child(3)"))), 30000).click();
});

Then ('É possível selecionar as contas para encerrar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#contas > div:nth-child(1) > label"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#contas > div:nth-child(2) > label"))), 30000).click();
}); 

Then ('Validar os dados de Encerramento', async() => {
    //cabeçalho
    let divobjetivo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38628"))), 30000).getText();
    assert.deepStrictEqual(divobjetivo, "Encerramento de Conta");
    let divcontexto = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38629"))), 30000).getText();
    assert.deepStrictEqual(divcontexto, "Conta Individual");
    let divmotivo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38630"))), 30000).getText();
    assert.deepStrictEqual(divmotivo, "Ausência de Convênio para Recebimento de Salário/Aposentadoria");
    let divcooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38632"))), 30000).getText();
    assert.deepStrictEqual(divcooperativa, "3050");
    let divcpfCnpj = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38633"))), 30000).getText();
    assert.deepStrictEqual(divcpfCnpj, "02957634180");
    //Informações do Cooperado
    let divnome = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38634"))), 30000).getText();
    assert.deepStrictEqual(divnome, "FERNANDO PAES DA SILVA");
    let divmatricula = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38635"))), 30000).getText();
    assert.deepStrictEqual(divmatricula, "25143");
    let divposto = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38638"))), 30000).getText();
    assert.deepStrictEqual(divposto, "0");
    let divadmitidoEm = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38636"))), 30000).getText();
    assert.deepStrictEqual(divadmitidoEm, "06/02/2019");
    let dividadeCooperado = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38685"))), 30000).getText();
    assert.deepStrictEqual(dividadeCooperado, "29");
    let divcontasSelecionadas = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38639"))), 30000).getText();
    assert.deepStrictEqual(divcontasSelecionadas, "900532,901326");
    //Informações de Formalização
    let divtermos = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38640"))), 30000).getText();
    //assert.deepStrictEqual(divtermos, "Já Tenho o Termo Assinado");
    //Informações Complementares
    let divisEstorno = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38653"))), 30000).getText();
    assert.deepStrictEqual(divisEstorno, "Sim");
    let divisExcecao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38659"))), 30000).getText();
    assert.deepStrictEqual(divisExcecao, "Não");
    let divvalorEstornoFormatado = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38654"))), 30000).getText();
    assert.deepStrictEqual(divvalorEstornoFormatado, "450,00");
    let divparecer = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div38661"))), 30000).getText();
    assert.deepStrictEqual(divparecer, "Teste Automatizado Parecer");
});

Given ('O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Regularizar Pendência(s) de Solicitação de Encerramento de Conta ou Desligamento de Cooperado']`)), 60000);
}); 

When ('O usuário desmarcar a opção de Assinatura Digital', async() => {
    await drver.wait(until.elementIsVisible(driver.findElement(By.id("customSwitch-label-assinaturaDigital"))), 3000).click();
});

Given ('O usuário está na atividade Coletar Assinatura nos Templates Gerados', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() ='Coletar Assinatura nos Templates Gerados']`)), 600000);
});

When ('Anexar o termo assinado', async() => {
    const driver = global.driver;
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span > i")), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Validar o Templates', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateDemissaoPagamentoImediato > div > input[type=hidden]")), 3000);
});

Then ('Validar o Templates Encerramento', async() => {
    await driver.wait(until.elementLocated(By.css("#div-templateEncerramentoConta > div > input[type=hidden]")), 3000);
});
