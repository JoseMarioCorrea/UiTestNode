const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral', async () => {
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral']`)), 6000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral");
});

Given ('O usuário selecionou o Objetivo - Atualização PF', async () => {
    await driver.sleep(1500);
    await driver.wait(until.elementLocated(By.id("objetivo-0")), 30000).click();
});

When ('O usuário seleciona o Contexto 1 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-1")),30000).click();
});

Then ('Deve mostrar uma mensagem de encaminhar documentos obrigatórios', async() => {
    let mensagemTituloEncaminharTodosDocumentos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-title"))), 30000);
    let textmensagemTituloEncaminharTodosDocumentos = await mensagemTituloEncaminharTodosDocumentos.getText();
    assert.deepStrictEqual(textmensagemTituloEncaminharTodosDocumentos, "ATENÇÃO!")
    let mensagemEncaminharTodosDocumentos = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 30000);
    let textmensagemEncaminharTodosDocumentos = await mensagemEncaminharTodosDocumentos.getText();
    assert.deepStrictEqual(textmensagemEncaminharTodosDocumentos, "Encaminhar todos os documentos obrigatórios envolvidos nas atualizações solicitadas.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
}); 

Given ('A seleção do Motivo Crédito', async() => {
    await driver.wait(until.elementLocated(By.id("motivo-1")),30000).click();
});

Then ('mostrar a mensagem de atendimento com SLA diferenciado', async() => {
    let mensagemSLA = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textMensagemSLA = await mensagemSLA.getText();
    assert.deepStrictEqual(textMensagemSLA, "Este motivo gera atendimento com SLA diferenciado e, por este motivo, no fechamento do mês é avaliado o percentual de conversão de negócios para encaminhamento e providências na sua cooperativa");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Given ('Cooperativa, Posto preenchidos', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35793"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > select > option:nth-child(17)")),30000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35795"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > select > option:nth-child(2)")),30000).click();
});

When ('Preencher um CPF não cadastrado e clicar em Buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("07518199998");
    await driver.wait(until.elementLocated(By.id("btn-buscar")), 50000).click();
});

Then ('Mensagem informando que o CPF não possui cadastro', async() => {
    await driver.sleep(1000);
    let mensagemCPFinvalido = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textmensagemCPFinvalido = await mensagemCPFinvalido.getText();
    assert.deepStrictEqual(textmensagemCPFinvalido, "Esse CPF não possui cadastro nessa cooperativa ou não há uma matrícula ativa. Altere o objetivo da solicitação para cadastro.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
}); 

Given ('O CPF digitado é um CPF cadastrado', async() => {
    await driver.wait(until.elementLocated(By.name("inp35782")), 3000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementLocated(By.name("inp35782")), 3000).sendKeys(Key.DELETE);
    await driver.wait(until.elementLocated(By.name("inp35812")), 3000).click();
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("13031713923");
});

When ('Clicar em Buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btn-buscar"))), 3000).click();
}); 

Then ('Deve mostrar os dados corretamente', async() => {
    //Verifica Titulo 
    let cardTitle = await driver.wait(until.elementLocated(By.css("#card-title-cooperado")), 30000);
    let textcardTitle = await cardTitle.getText();
    assert.deepStrictEqual(textcardTitle, "MANUELA WIETHORN JUNQUEIRA");
    //Verifica CPF 
    let cardCPF = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(1) > h6")), 3000);
    let textcardCPF = await cardCPF.getText();
    assert.deepStrictEqual(textcardCPF, "CPF/CNPJ");
    let cardCpfResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(1) > p")), 3000);
    let textcardCpfResults = await cardCpfResults.getText();
    assert.deepStrictEqual(textcardCpfResults, "13031713923");
    // Verifica Matrícula 
    let cardMatricula = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(2) > h6")), 3000);
    let textcardMatricula = await cardMatricula.getText();
    assert.deepStrictEqual(textcardMatricula, "Matrícula");
    let cardMatriculaResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(2) > p")), 3000);
    let textcardMatriculaResults = await cardMatriculaResults.getText();
    assert.deepStrictEqual(textcardMatriculaResults, "60011");
    // Verifica Situação
    let cardSituacao = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(3) > h6")), 3000);
    let textcardSituacao = await cardSituacao.getText();
    assert.deepStrictEqual(textcardSituacao, "Situação");
    let cardSituacaoResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(3) > p")), 3000);
    let textcardSituacaoResults = await cardSituacaoResults.getText();
    assert.deepStrictEqual(textcardSituacaoResults, "ATIVO");
    // Verifica Data Associação 
    let cardDataAssociacao = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(4) > h6")), 3000);
    let textcardDataAssociacao = await cardDataAssociacao.getText();
    assert.deepStrictEqual(textcardDataAssociacao, "Data Assoc.");
    let cardDataAssociacaoResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(4) > p")), 3000);
    let textcardDataAssociacaoResults = await cardDataAssociacaoResults.getText();
    assert.deepStrictEqual(textcardDataAssociacaoResults, "11/12/2020");
    // Verifica Posto 
    let cardPosto = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(5) > h6")), 3000);
    let textcardPosto = await cardPosto.getText();
    assert.deepStrictEqual(textcardPosto, "Posto");
    let cardPostoResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(5) > p")), 3000);
    let textcardPostoResults = await cardPostoResults.getText();
    assert.deepStrictEqual(textcardPostoResults, "8");
    // Verifica Contas 
    let cardContas = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(6) > h6")), 3000);
    let textcardContas = await cardContas.getText();
    assert.deepStrictEqual(textcardContas, "Contas");
    let cardContasResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(6) > p")), 3000);
    let textcardContasResults = await cardContasResults.getText();
    assert.deepStrictEqual(textcardContasResults, "4517091");
});

Given ('O usuário clicou em Encaminhar Solicitação', async() => {
    await driver.wait(until.elementLocated(By.name("inpCodPositionArea")), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#controllers > div.alert.alert-info > div > select > option:nth-child(3)"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
});

When ('Os arquivos não estão anexados', async() => {
    //
});

Then ('Deve mostrar uma mensagem informando que não possuí anexos.', async() => {
    let mensagemSemAnexos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let textmensagemSemAnexos = await mensagemSemAnexos.getText();
    assert.deepStrictEqual(textmensagemSemAnexos, "Para prosseguir a solicitação você deve ao menos anexar um dos arquivos listados na seção Anexos!");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
}); 

Given ('O usuário anexou arquivo Ficha de Dados Cadastrais Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(2)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);    
});

When ('O usuário Clicar em Encaminhar Solicitação', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 3000).click();
});

Then ('direcionar para a Tarefa Conferir Informações e Documentos', async() => {
    let tituloConferir = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Conferir Informações e Documentos']`)), 30000);
    let resultadotituloConferir = await tituloConferir.getText();
    assert.deepStrictEqual(resultadotituloConferir, "Conferir Informações e Documentos");
});

Given ('O usuário	Assumiu Atividade', async() => {
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 50000).click();
});

When ('Validar os dados mostrados estão corretos', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Diversos Contextos");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

Then ('Clicar em Cancelar Instância', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Cancelar Instância"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
    //await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
}); 

Then ('Limpar dados de testes', async() => {
    const driver = global.driver;
    await driver.switchTo().defaultContent();
    await driver.sleep(2000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#frm > div.navbar.navbar-inverse.navbar-header > div > div > div > a"))), 30000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#simulate-top-bar > div > button:nth-child(3)"))), 30000).click();
}); 

When ('O usuário seleciona o Contexto 2 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-2")),30000).click();
});

Then ('Selecionar o Motivo Campanhas 0 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("motivo-0")),30000).click();
});

When ('O arquivo Comprovante de residência e endereço é obrigatório', async() => {
    let enderecoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 3000);
    let selectEndereco = await enderecoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectEndereco, "badge badge-secondary obrigatorio");
}); 

Given ('O usuário anexou Comprovante de residência e endereço', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4); 
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Alterar Endereço', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Endereço");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 3 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-3")),30000).click();
});

Then ('Selecionar o Motivo 2 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("motivo-2")),30000).click();
});

Then ('Deve mostrar a mensagem Quando for casado ou união estável deve ser anexado o documento de identificação do cônjuge', async() => {
    let mensagemTituloEstadoCivil = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-title"))), 30000);
    let textmensagemTituloEstadoCivil = await mensagemTituloEstadoCivil.getText();
    assert.deepStrictEqual(textmensagemTituloEstadoCivil, "ATENÇÃO!")
    let mensagemEstadoCivil = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 30000);
    let textmensagemEstadoCivil = await mensagemEstadoCivil.getText();
    assert.deepStrictEqual(textmensagemEstadoCivil, "Quando for casado ou união estável deve ser anexado o documento de identificação do cônjuge.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

When ('O arquivo Estado Civil é obrigatório', async() => {
    let enderecoEstadoCivicoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 3000);
    let selectenderecoEstadoCivicoObrigatorio = await enderecoEstadoCivicoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectenderecoEstadoCivicoObrigatorio, "badge badge-secondary obrigatorio");
}); 

Given ('O usuário anexou Comprovante de Estado Civil', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4); 
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Alterar Estado Civil', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Estado Civil");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 4 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-4")),30000).click();
}); 

When ('O arquivo Documento e identificação e Receita Federal é obrigatório', async() => {
    let identificacaoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(4)")), 3000);
    let selectidentificacaoObrigatorio = await identificacaoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectidentificacaoObrigatorio, "badge badge-secondary obrigatorio");
    let ReceitaFederalObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(19)")), 3000);
    let selectReceitaFederalObrigatorio = await ReceitaFederalObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectReceitaFederalObrigatorio, "badge badge-secondary obrigatorio");
}); 

Given ('O usuário anexou Comprovante de Documento e identificação e Receita Federal é obrigatório', async() => {
    //Documento e identificação
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(4)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4); 
    //Receita Federal 
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(19)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Receita Federal (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Alterar Nome', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Nome");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 5 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-5")),30000).click();
}); 

Given ('O usuário anexou Comprovante de renda', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Comprovante de renda (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('O arquivo Comprovante de renda é obrigatório', async() => {
    let comprovanteDeRendaObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 3000);
    let selectcomprovanteDeRendaObrigatorio = await comprovanteDeRendaObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectcomprovanteDeRendaObrigatorio, "badge badge-secondary obrigatorio");
}); 

When ('Validar os dados mostrados estão corretos para Atualização PF - Alterar Renda', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Renda");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 6 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-6")),30000).click();
});

Then ('Deve mostrar uma mensagem informando que cooperado já possui conta', async() => {
    let mensagemPossuiConta = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textmensagemPossuiConta = await mensagemPossuiConta.getText();
    assert.deepStrictEqual(textmensagemPossuiConta, "Esse cooperado já possui conta, altere o contexto para Nova C/C");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Then ('Clicar em Cancelar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Cancelada"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#cboxLoadedContent > div > div > button.btn.btn-success")), 30000).click();
});  

When ('O usuário seleciona o Contexto 7 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-7")),30000).click();
});

Then ('Deve selecionar automaticamente o Motivo Outros', async() => {
    let MotivoOutrosObrigatorio = await driver.wait(until.elementLocated(By.id("motivo-3")), 3000);
    let selectMotivoOutrosObrigatorio = await MotivoOutrosObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectMotivoOutrosObrigatorio, "list-group-item list-group-item-action active");
});

When ('Preencher um CPF válido e não preencher Matricula Empregador e clicar em Buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35793"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > select > option:nth-child(17)")),30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35795"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > select > option:nth-child(2)")),30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("07518199998");
    await driver.wait(until.elementLocated(By.id("btn-buscar")), 50000).click();
});

Then ('Mensagem informando que a Matricula não existe na base de dados', async() => {
    let mensagemMatriculaNaoEncontrada = await driver.wait(until.elementLocated(By.css("#toast-container > div.toast.toast-warning > div.toast-message")), 30000);
    let resultsmensagemMatriculaNaoEncontrada = await mensagemMatriculaNaoEncontrada.getText();
    assert.deepStrictEqual(resultsmensagemMatriculaNaoEncontrada, "Matrícula do empregador não encontrada na base de dados dessa cooperativa. Assim sendo, realize um cadastro para esse empregador.");
    let mensagemTitleErrorAssociado = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div.toast.toast-error > div.toast-title"))), 30000);
    let resultsmensagemTitleErrorAssociado = await mensagemTitleErrorAssociado.getText();
    await driver.wait(until.elementLocated(By.css('#toast-container > div.toast.toast-warning > button')), 30000).click();    assert.deepStrictEqual(resultsmensagemTitleErrorAssociado, "Erro ao buscar associado!");
    let mensagemErrorAssociado = await driver.wait(until.elementLocated(By.css("#toast-container > div.toast.toast-error > div.toast-message")), 30000);
    let resultsmensagemErrorAssociado = await mensagemErrorAssociado.getText();
    assert.deepStrictEqual(resultsmensagemErrorAssociado, "Error: Request failed with status code 404");
    await driver.wait(until.elementLocated(By.css('#toast-container > div.toast.toast-error > button')), 30000).click();    assert.deepStrictEqual(resultsmensagemTitleErrorAssociado, "Erro ao buscar associado!");

});  

Given ('O CPF digitado e uma Matricula Empregador válido', async() => {
    await driver.wait(until.elementLocated(By.name("inp35782")), 3000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementLocated(By.name("inp35782")), 3000).sendKeys(Key.DELETE);
    await driver.wait(until.elementLocated(By.name("inp35812")), 3000).click();
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35798"))), 3000).sendKeys("300500");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("06894588945");
}); 

When ('O arquivo Comprovante de Ficha de Dados Cadastrais é obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 30000);
}); 

Given ('O usuário anexou Comprovante de Ficha de Dados Cadastrais', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Conta Salário', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Conta Salário");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "06894588945");
    let matricula = await driver.wait(until.elementLocated(By.id("div35798")), 3000);
    let resultadomatricula = await matricula.getText();
    assert.deepStrictEqual(resultadomatricula, "300500");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MAIARA GODINHO");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

Then ('Deve mostrar os dados corretamente para o CPF e Matricula digitados', async() => {
    await driver.wait(until.elementLocated(By.css("#toast-container")), 3000);
});

When ('O usuário seleciona o Contexto 8 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-8")),30000).click();
});

When ('O arquivo Certidão de Óbito é obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 30000);
}); 

Given ('O usuário anexou Certidão de Óbito é obrigatório', async()  => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Certidão de Óbito.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Excluir Segundo Titular por Óbito', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Excluir Segundo Titular por Óbito");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 9 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-9")),30000).click();
});

When ('O arquivo Formulário de Exclusão de Titularidade Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 30000);
});

Given ('O usuário anexou Formulário de Exclusão de Titularidade Obrigatório', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Formulário de Exclusão de Titularidade (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Excluir Titularidade', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Excluir Titularidade");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 10 - {string}', async(string) =>{
    await driver.wait(until.elementLocated(By.id("contexto-10")),30000).click();
}); 

When ('Os arquivos Proposta de Adesão de Produtos e Serviços - Cartão autógrafo Obrigatório', async() => {
    let PropostadeAdesãodeProdutosObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(3)")), 3000);
    let selectPropostadeAdesãodeProdutosObrigatorio = await PropostadeAdesãodeProdutosObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectPropostadeAdesãodeProdutosObrigatorio, "badge badge-secondary obrigatorio");
     let CartaoAutografoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(11)")), 3000);
    let selectCartaoAutografoObrigatorio = await CartaoAutografoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectCartaoAutografoObrigatorio, "badge badge-secondary obrigatorio");
});

Given ('O usuário anexou Proposta de Adesão de Produtos e Serviços - Cartão autógrafo Obrigatório', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(11)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão autógrafo (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Incluir Titularidade', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Incluir Titularidade");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 11 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-11")),30000).click();
}); 

When ('Os arquivos Proposta de Adesão de Produtos e Serviços Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 30000);
});

Given ('O usuário anexou Proposta de Adesão de Produtos e Serviços Obrigatório', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Proposta de Adesão de Produtos e Serviços (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Nova CC', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Nova C/C (possui matrícula e C/C)");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('O usuário seleciona o Contexto 12 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-12")),30000).click();
});

When ('Validar os dados mostrados estão corretos para Atualização PF - Terceiros', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Terceiro (Sócio/Representante, Aval, Tutor e Curador)");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

Given ('O usuário selecionou o Objetivo - Atualização PJ', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("objetivo-1"))), 30000).click();
});

When ('O usuário seleciona o Contexto 0 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-0")), 30000).click();
});

When ('Preencher um CNPJ não cadastrado e clicar em Buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("19302905000144");
    await driver.wait(until.elementLocated(By.id("btn-buscar")), 50000).click();
});

Then ('Mensagem informando que o CNPJ não possui cadastro', async() => {
    await driver.sleep(1000);
    let mensagemCNPJinvalido = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textmensagemCNPJinvalido = await mensagemCNPJinvalido.getText();
    assert.deepStrictEqual(textmensagemCNPJinvalido, "Esse CNPJ não possui cadastro nessa cooperativa ou não há uma matrícula ativa. Altere o objetivo da solicitação para cadastro.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();  
}); 

Given ('O CNPJ digitado é um CNPJ cadastrado', async() => {
    await driver.wait(until.elementLocated(By.name("inp35782")), 3000).sendKeys(Key.CONTROL, "a");
    await driver.wait(until.elementLocated(By.name("inp35782")), 3000).sendKeys(Key.DELETE);
    await driver.wait(until.elementLocated(By.name("inp35812")), 3000).click();
    await driver.sleep(1500);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("00717799000131");
});

Then ('Deve mostrar os dados corretamente - {string}', async(string) => {
    //Verifica Titulo 
    let cardTitlePJ = await driver.wait(until.elementLocated(By.css("#card-title-cooperado")), 30000);
    let textcardTitlePJ = await cardTitlePJ.getText();
    assert.deepStrictEqual(textcardTitlePJ, "LAPRODENTE LABORATORIO DE PROTESE DENTARIA LTDA ME");
    //Verifica CPF 
    let cardCNPJ = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(1) > h6")), 3000);
    let textcardCNPJ = await cardCNPJ.getText();
    assert.deepStrictEqual(textcardCNPJ, "CPF/CNPJ");
    let cardCnpjResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(1) > p")), 3000);
    let textcardCnpjResults = await cardCnpjResults.getText();
    assert.deepStrictEqual(textcardCnpjResults, "00717799000131");
    // Verifica Matrícula 
    let cardMatriculaCNPJ = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(2) > h6")), 3000);
    let textcardMatriculaCNPJ = await cardMatriculaCNPJ.getText();
    assert.deepStrictEqual(textcardMatriculaCNPJ, "Matrícula");
    let cardMatriculaCNPJResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(2) > p")), 3000);
    let textcardMatriculaCNPJResults = await cardMatriculaCNPJResults.getText();
    assert.deepStrictEqual(textcardMatriculaCNPJResults, "77747");
    // Verifica Situação
    let cardSituacaoCNPJ = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(3) > h6")), 3000);
    let textcardSituacaoCNPJ = await cardSituacaoCNPJ.getText();
    assert.deepStrictEqual(textcardSituacaoCNPJ, "Situação");
    let cardSituacaoCNPJResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(3) > p")), 3000);
    let textcardSituacaoCNPJResults = await cardSituacaoCNPJResults.getText();
    assert.deepStrictEqual(textcardSituacaoCNPJResults, "ATIVO");
    // Verifica Data Associação 
    let cardDataAssociacaoCNPJ = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(4) > h6")), 3000);
    let textcardDataAssociacaoCNPJ = await cardDataAssociacaoCNPJ.getText();
    assert.deepStrictEqual(textcardDataAssociacaoCNPJ, "Data Assoc.");
    let cardDataAssociacaoCNPJResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(4) > p")), 3000);
    let textcardDataAssociacaoCNPJResults = await cardDataAssociacaoCNPJResults.getText();
    assert.deepStrictEqual(textcardDataAssociacaoCNPJResults, "28/09/2009");
    // Verifica Posto 
    let cardPostoCNPJ = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(5) > h6")), 3000);
    let textcardPostoCNPJ = await cardPostoCNPJ.getText();
    assert.deepStrictEqual(textcardPostoCNPJ, "Posto");
    let cardPostoCNPJResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(5) > p")), 3000);
    let textcardPostoCNPJResults = await cardPostoCNPJResults.getText();
    assert.deepStrictEqual(textcardPostoCNPJResults, "9");
    // Verifica Contas 
    let cardContasCNPJ = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(6) > h6")), 3000);
    let textcardContasCNPJ = await cardContasCNPJ.getText();
    assert.deepStrictEqual(textcardContasCNPJ, "Contas");
    let cardContasCNPJResults = await driver.wait(until.elementLocated(By.css("#cooperado > div > div > div > div > div > div:nth-child(6) > p")), 3000);
    let textcardContasCNPJResults = await cardContasCNPJResults.getText();
    assert.deepStrictEqual(textcardContasCNPJResults, "886777");
});

When ('Os arquivos Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios', async() => {
    let CartaoCNPJObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(3)")), 3000);
    let selectCartaoCNPJObrigatorio = await CartaoCNPJObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectCartaoCNPJObrigatorio, "badge badge-secondary obrigatorio");
    let ContratoSocialObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(8)")), 3000);
    let selectContratoSocialObrigatorio = await ContratoSocialObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectContratoSocialObrigatorio, "badge badge-secondary obrigatorio");
    let CertidaoDeVerificacaoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(10)")), 3000);
    let selectCertidaoDeVerificacaoObrigatorio = await CertidaoDeVerificacaoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectCertidaoDeVerificacaoObrigatorio, "badge badge-secondary obrigatorio");
});

Given ('O usuário anexou Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(3)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão CNPJ (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(8)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato Social (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(10)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput3 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput3.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Certidões de verificação de situação de contrato (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Validar os dados mostrados estão corretos para Atualização PJ - {string}', async(string) => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PJ");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, (string));
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "00717799000131");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "LAPRODENTE LABORATORIO DE PROTESE DENTARIA LTDA ME");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
}); 

Then ('Selecionar o Motivo 0 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("motivo-0")), 30000).click();
});

Then ('Selecionar o Motivo 1 - {string}', async(string)  => {
    await driver.wait(until.elementLocated(By.id("motivo-1")), 30000).click();

});

When ('Os arquivos {string} obrigatório', async(string) => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 30000);
});

Given ('O usuário anexou Cartão CNPJ obrigatório', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão CNPJ (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Selecionar o Motivo 3 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("motivo-3")), 30000).click();
});

When ('Os arquivos  Proposta de Adesão de Produtos e Serviços, Cartão Autografo são obrigatórios', async() => {
    let propostaAdesaoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(2)")), 3000);
    let selectpropostaAdesaoObrigatorio = await propostaAdesaoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectpropostaAdesaoObrigatorio, "badge badge-secondary obrigatorio");
    let cartaoAutografoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(12)")), 3000);
    let selectcartaoAutografoObrigatorio = await cartaoAutografoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectcartaoAutografoObrigatorio, "badge badge-secondary obrigatorio");
});

Given ('O usuário anexou Proposta de Adesão de Produtos e Serviços, Cartão Autografo são obrigatórios', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(2)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Proposta de Adesão de Produtos e Serviços (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
    
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(12)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão autógrafo (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Ocorrer explicativa para Crédito - Entidades Sem Fins Lucrativos', async() => {
    let mensagemEntidadesSemFins = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 30000);
    let resultsmensagemEntidadesSemFins = await mensagemEntidadesSemFins.getText();
    assert.deepStrictEqual(resultsmensagemEntidadesSemFins, "O balanço e demonstrações contábeis tornam-se obrigatórios caso o cadastro esteja desatualizado em relação ao último exercício encerrado exceto para MEI, ME e Empresário Individual. 2) Deverá ser observado o regramento disposto na Diretriz Interna de Crédito da cooperativa para atualizações com o objetivo de novas concessões de crédito.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

When ('O arquivo  Relação de faturamento Obrigatório', async() => {
    let relacaoFaturamentoObrigatorio = await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio")), 3000);
    let selectrelacaoFaturamentoObrigatorio = await relacaoFaturamentoObrigatorio.getAttribute("class");
    assert.deepStrictEqual(selectrelacaoFaturamentoObrigatorio, "badge badge-secondary obrigatorio");
});

Given ('O usuário anexou Relação de faturamento Obrigatório', async() => {
    const driver = global.driver;
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span.badge.badge-secondary.obrigatorio"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Relação de faturamento (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);

});

When ('O usuário seleciona o Contexto 13 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-13")), 3000).click();
});

When ('O usuário seleciona o Contexto 14 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-14")), 3000).click();
});

When ('O usuário seleciona o Contexto 15 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-15")), 3000).click();
});

When ('O usuário seleciona o Contexto 16 - {string}', async(string) => {
    await driver.wait(until.elementLocated(By.id("contexto-16")), 3000).click();
});

When ('Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))),30000).sendKeys("1234567890");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btn-buscar"))),30000).click();
    await driver.sleep(1000);
});

Then ('Ocorrer o erro informando que o CNPJ-CPF está incorreto', async() => {
    let alert1 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-title")), 3000);
    let textAlert1 = await alert1.getText();
    assert.deepStrictEqual(textAlert1, "Por favor, verifique o valor digitado.");
    let alert2 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textAlert2 = await alert2.getText();
    assert.deepStrictEqual(textAlert2, "O CPF/CNPJ informado é inválido");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
}); 

When ('Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))),30000).sendKeys(Key.CONTROL + "a", Key.DELETE);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))),30000).sendKeys("07518199998");
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > select > option:nth-child(2)")),30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35812"))),30000).sendKeys("José Mario Corrêa Santos ");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btn-buscar"))),30000).click();
    await driver.sleep(3000);
});

Then ('Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento', async() => {
    let alert3 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-title")), 3000);
    let textAlert3 = await alert3.getText();
    assert.deepStrictEqual(textAlert3, "Tudo Certo");
    let alert4 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textAlert4 = await alert4.getText();
    assert.deepStrictEqual(textAlert4, "CPF/CNPJ validado, prossiga com a solicitação realizando o upload dos documentos na seção de anexos");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});  

Given ('Existem documentos obrigatórios que devem ser anexados', async() => {
    await driver.wait(until.elementLocated(By.css("#ContainerAttach > div.box-header > h2")), 3000);
    //await driver.wait(until.elementLocated(By.id("btn-buscar")), 3000).click();

}); 

When ('Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(1)")), 30000).click();
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Proposta de Admissão e Ficha Matrícula (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

Then ('Anexar arquivo  Ficha de Dados Cadastrais Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(2)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ficha de Dados Cadastrais (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

Given ('Anexar arquivo  Documento de identificação Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(4)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Documento de identificação (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

When ('Anexar arquivo  Comprovante de residência endereço Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(6)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Comprovante de residencia endereço (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

Then ('Anexar arquivo  Autorização débito capital conta de terceiros Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(12)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Autorização débito capital conta de terceiros (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

Given ('Anexar arquivo  Serasa Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(15)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Serasa (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

When ('Anexar arquivo  Bacén Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(16)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Bacen (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

Then ('Anexar arquivo  Receita Federal Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(17)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Receita Federal (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);     
});

Then ('Deve Encaminhar Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inpCodPositionArea"))), 30000).click();
    await driver.wait(until.elementLocated(By.css("#controllers > div.alert.alert-info > div > select > option:nth-child(2)")), 30000).click();
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 30000).click();
    
});

Given ('O usuário selecionou o Objetivo - Cadastro PF', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("objetivo-2"))),30000).click();
});

When('Validar os dados mostrados estão corretos para Cadastro PF - {string}', async (string) => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Cadastro PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, (string));
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "07518199998");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "José Mario Corrêa Santos");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

Then ('Deve habilitar o campo Matricula Empregador', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35798"))), 30000).sendKeys("12017");
});

When ('Anexar arquivo  Cartão Autografo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(11)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão autógrafo (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(3)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Proposta de Adesão de Produtos e Serviços (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(2000);
    await driver.switchTo().frame(4);
});

Then ('Anexar arquivo Cartão autógrafo Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(11)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão autógrafo (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(3000);
    await driver.switchTo().frame(4);
});

Given ('O usuário selecionou o Objetivo - Cadastro PJ', async() => {
    await driver.wait(until.elementLocated(By.id("objetivo-3")), 300000).click();
});

When('Validar os dados mostrados estão corretos para Cadastro PJ - {string}', async (string) => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Cadastro PJ");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, (string));
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "00717799000131");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "LAPRODENTE LABORATORIO DE PROTESE DENTARIA LTDA ME");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});


Given ('Anexar arquivo  Cartão CNPJ Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(4)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão CNPJ (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(9)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Contrato Social ou Estatuto Social de constituição e alterações (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(11)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Certidões de verificação de situação de contrato (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Anexar arquivo de Cartão autógrafo Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(13)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Cartão autógrafo (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Given ('Anexar arquivo do Serasa Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(23)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Serasa (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Anexar arquivo do Bacén Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(24)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Bacen (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Anexar arquivo da Receita Federal Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(25)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Receita Federal (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

When ('Anexar arquivo   Comprovante de endereço Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(5)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Comprovante de residencia endereço (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});
 
When ('Validar os dados mostrados estão corretos para o Cadastro PJ - {string}', async(string) => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Cadastro PJ");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, (string));
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "07518199998");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "José Mario Corrêa Santos");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
}); 

Then ('Deve mostrar uma mensagem informando que o CNPJ já está cadastrado', async() => {
    let alert4 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textAlert4 = await alert4.getText();
    assert.deepStrictEqual(textAlert4, "Esse já CNPJ possui cadastro nessa cooperativa. Altere o objetivo da solicitação para atualização.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Then ('Cooperativa, Posto Selecionados', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35793"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > select > option:nth-child(17)")),30000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35795"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > select > option:nth-child(2)")),30000).click();
});

Given ('O CNPJ digitado já está cadastrado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 3000).sendKeys("00717799000131");
});

When ('Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(10)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Ata de eleição ou de posse Diretoria eou Síndico (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Deve aparecer uma mensagem informando o envio de relação de faturamento', async() => {
    let alert1 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-title")), 30000);
    let textAlert1 = await alert1.getText();
    assert.deepStrictEqual(textAlert1, "ATENÇÃO!");
    let alert2 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 30000);
    let textAlert2 = await alert2.getText();
    assert.deepStrictEqual(textAlert2, "O envio da relação de faturamento é obrigatório para empresas com mais de 90 dias de constituição. Empresas recém constituídas (máximo 90 dias de início das atividades) o faturamento não será obrigatório. Informar no fluxo a ausência de faturamento.");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Given ('O usuário selecionou o Objetivo - Procurador', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("objetivo-4"))), 30000).click();
});

When ('Preenchido a Conta do Outorgante', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35799"))), 30000).sendKeys("57843");
}); 

Then ('Preencher CPF Procurador e o Nome Completo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))), 30000).sendKeys("01819827062");
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35812"))), 30000).sendKeys("José Mario Corrêa Santos");
});

Given ('Ao clicar em Buscar', async() => {
    await driver.wait(until.elementLocated(By.id("btn-buscar")), 30000).click();
    //await driver.sleep(50000);
}); 

When ('Anexar Arquivo Procuração Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(6)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Procuração (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});

Then ('Deve anexar o arquivo Revogação Obrigatório', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(7)"))), 3000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Revogação (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
});  

When ('Validar os dados mostrados estão corretos para o Procurador - {string}', async(string) => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Procurador");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, (string));
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "01819827062");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "José Mario Corrêa Santos");

    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
});

Then ('Validar se os anexos estão corretos para Alterar Diversos Contextos', async() => {
    let anexo = await driver.wait(until.elementLocated(By.css("#ContainerAttach > div > a")), 3000);
    let selectanexo = await anexo.getAttribute("class");
    assert.deepStrictEqual(selectanexo, "conferencia-badge-primary");
});

Given ('O usuário validou os Arquivos anexados', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnsFormalization > span:nth-child(2)"))), 3000).click();
    let anexoAprovacao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#tab1 > div > div > p"))), 3000);
    let selectanexoAprovacao = await anexoAprovacao.getText();
    assert.deepStrictEqual(selectanexoAprovacao, "Ficha de Dados Cadastrais");
    let isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 3000);
    let selectisclickable = await isclickable.getAttribute("class");

    while (selectisclickable == "badge label-default approveDoc") {
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 3000).click();
            isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 3000);
            selectisclickable = await isclickable.getAttribute("class");
         }   
});

When ('O botão Aprovar é habilitado e clicado', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btnApprove"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
    await driver.sleep(10000);
}); 

Then ('Deve ir para a atividade de Salvar Documentos e Indexadores no ECM', async() => {
    await driver.wait(until.elementLocated(By.css("#frm > div.title > h1")), 30000);
    await driver.switchTo().defaultContent();
    await driver.wait(until.elementLocated(By.css("#cboxClose")), 30000).click();
});

Given ('O usuário marcou o checkbox Deseja realizar uma análise prévia de exceção?', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#pre-excecao > div > label"))), 30000).click();
})

Then ('Deve mostrar uma tooltip informativa Esse tipo de solicitação enquadra-se...', async() => {
    let mensagemIsPreExcecão = await driver.wait(until.elementLocated(By.css("#pre-excecao > div > label")), 3000);
    let resultsMensagemIsPreExcecao = await mensagemIsPreExcecão.getAttribute("data-pt-title");
    assert.deepStrictEqual(resultsMensagemIsPreExcecao, "Esse tipo de solicitação enquadra-se para quando não há todos os documentos em mãos e, necessita de uma aprovação da alçada competente. Após, atividade retorna ao requisitante para que possa, agora, complementar com os demais documentos exigidos pelo Objetivo + Contexto selecionado. Ao enviar entrará na fila do time BackOffice da UBR. Exemplo: Prospect / Cooperado apenas encaminhou composição de renda e, gostaria de saber se a UNICRED aprovaria tal renda antes de encaminhar demais documentos.");
});

When ('Selecionar o Tipo Exeção', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35787"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-excecao > div > div:nth-child(1) > div > select > option:nth-child(2)"))), 3000).click();
});

Then ('Preencher a Justificativa Exceção', async() => {
    await driver.wait(until.elementLocated(By.name("inp35786")), 3000).sendKeys("Teste Automatizado");
});

Then ('Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação', async() => {
    let analiseDeSolicitacao = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação']`)), 30000);
    let resultsAnaliseDeSolicitacao = await analiseDeSolicitacao.getText();
    assert.deepStrictEqual(resultsAnaliseDeSolicitacao, "Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação");
});

Given ('O usuário Assumiu a atividade e analisou a solicitação e validou os dados', async() => {
await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 50000).click();
 //Objetivo
 let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
 let resutadoObjetivo = await objetivo.getText();
 assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
 let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
 let resultadoCadastroPF = await cadastroPF.getText();
 assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
 //Cooperativa 
 let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
 let resultadoCooperativa = await cooperativa.getText();
 assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
 let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
 let resultadoCooperativa0515 = await cooperativa0515.getText();
 assert.deepStrictEqual(resultadoCooperativa0515, "0515");
 //Posto
 let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
 let resultadoPosto = await posto.getText();
 assert.deepStrictEqual(resultadoPosto, "Posto");
 let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
 let resultadoUnicredValorCapital = await unicredValorCapital.getText();
 assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
 //Contexto 
 let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
 let resultadoContexto = await contexto.getText();
 assert.deepStrictEqual(resultadoContexto, "Contexto");
 let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
 let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
 assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Diversos Contextos");
 //CPF/CNPJ 
 let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
 let resultadoCpf = await cpf.getText();
 assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
 let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
 let resultadoNumeroCpf = await numeroCpf.getText();
 assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
 let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
 let resultadoMotivo = await motivo.getText();
 assert.deepStrictEqual(resultadoMotivo, "Motivo");
 //Nome Completo 
 let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
 let resultadoNomeCompleto = await nomeCompleto.getText();
 assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
 let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
 let resultadoNome = await nome.getText();
 assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

 let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
 let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
 assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
 //É Cadastro Digital 
 let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
 let resultadoCadastroDigital = await cadastrodigital.getText();
 assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
 let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
 let resultadoSim = await sim.getText();
 assert.deepStrictEqual(resultadoSim, "Não");
 //É Media Comprovante?
 let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
 let resultadoMediaComprovante = await mediacomprovante.getText();
 assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
 let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
 let resultadoSimComprovante = await simComprovante.getText();
 assert.deepStrictEqual(resultadoSimComprovante, "Não");;
 //É uma pré exceção?
 let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
 let resultadoPreExcecao = await preExcecao.getText();
 assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
 let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
 let resultadoSimPreExcecao = await simPreExcecao.getText();
 assert.deepStrictEqual(resultadoSimPreExcecao, "Sim");
 //Conta aberta com procuração?
 let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
 let resultadocontaProcuracao = await contaProcuracao.getText();
 assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
 let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
 let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
 assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
 //Tem exceção 
 let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
 let resultadotemexcecao = await temexcecao.getText();
 assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
 let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
 let resultadosimTemexcecao = await simTemexcecao.getText();
 assert.deepStrictEqual(resultadosimTemexcecao, "Não");
 //É Conta espelho
 let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
 let resultadocontaEspelho = await contaEspelho.getText();
 assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
 let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
 let resultadosimcontaEspelho = await simcontaEspelho.getText();
 assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
  //É Reingresso?
  let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
  let resultadoreingresso = await reingresso.getText();
  assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
  let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
  let resultadosimreingresso = await simreingresso.getText();
  assert.deepStrictEqual(resultadosimreingresso, "Não");
  //Valor Média Extrato
  let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
  let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
  assert.deepStrictEqual(resultadovalorMediaExtrato, "");
  await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
  // Score Serasa 
  let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
  let resultadoscoreserasa = await scoreserasa.getText();
  assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
  let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
  let resultadosimscoreserasa = await simscoreserasa.getText();
  assert.deepStrictEqual(resultadosimscoreserasa, "");
  // Risco Serasa 
  let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
  let resultadoriscoserasa = await riscoserasa.getText();
  assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
  let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
  let resultadosimriscoserasa = await simriscoserasa.getText();
  assert.deepStrictEqual(resultadosimriscoserasa, "");
});  

When ('Aprovar Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Aprovada"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click();
}); 

Then ('Deve encaminhar para a tarefa Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral', async() => {
    let complementarSolicitacao = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral']`)), 30000);
    let resultscomplementarSolicitacao = await complementarSolicitacao.getText();
    assert.deepStrictEqual(resultscomplementarSolicitacao, "Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral");
});

Given ('O usuário validou se os campos estão com preenchimento correto', async() => {
 //Objetivo
 let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
 let resutadoObjetivo = await objetivo.getText();
 assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
 let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
 let resultadoCadastroPF = await cadastroPF.getText();
 assert.deepStrictEqual(resultadoCadastroPF, "Atualização PF");
 //Cooperativa 
 let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
 let resultadoCooperativa = await cooperativa.getText();
 assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
 let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
 let resultadoCooperativa0515 = await cooperativa0515.getText();
 assert.deepStrictEqual(resultadoCooperativa0515, "0515");
 //Posto
 let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
 let resultadoPosto = await posto.getText();
 assert.deepStrictEqual(resultadoPosto, "Posto");
 let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
 let resultadoUnicredValorCapital = await unicredValorCapital.getText();
 assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
 //Contexto 
 let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
 let resultadoContexto = await contexto.getText();
 assert.deepStrictEqual(resultadoContexto, "Contexto");
 let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
 let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
 assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Diversos Contextos");
 //CPF/CNPJ 
 let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
 let resultadoCpf = await cpf.getText();
 assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
 let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
 let resultadoNumeroCpf = await numeroCpf.getText();
 assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
 let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
 let resultadoMotivo = await motivo.getText();
 assert.deepStrictEqual(resultadoMotivo, "Motivo");
 //Nome Completo 
 let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
 let resultadoNomeCompleto = await nomeCompleto.getText();
 assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
 let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
 let resultadoNome = await nome.getText();
 assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

 let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
 let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
 assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
 //É Cadastro Digital 
 let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
 let resultadoCadastroDigital = await cadastrodigital.getText();
 assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
 let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
 let resultadoSim = await sim.getText();
 assert.deepStrictEqual(resultadoSim, "Não");
 //É Media Comprovante?
 let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
 let resultadoMediaComprovante = await mediacomprovante.getText();
 assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
 let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
 let resultadoSimComprovante = await simComprovante.getText();
 assert.deepStrictEqual(resultadoSimComprovante, "Não");;
 //É uma pré exceção?
 let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
 let resultadoPreExcecao = await preExcecao.getText();
 assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
 let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
 let resultadoSimPreExcecao = await simPreExcecao.getText();
 assert.deepStrictEqual(resultadoSimPreExcecao, "Sim");
 //Conta aberta com procuração?
 let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
 let resultadocontaProcuracao = await contaProcuracao.getText();
 assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
 let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
 let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
 assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
 //Tem exceção 
 let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
 let resultadotemexcecao = await temexcecao.getText();
 assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
 let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
 let resultadosimTemexcecao = await simTemexcecao.getText();
 assert.deepStrictEqual(resultadosimTemexcecao, "Não");
 //É Conta espelho
 let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
 let resultadocontaEspelho = await contaEspelho.getText();
 assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
 let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
 let resultadosimcontaEspelho = await simcontaEspelho.getText();
 assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
  //É Reingresso?
  let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
  let resultadoreingresso = await reingresso.getText();
  assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
  let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
  let resultadosimreingresso = await simreingresso.getText();
  assert.deepStrictEqual(resultadosimreingresso, "Não");
  //Valor Média Extrato
  let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
  let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
  assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
  // Score Serasa 
  let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
  let resultadoscoreserasa = await scoreserasa.getText();
  assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
  let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
  let resultadosimscoreserasa = await simscoreserasa.getText();
  assert.deepStrictEqual(resultadosimscoreserasa, "");
  // Risco Serasa 
  let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
  let resultadoriscoserasa = await riscoserasa.getText();
  assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
  let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
  let resultadosimriscoserasa = await simriscoserasa.getText();
  assert.deepStrictEqual(resultadosimriscoserasa, "");
  //Informações da exceção 
  let informacoesDeExcecao =  await driver.wait(until.elementLocated(By.css("#infos-excecao > h5")), 3000);
  let resultsinformacoesDeExcecao = await informacoesDeExcecao.getText();
  assert.deepStrictEqual(resultsinformacoesDeExcecao, "Informações da Exceção"); 
  let tipoDeExcecao =  await driver.wait(until.elementLocated(By.id("div35787")), 3000);
  let resultstipoDeExcecao = await tipoDeExcecao.getText();
  assert.deepStrictEqual(resultstipoDeExcecao, "Acatamento Restritivo"); 
  let justificativaDeExcecao =  await driver.wait(until.elementLocated(By.id("div35786")), 3000);
  let resultsjustificativaDeExcecao = await justificativaDeExcecao.getText();
  assert.deepStrictEqual(resultsjustificativaDeExcecao, "Teste Automatizado"); 
}); 

When ('O usuário anexar os documentos obrigatórios para Associação', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(1)")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(1)
    await driver.sleep(1000);
    let fileInput2 = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await fileInput2.sendKeys("C:/Unicred/Uploads/PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral v7/Proposta de Admissão e Ficha Matrícula (Obrigatório).txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(1000);
    await driver.switchTo().frame(4);
}); 

Then ('O usuário deve Clicar em Encaminhar Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
});

When ('O usuário validar os Arquivos anexados para isPreExceção', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnsFormalization > span:nth-child(2)"))), 3000).click();
    let isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 3000);
    let selectisclickable = await isclickable.getAttribute("class");

    while (selectisclickable == "badge label-default approveDoc") {
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 3000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(2) > span")), 3000).click();
            isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(2) > span")), 3000);
            selectisclickable = await isclickable.getAttribute("class");
         }   
});

Given ('O usuário marcou o checkbox Solicitação possui alguma exceção?', async() => {
   let isExcecao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#excecao > div > label"))), 3000);
   let resultsisExcecao = await isExcecao.getAttribute("data-pt-title");
   assert.deepStrictEqual(resultsisExcecao, 'Esse tipo de solicitação enquadra-se, quando possui alguma exceção em geral na requisição. Passará, então, por aprovação da alçada competente e depois diretamente para a fila do time BackOffice da UBR. Ao contrário da opção de "prévia de exceção", não retorna ao requisitante após aprovação. Observação: Apenas é possível selecionar uma exceção, mas redija no campo área de texto todas as exceções para fins de documentação em instância.');
   await driver.wait(until.elementIsVisible(driver.findElement(By.css("#excecao > div > label"))), 3000).click();
});

Given ('O usuário Assumiu a atividade e analisou a solicitação e validou os dados PJ isExceção', async() => {
 await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 50000).click();
 //Objetivo
 let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
 let resutadoObjetivo = await objetivo.getText();
 assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
 let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
 let resultadoCadastroPF = await cadastroPF.getText();
 assert.deepStrictEqual(resultadoCadastroPF, "Atualização PJ");
 //Cooperativa 
 let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
 let resultadoCooperativa = await cooperativa.getText();
 assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
 let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
 let resultadoCooperativa0515 = await cooperativa0515.getText();
 assert.deepStrictEqual(resultadoCooperativa0515, "0515");
 //Posto
 let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
 let resultadoPosto = await posto.getText();
 assert.deepStrictEqual(resultadoPosto, "Posto");
 let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
 let resultadoUnicredValorCapital = await unicredValorCapital.getText();
 assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
 //Contexto 
 let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
 let resultadoContexto = await contexto.getText();
 assert.deepStrictEqual(resultadoContexto, "Contexto");
 let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
 let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
 assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Diversos Contextos");
 //CPF/CNPJ 
 let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
 let resultadoCpf = await cpf.getText();
 assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
 let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
 let resultadoNumeroCpf = await numeroCpf.getText();
 assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
 let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
 let resultadoMotivo = await motivo.getText();
 assert.deepStrictEqual(resultadoMotivo, "Motivo");
 //Nome Completo 
 let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
 let resultadoNomeCompleto = await nomeCompleto.getText();
 assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
 let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
 let resultadoNome = await nome.getText();
 assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

 let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
 let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
 assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
 //É Cadastro Digital 
 let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
 let resultadoCadastroDigital = await cadastrodigital.getText();
 assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
 let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
 let resultadoSim = await sim.getText();
 assert.deepStrictEqual(resultadoSim, "Não");
 //É Media Comprovante?
 let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
 let resultadoMediaComprovante = await mediacomprovante.getText();
 assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
 let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
 let resultadoSimComprovante = await simComprovante.getText();
 assert.deepStrictEqual(resultadoSimComprovante, "Não");;
 //É uma pré exceção?
 let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
 let resultadoPreExcecao = await preExcecao.getText();
 assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
 let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
 let resultadoSimPreExcecao = await simPreExcecao.getText();
 assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
 //Conta aberta com procuração?
 let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
 let resultadocontaProcuracao = await contaProcuracao.getText();
 assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
 let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
 let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
 assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
 //Tem exceção 
 let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
 let resultadotemexcecao = await temexcecao.getText();
 assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
 let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
 let resultadosimTemexcecao = await simTemexcecao.getText();
 assert.deepStrictEqual(resultadosimTemexcecao, "Sim");
 //É Conta espelho
 let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
 let resultadocontaEspelho = await contaEspelho.getText();
 assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
 let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
 let resultadosimcontaEspelho = await simcontaEspelho.getText();
 assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
  //É Reingresso?
  let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
  let resultadoreingresso = await reingresso.getText();
  assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
  let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
  let resultadosimreingresso = await simreingresso.getText();
  assert.deepStrictEqual(resultadosimreingresso, "Não");
  //Valor Média Extrato
  let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
  let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
  assert.deepStrictEqual(resultadovalorMediaExtrato, "");
  // Score Serasa 
  let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
  let resultadoscoreserasa = await scoreserasa.getText();
  assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
  let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
  let resultadosimscoreserasa = await simscoreserasa.getText();
  assert.deepStrictEqual(resultadosimscoreserasa, "");
  // Risco Serasa 
  let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
  let resultadoriscoserasa = await riscoserasa.getText();
  assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
  let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
  let resultadosimriscoserasa = await simriscoserasa.getText();
  assert.deepStrictEqual(resultadosimriscoserasa, "");
  //Informações da exceção 
  let informacoesDeExcecao =  await driver.wait(until.elementLocated(By.css("#infos-excecao > h5")), 3000);
  let resultsinformacoesDeExcecao = await informacoesDeExcecao.getText();
  assert.deepStrictEqual(resultsinformacoesDeExcecao, "Informações da Exceção"); 
  let tipoDeExcecao =  await driver.wait(until.elementLocated(By.id("div35787")), 3000);
  let resultstipoDeExcecao = await tipoDeExcecao.getText();
  assert.deepStrictEqual(resultstipoDeExcecao, "Acatamento Restritivo"); 
  let justificativaDeExcecao =  await driver.wait(until.elementLocated(By.id("div35786")), 3000);
  let resultsjustificativaDeExcecao = await justificativaDeExcecao.getText();
  assert.deepStrictEqual(resultsjustificativaDeExcecao, "Teste Automatizado"); 
}); 

Given ('O usuário validou se os campos estão com preenchimento correto os dados PJ isExceção', async() => {
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Atualização PJ");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Diversos Contextos");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");
   
    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Sim");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Media Extrato");
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
     //Informações da exceção 
     let informacoesDeExcecao =  await driver.wait(until.elementLocated(By.css("#infos-excecao > h5")), 3000);
     let resultsinformacoesDeExcecao = await informacoesDeExcecao.getText();
     assert.deepStrictEqual(resultsinformacoesDeExcecao, "Informações da Exceção"); 
     let tipoDeExcecao =  await driver.wait(until.elementLocated(By.id("div35787")), 3000);
     let resultstipoDeExcecao = await tipoDeExcecao.getText();
     assert.deepStrictEqual(resultstipoDeExcecao, "Acatamento Restritivo"); 
     let justificativaDeExcecao =  await driver.wait(until.elementLocated(By.id("div35786")), 3000);
     let resultsjustificativaDeExcecao = await justificativaDeExcecao.getText();
     assert.deepStrictEqual(resultsjustificativaDeExcecao, "Teste Automatizado"); 
});

When ('O usuário validar os Arquivos anexados para isExceção', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnsFormalization > span:nth-child(2)"))), 30000).click();
    let isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 30000);
    let selectisclickable = await isclickable.getAttribute("class");

    while (selectisclickable == "badge label-default approveDoc") {
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 30000).click();
            isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div > span")), 30000);
            selectisclickable = await isclickable.getAttribute("class");
         }   
});

Given ('O usuário	Assumiu Atividade de Conferir Informações e Documentos', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Conferir Informações e Documentos']`)), 30000);
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 3000).click();
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Given ('O usuário marcou o checkbox Renda é comprovada através de média de comprovantes?', async() => {
    await driver.wait(until.elementLocated(By.css("#media-comprovante > div > label")), 3000).click();
});

When ('Validar a mensagem O valor solicitado de média pode ser alterado pelo diretor...', async() => {
    let mensagemMediaComprovante = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let resultsmensagemMediaComprovante = await mensagemMediaComprovante.getText();
    assert.deepStrictEqual(resultsmensagemMediaComprovante, "O valor solicitado de média pode ser alterado pelo diretor da cooperativa ou alçada competente via instância do processo associação, abertura de conta ou atualização cadastral no INTEGRA");
});

Then ('Preencher o Valor Média Extrato', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35810"))), 30000).sendKeys("500000");
});

Then ('Deve mostrar a Profissão, Score Serasa e Risco Serasa', async() => {
    let riscoSerasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > input")), 3000);
    let resultsriscoSerasa = await riscoSerasa.getAttribute("value label");
    //assert.deepStrictEqual(resultsriscoSerasa, "null");
});

Given ('O usuário Assumiu a atividade e analisou a solicitação e validou os dados PJ isMediaComprovante', async() => {
 await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 50000).click();
 //Objetivo
 let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
 let resutadoObjetivo = await objetivo.getText();
 assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
 let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
 let resultadoCadastroPF = await cadastroPF.getText();
 assert.deepStrictEqual(resultadoCadastroPF, "Atualização PJ");
 //Cooperativa 
 let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
 let resultadoCooperativa = await cooperativa.getText();
 assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
 let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
 let resultadoCooperativa0515 = await cooperativa0515.getText();
 assert.deepStrictEqual(resultadoCooperativa0515, "0515");
 //Posto
 let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
 let resultadoPosto = await posto.getText();
 assert.deepStrictEqual(resultadoPosto, "Posto");
 let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
 let resultadoUnicredValorCapital = await unicredValorCapital.getText();
 assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
 //Contexto 
 let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
 let resultadoContexto = await contexto.getText();
 assert.deepStrictEqual(resultadoContexto, "Contexto");
 let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
 let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
 assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Alterar Diversos Contextos");
 //CPF/CNPJ 
 let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
 let resultadoCpf = await cpf.getText();
 assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
 let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
 let resultadoNumeroCpf = await numeroCpf.getText();
 assert.deepStrictEqual(resultadoNumeroCpf, "13031713923");
 let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
 let resultadoMotivo = await motivo.getText();
 assert.deepStrictEqual(resultadoMotivo, "Motivo");
 let motivocredito = await driver.wait(until.elementLocated(By.css("#div35781")), 3000);
 let resultadomotivocredito = await motivocredito.getText();
 assert.deepStrictEqual(resultadomotivocredito, "Crédito");
 //Nome Completo 
 let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
 let resultadoNomeCompleto = await nomeCompleto.getText();
 assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
 let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
 let resultadoNome = await nome.getText();
 assert.deepStrictEqual(resultadoNome, "MANUELA WIETHORN JUNQUEIRA");

 let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
 let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
 assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
 //É Cadastro Digital 
 let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
 let resultadoCadastroDigital = await cadastrodigital.getText();
 assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
 let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
 let resultadoSim = await sim.getText();
 assert.deepStrictEqual(resultadoSim, "Não");
 //É Media Comprovante?
 let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
 let resultadoMediaComprovante = await mediacomprovante.getText();
 assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
 let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
 let resultadoSimComprovante = await simComprovante.getText();
 assert.deepStrictEqual(resultadoSimComprovante, "Sim");;
 //É uma pré exceção?
 let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
 let resultadoPreExcecao = await preExcecao.getText();
 assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
 let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
 let resultadoSimPreExcecao = await simPreExcecao.getText();
 assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
 //Conta aberta com procuração?
 let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
 let resultadocontaProcuracao = await contaProcuracao.getText();
 assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
 let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
 let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
 assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
 //Tem exceção 
 let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
 let resultadotemexcecao = await temexcecao.getText();
 assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
 let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
 let resultadosimTemexcecao = await simTemexcecao.getText();
 assert.deepStrictEqual(resultadosimTemexcecao, "Não");
 //É Conta espelho
 let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
 let resultadocontaEspelho = await contaEspelho.getText();
 assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
 let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
 let resultadosimcontaEspelho = await simcontaEspelho.getText();
 assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
  //É Reingresso?
  let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
  let resultadoreingresso = await reingresso.getText();
  assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
  let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
  let resultadosimreingresso = await simreingresso.getText();
  assert.deepStrictEqual(resultadosimreingresso, "Não");
  //Valor Média Extrato
  let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
  let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
  assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
  // Score Serasa 
  let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
  let resultadoscoreserasa = await scoreserasa.getText();
  assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
  let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
  let resultadosimscoreserasa = await simscoreserasa.getText();
  assert.deepStrictEqual(resultadosimscoreserasa, "");
  // Risco Serasa 
  let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
  let resultadoriscoserasa = await riscoserasa.getText();
  assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
  let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
  let resultadosimriscoserasa = await simriscoserasa.getText();
  assert.deepStrictEqual(resultadosimriscoserasa, "ALTÍSSIMO");
}); 

When ('O usuário marcar o checkbox Abertura de Conta Espelho?', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#conta-espelho > div > label"))), 30000).click();
});

Then ('Validar o Tooltio para Abertura de Conta Espelho', async() => {
    let tooltipContaEspelho = await driver.wait(until.elementLocated(By.css("#conta-espelho > div > label")), 3000);
    let resultstooltipContaEspelho = await tooltipContaEspelho.getAttribute("data-pt-title");
    assert.deepStrictEqual(resultstooltipContaEspelho, "Esse tipo de solicitação realizará também, uma abertura de conta no Banco do Brasil, o que possui custo adicional para a Unicred. Por esse motivo passa por aprovação em alçada competente antes de entrar na fila do time BackOffice da UBR.");
});

Given ('O usuário Assumiu a atividade e analisou a solicitação e validou os dados Cadastro PF isContaEspelho', async() => {
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 50000).click();
    //Objetivo
    let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
    let resutadoObjetivo = await objetivo.getText();
    assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
    let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
    let resultadoCadastroPF = await cadastroPF.getText();
    assert.deepStrictEqual(resultadoCadastroPF, "Cadastro PF");
    //Cooperativa 
    let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
    let resultadoCooperativa = await cooperativa.getText();
    assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
    let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
    let resultadoCooperativa0515 = await cooperativa0515.getText();
    assert.deepStrictEqual(resultadoCooperativa0515, "0515");
    //Posto
    let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
    let resultadoPosto = await posto.getText();
    assert.deepStrictEqual(resultadoPosto, "Posto");
    let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
    let resultadoUnicredValorCapital = await unicredValorCapital.getText();
    assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
    //Contexto 
    let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
    let resultadoContexto = await contexto.getText();
    assert.deepStrictEqual(resultadoContexto, "Contexto");
    let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
    let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Conta Salário");
    //CPF/CNPJ 
    let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
    let resultadoCpf = await cpf.getText();
    assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
    let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
    let resultadoNumeroCpf = await numeroCpf.getText();
    assert.deepStrictEqual(resultadoNumeroCpf, "07518199998");
    let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
    let resultadoMotivo = await motivo.getText();
    assert.deepStrictEqual(resultadoMotivo, "Motivo");
    let motivocredito = await driver.wait(until.elementLocated(By.css("#div35781")), 3000);
    let resultadomotivocredito = await motivocredito.getText();
    assert.deepStrictEqual(resultadomotivocredito, "Outros");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "José Mario Corrêa Santos");
   
    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Não");
    //É Media Comprovante?
    let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
    let resultadoMediaComprovante = await mediacomprovante.getText();
    assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
    let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
    let resultadoSimComprovante = await simComprovante.getText();
    assert.deepStrictEqual(resultadoSimComprovante, "Não");;
    //É uma pré exceção?
    let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
    let resultadoPreExcecao = await preExcecao.getText();
    assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
    let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
    let resultadoSimPreExcecao = await simPreExcecao.getText();
    assert.deepStrictEqual(resultadoSimPreExcecao, "Não");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
    //Tem exceção 
    let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
    let resultadotemexcecao = await temexcecao.getText();
    assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
    let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
    let resultadosimTemexcecao = await simTemexcecao.getText();
    assert.deepStrictEqual(resultadosimTemexcecao, "Não");
    //É Conta espelho
    let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
    let resultadocontaEspelho = await contaEspelho.getText();
    assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
    let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
    let resultadosimcontaEspelho = await simcontaEspelho.getText();
    assert.deepStrictEqual(resultadosimcontaEspelho, "Sim");
     //É Reingresso?
     let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
     let resultadoreingresso = await reingresso.getText();
     assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
     let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
     let resultadosimreingresso = await simreingresso.getText();
     assert.deepStrictEqual(resultadosimreingresso, "Não");
     //Valor Média Extrato
     let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
     let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
     assert.deepStrictEqual(resultadovalorMediaExtrato, "");
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "");
}); 

When ('O usuário validar os Arquivos anexados para isContaEspelho', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnsFormalization > span:nth-child(2)"))), 30000).click();
    let isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000);
    let selectisclickable = await isclickable.getAttribute("class");

    while (selectisclickable == "badge label-default approveDoc") {
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(2) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(3) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(4) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(5) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(6) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(7) > span")), 30000).click();
            await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(8) > span")), 30000).click();
            isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000);
            selectisclickable = await isclickable.getAttribute("class");
         }   
});

Then ('Deve ir para a atividade de Aguardar Retorno da Remessa BB 1 dia', async() => {
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Aguardar Retorno da Remessa BB (1 dia)']`)), 6000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Aguardar Retorno da Remessa BB (1 dia)");
    await driver.wait(until.elementLocated(By.id("btnFinish")), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click(); 
});

Given ('O usuário está localizado em Verificar Retorno Abertura da Conta Espelho', async() => {
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Retorno Abertura da Conta Espelho']`)), 6000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Verificar Retorno Abertura da Conta Espelho");
});

When ('Conta Espelho Aberto', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Conta Espelho Aberta"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 30000).click(); 
});

Then ('O usuário seleciona Necessita de Aprovação da Diretoria', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Necessita de Aprovação da Diretoria"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

Then ('Encaminhar Novas Informações', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Novas Informações Encaminhadas"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

When ('O usuário validar os Arquivos anexados para Cadastro PF - Conta Corrente', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnsFormalization > span:nth-child(2)"))), 30000).click();
    let isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000);
    let selectisclickable = await isclickable.getAttribute("class");
    let isclickable2 = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(2) > span")), 30000);
    let selectisclickable2 = await isclickable2.getAttribute("class");

    while (selectisclickable == "badge label-default approveDoc") {
        await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000).click();
        await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(2) > span")), 30000).click();
        isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(2) > span")), 30000);
        selectisclickable = await isclickable.getAttribute("class");
    }   
});

Given ('Direcionou para a atividade Regularizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação', async() => {
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Regularizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação']`)), 60000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Regularizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação");
});

Then ('O usuário seleciona Aprovar com Pendência', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Aprovado com Pendência"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
}); 

Given ('Foi direcionado para a atividade Verificar Pendências para Finalizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral', async() => {
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Pendência(s) para Finalizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral']`)), 60000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Verificar Pendência(s) para Finalizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral");
});

Then ('Deve Encaminhar Pendências para Finalização da Solicitação', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Encaminhar Pendências para Finalização da Solicitação"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
}); 

When ('Solicitar Mais Informações', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Mais Informações Solicitadas"))), 300000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 300000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 300000).click();
});

Given ('O usuário Assumiu a atividade e analisou a solicitação e validou os dados para Cadastro PJ', async() => {
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 50000).click();
 //Objetivo
 let objetivo = await driver.wait(until.elementLocated(By.css("#div-objetivo > div > label")), 3000);
 let resutadoObjetivo = await objetivo.getText();
 assert.deepStrictEqual(resutadoObjetivo, "Objetivo");
 let cadastroPF = await driver.wait(until.elementLocated(By.id("div35779")), 3000);
 let resultadoCadastroPF = await cadastroPF.getText();
 assert.deepStrictEqual(resultadoCadastroPF, "Cadastro PJ");
 //Cooperativa 
 let cooperativa = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > label")), 3000);
 let resultadoCooperativa = await cooperativa.getText();
 assert.deepStrictEqual(resultadoCooperativa, "Cooperativa");
 let cooperativa0515 = await driver.wait(until.elementLocated(By.id("div35793")), 3000);
 let resultadoCooperativa0515 = await cooperativa0515.getText();
 assert.deepStrictEqual(resultadoCooperativa0515, "0515");
 //Posto
 let posto = await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > label")), 3000);
 let resultadoPosto = await posto.getText();
 assert.deepStrictEqual(resultadoPosto, "Posto");
 let unicredValorCapital = await driver.wait(until.elementLocated(By.id("div35795")), 3000);
 let resultadoUnicredValorCapital = await unicredValorCapital.getText();
 assert.deepStrictEqual(resultadoUnicredValorCapital, "UNICRED VALOR CAPITAL");
 //Contexto 
 let contexto = await driver.wait(until.elementLocated(By.css("#div-contexto > div > label")), 3000);
 let resultadoContexto = await contexto.getText();
 assert.deepStrictEqual(resultadoContexto, "Contexto");
 let AssociadoApenasMatricula = await driver.wait(until.elementLocated(By.id("div35780")), 3000);
 let resultadoAssociadoApenasMatricula = await AssociadoApenasMatricula.getText();
 assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Vendedor");
 //CPF/CNPJ 
 let cpf = await driver.wait(until.elementLocated(By.css("#div-cpf-cnpj > label")), 3000);
 let resultadoCpf = await cpf.getText();
 assert.deepStrictEqual(resultadoCpf, "CPF/CNPJ");
 let numeroCpf = await driver.wait(until.elementLocated(By.id("div35782")), 3000);
 let resultadoNumeroCpf = await numeroCpf.getText();
 assert.deepStrictEqual(resultadoNumeroCpf, "07518199998");
 let motivo = await driver.wait(until.elementLocated(By.css("#div-motivo > div > label")), 3000);
 let resultadoMotivo = await motivo.getText();
 assert.deepStrictEqual(resultadoMotivo, "Motivo");
 //Nome Completo 
 let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
 let resultadoNomeCompleto = await nomeCompleto.getText();
 assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
 let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
 let resultadoNome = await nome.getText();
 assert.deepStrictEqual(resultadoNome, "José Mario Corrêa Santos");

 let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
 let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
 assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
 //É Cadastro Digital 
 let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
 let resultadoCadastroDigital = await cadastrodigital.getText();
 assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
 let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
 let resultadoSim = await sim.getText();
 assert.deepStrictEqual(resultadoSim, "Não");
 //É Media Comprovante?
 let mediacomprovante = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(5) > div > label")), 3000);
 let resultadoMediaComprovante = await mediacomprovante.getText();
 assert.deepStrictEqual(resultadoMediaComprovante, "É Media Comprovante?");
 let simComprovante = await driver.wait(until.elementLocated(By.id("div35783")), 3000);
 let resultadoSimComprovante = await simComprovante.getText();
 assert.deepStrictEqual(resultadoSimComprovante, "Não");;
 //É uma pré exceção?
 let preExcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(2) > div > label")), 3000);
 let resultadoPreExcecao = await preExcecao.getText();
 assert.deepStrictEqual(resultadoPreExcecao, "É uma pré exceção?");
 let simPreExcecao = await driver.wait(until.elementLocated(By.id("div35813")), 3000);
 let resultadoSimPreExcecao = await simPreExcecao.getText();
 assert.deepStrictEqual(resultadoSimPreExcecao, "Sim");
 //Conta aberta com procuração?
 let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
 let resultadocontaProcuracao = await contaProcuracao.getText();
 assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
 let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
 let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
 assert.deepStrictEqual(resultadosimcontaProcuracao, "Não");
 //Tem exceção 
 let temexcecao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(3) > div > label")), 3000);
 let resultadotemexcecao = await temexcecao.getText();
 assert.deepStrictEqual(resultadotemexcecao, "Tem Exceção?");
 let simTemexcecao = await driver.wait(until.elementLocated(By.id("div35785")), 3000);
 let resultadosimTemexcecao = await simTemexcecao.getText();
 assert.deepStrictEqual(resultadosimTemexcecao, "Não");
 //É Conta espelho
 let contaEspelho = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(8) > div > label")), 3000);
 let resultadocontaEspelho = await contaEspelho.getText();
 assert.deepStrictEqual(resultadocontaEspelho, "É Conta Espelho?");
 let simcontaEspelho = await driver.wait(until.elementLocated(By.id("div35802")), 3000);
 let resultadosimcontaEspelho = await simcontaEspelho.getText();
 assert.deepStrictEqual(resultadosimcontaEspelho, "Não");
  //É Reingresso?
  let reingresso = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(4) > div > label")), 3000);
  let resultadoreingresso = await reingresso.getText();
  assert.deepStrictEqual(resultadoreingresso, "É Reingresso?");
  let simreingresso = await driver.wait(until.elementLocated(By.id("div35784")), 3000);
  let resultadosimreingresso = await simreingresso.getText();
  assert.deepStrictEqual(resultadosimreingresso, "Não");
  //Valor Média Extrato
  let valorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > label")), 3000);
  let resultadovalorMediaExtrato = await valorMediaExtrato.getText();
  assert.deepStrictEqual(resultadovalorMediaExtrato, "");
  await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
  // Score Serasa 
  let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
  let resultadoscoreserasa = await scoreserasa.getText();
  assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
  let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
  let resultadosimscoreserasa = await simscoreserasa.getText();
  assert.deepStrictEqual(resultadosimscoreserasa, "");
  // Risco Serasa 
  let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
  let resultadoriscoserasa = await riscoserasa.getText();
  assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
  let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
  let resultadosimriscoserasa = await simriscoserasa.getText();
  assert.deepStrictEqual(resultadosimriscoserasa, "");
});

When ('Deve direcionar para Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral', async() => {
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral']`)), 60000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 30000).click();
});

When ('O usuário validar os Arquivos anexados Conta Corrente', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#btnsFormalization > span:nth-child(2)"))), 30000).click();
    let isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000);
    let selectisclickable = await isclickable.getAttribute("class");
   

    while (selectisclickable == "badge label-default approveDoc") {
        await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000).click();
        isclickable = await driver.wait(until.elementLocated(By.css("#tab1 > div > div:nth-child(1) > span")), 30000);
        selectisclickable = await isclickable.getAttribute("class");
    }   
});

When ('Solicitar Mais Informações e preencher a justificativa', async() => {
    await driver.wait(until.elementLocated(By.xpath("//*[@id='customBtn_Mais Informações Solicitadas']")), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

When ('Preencher os campos e inserir um CNPJ com Restrição e Clicar em buscar', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35782"))),30000).sendKeys("10333971000107");
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > select > option:nth-child(2)")),30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35812"))),30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btn-buscar"))),30000).click();
    await driver.sleep(3000);
});

Then ('Ocorrer uma mensagem informando que o CNPJ possui Restrição', async() => {
    let alerta = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-adicionais > div.alert.alert-error"))), 30000).getText();
    assert.deepStrictEqual(alerta, "O CPF/CNPJ em questão foi encontrado em uma lista de sanções ou alguma lista restritiva. Assim sendo, após encaminhamento da solicitação será gerado uma atividade para o time de PLD da UBR, que emitirá parecer da restrição. O parecer será enviado diretamente para a cooperativa caso a restrição se confirme ou seguirá para as próximas atividades já existentes do processo. Seguem informações: BORGES E SILVA SERVICOS DE CONSULTAS MEDICAS LTDA - 10333971000107, lista: OFAC - SDN");
});

Given ('Estamos na atividade Analisar Solicitação de Associação ou Abertura de Conta que Enquadrou-se em Lista Restritiva', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Associação ou Abertura de Conta que Enquadrou-se em Lista Restritiva']`)), 60000);
});

When ('Clicar em Restrição Confirmada', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Restrição Confirmada"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("inpDsReasonInputReason"))), 3000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 3000).click();
}); 

Then ('Encaminhar para Verificar Parecer do CPF-CNPJ Identificado em Lista Restritiva', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Verificar Parecer do CPF/CNPJ Identificado em  Lista Restritiva / Sanções de Solicitação de Associação, Abertura de Conta ou Atualização Cadastral']`)), 60000);
});

When ('Clicar em Restrição Não Confirmada', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Restrição Não Confirmada"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 3000).click();
}); 

When ('Solicitar Mais Informações e ao habilitar preencher a justificativa', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Mais Informações Solicitadas"))), 30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#inpDsReasonInputReason"))), 30000).sendKeys("Teste Automatizado");
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("BtnConfirmReason"))), 30000).click();
});

Given ('Retornamos na atividade Analisar Solicitação de Associação ou Abertura de Conta que Enquadrou-se em Lista Restritiva', async() => {
    await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Analisar Solicitação de Associação ou Abertura de Conta que Enquadrou-se em Lista Restritiva ']`)), 60000);
});