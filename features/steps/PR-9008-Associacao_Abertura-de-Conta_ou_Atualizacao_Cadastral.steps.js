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

Given ('O usuário está localizado na Seção Informaçoes da Solicitação', async () => {
    let titulo1 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#main > h4"))), 5000);
    let textTitulo1 = await titulo1.getText();
    assert.deepStrictEqual(textTitulo1, "Informações da Solicitação");
});

When ('Selecionar Cadastro PF', async() =>{
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("objetivo-2"))),30000).click();
}); 

Then ('Contexto Associado | Apenas matrícula', async() => {
    await driver.wait(until.elementLocated(By.id("contexto-0")),30000).click();
}); 

Then ('Deve auto selecionar o Motivo - Outros', async() => {
    await driver.wait(until.elementLocated(By.id("motivo-3")),30000).click();
});  

Given ('O usuário prencheu os campos acima e habilitou os novos campos Cooperativa Posto CPF-CNPJ Nome Completo', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35793"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(1) > div > select > option:nth-child(17)")),30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35795"))),30000).click();
    await driver.wait(until.elementLocated(By.css("#step-2 > div:nth-child(2) > div > select > option:nth-child(2)")),30000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35812"))),30000).sendKeys("José Mario Corrêa Santos ");
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
    await driver.wait(until.elementIsVisible(driver.findElement(By.id("btn-buscar"))),30000).click();
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

Given ('O usuário está localizado em Informações Adicionais', async() => {
    let titulo2 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-adicionais > h4"))), 3000);
    let textTitulo2 = await titulo2.getText();
    assert.deepStrictEqual(textTitulo2, "Informações Adicionais");
}); 

Then ('Necessário validar a mensagem tooltip explicativa de Abertura de Conta Espelho?', async() => {
    let tooltip = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#conta-espelho > div > label"))), 3000);
    let textTooltip = await tooltip.getAttribute('data-pt-title');
    assert.deepStrictEqual(textTooltip, "Esse tipo de solicitação realizará também, uma abertura de conta no Banco do Brasil, o que possui custo adicional para a Unicred. Por esse motivo passa por aprovação em alçada competente antes de entrar na fila do time BackOffice da UBR.");
});

Then ('Necessário validar a mensagem tooltip explicativa de Possui Assinatura Digital?', async() => {
    let tooltip2 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cadastro-digital > div > label"))), 3000);
    let textTooltip2 = await tooltip2.getAttribute('data-pt-title');
    assert.deepStrictEqual(textTooltip2, "Esse tipo de solicitação apenas não obrigará o documento cartão autógrafo para dar seguimento na solicitação em questão. Assinaturas digitais ainda são realizadas pelo processo PR 9008 - Assinatura Digital.");
});

Then ('Necessário validar a mensagem tooltip explicativa de Deseja realizar uma análise prévia de exceção?', async() => {
    let tooltip3 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#pre-excecao > div > label"))), 3000);
    let textTooltip3 = await tooltip3.getAttribute('data-pt-title');
    assert.deepStrictEqual(textTooltip3, "Esse tipo de solicitação enquadra-se para quando não há todos os documentos em mãos e, necessita de uma aprovação da alçada competente. Após, atividade retorna ao requisitante para que possa, agora, complementar com os demais documentos exigidos pelo Objetivo + Contexto selecionado. Ao enviar entrará na fila do time BackOffice da UBR. Exemplo: Prospect / Cooperado apenas encaminhou composição de renda e, gostaria de saber se a UNICRED aprovaria tal renda antes de encaminhar demais documentos.");
});

Then ('Necessário validar a mensagem tooltip explicativa de Solicitação possui alguma exceção?', async() => {
    let tooltip4 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#excecao > div > label"))), 3000);
    let textTooltip4 = await tooltip4.getAttribute('data-pt-title');
    assert.deepStrictEqual(textTooltip4, 'Esse tipo de solicitação enquadra-se, quando possui alguma exceção em geral na requisição. Passará, então, por aprovação da alçada competente e depois diretamente para a fila do time BackOffice da UBR. Ao contrário da opção de "prévia de exceção", não retorna ao requisitante após aprovação. Observação: Apenas é possível selecionar uma exceção, mas redija no campo área de texto todas as exceções para fins de documentação em instância.');
});

Given ('O usuário habilita a primeira flag Abertura de Conta Espelho', async() => {
    await driver.wait(until.elementLocated(By.css("#conta-espelho > div > label")),30000).click();
}); 

When ('O usuário habiliar a segunda flag - Possui Assinatura Digital?', async() => {
    await driver.wait(until.elementLocated(By.css("#cadastro-digital > div > label")),30000).click();
});

Then ('Deve aprecer uma mensagem em tela mostrando - Essa opção apenas retira a obrigatoriedade do cartão autógrafo. Assinatura digital ainda deve ser feita pelo PR 9008 - Assinatura Digital', async() => {
    let alert4 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-title")), 3000);
    let textAlert4 = await alert4.getText();
    assert.deepStrictEqual(textAlert4, "Aviso!");
    let alert5 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textAlert5 = await alert5.getText();
    assert.deepStrictEqual(textAlert5, "Essa opção apenas retira a obrigatoriedade do cartão autógrafo. Assinatura digital ainda deve ser feita pelo PR 9008 - Assinatura Digital");
});

Given ('O usuário marca a flag - Abertura de Conta Com Procuração?', async() => {
    await driver.wait(until.elementLocated(By.css("#abertura-procuracao > div > label")),30000).click();
});

When ('O usuário marcar a flag - Renda é comprovada através de média de comprovantes?', async() => {
    await driver.wait(until.elementLocated(By.css("#media-comprovante > div > label")),30000).click();
});

Then ('Deve aparecer um mensagem em tela mostrando - O valor solicitado de média pode ser alterado pelo diretor da cooperativa ou alçada competente via instância do processo associação, abertura de conta ou atualização cadastral no INTEGRA', async() => {
    let alert6 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-title")), 3000);
    let textAlert6 = await alert6.getText();
    assert.deepStrictEqual(textAlert6, "ATENÇÃO!");
    let alert7 = await driver.wait(until.elementLocated(By.css("#toast-container > div > div.toast-message")), 3000);
    let textAlert7 = await alert7.getText();
    assert.deepStrictEqual(textAlert7, "O valor solicitado de média pode ser alterado pelo diretor da cooperativa ou alçada competente via instância do processo associação, abertura de conta ou atualização cadastral no INTEGRA");
});

Then ('Deve abrir o campo Valor Média Extrato', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp35810"))),30000).sendKeys("589029");
    await driver.wait(until.elementLocated(By.css("#toast-container > div > button")), 3000).click();
});

Given ('O usuário marca a flag - Deseja realizar uma análise prévia de exceção?', async() => {
    await driver.wait(until.elementLocated(By.css("#pre-excecao > div > label")),30000).click();
});

When ('Abrir o campo - Informações da Exceção', async() => {
    let titulo2 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-excecao > h5"))), 3000);
    let textTitulo2 = await titulo2.getText();
    assert.deepStrictEqual(textTitulo2, "Informações da Exceção");
});

Then ('Deve preencher os campos da Exceção', async() => {
    await driver.wait(until.elementLocated(By.name("inp35787")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#infos-excecao > div > div:nth-child(1) > div > select > option:nth-child(2)"))), 3000).click();
    //Justificativa Exceção
    await driver.wait(until.elementLocated(By.name("inp35786")), 3000).sendKeys("Justificativa do Teste Automatizado");
}); 

Given ('O usuário marca a flag - Solicitação possui alguma exceção?', async() => {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#excecao > div > label"))),30000).click();
}); 

When ('Clicar em Buscar', async() => {
    await driver.wait(until.elementLocated(By.id("btn-buscar")), 3000).click();
});

Then ('Deve habilitar os campos Profissão, Score Serasa, Risco Serasa', async() => {
    let campoProfissao = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-profissao > label"))), 3000);
    let textCampoProfissao = await campoProfissao.getText();
    assert.deepStrictEqual(textCampoProfissao, "Profissão");
    let campoScoreSerasa = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-score-serasa > label"))), 3000);
    let textCampoScoreSerasa = await campoScoreSerasa.getText();
    assert.deepStrictEqual(textCampoScoreSerasa, "Score Serasa");
    await driver.wait(until.elementLocated(By.name("inp35815")), 3000).sendKeys("80000");
    let alert4 = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#toast-container > div > div.toast-message"))), 3000);
    let mensagemAlert4 = alert4.getText();
    //assert.deepStrictEqual(mensagemAlert4, "Valor do Score inválido. Preencha um valor abaixo de 1000");
    await driver.wait(until.elementLocated(By.name("inp35815")), 3000).sendKeys(Key.CLEAR);
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-risco-serasa > label"))), 3000).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.name("inp35815")), 3000).sendKeys("1000");
    let campoRiscoSerasa = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-risco-serasa > label"))), 3000);
    let textCampoRiscoSerasa = await campoRiscoSerasa.getText();
    assert.deepStrictEqual(textCampoRiscoSerasa, "Risco Serasa");
    await driver.wait(until.elementLocated(By.name("inp35814")), 3000).sendKeys("BAIXÍSSIMO");
});

Given ('Existem documentos obrigatórios que devem ser anexados', async() => {
    await driver.wait(until.elementLocated(By.css("#ContainerAttach > div.box-header > h2")), 3000);
    await driver.wait(until.elementLocated(By.id("btn-buscar")), 3000).click();

}); 

When ('Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span:nth-child(1)")), 30000).click();
    await driver.switchTo().frame(1)
    
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

Given ('O usuário assume a tarefa', async() => {
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 5000).click();
    await driver.sleep(3000);
});

When ('Validar se os campos foram populados e estão presentes corretamente na seção Informações da Solicitação', async() => {
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
    assert.deepStrictEqual(resultadoAssociadoApenasMatricula, "Associado (apenas matrícula)");
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
    let outros = await driver.wait(until.elementLocated(By.id("div35781")), 3000);
    let resultadoOutros = await outros.getText();
    assert.deepStrictEqual(resultadoOutros, "Outros");
    //Nome Completo 
    let nomeCompleto = await driver.wait(until.elementLocated(By.css("#div-nome-completo > label")), 3000);
    let resultadoNomeCompleto = await nomeCompleto.getText();
    assert.deepStrictEqual(resultadoNomeCompleto, "Nome Completo");
    let nome = await driver.wait(until.elementLocated(By.id("div35812")), 3000);
    let resultadoNome = await nome.getText();
    assert.deepStrictEqual(resultadoNome, "José Mario Corrêa Santos");
}); 

Then ('Validar se os campos foram populados e estão presentes corretamente na seção Informações Adicionais', async() => {
    let informacoesAdicionais = await driver.wait(until.elementLocated(By.css("#infos-adicionais > h4")), 3000);
    let resultadoInformacoesAdicionais = await informacoesAdicionais.getText();
    assert.deepStrictEqual(resultadoInformacoesAdicionais, "Informações Adicionais");
    //É Cadastro Digital 
    let cadastrodigital = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(1) > div > label")), 3000);
    let resultadoCadastroDigital = await cadastrodigital.getText();
    assert.deepStrictEqual(resultadoCadastroDigital, "É Cadastro Digital?");
    let sim = await driver.wait(until.elementLocated(By.id("div35811")), 3000);
    let resultadoSim = await sim.getText();
    assert.deepStrictEqual(resultadoSim, "Sim");
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
    assert.deepStrictEqual(resultadoSimPreExcecao, "Sim");
    //Conta aberta com procuração?
    let contaProcuracao = await driver.wait(until.elementLocated(By.css("#flags > div:nth-child(6) > div > label")), 3000);
    let resultadocontaProcuracao = await contaProcuracao.getText();
    assert.deepStrictEqual(resultadocontaProcuracao, "Conta aberta com procuração?");
    let simcontaProcuracao = await driver.wait(until.elementLocated(By.id("div35801")), 3000);
    let resultadosimcontaProcuracao = await simcontaProcuracao.getText();
    assert.deepStrictEqual(resultadosimcontaProcuracao, "Sim");
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
     assert.deepStrictEqual(resultadovalorMediaExtrato, "Valor Média Extrato");
     let simvalorMediaExtrato = await driver.wait(until.elementLocated(By.css("#valor-media-extrato > div > input")), 3000);
     let resultadosimvalorMediaExtrato = await simvalorMediaExtrato.getText();
     //assert.deepStrictEqual(resultadosimvalorMediaExtrato, "5.890,29");

     //Informações da Exceção
     let informacoesDaExcecao = await driver.wait(until.elementLocated(By.css("#infos-excecao > h5")), 3000);
     let resultadoinformacoesDaExcecao = await informacoesDaExcecao.getText();
     assert.deepStrictEqual(resultadoinformacoesDaExcecao, "Informações da Exceção");
     // Tipo exceção 
     let tipoExcecao = await driver.wait(until.elementLocated(By.css("#infos-excecao > div > div:nth-child(1) > div > label")), 3000);
     let resultatipoExcecao = await tipoExcecao.getText();
     assert.deepStrictEqual(resultatipoExcecao, "Tipo Exceção");
     let simtipoExcecao = await driver.wait(until.elementLocated(By.id("div35787")), 3000);
     let resultadosimtipoExcecao = await simtipoExcecao.getText();
     assert.deepStrictEqual(resultadosimtipoExcecao, "Acatamento Restritivo");
     // Justificativa Exceção 
     let justificativaExcecao = await driver.wait(until.elementLocated(By.css("#infos-excecao > div > div.col-12 > div > label")), 3000);
     let resultadojustificativaExcecao = await justificativaExcecao.getText();
     assert.deepStrictEqual(resultadojustificativaExcecao, "Justificativa Exceção");
     let simjustificativaExcecao = await driver.wait(until.elementLocated(By.id("div35786")), 3000);
     let resultadosimjustificativaExcecao = await simjustificativaExcecao.getText();
     assert.deepStrictEqual(resultadosimjustificativaExcecao, "Justificativa do Teste Automatizado");
     // Score Serasa 
     let scoreserasa = await driver.wait(until.elementLocated(By.css("#div-score-serasa > label")), 3000);
     let resultadoscoreserasa = await scoreserasa.getText();
     assert.deepStrictEqual(resultadoscoreserasa, "Score Serasa");
     let simscoreserasa = await driver.wait(until.elementLocated(By.id("div35815")), 3000);
     let resultadosimscoreserasa = await simscoreserasa.getText();
     assert.deepStrictEqual(resultadosimscoreserasa, "1000");
     // Risco Serasa 
     let riscoserasa = await driver.wait(until.elementLocated(By.css("#div-risco-serasa > label")), 3000);
     let resultadoriscoserasa = await riscoserasa.getText();
     assert.deepStrictEqual(resultadoriscoserasa, "Risco Serasa");
     let simriscoserasa = await driver.wait(until.elementLocated(By.id("div35814")), 3000);
     let resultadosimriscoserasa = await simriscoserasa.getText();
     assert.deepStrictEqual(resultadosimriscoserasa, "BAIXÍSSIMO");
});

Given ('O usuário está na seção Anexos', async() => {
    await driver.wait(until.elementLocated(By.css("#ContainerAttach > div.box-header > h2")), 3000);
});

Then ('Localizar os arquivos anexados', async() => {
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(1) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(2) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(3) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(4) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(5) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(6) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(7) > td.docType")), 3000);
    await driver.wait(until.elementLocated(By.css("#tblFile > tbody > tr:nth-child(8) > td.docType")), 3000);
});

When ('Aprovar Solicitação', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Aprovada")), 3000).click();
    await driver.wait(until.elementIsVisible(driver.findElement(By.css("#cboxLoadedContent > div > div > button.btn.btn-success"))), 8000).click();
});

Then ('Deve direcionar para a tarefa Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral', async() => {
    let tituloCompletar = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral']`)), 3000);
    let resultadoTituloCompletar = await tituloCompletar.getText();
    assert.deepStrictEqual(resultadoTituloCompletar, "Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral");
});

Then ('Encaminhar Solicitação', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 3000).click();
});
