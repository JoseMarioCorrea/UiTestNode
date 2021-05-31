Feature: PR 9008 - Encerramento de Conta ou Desligamento de Cooperado

Feature Description
Scenario:Formulário - Desligamento de Cooperado
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    When Apresentar os contextos 
    Then Validar os contextos apresentados estão corretos para Desligamento de Cooperado

    Given O usuário Selecionou o Contexto Demissão
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    Given O usuário clicou em Já Possui Formulário Assinado 
    Then O campo Documentos Serão Assinados Digitalmente deve ser ocultado
    When O usuário clicar em Já Possui Formulário Assinado 
    Then O campo Documentos Serão Assinados Digitalmente deve ser retornado

    Given O usuário clicou em Documentos Serão Assinados Digitalmente
    When Contatos for habilitado 
    Then Será preenchido os dados de contato 
    Then Desabilitar a Assinatura Digital para gerar Template

    Given O campo Informações de Cooperado foi habilitado 
    Then Validar os dados apresentados 
    When Desmarcar o campo Há Saldo de Capital a Restituir 
    Then Deve ocultar informações do favorecido 

    Given O usuário marcou novamente o campo Há Saldo de Capital a Restituir
    When Marcar o campo Há Parcelamento 
    Then Deve habilitar o campo Parcelamento 

    Given O usuário marcou o campo É mesma titularidade 
    When For auto preenchido o Nome Favorecido e CPF CNPJ Favorecido
    Then Preencher os campos Banco, Agência, Conta 

    Given O usuário marcou o campo Estorno de Juros, IOF e Tarifas
    When Habilitar o Valor para Estorno 
    Then Preencher o Valor para Estorno 

    Given O usuário marcou o campo Haverá baixa de capital para liquidação de valores em aberto?
    When Habilitar o Valor para Baixa
    Then Preencher o Valor para Baixa

    Given O usuário marcou o campo Possui Exceção
    When Habilitar o Detalhamento Exceção
    Then Preencher o Detalhamento Exceção

    Given Preencher o Parecer 
    When O usuário verificar se os dados de CheckList estão correto 
    Then Marcar todos os itens da CheckList
    Then Gerar Template 

    Given Estamos localizados na atividade Coletar Assinatura nos Templates Gerados
    When Validar o template Solicitacao Demissao Pagamentos
    Then Validar o template Ficha Matricula Pessoa Fisica




    