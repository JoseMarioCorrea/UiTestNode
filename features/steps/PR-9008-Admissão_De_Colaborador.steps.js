const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Direcionar para Iniciar Solicitação de Admissão de Colaborador', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Admissão de Colaborador(a)']`)), 6000);
});

Given ('O usuário seleciona a cooperativa 9008', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39864"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[1]/div/select/option[43]"))), 3000).click();
});

When ('Habilitar o campo Solicitar uma Admissão ou Abertura de Vaga?', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39953"))), 3000).click();
});

Then ('Selecionar a opção {string}', async(string) => {
    if(string === "Abertura de Vaga"){
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[2]/div/select/option[2]"))), 3000).click();
    }
    if(string === "Admissão"){
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[2]/div/select/option[3]"))), 3000).click();
    }
});

Then ('Deve apresentar o botão Inicar Abertura de Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Abertura de Vaga Iniciada"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
    await driver.sleep(2000);
});

Given ('Os campos foram mostrados em tela', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39873"))), 3000);
});

When ('Iniciar o preenchimento do formulário', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39873"))), 3000).sendKeys("Contratado Teste");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39901"))), 3000).sendKeys("07518199998");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39885"))), 3000).sendKeys("94285330");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39852"))), 3000).sendKeys("08/01/1988");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39888"))), 3000).sendKeys("teste@teste.com.br");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39887"))), 3000).sendKeys("41999999999");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39905"))), 3000).sendKeys("57120964450");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39969"))), 3000).sendKeys("Rua do Teste");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39960"))), 3000).sendKeys("57120964450");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39959"))), 3000).sendKeys("1");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39875"))), 3000).sendKeys("Não");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[14]/div/ul/li"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39919"))), 3000).sendKeys("669000");
});

Then ('verificar a regra para dispensado do Ponto', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39857"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[16]/div/select/option[3]"))), 3000).click();
    //Após selecionado verificar se é criado os campos Artigo 62  e Escala de horário fixo 9990 - Dispensado

    //verifica options Artigo62
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39906"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[17]/div/select/option[2]"))), 3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[17]/div/select/option[3]"))), 3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[17]/div/select/option[4]"))), 3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[17]/div/select/option[5]"))), 3000).click();

    //verifica escala fixa
   let inpescala = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39863"))), 3000).getAttribute("value");
    assert.deepStrictEqual(inpescala, "9990");
});

When ('Finalizar o preenchimento da area, centro de custo e Gestor', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39955"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[19]/div/select/option[2]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39903"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[20]/div/select/option[6]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39874"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[21]/div/select/option[5]"))), 3000).click();
});

Then ('Deve habilitar o campo Data Admissão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39902"))), 3000);
});

Then ('Selecionar uma data de admissão', async() =>{
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39902"))), 3000).click();        
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/div[4]/div[1]/table/tbody/tr[1]/td[3]"))), 3000).click();        
});

Then ('Deve apresentar o aviso Estou Ciente Dos Riscos Inerentes ao Envio da Admissão Fora do Prazo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39889"))), 3000).click();
});

Given ('O usuário seleciona a cooperativa 0507',async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39864"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[1]/div/select/option[16]"))), 3000).click();
});

Given ('A seleção de É Admissão de Aprendiz Estagiário? como Sim', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39898"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[2]/div/div[1]/div/select/option[3]"))), 3000).click();   
});

When ('Apresentar os campos de estágios e forem preenchidos os campos restantes', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39895"))), 3000).sendKeys("30/09/2022");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39855"))), 3000).sendKeys("360");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39896"))), 3000).sendKeys("Testes");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39897"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[2]/div/div[7]/div/select/option[6]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39892"))), 3000).sendKeys("Sim");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39866"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[3]/div/div[2]/div/select/option[3]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39865"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[3]/div/div[3]/div/select/option[2]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39858"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[3]/div/div[4]/div/select/option[3]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39860"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[3]/div/div[5]/div/select/option[3]"))), 3000).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39876"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[4]/div/div[1]/div/select/option[2]"))), 3000).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39867"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[4]/div/div[2]/div/select/option[3]"))), 3000).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39877"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[4]/div/div[3]/div/select/option[2]"))), 3000).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39893"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[5]/div/div[1]/div/select/option[2]"))), 3000).click();

    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39853"))), 3000).click();
    //await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[2]/section[1]/section[4]/div/div[3]/div/select/option[2]"))), 3000).click();
    await driver.sleep(12000);
});

Given ('O usuário está localizado na atividade Iniciar Solicitação de Abertura de Vaga', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Abertura de Vaga']`)), 6000);
});

When ('Preencher o Nome da Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39907"))), 3000).sendKeys("Vaga Teste");
}); 

Then ('Preencher o Detalhamento da Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39875"))), 3000).sendKeys("Não existe");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[2]/div/ul/li"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39955"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[3]/div/select/option[2]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39910"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[4]/div/select/option[10]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39911"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[1]/div/div[5]/div/select/option[2]"))), 3000).click();
}); 

Given ('O preenchimento de Informações da Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39912"))), 3000).sendKeys("Descrição da Vaga");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39913"))), 3000).sendKeys("Responsabilidades e Atribuições");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39914"))), 3000).sendKeys("Requisitos e Qualificações");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39915"))), 3000).sendKeys("Informações adicionais");
});

When ('Preencer os dados do Local da Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39917"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[3]/div/div[1]/div/select/option[3]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39916"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[3]/div/div[2]/div/select/option[2]"))), 3000).click();
    //Após a seleção da filial, deve preencher o endereço corretamente 
    await driver.sleep(2000);
    let inpenderecoFilial = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39935"))), 3000).getAttribute("value");
    assert.deepStrictEqual(inpenderecoFilial, "Porto Alegre, Navegantes, Rua 18 de Novembro 314");
});

Then ('Preencher os dados de Informações Internas da Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39918"))), 3000).sendKeys("10");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39919"))), 3000).sendKeys("669000");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39920"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[4]/div/div[3]/div/select/option[2]"))), 3000).click();
});

Given ('O preenchimento do Responsável pela Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39921"))), 3000).sendKeys("Brunno");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[5]/div/div[1]/div/ul/li"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39922"))), 3000).sendKeys("Observações ou Justificativas");
});

When ('Preencher os Dados Adicionais', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39924"))), 3000).sendKeys("205");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[6]/div/div[1]/div/ul/li[1]"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39923"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section[6]/div/div[2]/div/select/option[3]"))), 3000).click();
});

Given ('O usuário está localizado na atividade Repassar Informações de Admissão para Gupy', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Repassar Informações de Admissão para Gupy']`)), 6000);
});

Then ('Deve ser validados os dados de abertura de vaga', async() => {
    //Detalhamento da Vaga
    await driver.sleep(3000);
    let inpnomeDaVaga = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39907"))), 3000).getText();
    assert.deepStrictEqual(inpnomeDaVaga, "Vaga Teste");

    let inpcargo = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39875"))), 3000).getText();;
    assert.deepStrictEqual(inpcargo, "Não existe");

    let inpareaDeTrabalho = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39955"))), 3000).getText();;
    assert.deepStrictEqual(inpareaDeTrabalho, "Administrativo Financeiro UBR");

    let inpqualOTipoDaVaga = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39910"))), 3000).getText();;
    assert.deepStrictEqual(inpqualOTipoDaVaga, "Pessoa Jurídica");

    let inpvagasParaPcd = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39911"))), 3000).getText();;
    assert.deepStrictEqual(inpvagasParaPcd, "Não");

    //Informações da Vaga
    let inpdescricaoDaVaga = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39912"))), 3000).getText();;
    assert.deepStrictEqual(inpdescricaoDaVaga, "Descrição da Vaga");

    let inpresponsabilidadesEAtribuicoes = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39913"))), 3000).getText();;
    assert.deepStrictEqual(inpresponsabilidadesEAtribuicoes, "Responsabilidades e Atribuições");

    let inprequisitosEQualificacoes = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39914"))), 3000).getText();;
    assert.deepStrictEqual(inprequisitosEQualificacoes, "Requisitos e Qualificações");

    let inpinformacoesAdicionais = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39915"))), 3000).getText();;
    assert.deepStrictEqual(inpinformacoesAdicionais, "Informações adicionais");


    //Local da Vaga
    let inptrabalhoRemoto = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39917"))), 3000).getText();;
    assert.deepStrictEqual(inptrabalhoRemoto, "Sim");

    let inpfilialUnicred = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39916"))), 3000).getText();;
    assert.deepStrictEqual(inpfilialUnicred, "UNICRED DO BRASIL");

    let inpenderecoFilial = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39935"))), 3000).getText();;
    assert.deepStrictEqual(inpenderecoFilial, "Porto Alegre, Navegantes, Rua 18 de Novembro 314");

    //Informações Internas da Vaga
    let inpquantasPosicoes = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39918"))), 3000).getText();;
    assert.deepStrictEqual(inpquantasPosicoes, "10");

    let inpsalarioMensal = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39919"))), 3000).getText();;
    assert.deepStrictEqual(inpsalarioMensal, "6.690,00");

    let inpmotivoRequisicaoVaga = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39920"))), 3000).getText();;
    assert.deepStrictEqual(inpmotivoRequisicaoVaga, "Aumento de Quadro");

    //Responsável pela Vaga
    let inpemailOuNomeDoGestor = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39921"))), 3000).getText();;
    assert.deepStrictEqual(inpemailOuNomeDoGestor, "Brunno Lorenzoni - brunno.lorenzoni@unicred.com.br");

    let inpobservacoesOuJustificativas = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39922"))), 3000).getText();;
    assert.deepStrictEqual(inpobservacoesOuJustificativas, "Observações ou Justificativas");

    //Responsável pela Vaga
    let inpdrescrevaOCentroDeCusto = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39924"))), 3000).getText();;
    assert.deepStrictEqual(inpdrescrevaOCentroDeCusto, "2050 - Operações");

    let inpflexibilidadeParaHomeOffice = await driver.wait(until.elementIsVisible(driver.findElement(By.id("div39923"))), 3000).getText();;
    assert.deepStrictEqual(inpflexibilidadeParaHomeOffice, "Sim");
}); 

Given ('Repassar Mais Informações para Abertura de Vaga Admissão', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Repassar Mais Informações para Abertura de Vaga/Admissão']`)), 6000);
});

When ('Alterar o Nome da Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39907"))), 3000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39907"))), 3000).sendKeys(Key.BACK_SPACE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39907"))), 3000).sendKeys("Vaga Nova Teste");
}); 

Then ('Confirmar a Abertura de Vaga', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Abertura de Vaga Confirmada"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
    await driver.sleep(2000);
});

Then ('Preencher a Data de Admissão e Centro de Custo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39902"))), 3000).sendKeys("31/12/2022");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39924"))), 3000).sendKeys("205");
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section/div/div[18]/div/ul/li[1]"))), 3000).click();
});

When ('Preencher o Formulário da Admissão', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39873"))), 3000).sendKeys("Contratado Teste");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39901"))), 3000).sendKeys("07518199998");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39885"))), 3000).sendKeys("94285330");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39852"))), 3000).sendKeys("08/01/1988");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39888"))), 3000).sendKeys("teste@teste.com.br");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39887"))), 3000).sendKeys("41999999999");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39905"))), 3000).sendKeys("57120964450");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39969"))), 3000).sendKeys("Rua do Teste");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39960"))), 3000).sendKeys("57120964450");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39959"))), 3000).sendKeys("1");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39919"))), 3000).sendKeys("669000");
});

Given ('O usuário está localizado na atividade Aguardar Finalização de Recrutamento e Seleção', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Aguardar Finalização de Recrutamento e Seleção']`)), 6000);
});

Then ('Selecionar dispensado do Ponto', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39857"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section/div/div[14]/div/select/option[3]"))), 3000).click();
    //Após selecionado verificar se é criado os campos Artigo 62  e Escala de horário fixo 9990 - Dispensado

    //verifica options Artigo62
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39906"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section/div/div[15]/div/select/option[2]"))), 3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section/div/div[15]/div/select/option[3]"))), 3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section/div/div[15]/div/select/option[4]"))), 3000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("/html/body/form/div[11]/div[1]/div[1]/div[4]/div[2]/div/div[2]/section[1]/section/div/div[15]/div/select/option[5]"))), 3000).click();

    //verifica escala fixa
    
  // let inpescala = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp39863"))), 3000).getAttribute("value");
    //assert.deepStrictEqual(inpescala, "9990");
});

