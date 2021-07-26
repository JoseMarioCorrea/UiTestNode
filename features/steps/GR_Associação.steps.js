const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');




Given ('O usuário possuí um CPF para realizar o cadastro', async() => {
    await driver.get("https://www.geradordecpf.org/");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btn-gerar-cpf"))), 40000).click();
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("numero"))), 40000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("numero"))), 40000).sendKeys(Key.CONTROL, "c");
}); 

When ('O usuário estiver localizado na tela de Cadastro no GR', async() => {
    await driver.sleep(1000);
    await driver.get("https://onboarding-gr-ui.paas-tst.e-unicred.com.br/");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#root > main > div > div > section > div > div > div.sc-fyFmx.rJYJh > form > div > div > div > div:nth-child(1) > div > div"))), 4000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//div[text()='566 - COOPERATIVA UNICRED566']"))), 4000).click();
    await driver.wait(until.elementLocated(By.name("usuario")), 4000).sendKeys("camila.0566");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("senha"))), 4000).sendKeys("123456");
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#root > main > div > div > section > div > div > div.sc-fyFmx.rJYJh > form > div > div > div > button"))), 40000).click();
});

Then ('Iniciar a solicitação de cadastro', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#root > main > div > div > section > div.sc-hOPghE.hmXTpH.wrapper > div.sc-eCApGN.htLRdL.card > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-6 > div:nth-child(2) > button"))), 40000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#root > main > div > div > section > div.sc-hOPghE.hmXTpH.wrapper > div:nth-child(1) > div.sc-hYRTcE.cWmyoM > div.MuiFormControl-root.MuiFormControl-marginDense.MuiFormControl-fullWidth > div > input"))), 40000);
}); 

Given ('A inserção do CPF', async() => {
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[1]/div[2]/div[2]/div/input')), 3000).sendKeys(Key.CONTROL, "v");
});

When ('Inserir o Nome Completo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[1]/div[2]/div[3]/div/div/div/input'))), 3000).click();
    await driver.wait(until.elementIsEnabled(driver.findElement(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[1]/div[2]/div[3]/div/div/div/input'))), 300000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[1]/div[2]/div[3]/div/div/div/input'))), 3000).sendKeys("Teste Automatizado");
}); 

Then ('Selecionar Associação', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[2]/div[2]/div/button[1]')), 3000).click();
});

When ('Selecionar a Carteira e Agência', async() => {
    await driver.sleep(2000);
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[2]/div[4]/div/div/div[2]')), 3000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[2]/div[3]/div/div/div[2]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='AG00PF4B']")), 30000).click();
    //await driver.executeScript("arguments[0].scrollIntoView(0, 250);");
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[2]/div[4]/div/div/div[2]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Unicred7']")), 3000).click();
});

Then ('Clicar em Salvar e Continuar', async() => {
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div[3]/div[3]/button[2]')), 3000).click();
}); 

Given ('O usuário preencheu os Dados Pessoais', async() => {
    await driver.sleep(2000);
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/button[2]'))), 40000).click();
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/div/input')), 3000).sendKeys("08011988");
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[3]/div/div/div[2]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Distrito Federal']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[4]/div')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Brasília']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[5]/div/div/div[2]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Casado']")), 3000).click();
    let element2 = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/button[2]')), 3000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element2);
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[6]/div/div/div[1]/div/div/div[2]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Comunhão Parcial de Bens']")), 3000).click();
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
});

When ('Preencher os Documentos', async() => {
    await driver.sleep(2000);
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/div/div[1]/div/div/div[1]"))), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Cart. Identidade']")), 3000).click();
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    let element2 = await driver.wait(until.elementLocated(By.name('numeroIdentificacao')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element2);
    await driver.wait(until.elementLocated(By.name('numeroIdentificacao')), 40000).sendKeys("120.2640.265-7");
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/div/div[3]/div/div/input')), 40000).sendKeys("22082011");
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/div/div[4]/div/div/div[2]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='SSP']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/div/div[5]/div/div/div[2]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Distrito Federal']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

Then ('Preencher os Contatos', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.name("numero")), 3000).click();
    await driver.wait(until.elementLocated(By.name("numero")), 3000).sendKeys("41996669512");
    await driver.wait(until.elementLocated(By.name("observacao")), 3000).sendKeys("observação teste");
    await driver.wait(until.elementLocated(By.name("endereco")), 3000).sendKeys("teste@email.com.br");
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

Given ('O usuário preencheu o Endereço', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div/div[2]/div/button[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.name("cep")), 3000).sendKeys("81270010");
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.name("numero")), 3000).sendKeys("5501");
   // let element2 = await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div/div[7]/div/div/div[1]")), 3000);
   // await driver.executeScript("arguments[0].scrollIntoView(true);", element2);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div/div[8]/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Paraná']")), 3000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div/div[9]/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Aceguá']")), 3000).click();
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

When ('O usuário preencher Dados Profissionais', async() => {
    //let element = await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div')), 40000);
    await driver.executeScript("window.scrollTo(0,0)");
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='GERENTE']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/input")), 3000).sendKeys("580000");
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[3]/div/div/div[2]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='CONTA ESPECIAL']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[5]/div[1]/div/div/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Contrato de Trabalho']")), 3000).click();
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

Then ('Preencher a escolaridade', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Doutorado completo']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Acupuntura']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

Given ('O usuário cadastrou os Bens Patrimoniais', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/button[1]/span[1]")), 3000).click();
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
}); 

When ('O usuário preencher o Agendamento Capital', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/input")), 3000).sendKeys("200000");
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div[2]/div/input")), 3000).sendKeys("20000");
    //pegar data atual
    let data = new Date(),
        dia  = (data.getDate()+1).toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[2]/div[3]/div/div/input")), 3000).sendKeys(diaF,mesF,anoF);
    await driver.wait(until.elementLocated(By.name("diaVencimento")), 3000).sendKeys("25");
    await driver.wait(until.elementLocated(By.name("numeroContaDebito")), 3000).sendKeys("627780");
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
}); 

Then ('Preencher a Comprovação', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("window.scrollTo(0,0)");
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[1]/div/button[1]")), 3000).click();
    await driver.findElement(By.css("input:nth-child(2)")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[1]/div/button[1]")), 3000).click();
    await driver.findElement(By.css("#root > main > div > div > section > div > div:nth-child(3) > div > div > section > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(2) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > form > div > div:nth-child(2) > div > section > input[type=file]")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    let elements = await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[1]/div/button[1]")), 3000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", elements);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/div/div[3]/div[2]/div/div/div/div/form/div/div[1]/div/button[1]")), 3000).click();
    await driver.findElement(By.css("#root > main > div > div > section > div > div:nth-child(3) > div > div > section > div > div > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(3) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > form > div > div:nth-child(2) > div > section > input[type=file]")).sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato.pdf");
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);

});

Then ('Preencher a Fomalização Assinatura Digital', async() => {
    await driver.wait(until.elementLocated(By.name("numero")), 3000).click();
    await driver.wait(until.elementLocated(By.name("numero")), 3000).sendKeys("41996669512");
    //await driver.wait(until.elementLocated(By.name("endereco")), 3000).sendKeys("teste@email.com.br");
    await driver.sleep(2500);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/section/div/button[2]")), 3000).click();
    await driver.sleep(2500);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/div[3]/div/div/div/div/button[2]")), 3000).click();
    await driver.sleep(2500);
});

Given ('Localizar a instâncias do processo de {string} criada', async(string) => {
    const driver = global.driver;
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfrel_tracker.aspx");
    //await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(`//*[@id="frm"]/div[5]/div[2]/h1[text() = 'Monitoramento Geral']`))), 30000);
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#CmbFlow_chzn > ul > li > input"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#CmbFlow_chzn > ul > li > input"))), 3000).sendKeys("Associação, Abertura de Conta ou Atualização Cadastral (v.7");
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#CmbFlow_chzn_o_439"))), 3000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.css("#TxtFlowExecute")), 3000).click();
    //Para associação
    //await driver.wait(until.elementLocated(By.css("#TxtFlowExecute")), 3000).sendKeys("1118872");
    await driver.sleep(10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpCodField"))), 3000).click();
    await driver.wait(until.elementLocated(By.css("#inpCodField > option:nth-child(17)")), 3000).click();
    await driver.wait(until.elementLocated(By.id("inpDsFormFieldValueText")), 3000).sendKeys("Onboarding");
    //preencher número da instância 
    await driver.sleep(30000);
    await driver.wait(until.elementLocated(By.name("ctl00$ctl00$body$List$Filter$BtnSubmit")), 3000).click();
});

When ('O usuário Validar a correta criação da instância para Associação', async() => {
    
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#TableStatus > tbody > tr:nth-child(1)"))), 30000).click()
    await driver.sleep(4000);
});

Then ('Validar se os anexos estão corretos para Associação', async() => {
    const driver = global.driver;
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
        }
        await driver.executeScript("window.scrollTo(1329,60)");

    let docTypeDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(1) > td.docType"))), 30000);
    assert.strictEqual(docTypeDocumento, "Documento de identificação");

    let docTypeEstado = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(2) > td.docType"))), 30000);
    assert.strictEqual(docTypeEstado, "Estado Civil");

    let docTypeComprovante = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(3) > td.docType"))), 30000);
    assert.strictEqual(docTypeComprovante, "Comprovante de residência/endereço");

    let docTypeRenda = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(4) > td.docType"))), 30000);
    assert.strictEqual(docTypeRenda, "Comprovante de renda");

    let docTypeBacen = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(5) > td.docType"))), 30000);
    assert.strictEqual(docTypeBacen, "Bacen");

    let docTypeSerasa = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(6) > td.docType"))), 30000);
    assert.strictEqual(docTypeSerasa, "Serasa");

    let docTypeReceita = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(7) > td.docType"))), 30000);
    assert.strictEqual(docTypeReceita, "Receita Federal");

    let docTypeAdmissao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(8) > td.docType"))), 30000);
    assert.strictEqual(docTypeAdmissao, "PROPOSTA_ADMISSAO");

    let docTypeAdesao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(9) > td.docType"))), 30000);
    assert.strictEqual(docTypeAdesao, "PROPOSTA_ADESAO");

    let docTypeDados = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(10) > td.docType"))), 30000);
    assert.strictEqual(docTypeDados, "DADOS_CADASTRAIS");
    });
});

Then ('Selecionar Associação + Conta', async() => {
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div[3]/div[2]/div[2]/div/button[2]')), 3000).click();
});

Given ('O usuário selecionou a Modalidade da conta Individual', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div/div[1]'))), 30000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Individual']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
}); 

Then ('Prencher Produtos e Serviços', async() => {
    let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div/div[1]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[2]/div/button[2]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[3]/div/button[1]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[3]/div/button[1]')), 3000).click();
    let elements = await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[3]')), 3000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", elements);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[4]/div/div/div/div")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='CESTA PF - ZERO']")), 30000).click();
    await driver.sleep(1000);
    let elementss = await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/form/div/div[3]')), 3000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", elementss);
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[1]/div/div/div[1]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Visa']")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[2]/div/div/div[1]')), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Classic']")), 3000).click();
    let element2 = await driver.wait(until.elementLocated(By.xpath('/html/body/div/main/div/div/section/div/div[3]')), 40000);
    await driver.executeScript("arguments[0].scrollIntoView(true);", element2);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div[2]/div/div/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[3]/div[5]/div/div/div[1]")), 3000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='03']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

When ('O usuário Validar a correta criação da instância para Conta Individual', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#TableStatus > tbody > tr:nth-child(1)"))), 30000).click()
    await driver.sleep(4000);
});

Then ('Validar se os anexos estão corretos para {string}', async(string) => {
    const driver = global.driver;
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
            10000
          );
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
       if (handle !== originalWindow) {
       await driver.switchTo().window(handle);
        }

       let divcontexto = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div35780"))), 3000);
       assert.strictEqual(divcontexto, string);

       let divnomeCompleto = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div35812"))), 3000);
       assert.strictEqual(divnomeCompleto, "Teste Automatizado");

        let docTypeDocumento = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(1) > td.docType"))), 30000);
        assert.strictEqual(docTypeDocumento, "Documento de identificação");

        let docTypeEstado = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(2) > td.docType"))), 30000);
        assert.strictEqual(docTypeEstado, "Estado Civil");

        let docTypeComprovante = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(3) > td.docType"))), 30000);
        assert.strictEqual(docTypeComprovante, "Comprovante de residência/endereço");

        let docTypeRenda = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(4) > td.docType"))), 30000);
        assert.strictEqual(docTypeRenda, "Comprovante de renda");

        let docTypeBacen = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(5) > td.docType"))), 30000);
        assert.strictEqual(docTypeBacen, "Bacen");

        let docTypeSerasa = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(6) > td.docType"))), 30000);
        assert.strictEqual(docTypeSerasa, "Serasa");

        let docTypeReceita = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(7) > td.docType"))), 30000);
        assert.strictEqual(docTypeReceita, "Receita Federal");

        let docTypeAdmissao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(8) > td.docType"))), 30000);
        assert.strictEqual(docTypeAdmissao, "PROPOSTA_ADMISSAO");

        let docTypeAdesao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(9) > td.docType"))), 30000);
        assert.strictEqual(docTypeAdesao, "PROPOSTA_ADESAO");

        let docTypeDados = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tblFile > tbody > tr:nth-child(10) > td.docType"))), 30000);
        assert.strictEqual(docTypeDados, "DADOS_CADASTRAIS");
    });
}); 

Given ('O usuário selecionou a Modalidade da conta Menor', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div/div[1]'))), 30000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Menor']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

Given ('O usuário selecionou a Modalidade da conta Salário', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div/div[1]'))), 30000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Conta Salário']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});

Given ('O usuário selecionou a Modalidade da conta de Serviço', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div/main/div/div/section/div/div[2]/div/div/section/div/div/div[2]/div/div/div/div/form/div/div[1]/div/div/div[1]'))), 30000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Conta de Serviço']")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#root > main > div > div > section > div > div.sc-cbeQSR.faRvJV > button:nth-child(3) > span.MuiIconButton-label")), 3000).click();
    await driver.sleep(1500);
});