Feature: PR 9008 - Credenciamento de cooperados - Adquirente STONE

Feature Description
Scenario: Formulário - Stone
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Credenciamento de cooperados - Adquirente STONE"
    When Inicia o teste do Processo "PR 9008 - Credenciamento de cooperados - Adquirente STONE"
    Then Deve Iniciar Solicitação de Credenciamento Stone

    Given O usuário selecionou a cooperativa
    When inserir um CNPJ e pesquisar 
    Then Deve apresentar os dados corretamente

    Given O usuário clicou em Deseja informar outro endereço para instalação
    When Os campos forem carregados
    Then Deve preencher os dados de endereço
    Then Preencher Informações Bancárias 

    Given O usuário preencheu a condição
    When Clicar em Gerar Proposta 
    Then Deve retornar as Proposta 

    Given Clicar na primeira proposta 
    Then Validar as Taxas para a primeira proposta

    Given Clicar na segunda proposta 
    Then Validar as Taxas para a segunda proposta

    Given Clicar na terceira proposta 
    Then Validar as Taxas para a teceira proposta
    When Apresentar os campos TEF e POS 
    Then Deve preencher os campos referentes

    Given Os dados de TEF POS foram válidados
    Then Encaminhar Solicitação

    Given O usuário esta localizado em Aguardar Análise da Solicitação de Domicílio Bancário STONE
    When Validar os dados de Credenciamento
    Then Finalizar o teste 

Scenario: Simulador de Taxas
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Credenciamento de cooperados - Adquirente STONE"
    When Inicia o teste do Processo "PR 9008 - Credenciamento de cooperados - Adquirente STONE"
    Then Deve Iniciar Solicitação de Credenciamento Stone

    Given O usuário clicou em Simulador de Taxas 
    When Preencher o CNAE e o Faturamento Estimado em Cartão
    Then Deve retornar as Proposta 

    Given Clicar na primeira proposta 
    Then Validar as Taxas para a primeira proposta do simulador 

    Given Clicar na segunda proposta 
    Then Validar as Taxas para a segunda proposta do simulador

    Given Clicar na terceira proposta 
    Then Validar as Taxas para a terceira proposta do simulador
