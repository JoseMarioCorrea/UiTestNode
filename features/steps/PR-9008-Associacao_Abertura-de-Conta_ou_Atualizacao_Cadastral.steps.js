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

When ('O usuário seleciona o Contexto - Alterar Diversos Contextos', async() => {
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
    await driver.wait(until.elementLocated(By.name("inpCodPositionArea")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#controllers > div.alert.alert-info > div > select > option:nth-child(3)"))), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("customBtn_Solicitação Encaminhada"))), 3000).click();
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

When ('O usuário seleciona o Contexto - Alterar Endereço', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-2")),30000).click();
});

Then ('Selecionar o Motivo Campanhas', async() => {
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

When ('O usuário seleciona o Contexto - Alterar Estado Civil', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-3")),30000).click();
});

Then ('Selecionar o Motivo Movimentação na Cooperativa', async() => {
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

When ('O usuário seleciona o Contexto - Alterar Nome', async() => {
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

When ('O usuário seleciona o Contexto - Alterar Renda', async() => {
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

When ('O usuário seleciona o Contexto - CC para Associado que possui apenas matrícula', async() => {
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

When ('O usuário seleciona o Contexto - Conta Salário', async() => {
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

When ('O usuário seleciona o Contexto - Excluir Segundo Titular por Óbito', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-7")),30000).click();
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

When ('O usuário seleciona o Contexto - Excluir Titularidade', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-8")),30000).click();
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

