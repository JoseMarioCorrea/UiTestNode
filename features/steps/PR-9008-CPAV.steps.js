const assert = require('assert');
const { When, Then, Given } = require('cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { elementIsVisible } = require('selenium-webdriver/lib/until');
const { DriverService } = require('selenium-webdriver/remote');

Then ('Deve Verificar Documentos e Fazer Contato Caso Necessário de Solicitação de CPAV', async() => {
    //Verifica a nova aba
    const driver = global.driver;  
    const originalWindow = await driver.getWindowHandle();
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 3,
            10000
          );
          const windows = await driver.getAllWindowHandles();
          windows.forEach(async handle => {
             if (handle !== originalWindow) {
             await driver.switchTo().window(handle);
              }
          });
   
   await driver.sleep(2000);
   await driver.wait(until.elementLocated(By.xpath(`//*[@id="dadosProposta"]/h4[text() = 'Dados da Proposta']`)), 6000);  
});

Given ('Assumir a atividade Verificar Documentos e Fazer Contato Caso Necessário de Solicitação de CPAV', async() => {
await driver.wait(until.elementLocated(By.id("claim-unclaim-task")), 30000).click();
});

When ('Validar os dados importados da requisição Post no EndPoint', async() => {
   await driver.sleep(2000);
  
   let inpcooperativa = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36280"))), 30000).getAttribute("value");
   assert.strictEqual(inpcooperativa, "0590");

   let inpproposta = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36284"))), 30000).getAttribute("value");
   assert.strictEqual(inpproposta, "2021030553");

   let inpvalorSolicitado = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36285"))), 30000).getAttribute("value");
  // assert.strictEqual(inpvalorSolicitado, "R$ 51.216,00");

   let inpcpfCnpj = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36281"))), 30000).getAttribute("value");
   assert.strictEqual(inpcpfCnpj, "08585341939");

   let inpconta = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36289"))), 30000).getAttribute("value");
   assert.strictEqual(inpconta, "2291908");

   let inpagencia = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36283"))), 30000).getAttribute("value");
   assert.strictEqual(inpagencia, "Ag. Timbó");

   let inpnomeRazaoSocial = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36282"))), 30000).getAttribute("value");
   assert.strictEqual(inpnomeRazaoSocial, "JESSICA WANZUITA DA SILVA");

   let inplinhaCredito = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36294"))), 30000).getAttribute("value");
   assert.strictEqual(inplinhaCredito, "11746");

   let inpfinalidade = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36295"))), 30000).getAttribute("value");
   assert.strictEqual(inpfinalidade, "UNICRED FINANCIAMENTO VEICULO PRE APROVADO");

   let inpdataSolicitacao = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36296"))), 30000).getAttribute("value");
   assert.strictEqual(inpdataSolicitacao, "01/06/2021");

   let inpsituacao = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36297"))), 30000).getAttribute("value");
   assert.strictEqual(inpsituacao, "APROVADA");

   let inpquantidadeParcelas = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36298"))), 30000).getAttribute("value");
   assert.strictEqual(inpquantidadeParcelas, "60");

   let inpdataPrimeiroVencimento = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36299"))), 30000).getAttribute("value");
   assert.strictEqual(inpdataPrimeiroVencimento, "30/08/2021");

   let inptipoVencimento = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36300"))), 30000).getAttribute("value");
   assert.strictEqual(inptipoVencimento, "FIXO");

   let inpnumeroDiasCarencia = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36301"))), 30000).getAttribute("value");
   assert.strictEqual(inpnumeroDiasCarencia, "30");

   let inpvalorIofFinanciado = await driver.wait(until.elementIsVisible(driver.findElement(By.name("inp36302"))), 30000).getAttribute("value");
   assert.strictEqual(inpvalorIofFinanciado, "1.15");

   let veiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-resumo-veiculos > div:nth-child(1) > div > div > strong"))), 30000).getText();
   assert.strictEqual(veiculos, "1 Veículo(s)");

   let totalveiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-resumo-veiculos > div:nth-child(2) > div > div > strong"))), 30000).getText();
   assert.strictEqual(totalveiculos, "Total: R$ 51.216,00");

   let NomeGarantiasVeiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-cards-veiculos > div > div > div > p.card-text.text-truncate"))), 30000).getText();
   assert.strictEqual(NomeGarantiasVeiculos, "JESSICA WANZUITA DA SILVA");

   let emailGarantiasVeiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-cards-veiculos > div > div > div > p:nth-child(2)"))), 30000).getText();
   assert.strictEqual(emailGarantiasVeiculos, "085.853.419-39");

   let modeloGarantiasVeiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-cards-veiculos > div > div > div > p:nth-child(3)"))), 30000).getText();
   assert.strictEqual(modeloGarantiasVeiculos, "HB20 Premium - Hyundai | QIE9D24");

   let renavamGarantiasVeiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-cards-veiculos > div > div > div > p:nth-child(4)"))), 30000).getText();
   assert.strictEqual(renavamGarantiasVeiculos, "Renavam:1117752396 Chassi: 9BHBH51DBHP749944");

   let fabriGarantiasVeiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-cards-veiculos > div > div > div > p:nth-child(5)"))), 30000).getText();
   assert.strictEqual(fabriGarantiasVeiculos, "Fabr: 2017 Modelo: 2017");

   let rsGarantiasVeiculos = await driver.wait(until.elementIsVisible(driver.findElement(By.css("#div-informacoes-garantias-cards-veiculos > div > div > div > p:nth-child(6)"))), 30000).getText();
   assert.strictEqual(rsGarantiasVeiculos, "R$ 51.216,00");
});

Then ('Finalizar o Teste de CPAV', async() => {
    await driver.wait(until.elementLocated(By.id("customBtn_Solicitação Cancelada")), 30000).click();
    await driver.wait(until.elementLocated(By.id("inpDsReasonInputReason")), 30000).sendKeys("teste");
    await driver.wait(until.elementLocated(By.id("BtnConfirmReason")), 30000).click();
});
