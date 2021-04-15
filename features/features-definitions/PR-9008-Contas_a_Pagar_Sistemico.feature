Feature: PR 9008 - Contas a Pagar Sistêmico

Feature Description
Scenario: Objetivo - Adiantamento Financeiro
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Contas a Pagar Sistêmico"
    When Inicia o teste do Processo "PR 9008 - Contas a Pagar Sistêmico"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contas a Pagar
    Then Preencher os dados de inicio 

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


