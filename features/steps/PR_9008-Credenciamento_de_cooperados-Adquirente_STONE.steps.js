const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Deve Iniciar Solicitação de Credenciamento Stone', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Credenciamento Stone']`)), 60000);  
});

Given ('O usuário selecionou a cooperativa', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp28582"))), 3000).click();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-cooperativa > div > select > option:nth-child(14)"))), 3000).click();
});

When ('inserir um CNPJ e pesquisar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp28566"))), 3000).sendKeys("41626778000198");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("buscarDados"))), 3000).click();
}); 

Then ('Deve apresentar os dados corretamente', async() => {
    await driver.sleep(2000);
    //VERIFICA O NOME 
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp28554"))), 30000);
    let nome = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-gerais"]/div/div[1]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(nome, "TALITA GONCALVES MORAIS LTDA");
    // VERIFICA NOME FANTASIA 
    let nomeFantasia = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-gerais"]/div/div[2]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(nomeFantasia, "TALITA GONCALVES MORAI");
    //VERIFICA EMAIL CONTA 
    let emailConta = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-gerais"]/div/div[3]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(emailConta, "moraisgtalita@gmail.com");
    //VERIFICA CNAE
    let cnae = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-gerais"]/div/div[4]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(cnae, "5620104");
    //VERIFICA MCC
    let mcc = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-gerais"]/div/div[5]/div/select')), 3000).getAttribute("value");
    assert.deepStrictEqual(mcc, "5812");
    //VERIFICA NOME DO CONTATO
    let nomeContato = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-contato"]/div/div[2]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(nomeContato, "TALITA");
    //VERIFICA CELULAR DO CONTATO
    let celularContato = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-contato"]/div/div[3]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(celularContato, "55999999101");
    //VERIFICA TELEFONE DO CONTATO
    let telefoneContato = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-contato"]/div/div[4]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(telefoneContato, "55999999101");
    //VERIFICA EMAIL DO CONTATO
    let emailContato = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-contato"]/div/div[5]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(emailContato, "moraisgtalita@gmail.com");
    //VERIFICA CEP 
    let cepCooperado = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-endereco"]/div[1]/div[2]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(cepCooperado, "97300212");
    //VERIFICA LOGRADOURO 
    let logradouro = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-endereco"]/div[1]/div[3]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(logradouro, "RUA CELESTINO CAVALHEIRO");
    //VERIFICA NUMERO 
    let numeroCooperado = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-endereco"]/div[1]/div[4]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(numeroCooperado, "349");
    //VERIFICA Complemento 
    let complemento = await driver.wait(until.elementLocated(By.xpath('//*[@id="infos-endereco"]/div[1]/div[5]/div/input')), 3000).getAttribute("value");
    assert.deepStrictEqual(complemento, "COMERCIAL 02");
});

Given ('O usuário clicou em Deseja informar outro endereço para instalação', async() => {
    await driver.wait(until.elementLocated(By.css("#switch-endereco-instalacao > div > div > label")), 3000).click();
});

When ('Os campos forem carregados', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("section-endereco-instalacao"))), 3000);
});

Then ('Deve preencher os dados de endereço', async() => {
    await driver.wait(until.elementLocated(By.name("inp28547")), 3000).sendKeys("81270010");
    await driver.wait(until.elementLocated(By.name("inp28548")), 3000).sendKeys("Rua do Teste Automatizado");
    await driver.wait(until.elementLocated(By.name("inp28549")), 3000).sendKeys("5501");
    await driver.wait(until.elementLocated(By.name("inp28551")), 3000).sendKeys("Complemento do Teste Automatizado");
    await driver.wait(until.elementLocated(By.name("inp28627")), 3000).sendKeys("Bairro do Teste Automatizado");
    await driver.wait(until.elementLocated(By.name("inp28628")), 3000).sendKeys("Cidade do Teste Automatizado");
    await driver.wait(until.elementLocated(By.name("inp28550")), 3000).sendKeys("Estado do Teste Automatizado");
});

Then ('Preencher Informações Bancárias', async() => {
    await driver.wait(until.elementLocated(By.name("inp28565")), 3000).sendKeys("2259");
    await driver.wait(until.elementLocated(By.name("inp28618")), 3000).sendKeys("6");
}); 

Given ('O usuário preencheu a condição', async() => {
    await driver.wait(until.elementLocated(By.xpath('//*[@id="rangeFaturamentoInput"]')), 3000).click();
    await driver.wait(until.elementLocated(By.id('customSwitch-label-ravAutomatica')), 3000).click();
});

When ('Clicar em Gerar Proposta', async() => {
    await driver.wait(until.elementLocated(By.id("gerar-proposta")), 3000).click();
}); 

Then ('Deve retornar as Proposta', async() => {
    await driver.sleep(2000);
    let propostaUm = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="btn-oferta-65"]'))), 30000).getText();
    assert.deepStrictEqual(propostaUm, "RAMO BARES E RESTAURANTES PADRÃO R$ 100.000,00 - R$ 200.000,00");
    let propostaDois = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-oferta-71"))), 30000).getText();
    assert.deepStrictEqual(propostaDois, "RAMO BARES E RESTAURANTES ESPECIAL R$ 100.000,00 - R$ 200.000,00");
    let propostaTres = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-oferta-215"))), 3000).getText();
    assert.deepStrictEqual(propostaTres, "RAMO BARES E RESTAURANTES EXCLUSIVA R$ 100.000,00 - R$ 200.000,00");
}); 

Given ('Clicar na primeira proposta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-oferta-65"))), 3000).click();
}); 

Then ('Validar as Taxas para a primeira proposta', async() => {
    //RAV
    let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[1]/div[1]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(RAV, "1.74");
    let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[1]/div[2]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(RAVPontual, "2.24");
    //DÉBITO A VISTA 
    let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaDeb, "1.35");
    let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterDeb, "1.35");
    let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloDeb, "1.93");
    let distDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distDeb, "25");
    //CRÉDITO Á VISTA
    let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCred, "2.32");
    let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCred, "2.32");
    let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCred, "2.87");
    let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCred, "2.32");
    let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCred, "2.98");
    let distCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCred, "25");
    //CRÉDITO 2 a 6 PARC. S/JUROS
    let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCredSjuros, "2.72");
    let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCredSjuros, "2.72");
    let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCredSjuros, "3.43");
    let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCredSjuros, "3.19");
    let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCredSjuros, "3.67");
    let distCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCredSjuros, "25");
    //CRÉDITO 7 a 12 PARC. S/JUROS
    let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCredSjuross, "2.86");
    let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCredSjuross, "2.86");
    let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCredSjuross, "3.48");
    let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCredSjuross, "3.55");
    let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCredSjuross, "3.95");
    let distCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCredSjuross, "25");
});

Given ('Clicar na segunda proposta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-oferta-71"))), 3000).click();
}); 

Then ('Validar as Taxas para a segunda proposta', async() => {
    //RAV
    let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[1]/div[1]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(RAV, "1.59");
    let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[1]/div[2]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(RAVPontual, "2.09");
    //DÉBITO A VISTA 
    let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaDeb, "1.20");
    let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterDeb, "1.20");
    let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloDeb, "1.80");
    let distDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distDeb, "25");
    //CRÉDITO Á VISTA
    let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCred, "2.20");
    let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCred, "2.20");
    let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCred, "2.72");
    let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCred, "2.20");
    let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCred, "2.85");
    let distCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCred, "25");
    //CRÉDITO 2 a 6 PARC. S/JUROS
    let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCredSjuros, "2.62");
    let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCredSjuros, "2.62");
    let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCredSjuros, "3.28");
    let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCredSjuros, "3.04");
    let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCredSjuros, "3.54");
    let distCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCredSjuros, "25");
    //CRÉDITO 7 a 12 PARC. S/JUROS
    let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCredSjuross, "2.76");
    let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCredSjuross, "2.76");
    let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCredSjuross, "3.33");
    let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCredSjuross, "3.40");
    let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCredSjuross, "3.82");
    let distCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCredSjuross, "25");
});

Given ('Clicar na terceira proposta', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btn-oferta-215"))), 3000).click();
}); 

Then ('Validar as Taxas para a teceira proposta', async() => {
    //RAV
    let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[1]/div[1]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(RAV, "1.49");
    let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[1]/div[2]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(RAVPontual, "1.99");
    //DÉBITO A VISTA 
    let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaDeb, "1.20");
    let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterDeb, "1.20");
    let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloDeb, "1.80");
    let distDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[1]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distDeb, "25");
    //CRÉDITO Á VISTA
    let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCred, "2.20");
    let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCred, "2.20");
    let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCred, "2.72");
    let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCred, "2.20");
    let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCred, "2.85");
    let distCred = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[2]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCred, "25");
    //CRÉDITO 2 a 6 PARC. S/JUROS
    let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCredSjuros, "2.62");
    let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCredSjuros, "2.62");
    let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCredSjuros, "3.28");
    let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCredSjuros, "3.04");
    let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCredSjuros, "3.54");
    let distCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[3]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCredSjuros, "25");
    //CRÉDITO 7 a 12 PARC. S/JUROS
    let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[2]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(visaCredSjuross, "2.76");
    let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[3]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(masterCredSjuross, "2.76");
    let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[4]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(amexCredSjuross, "3.33");
    let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[5]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(hiperCredSjuross, "3.40");
    let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[6]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(eloCredSjuross, "3.82");
    let distCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="taxas"]/div[2]/table/tbody/tr[4]/td[9]/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(distCredSjuross, "25");
});

When ('Apresentar os campos TEF e POS', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#meios-captura"))), 30000);
});

Then ('Deve preencher os campos referentes', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp28579"))), 30000).sendKeys("3");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp28581"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#meios-captura > div:nth-child(6) > div:nth-child(2) > div > select > option:nth-child(2)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp28619"))), 30000).sendKeys("3");
});

Given ('Os dados de TEF POS foram válidados', async() => {
    let mesesIsen = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="meios-captura"]/div[1]/div[2]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(mesesIsen, "4");
    let valorAlug = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="meios-captura"]/div[1]/div[3]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(valorAlug, "17.00");
    let tipoCon = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="meios-captura"]/div[2]/div[1]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(tipoCon, "Wifi");
    let mesesIsencao = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="meios-captura"]/div[2]/div[4]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(mesesIsencao, "4");
    let valorAluguel = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="meios-captura"]/div[2]/div[5]/div/input'))), 3000).getAttribute("value");
    assert.deepStrictEqual(valorAluguel, "60.00");   
});

Then ('Encaminhar Solicitação', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 3000).click();
}); 

Given ('O usuário esta localizado em Aguardar Análise da Solicitação de Domicílio Bancário STONE', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Aguardar Análise da Solicitação de Domicílio Bancário STONE']`)), 60000);  
});

When ('Validar os dados de Credenciamento', async() => {
    let cooperativa = await driver.wait(until.elementLocated(By.id("div28582")), 3000).getText();
    assert.deepStrictEqual(cooperativa, "0205");
    let cpfcnpj = await driver.wait(until.elementLocated(By.id("div28566")), 3000).getText();
    assert.deepStrictEqual(cpfcnpj, "41626778000198");
    //INFORMAÇÕES DE COOPERADO 
    let nomerazaosocial = await driver.wait(until.elementLocated(By.id("div28554")), 3000).getText();
    assert.deepStrictEqual(nomerazaosocial, "TALITA GONCALVES MORAIS LTDA");
    let nome = await driver.wait(until.elementLocated(By.id("div28567")), 3000).getText();
    assert.deepStrictEqual(nome, "TALITA GONCALVES MORAI");
    let email = await driver.wait(until.elementLocated(By.id("div28568")), 3000).getText();
    assert.deepStrictEqual(email, "moraisgtalita@gmail.com");
    let cnae = await driver.wait(until.elementLocated(By.id("div28603")), 3000).getText();
    assert.deepStrictEqual(cnae, "5620104");
    let mcc = await driver.wait(until.elementLocated(By.id("div28569")), 3000).getText();
    assert.deepStrictEqual(mcc, "5812");
    //CONTATO ADMINISTRATIVO 
    let administrativo = await driver.wait(until.elementLocated(By.id("div28574")), 3000).getText();
    assert.deepStrictEqual(administrativo, "Administrativo");
    let nomeContato = await driver.wait(until.elementLocated(By.id("div28615")), 3000).getText();
    assert.deepStrictEqual(nomeContato, "TALITA");
    let celularContato = await driver.wait(until.elementLocated(By.id("div28555")), 3000).getText();
    assert.deepStrictEqual(celularContato, "55999999101");
    let telefoneContato = await driver.wait(until.elementLocated(By.id("div28575")), 3000).getText();
    assert.deepStrictEqual(telefoneContato, "55999999101");
    let emailContato = await driver.wait(until.elementLocated(By.id("div28616")), 3000).getText();
    assert.deepStrictEqual(emailContato, "moraisgtalita@gmail.com");
    //ENDEREÇO
    let tipoEndereco = await driver.wait(until.elementLocated(By.id("div28545")), 3000).getText();
    assert.deepStrictEqual(tipoEndereco, "Principal");
    let cep = await driver.wait(until.elementLocated(By.id("div28556")), 3000).getText();
    assert.deepStrictEqual(cep, "97300212");
    let endereco = await driver.wait(until.elementLocated(By.id("div28576")), 3000).getText();
    assert.deepStrictEqual(endereco, "RUA CELESTINO CAVALHEIRO");
    let numero = await driver.wait(until.elementLocated(By.id("div28557")), 3000).getText();
    assert.deepStrictEqual(numero, "349");
    let bairro = await driver.wait(until.elementLocated(By.id("div28577")), 3000).getText();
    assert.deepStrictEqual(bairro, "CENTRO");
    let cidade = await driver.wait(until.elementLocated(By.id("div28617")), 3000).getText();
    assert.deepStrictEqual(cidade, "São Gabriel");
    let estado = await driver.wait(until.elementLocated(By.id("div28558")), 3000).getText();
    assert.deepStrictEqual(estado, "RS");
    //INFORMAÇÕES BANCÁRIAS 
    let banco = await driver.wait(until.elementLocated(By.id("div28564")), 3000).getText();
    assert.deepStrictEqual(banco, "136 - CONFEDERACAO NACIONAL DAS COOPERATIVAS CENTRAIS UNICREDS");
    let tipoConta = await driver.wait(until.elementLocated(By.id("div28600")), 3000).getText();
    assert.deepStrictEqual(tipoConta, "Conta Corrente");
    let agencia = await driver.wait(until.elementLocated(By.id("div28565")), 3000).getText();
    assert.deepStrictEqual(agencia, "2259");
    let digitoagencia = await driver.wait(until.elementLocated(By.id("div28618")), 3000).getText();
    assert.deepStrictEqual(digitoagencia, "6");
    let numeroConta = await driver.wait(until.elementLocated(By.id("div28601")), 3000).getText();
    assert.deepStrictEqual(numeroConta, "5454719");
    //Condições 
    let faturamento = await driver.wait(until.elementLocated(By.id("div28583")), 3000).getText();
    assert.deepStrictEqual(faturamento, "150000");
    let rav = await driver.wait(until.elementLocated(By.id("div37039")), 3000).getText();
    assert.deepStrictEqual(rav, "Sim");
    
    //VALORES
     //RAV
     let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28578"))), 3000).getText();
     assert.deepStrictEqual(RAV, "1.49");
     let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28563"))), 3000).getText();
     assert.deepStrictEqual(RAVPontual, "1.99");
     //DÉBITO A VISTA 
     let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28598"))), 3000).getText();
     assert.deepStrictEqual(visaDeb, "1.20");
     let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28625"))), 3000).getText();
     assert.deepStrictEqual(masterDeb, "1.20");
     let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28594"))), 3000).getText();
     assert.deepStrictEqual(eloDeb, "1.80");
     let distDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28596"))), 3000).getText();
     assert.deepStrictEqual(distDeb, "25");
     //CRÉDITO Á VISTA
     let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28620"))), 3000).getText();
     assert.deepStrictEqual(visaCred, "2.20");
     let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28552"))), 3000).getText();
     assert.deepStrictEqual(masterCred, "2.20");
     let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28597"))), 3000).getText();
     assert.deepStrictEqual(amexCred, "2.72");
     let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28553"))), 3000).getText();
     assert.deepStrictEqual(hiperCred, "2.20");
     let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28584"))), 3000).getText();
     assert.deepStrictEqual(eloCred, "2.85");
     let distCred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28612"))), 3000).getText();
     assert.deepStrictEqual(distCred, "25");
     //CRÉDITO 2 a 6 PARC. S/JUROS
     let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28622"))), 3000).getText();
     assert.deepStrictEqual(visaCredSjuros, "2.62");
     let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28607"))), 3000).getText();
     assert.deepStrictEqual(masterCredSjuros, "2.62");
     let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28585"))), 3000).getText();
     assert.deepStrictEqual(amexCredSjuros, "3.28");
     let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28608"))), 3000).getText();
     assert.deepStrictEqual(hiperCredSjuros, "3.04");
     let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28586"))), 3000).getText();
     assert.deepStrictEqual(eloCredSjuros, "3.54");
     let distCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28588"))), 3000).getText();
     assert.deepStrictEqual(distCredSjuros, "25");
     //CRÉDITO 7 a 12 PARC. S/JUROS
     let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28590"))), 3000).getText();
     assert.deepStrictEqual(visaCredSjuross, "2.76");
     let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28591"))), 3000).getText();
     assert.deepStrictEqual(masterCredSjuross, "2.76");
     let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28544"))), 3000).getText();
     assert.deepStrictEqual(amexCredSjuross, "3.33");
     let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28623"))), 3000).getText();
     assert.deepStrictEqual(hiperCredSjuross, "3.40");
     let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28624"))), 3000).getText();
     assert.deepStrictEqual(eloCredSjuross, "3.82");
     let distCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28593"))), 3000).getText();
     assert.deepStrictEqual(distCredSjuross, "25");
    
    //TEF 
    let pinpads = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28579"))), 3000).getText();
    assert.deepStrictEqual(pinpads, "3");
    let isencao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28606"))), 3000).getText();
    assert.deepStrictEqual(isencao, "4");
    let aluguel = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28605"))), 3000).getText();
    assert.deepStrictEqual(aluguel, "17.00");
    //POS
    let tipoConexao = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28580"))), 3000).getText();
    assert.deepStrictEqual(tipoConexao, "Wifi");
    let quantidade = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28619"))), 3000).getText();
    assert.deepStrictEqual(quantidade, "3");
    let mesesIsencao2 = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28609"))), 3000).getText();
    assert.deepStrictEqual(mesesIsencao2, "4");
    let valores = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div28589"))), 3000).getText();
    assert.deepStrictEqual(valores, "60.00");
});

Then ('Finalizar teste', async() => {
    const driver = global.driver;
    await driver.switchTo().defaultContent();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#frm > div.navbar.navbar-inverse.navbar-header > div > div > div > a"))), 30000);
});

Given ('O usuário clicou em Simulador de Taxas', async() => {
    await driver.wait(until.elementLocated(By.css("#frm > div.title > h1 > button")), 3000).click();
}); 

When ('Preencher o CNAE e o Faturamento Estimado em Cartão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("input-cnae-simulador"))), 30000).sendKeys("5620104");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("input-faturamento-simulador"))), 30000).sendKeys("150000");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("simular"))), 30000).click();
}); 

Then ('Validar as Taxas para a primeira proposta do simulador', async() => {
    //RAV
    let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(1) > div > p"))), 3000).getText();
    assert.deepStrictEqual(RAV, "1.74");
    let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(2) > div > p"))), 3000).getText();
    assert.deepStrictEqual(RAVPontual, "2.24");
    let aluguel = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(3) > div > p"))), 3000).getText();
    assert.deepStrictEqual(aluguel, "55.00");
    let isencao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(4) > div > p"))), 3000).getText();
    assert.deepStrictEqual(isencao, "2");
    let aluguelTEF = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(5) > div > p"))), 3000).getText();
    assert.deepStrictEqual(aluguelTEF, "17.00");
    let isencaoTEF = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(6) > div > p"))), 3000).getText();
    assert.deepStrictEqual(isencaoTEF, "2");
    //DÉBITO A VISTA 
    let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaVisa"))), 3000).getText();
    assert.deepStrictEqual(visaDeb, "1.35");
    let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaMaster"))), 3000).getText();
    assert.deepStrictEqual(masterDeb, "1.35");
    let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaElo"))), 3000).getText();
    assert.deepStrictEqual(eloDeb, "1.93");
    //CRÉDITO Á VISTA
    let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaVisa"))), 3000).getText();
    assert.deepStrictEqual(visaCred, "2.32");
    let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaMaster"))), 3000).getText();
    assert.deepStrictEqual(masterCred, "2.32");
    let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaAmex"))), 3000).getText();
    assert.deepStrictEqual(amexCred, "2.87");
    let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaHiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCred, "2.32");
    let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaElo"))), 3000).getText();
    assert.deepStrictEqual(eloCred, "2.98");
    //CRÉDITO 2 a 6 PARC. S/JUROS
    let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Visa"))), 3000).getText();
    assert.deepStrictEqual(visaCredSjuros, "2.72");
    let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Master"))), 3000).getText();
    assert.deepStrictEqual(masterCredSjuros, "2.72");
    let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Amex"))), 3000).getText();
    assert.deepStrictEqual(amexCredSjuros, "3.43");
    let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Hiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCredSjuros, "3.19");
    let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Elo"))), 3000).getText();
    assert.deepStrictEqual(eloCredSjuros, "3.67");
    //CRÉDITO 7 a 12 PARC. S/JUROS
    let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Visa"))), 3000).getText();
    assert.deepStrictEqual(visaCredSjuross, "2.86");
    let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Master"))), 3000).getText();
    assert.deepStrictEqual(masterCredSjuross, "2.86");
    let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Amex"))), 3000).getText();
    assert.deepStrictEqual(amexCredSjuross, "3.48");
    let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Hiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCredSjuross, "3.55");
    let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Elo"))), 3000).getText();
    assert.deepStrictEqual(eloCredSjuross, "3.95");
});

Then ('Validar as Taxas para a segunda proposta do simulador', async() => {
    //RAV
    let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(1) > div > p"))), 3000).getText();
    assert.deepStrictEqual(RAV, "1.59");
    let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(2) > div > p"))), 3000).getText();
    assert.deepStrictEqual(RAVPontual, "2.09");
    let aluguel = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(3) > div > p"))), 3000).getText();
    assert.deepStrictEqual(aluguel, "60.00");
    let isencao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(4) > div > p"))), 3000).getText();
    assert.deepStrictEqual(isencao, "4");
    let aluguelTEF = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(5) > div > p"))), 3000).getText();
    assert.deepStrictEqual(aluguelTEF, "17.00");
    let isencaoTEF = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(6) > div > p"))), 3000).getText();
    assert.deepStrictEqual(isencaoTEF, "4");
    //DÉBITO A VISTA 
    let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaVisa"))), 3000).getText();
    assert.deepStrictEqual(visaDeb, "1.20");
    let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaMaster"))), 3000).getText();
    assert.deepStrictEqual(masterDeb, "1.20");
    let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaElo"))), 3000).getText();
    assert.deepStrictEqual(eloDeb, "1.80");
    //CRÉDITO Á VISTA
    let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaVisa"))), 3000).getText();
    assert.deepStrictEqual(visaCred, "2.20");
    let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaMaster"))), 3000).getText();
    assert.deepStrictEqual(masterCred, "2.20");
    let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaAmex"))), 3000).getText();
    assert.deepStrictEqual(amexCred, "2.72");
    let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaHiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCred, "2.20");
    let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaElo"))), 3000).getText();
    assert.deepStrictEqual(eloCred, "2.85");
    //CRÉDITO 2 a 6 PARC. S/JUROS
    let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Visa"))), 3000).getText();
    assert.deepStrictEqual(visaCredSjuros, "2.62");
    let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Master"))), 3000).getText();
    assert.deepStrictEqual(masterCredSjuros, "2.62");
    let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Amex"))), 3000).getText();
    assert.deepStrictEqual(amexCredSjuros, "3.28");
    let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Hiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCredSjuros, "3.04");
    let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Elo"))), 3000).getText();
    assert.deepStrictEqual(eloCredSjuros, "3.54");
    //CRÉDITO 7 a 12 PARC. S/JUROS
    let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Visa"))), 3000).getText();
    assert.deepStrictEqual(visaCredSjuross, "2.76");
    let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Master"))), 3000).getText();
    assert.deepStrictEqual(masterCredSjuross, "2.76");
    let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Amex"))), 3000).getText();
    assert.deepStrictEqual(amexCredSjuross, "3.33");
    let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Hiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCredSjuross, "3.40");
    let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Elo"))), 3000).getText();
    assert.deepStrictEqual(eloCredSjuross, "3.82");
});

Then ('Validar as Taxas para a terceira proposta do simulador', async() => {
    //RAV
    let RAV = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(1) > div > p"))), 3000).getText();
    assert.deepStrictEqual(RAV, "1.49");
    let RAVPontual = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(2) > div > p"))), 3000).getText();
    assert.deepStrictEqual(RAVPontual, "1.99");
    let aluguel = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(3) > div > p"))), 3000).getText();
    assert.deepStrictEqual(aluguel, "60.00");
    let isencao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(4) > div > p"))), 3000).getText();
    assert.deepStrictEqual(isencao, "4");
    let aluguelTEF = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(5) > div > p"))), 3000).getText();
    assert.deepStrictEqual(aluguelTEF, "17.00");
    let isencaoTEF = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div:nth-child(4) > div:nth-child(6) > div > p"))), 3000).getText();
    assert.deepStrictEqual(isencaoTEF, "4");
    //DÉBITO A VISTA 
    let visaDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaVisa"))), 3000).getText();
    assert.deepStrictEqual(visaDeb, "1.20");
    let masterDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaMaster"))), 3000).getText();
    assert.deepStrictEqual(masterDeb, "1.20");
    let eloDeb = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(1) > td.debitoAVistaElo"))), 3000).getText();
    assert.deepStrictEqual(eloDeb, "1.80");
    //CRÉDITO Á VISTA
    let visaCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaVisa"))), 3000).getText();
    assert.deepStrictEqual(visaCred, "2.20");
    let masterCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaMaster"))), 3000).getText();
    assert.deepStrictEqual(masterCred, "2.20");
    let amexCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaAmex"))), 3000).getText();
    assert.deepStrictEqual(amexCred, "2.72");
    let hiperCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaHiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCred, "2.20");
    let eloCred = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(2) > td.creditoAVistaElo"))), 3000).getText();
    assert.deepStrictEqual(eloCred, "2.85");
    //CRÉDITO 2 a 6 PARC. S/JUROS
    let visaCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Visa"))), 3000).getText();
    assert.deepStrictEqual(visaCredSjuros, "2.62");
    let masterCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Master"))), 3000).getText();
    assert.deepStrictEqual(masterCredSjuros, "2.62");
    let amexCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Amex"))), 3000).getText();
    assert.deepStrictEqual(amexCredSjuros, "3.28");
    let hiperCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Hiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCredSjuros, "3.04");
    let eloCredSjuros = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(3) > td.creditoPSJ1Elo"))), 3000).getText();
    assert.deepStrictEqual(eloCredSjuros, "3.54");
    //CRÉDITO 7 a 12 PARC. S/JUROS
    let visaCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Visa"))), 3000).getText();
    assert.deepStrictEqual(visaCredSjuross, "2.76");
    let masterCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Master"))), 3000).getText();
    assert.deepStrictEqual(masterCredSjuross, "2.76");
    let amexCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Amex"))), 3000).getText();
    assert.deepStrictEqual(amexCredSjuross, "3.33");
    let hiperCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Hiper"))), 3000).getText();
    assert.deepStrictEqual(hiperCredSjuross, "3.40");
    let eloCredSjuross = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#modal-simulador > div > div > div.modal-body > div.table-responsive-sm > table > tbody > tr:nth-child(4) > td.creditoPSJ2Elo"))), 3000).getText();
    assert.deepStrictEqual(eloCredSjuross, "3.82");
    await driver.wait(until.elementLocated(By.css("#modal-simulador > div > div > div.modal-footer > button")), 3000).click();
});