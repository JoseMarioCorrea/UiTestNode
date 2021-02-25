const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { DriverService } = require('selenium-webdriver/remote');

Given('o usuário está no Processo Assinaura Digital', async() => {
    const driver = global.driver;
    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.get("https://bpm.e-unicred.com.br/workflow/wfflow.aspx");    
    await driver.wait(until.elementLocated(By.css("#filter > div > div.box-header > h3")), 30000).click();
    await driver.wait(until.elementLocated(By.id('inpDsFlowName')), 30000);      
    await driver.wait(until.elementLocated(By.id("inpDsFlowName")), 30000).sendKeys('PR 9008 - Assinatura Digital', Key.ENTER);        
    await driver.wait(until.elementLocated(By.id("inpStDeploy")),30000).click();
    await driver.wait(until.elementLocated(By.css("#inpStDeploy > option:nth-child(2)")), 3000).click();
    await driver.wait(until.elementLocated(By.name("btnPesqFiltro"), 30000)).click();
    await driver.wait(until.elementLocated(By.css("#containertable > div > table > tbody > tr > td:nth-child(10) > span")), 30000).click();
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
            
});

When('O usuário inicia o teste do Processo de Assinatura Digital', async() => {
    const driver = global.driver;    
    await driver.wait(until.elementLocated(By.css("#HlOpenSimulation")), 30000).click();

    // identifica nova Aba
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
     // inicia o teste     
    await driver.wait(until.elementLocated(By.id("HlStartSimulation")), 30000).click();
    // localiza modal de teste
    await driver.switchTo().frame(4); 
    await driver.sleep(3000);
});
   
Then('Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital', async() => {    
    let results1 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Iniciar Solicitação de Assinatura Digital']`)), 6000);
    let text1 = await results1.getText();    
    assert.deepStrictEqual(text1, "Iniciar Solicitação de Assinatura Digital"); 
});

Given ('o usuário inicia o preenchimento das Informações da Solicitação', async() => {
    // Seleciona a cooperativa 0515
    await driver.wait(until.elementLocated(By.name("inp34871")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#coluna-cooperativa > div > select > option:nth-child(2)")), 30000).click();

});

When ('o Tipo de Solicitação for igual a Adesão de trabalho remoto', async() => {
    // seleciona tipo de solicitação = adesão de cobrança
    await driver.wait(until.elementLocated(By.name("inp34882")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#coluna-documento > div > select > option:nth-child(2)")), 30000).click();
    // insere o cnpj e pesquisa
    await driver.wait(until.elementLocated(By.name("inp34872")), 30000).click();
    await driver.wait(until.elementLocated(By.name("inp34872")), 30000).sendKeys("80448410915");
    await driver.wait(until.elementLocated(By.id("botao-buscar-cpfcnpj")), 30000).click();  
    await driver.sleep(5000);
    
});

Then ('deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto', async() =>{    
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span")), 6000);
   
});

Given ('que o tipo de solicitação é para Adesão de Trabalho Remoto e com as Informações do Associado preenchidos', async() => {
    // Verifica situação está populada corretamente 
    let results3 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(2) > div:nth-child(1) > div > input")), 30000);
    let text3 = await results3.getText();
    assert.deepStrictEqual(text3, "");
    // Verifica se Matricula está populada corretamente 
    let results4 = await driver.wait(until.elementLocated(By.name("inp34873")), 30000);
    let text4 = await results4.getText();
    //assert.deepStrictEqual(text4, "110175");
    // Verifica se Posto está populada corretamente 
    let results5 = await driver.wait(until.elementLocated(By.name("inp34874")), 30000);
    let text5 = await results5.getText();
    assert.deepStrictEqual(text5, "");
    // Verifica se Associado está populada corretamente 
    let results6 = await driver.wait(until.elementLocated(By.name("inp34875")), 30000);
    let text6 = await results6.getText();
    assert.deepStrictEqual(text6, "");
    // Verifica se Tipo de Pessoa está populada corretamente 
    let results7 = await driver.wait(until.elementLocated(By.name("inp34876")), 30000);
    let text7 = await results7.getText();
    assert.deepStrictEqual(text7, "");
    // Verifica se Profissão / Ramo está populada corretamente 
    let results8 = await driver.wait(until.elementLocated(By.name("inp34877")), 30000);
    let text8 = await results8.getText();
    assert.deepStrictEqual(text8, "");
    // Verifica se Email do Associado para Envio no DocuSign está populada corretamente 
    let results9 = await driver.wait(until.elementLocated(By.name("inp34893")), 30000);
    let text9 = await results9.getText();
    assert.deepStrictEqual(text9, ""); 
});

When ('preencher os campos Celular e marcar a flag contas Associado', async() => {
    await driver.sleep(15000);
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(3) > div.col-xs-12.col-md-2 > div > select")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(3) > div.col-xs-12.col-md-2 > div > select > option:nth-child(2)")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#switchConta > label")), 30000).click();
});

Then ('verificar se está presente em tela o alerta amarelo', async() => {
    await driver.sleep(3000);
    let results10 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(3) > div.col-xs-12.col-md-8 > div > div")), 30000);
    let text10 = await results10.getText();    
    assert.deepStrictEqual(text10, "ATENÇÃO! VALIDE SE O E-MAIL ESTÁ CADASTRADO CORRETAMENTE\nCaso não possua e-mail ou tenha mais de 1, especificar em mensagens qual e-mail utilizar para comunicar o associado via DocuSign.");
});

Given ('que o usuário realiza a pesquisa de Vinculos', async() => {
    await driver.wait(until.elementLocated(By.id("BtnSearchPearson")), 30000).click();
    await driver.wait(until.elementLocated(By.id("input-buscar-terceiro")), 30000).click()
    await driver.wait(until.elementLocated(By.id("input-buscar-terceiro")), 30000).sendKeys("80448410915");
    await driver.wait(until.elementLocated(By.id("botao-buscar-cpfTerceiro")), 30000).click();
});

When ('os dados são buscados automaticamente', async() => {
    await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.name("inp34897")), 30000);
    let results11 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(4) > select > option:nth-child(2)")), 30000);
    let text11 = await results11.getText();
    assert.deepStrictEqual(text11, "rogeriolatronico@hotmail.com");
    let results12 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(5) > select > option:nth-child(2)")), 30000);
    let text12 = await results12.getText();
    assert.deepStrictEqual(text12, "(48) 984152792"); 
    // verifica se assinará documento = sim 
    let results13 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(6) > select > option:nth-child(3)")), 30000);
    let text13 = await results13.getText();
    assert.deepStrictEqual(text13, "Sim"); 
});

Then ('Deve ser preenchido manualmente a qualificação', async() => {
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input")), 30000).click();
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input")), 30000).sendKeys("Principal");
    
}) 

Given ('que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU', async() =>{
    let results14 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > div")), 30000);
    let text14 = await results14.getText();
    assert.deepStrictEqual(text14, "Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: [ para quando não houverem os dados no SAU ]");
});  

When ('inserir dois participantes para assinar digitalmente o documento', async() => {
    await driver.wait(until.elementLocated(By.name("inp34879")), 30000).sendKeys("Teste Automatizados");
    await driver.wait(until.elementLocated(By.name("inp34881")), 30000).sendKeys("teste@automatizados.com.br");
    await driver.wait(until.elementLocated(By.name("inp34894")), 30000).sendKeys("41999999999");
    await driver.sleep(3000);
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > thead > tr > td")), 30000).click();
    await driver.sleep(3000);
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(2) > input")), 30000).sendKeys("Teste de Automação");
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(3) > input")), 30000).sendKeys("teste@automacao.com.br");
    await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(4) > input")), 30000).sendKeys("41919191919");
    await driver.wait(until.elementLocated(By.name("inp34883")), 30000).sendKeys("Primeiro a assinar é o\n Teste automatizados\n e o seundo a assinar será o\n Teste de Automação");

});

Then ('verificar alerta na seção Mensagens está presente', async() => {
    let results15 = await driver.wait(until.elementLocated(By.css("#aviso-nao-atualizacao-email")), 30000);
    let text15 = await results15.getText();
    assert.deepStrictEqual(text15, "FAVOR NÃO SOLICITAR NO FLUXO AJUSTE DE E-MAIL E CELULAR. ELES PRECISAM SER VALIDADOS, E SE NECESSÁRIO ATUALIZADOS, ANTES DA ABERTURA DO FLUXO DE ASSINATURA DIGITAL. SE ISSO NÃO FOI FEITO E OS DADOS NÃO ESTÃO CORRETOS, SOLICITE O CANCELAMENTO NO CAMPO MENSAGENS E ABRA UM NOVO FLUXO APÓS A ATUALIZAÇÃO CADASTRAL.");
});

Given ('que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança', async() => {
    await driver.wait(until.elementLocated(By.css("#customizedUpload > tbody > tr:nth-child(2) > td.col1 > span")), 30000).click();
    await driver.switchTo().frame(1)
    await driver.sleep(5000);
    let fileInput = await driver.wait(until.elementLocated(By.name("files[]")), 30000);
    await driver.wait(until.elementLocated(By.css("#fileupload > div.row-fluid.fileupload-buttonbar > div.span7 > span.btn.btn-info.fileinput-button")), 30000);
    //await fileInput.click();
    await fileInput.sendKeys("C:/Unicred/Uploads/Upload.txt");
    await driver.wait(until.elementLocated(By.css("#frm > div.padded > div.buttons > button")), 30000).click();
    await driver.sleep(3000);
    await driver.switchTo().frame(4);     
    
});

When ('o usuário tiver mais de uma função no sistema', async() => {
    //await driver.switchTo().defaultContent();
    await driver.wait(until.elementLocated(By.name("inpCodPositionArea")), 30000).click();
    
});

Then ('Deve selecionar a função desejada e encaminhar a solicitação', async() => {
    await driver.wait(until.elementLocated(By.css("#controllers > div.alert.alert-info > div > select > option:nth-child(3)")), 30000).click();
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Encaminhada")), 30000).click();
}); 

Given ('que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign', async() => {
    let results15 = await driver.wait(until.elementLocated(By.xpath(`//*[@id="frm"]/div[10]/h1[text() = 'Encaminhar Documento ao Cooperado no DocuSign']`)), 30000);
    let text15 = await results15.getText();
    assert.deepStrictEqual(text15, "Encaminhar Documento ao Cooperado no DocuSign");
}); 

When ('o usuário Assumir Atividade', async() => { 
    await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 30000).click();
    await driver.sleep(5000);
});

Then ('deve liberar as funcionalidades para o usuário', async() => {
    await driver.wait(until.elementLocated(By.id("inpDsMessage")), 30000);
});

Given ('que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos', async() => {
    //Verificar se titulo está correto
    let titulo = await driver.wait(until.elementLocated(By.css("#BoxFrmExecute > div > div > div > div > h4")), 30000);
    let textTitulo = await titulo.getText();
    assert.deepStrictEqual(textTitulo, "Assinatura Digital");
    
    //Verificar informações da solicitação 
    let titulosolicitacao = await driver.wait(until.elementLocated(By.css("#secao-informacoes-solicitacao > h5")), 30000)
    let resultadotitulo = await titulosolicitacao.getText();
    assert.deepStrictEqual(resultadotitulo, "Informações da Solicitação");
    let solicitarCooperativa = await driver.wait(until.elementLocated(By.css("#coluna-cooperativa > div > label")), 30000);
    let textCooperativa = solicitarCooperativa.getText();
    //assert.deepStrictEqual(textCooperativa, "Solicitar para Cooperativa");
    let solicitarCoop = await driver.wait(until.elementLocated(By.id("div34871")), 30000);
    let textSolicitar = await solicitarCoop.getText();
    assert.deepStrictEqual(textSolicitar, "0515");
    let tipoSolicitacao = await driver.wait(until.elementLocated(By.css("#coluna-documento > div > label")), 30000);
    let textTipoSolicitacao = await tipoSolicitacao.getText();
    assert.deepStrictEqual(textTipoSolicitacao, "Tipo de Solicitação");
    let solicitacaoCoop = await driver.wait(until.elementLocated(By.id("div34882")), 30000);
    let textSolicitacao = await solicitacaoCoop.getText();
    assert.deepStrictEqual(textSolicitacao, "Adesão ao Trabalho Remoto");
    let cnpjCpf = await driver.wait(until.elementLocated(By.css("#coluna-buscar-cpfcnpj > div > label")), 30000);
    let textcnpjCpf = await cnpjCpf.getText();
    assert.deepStrictEqual(textcnpjCpf, "CPF / CNPJ")
    let cpf = await driver.wait(until.elementLocated(By.id("div34872")), 30000);
    let textcpf = await cpf.getText();
    assert.deepStrictEqual(textcpf, "80448410915");
    
    //Verificar informações do associado
    await driver.sleep(2000);
    let tituloassociado = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > h5")), 30000);
    let textAssociado = await tituloassociado.getText();
    assert.deepStrictEqual(textAssociado, "Informações do Associado");
    let campoSituacao = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(2) > div:nth-child(1) > div > label")), 30000);
    let textCampoSituacao = await campoSituacao.getText();
    assert.deepStrictEqual(textCampoSituacao, "Situação");
    let situacao = await driver.wait(until.elementLocated(By.id("div34896")), 30000);
    let textSituacao = await situacao.getText();
    assert.deepStrictEqual(textSituacao, "ATIVO");
    let campoMatricula = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(2) > div:nth-child(2) > div > label")))
    let textCampoMatricula = campoMatricula.getText();
    //assert.deepStrictEqual(textCampoMatricula, "Matrícula");
    let matricula = await driver.wait(until.elementLocated(By.id("div34873")), 30000);
    let textMatricula = await matricula.getText();
    assert.deepStrictEqual(textMatricula, "110175");
    let campoPosto = await driver.wait(until.elementLocated(By.css("#coluna-posto > div > label")), 30000);
    let textCampoPosto = await campoPosto.getText();
    assert.deepStrictEqual(textCampoPosto, "Posto");
    let posto = await driver.wait(until.elementLocated(By.id("div34874")), 30000);
    let textPosto = await posto.getText();
    assert.deepStrictEqual(textPosto, "1");
    let campoAssociado = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(2) > div:nth-child(4) > div > label")), 30000);
    let textCampoAssociado = campoAssociado.getText();
    //assert.deepStrictEqual(textCampoAssociado, "Associado");
    let associado = await driver.wait(until.elementLocated(By.id("div34875")), 30000);
    let textAssociadoFormulario = await associado.getText();
    assert.deepStrictEqual(textAssociadoFormulario, "ROGERIO LATRONICO");
    let CampoTipoPessoa = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(2) > div:nth-child(5) > div > label")), 30000);
    let textCampoPessoa = await CampoTipoPessoa.getText();
    assert.deepStrictEqual(textCampoPessoa, "Tipo de Pessoa");
    let tipoPessoa = await driver.wait(until.elementLocated(By.id("div34876")), 30000);
    let textTipoPessoa = await tipoPessoa.getText();
    assert.deepStrictEqual(textTipoPessoa, "Pessoa Física");
    let campoProfissao = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(2) > div:nth-child(6) > div > label")), 30000);
    let textCampoProfissao = await campoProfissao.getText();
    assert.deepStrictEqual(textCampoProfissao, "Profissão / Ramo");
    let profissao = await driver.wait(until.elementLocated(By.id("div34877")), 30000);
    let textprofissao = await profissao.getText();
    assert.deepStrictEqual(textprofissao, "DENTISTA");
    let campoCelular = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(3) > div.col-xs-12.col-md-2 > div > label")), 30000);
    let textCampoCelular = await campoCelular.getText();
    assert.deepStrictEqual(textCampoCelular, "Celular para Envio de SMS");
    let celular = await driver.wait(until.elementLocated(By.id("div34878")), 30000);
    let textCelular = await celular.getText();
    assert.deepStrictEqual(textCelular, "(48) 984152792");
    let campoEmail = await driver.wait(until.elementLocated(By.css("#secao-informacoes-associado > div:nth-child(3) > div.col-xs-12.col-md-8 > div > label")), 30000);
    let textCampoEmail = await campoEmail.getText();
    assert.deepStrictEqual(textCampoEmail, "Email do Associado para Envio no DocuSign");
    let emailDoAssociado = await driver.wait(until.elementLocated(By.id("div34893")), 30000);
    let textEmailDoAssociado = await emailDoAssociado.getText();
    assert.deepStrictEqual(textEmailDoAssociado, "rogeriolatronico@hotmail.com;");
    let campoContas = await driver.wait(until.elementLocated(By.css("#coluna-contas > div > label")), 30000);
    let textCampoContas = await campoContas.getText();
    assert.deepStrictEqual(textCampoContas, "Contas");
    let contasFormulario = await driver.wait(until.elementLocated(By.id("div34880")), 30000);
    let textcontas = contasFormulario.getText();
    //assert.deepStrictEqual(textcontas, "82899");

    //Verificar Informações do Documento 
    await driver.sleep(2000);
    let vinculosCasoHouver = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > div")), 3000);
    let textVinculosCasoHouver = await vinculosCasoHouver.getText();
    assert.deepStrictEqual(textVinculosCasoHouver, "Vínculos, caso houver:");
    let tituloInformacoesDoDocumento = await driver.wait(until.elementLocated(By.css('#secao-informacoes-documentos > h5')), 30000);
    let textTituloInformacoes = await tituloInformacoesDoDocumento.getText();
    assert.deepStrictEqual(textTituloInformacoes, "Informações do Documento");
    let qualificacaoFormulario = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > thead > tr > th:nth-child(1)")), 30000);
    let textQualificacaoFormulario = await qualificacaoFormulario.getText();
    assert.deepStrictEqual(textQualificacaoFormulario, "Qualificação");
    let nomePessoaFormulario = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > thead > tr > th:nth-child(2)")), 30000);
    let textNomePessoaFormulario = await nomePessoaFormulario.getText();
    assert.deepStrictEqual(textNomePessoaFormulario, "Nome da Pessoa Desse Vínculo");
    let EmaildeQuemReceberaArquivoFormulario = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > thead > tr > th:nth-child(3)")), 30000);
    let textEmaildeQuemReceberaArquivoFormulario = await EmaildeQuemReceberaArquivoFormulario.getText();
    assert.deepStrictEqual(textEmaildeQuemReceberaArquivoFormulario, "E-mail de Quem Também Receberá o Arquivo");
    let CelulardeQuemReceberaArquivoFormulario = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > thead > tr > th:nth-child(4)")), 30000);
    let textCelulardeQuemReceberaArquivoFormulario = await CelulardeQuemReceberaArquivoFormulario.getText();
    assert.deepStrictEqual(textCelulardeQuemReceberaArquivoFormulario, "Celular de Quem Também Receberá o SMS");
    let assinaraDocumentoFormulario = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > thead > tr > th:nth-child(5)")), 30000);
    let textAssinarDocumento = await assinaraDocumentoFormulario.getText();
    assert.deepStrictEqual(textAssinarDocumento, "Assinará o Documento");

    //inicio da verificação dos dados da seção Informações do Documento
    await driver.sleep(2000);
    let qualificacaoDado = await driver.wait(until.elementLocated(By.id("div34897")), 30000);
    let textqualificacaoDado = await qualificacaoDado.getText();
    assert.deepStrictEqual(textqualificacaoDado, "CÔNJUGE");
    let nomeDaPessoaDado = await driver.wait(until.elementLocated(By.id("div34898")), 30000);
    let textnomeDaPessoaDado = await nomeDaPessoaDado.getText();
    assert.deepStrictEqual(textnomeDaPessoaDado, "DENIZE MARIA LUZETTI LATRONICO");
    let emailRecebedorDado = await driver.wait(until.elementLocated(By.id("div34899")), 30000);
    let textemailRecebedorDado = await emailRecebedorDado.getText();
    assert.deepStrictEqual(textemailRecebedorDado, "Não possui e-mail cadastrado");
    let celularRecebedorDado = await driver.wait(until.elementLocated(By.id("div34900")), 30000);
    let textcelularRecebedorDado = await celularRecebedorDado.getText();
    assert.deepStrictEqual(textcelularRecebedorDado, "(48) 984152793");
    let assinaraDado = await driver.wait(until.elementLocated(By.id("div34901")), 30000);
    let textassinaraDado = await assinaraDado.getText();
    assert.deepStrictEqual(textassinaraDado, "Não");
    // dados inferiores 
    await driver.sleep(2000);
    let qualificacaoDado2 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(1)")), 30000);
    let textqualificacaoDado2 = await qualificacaoDado2.getText();
    assert.deepStrictEqual(textqualificacaoDado2, "Principal");
    let nomeDaPessoaDados = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2)")), 30000);
    let textnomeDaPessoaDados = await nomeDaPessoaDados.getText();
    assert.deepStrictEqual(textnomeDaPessoaDados, "ROGERIO LATRONICO");
    let emailRecebedorDados = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(3)")), 30000);
    let textemailRecebedorDados = await emailRecebedorDados.getText();
    assert.deepStrictEqual(textemailRecebedorDados, "rogeriolatronico@hotmail.com");
    let celularRecebedorDados = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(4)")), 30000);
    let textcelularRecebedorDados = await celularRecebedorDados.getText();
    assert.deepStrictEqual(textcelularRecebedorDados, "(48) 984152792");
    let assinaraDados = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(5)")), 30000);
    let textassinaraDados = await assinaraDados.getText();
    assert.deepStrictEqual(textassinaraDados, "Sim");
    // seção - Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: [ para quando não houverem os dados no SAU ]
    await driver.sleep(2000);
    let tituloDadosDoDemais = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > div")), 30000);
    let textTituloDadosDoDemais = await tituloDadosDoDemais.getText();
    assert.deepStrictEqual(textTituloDadosDoDemais, "Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: [ para quando não houverem os dados no SAU ]");
    
    let nomeRecebedor = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > thead > tr > th:nth-child(1)")), 30000);
    let textnomeRecebedor = await nomeRecebedor.getText();
    assert.deepStrictEqual(textnomeRecebedor, "Nome de Quem Receberá o Arquivo");
    let emailRecebera = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > thead > tr > th:nth-child(2)")), 30000);
    let textemailRecebera = await emailRecebera.getText();
    assert.deepStrictEqual(textemailRecebera, "E-mail de Quem Receberá o Arquivo");
    let celularRecebera = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > thead > tr > th:nth-child(3)")), 30000);
    let textcelularRecebera = await celularRecebera.getText();
    assert.deepStrictEqual(textcelularRecebera, "Celular desse Participante para Envio de SMS");
    let avalista = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > thead > tr > th:nth-child(4)")), 30000);
    let textavalista = await avalista.getText();
    assert.deepStrictEqual(textavalista, "Qualificação (Avalista, Testemunha, etc)");
    // dados
    await driver.sleep(2000);
    let nomeDoRecebedorDado = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(1) > td:nth-child(1)")), 30000);
    let textnomeDoRecebedorDado = await nomeDoRecebedorDado.getText();
    assert.deepStrictEqual(textnomeDoRecebedorDado, "Teste Automatizados");
    let emailReceberaDado = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(1) > td:nth-child(2)")), 30000);
    let textemailReceberaDado = await emailReceberaDado.getText();
    assert.deepStrictEqual(textemailReceberaDado, "teste@automatizados.com.br");
    let celularReceberaDado = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(1) > td:nth-child(3)")), 30000);
    let textcelularReceberaDado = await celularReceberaDado.getText();
    assert.deepStrictEqual(textcelularReceberaDado, "(41) 99999-9999");
    let assinadoDado = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(1) > td:nth-child(4)")), 30000);
    let textassinadoDado = await assinadoDado.getText();
    assert.deepStrictEqual(textassinadoDado, "");
     // dados abaixo
     await driver.sleep(2000);
     let nomeDoRecebedorDado2 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(1)")), 30000);
     let textnomeDoRecebedorDado2 = await nomeDoRecebedorDado2.getText();
     assert.deepStrictEqual(textnomeDoRecebedorDado2, "Teste de Automação");
     let emailReceberaDado2 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(2)")), 30000);
     let textemailReceberaDado2 = await emailReceberaDado2.getText();
     assert.deepStrictEqual(textemailReceberaDado2, "teste@automacao.com.br");
     let celularReceberaDado2 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(3)")), 30000);
     let textcelularReceberaDado2 = await celularReceberaDado2.getText();
     assert.deepStrictEqual(textcelularReceberaDado2, "(41) 91919-1919");
     let assinadoDado2 = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.table-responsive-sm.mt-5 > table > tbody > tr:nth-child(2) > td:nth-child(4)")), 30000);
     let textassinadoDado2 = await assinadoDado2.getText();
     assert.deepStrictEqual(textassinadoDado2, "");
    //detalhes da solicitação 
    await driver.sleep(2000);
    let detalhesDaSolicitacaoTitle = await driver.wait(until.elementLocated(By.css("#secao-informacoes-documentos > div.row > div > div > label")), 30000);
    let textdetalhesDaSolicitacaoTitle = await detalhesDaSolicitacaoTitle.getText();
    assert.deepStrictEqual(textdetalhesDaSolicitacaoTitle, "Detalhes da Solicitação");
    let detalhesDaSolicitacao = await driver.wait(until.elementLocated(By.id("div34883")), 30000);
    let textDaSolicitacao = await detalhesDaSolicitacao.getText();
    assert.deepStrictEqual(textDaSolicitacao, "Primeiro a assinar é o\nTeste automatizados\ne o seundo a assinar será o\nTeste de Automação");
});

When ('o usuário clicar em Solicitar Mais Informações', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Mais Informações Solicitadas")), 30000).click();
    
}); 

Then ('o usuário deve preencher a justificativa e Confirmar', async() => {
    await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")), 30000).click();
    await driver.findElement(By.id("inpDsReasonInputReason")).sendKeys("Teste Automatizado");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason"))).click();
});


