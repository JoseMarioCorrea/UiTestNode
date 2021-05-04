Feature: PR 9008 - Contas a Pagar Sistêmico

Feature Description
Scenario: Objetivo - Adiantamento Financeiro
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio com cooperativa 0515

    Given O usuário clica no Objetivo 0 - "Adiantamento Financeiro"
    When Selecionar a Destinação 0 - "Despesa" 
    Then Clicar em Encaminhar a solicitação  

    Given O usuário verificou o aviso informando que o Motivo e o Valor total são obrigatório
    When for preenchido o Motivo e o Valor Total 
    Then Clicar em Encaminhar a solicitação 

    Given Está localizado na atividade Analisar Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then É necessário validar os dados 

    Given O usuário Aprovou Solicitação 
    When O usuário estiver localizado na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    Then Assumir a atividade 

    Given O usuário clicou em Sem Pendências 
    When habilitar o botão Solicitação Realizada e for clicado 
    Then Encaminhou para a atividade Realizar Prestação de Contas de Adiantamento

    Given Está localizado na atividade Verificar Prestação de Contas de Adiantamento
    When O usuário Assumir a Atividade 
    Then Aprovar Prestação


Scenario: Objetivo - Auxilio Educação - Passa por Aprovação
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio com cooperativa 0043

    Given O usuário clica no Objetivo 1 - "Auxílio Educação"
    When Selecionar a Destinação 1 - "FATES" 
    Then Clicar em Encaminhar a solicitação

    Given O usuário verificou o aviso informando que Valor total é obrigatório
    When for preenchido o Valor Total
    Then Clicar em Encaminhar a solicitação 

    Given O usuário verificou o aviso informando a necessidade do anexo Boleto
    When for anexado o arquivo Boleto
    Then Clicar em Encaminhar a solicitação 

    Given O usuário verificou o aviso informando a necessidade do anexo Comprovante de Pagamento 
    When for anexado o arquivo Comprovante de Pagamento 
    Then Clicar em Encaminhar a solicitação

    Given Está localizado na atividade Analisar Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then É necessário validar os dados para Auxilio Educação 

    Given O usuário Aprovou Solicitação 
    When O usuário estiver localizado na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    Then Assumir a atividade

    Given O usuário clicou em Sem Pendências 
    When habilitar o botão Solicitação Realizada e for clicado 
    Then Finalizar o teste 

    
Scenario: Objetivo - Compras - Passa por Segundo Aprovador 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio com cooperativa 0159

    Given O usuário clica no Objetivo 2 - "Compras"
    When Selecionar a Destinação 2 - "FATES" 
    Given O usário selecionou o Contexto Ordem de compra já aprovada 
    Then O campo OC deve ser apresentado 
    When O usário selecionou o Contexto Sem Ordem de compra
    Then O campo OC deve ser ocultado 

    Given O usuário selecionou tem rateio
    When preencher os informações de rateio
    Then cadastrar mais um centro de custo para rateio 

    Given O usuário validou o rateio em 50 porcento por centro de custo 
    When Clicar em Imobilizar o Bem? 
    Then Inserir as Informações de Imobilização de Bem

    Given O usuário clicou para adicionar um novo bem 
    When for preenchido os dados do novo bem 
    Then selecionar o emissor da nota fiscal 
    When for inserido Pessoa Fisica 
    Then Realizar a pesquisa pelo CPF deve trazer os dados corretos
    When for inserido Pessoa Juridica 
    Then Realizar a pesquisa pelo CNPJ deve trazer os dados corretos
    Then Deve habilitar a seleção de MEI

    Given A compra possuí Nota Fiscal 
    When selecionado o campo Possuí NF? 
    Then Deve habilitar o campo Número do Documento

    Given Os campos Data de Emissão, Data de Vencimento, Forma de Pagamento e Descrição da Solicitação preenchidos
    When Marcar Informar conta contábil para este lançamento?
    Then Deve habilitar o campo Conta contábil
    When for anexado o arquivo Nota Fiscal  
    When for anexado o arquivo Boletos
    Then Clicar em Encaminhar a solicitações
    Then Selecionar produto
    Then Clicar em Encaminhar a solicitações

    Given Estamos localizado na atividade Analisar Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then Alterar os dados de Analise de Compras
    Then Aprovar essa Solicitação

    Given Estamos localizados na atividade de Segunda Analise da solicitação
    When O usuário Assumir a Atividade 
    Then Alterar os dados da Segunda Analise de Compras
    Then Aprovar essa Solicitação
    
    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then Validar os dados alterados nas aprovações 

    Given O usuário clicou em Sem Pendências 
    When habilitar o botão Solicitação Realizada e for clicado  
    Then Deve ir para atividade de Registrar os Identificadores nos Novos Bens
    When O usuário Assumir a Atividade 
    Then Indentificadores Regristados 
    Then Finalizar o teste 

Scenario: Objetivo - Débito Automático - Verificar retenção de Nota Fiscal
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio com cooperativa 0159

    Given O usuário clica no Objetivo 3 - "Débito Automático"
    When Selecionar o Contexto Alteração 
    Then Deve mostrar o campo Motivo Alteração
    When Selecionar o Contexto Cancelamento
    Then Deve mostrar o campo Motivo Cancelamento
    When Selecionar o Contexto Inclusão
    Then Deve ocultar o campo Motivo Cancelamento 

    Given Para o Objetivo Débito Automático a Destinação deve ser auto selecionado como Despesa 
    When Preencher as informações do Débito Automático
    Then Preencher o Valor Total do Débito 
    Then Encaminhar essa solicitação 

    Given Está localizado na atividade Analisar Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then É necessário validar os dados para Débito Automático
    Then Aprovar essa Solicitação

    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade
    Then Clicar em Encaminhar para o Fiscal ASC

    Given Estamos localizados na atividade Verificar Retenções de NFs de Solicitação de Contas Pagar
    When O usuário Assumir a Atividade
    Then Validar os dados para a Nota Fiscal
    Then As Retenções foram Verificadas

    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 

    Given O usuário clicou em Sem Pendências 
    When habilitar o botão Solicitação Realizada e for clicado  
    Then Finalizar o teste 

    Scenario: Objetivo - Pagamento Terceiros - Anexar Nota Fiscal  
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio com cooperativa 0159

    Given O usuário clica no Objetivo 4 - "Pagamento Terceiros"
    When Selecionar a Destinação 3 - "Projeto" 
    Then Deve habilitar e preencher o campo Projeto 
    Then Selecionar o Contexto Possui Contrato Assinado 

    Given O usuário selecionou tem rateio
    When preencher os informações de rateio
    Then cadastrar mais um centro de custo para rateio 

    Given O usuário validou o rateio em 50 porcento por centro de custo 
    When Clicar em Imobilizar o Bem? 
    Then Inserir as Informações de Imobilização de Bem

    Given O usuário clicou para adicionar um novo bem 
    When for preenchido os dados do novo bem 
    Then selecionar o emissor da nota fiscal 
    When for inserido Pessoa Fisica 

    Given A compra possuí Nota Fiscal 
    When selecionado o campo Possuí NF? 
    Then Deve habilitar o campo Número do Documento

    Given Os campos Data de Emissão, Data de Vencimento, Forma de Pagamento e Descrição da Solicitação preenchidos
    When Marcar Informar conta contábil para este lançamento?
    Then Deve habilitar o campo Conta contábil
    When for anexado o arquivo Nota Fiscal  
    When for anexado o arquivo Boletos
    Then Clicar em Encaminhar a solicitações

    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then Clicar no botão Falta de Documento para Prosseguir Atividade

    Given O usuário clicou em Solicitar nota Fiscal
    When Direcionar para a atividade Anexar NF de Solicitação de Contas a Pagar
    Then Validar os dados e anexar a NF

    Given Estamos localizados na atividade Verificar NF Anexada de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then Validar os dados e aprovar a NF

    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 

    Given O usuário clicou em Sem Pendências 
    When habilitar o botão Solicitação Realizada e for clicado  
    Then Finalizar o teste

Scenario: Objetivo - Ressarcimento de Despesas - Solicitar Mais Informações
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio com cooperativa 0159

    Given O usuário clica no Objetivo 5 - "Ressarcimento de Despesas"
    When Selecionar a Destinação 2 - "FATES"  
    Then O Campo contexto deve iniciar auto selecionado com Sem Contexto 

    Given O campo Solicitação para outra pessoa? foi selecionado
    When Apresentar os campos Solicitação para conselheiro presidente e Nome
    Then Deve ser preenchido o nome 

    Given O campo Deseja anexar um arquivo único? for selecionado 
    Then Deve ser desabilitado o campo Anexo Despesa 
    Then Deve ser preenchido a despesa

    Given O campo Informar conta contábil para este lançamento? for selecionado
    Then Deve habilitar o campo Conta contábil 
    When Anexar o Comprovante de Ressarcimento
    Then Encaminhar essa solicitação 

    Given Está localizado na atividade Analisar Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then Aprovar essa Solicitação

    Given Estamos localizados na atividade de Segunda Analise da solicitação
    When O usuário Assumir a Atividade 
    Then Aprovar essa Solicitação

    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade
    Then Clicar em Solicitar Mais Informações

    Given Estamos localizado em Regularizar Pendências 
    When Alterar o tipo e os valor de despesa 
    Then Clicar em Encaminhar Novas Informações

    Given Está localizado na atividade Analisar Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade 
    Then Aprovar essa Solicitação

    Given Estamos localizados na atividade de Segunda Analise da solicitação
    When O usuário Assumir a Atividade 
    Then Aprovar essa Solicitação

    Given Estamos localizados na atividade Verificar e Realizar Pagamento de Solicitação de Contas a Pagar
    When O usuário Assumir a Atividade
    Then Validar os dados alterados das despesas

    Given O usuário clicou em Sem Pendências 
    When habilitar o botão Solicitação Realizada e for clicado  
    Then Finalizar o teste
