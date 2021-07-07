Feature: PR 9008 - Encerramento de Conta ou Desligamento de Cooperado

Feature Description
Scenario:Formulário - Encerramento de Conta - Desligamento de Cooperado
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    Then Validar Tooltip informativo sobre o desligamento e encerramento
    When Apresentar os Contextos
    Then Validar os contextos apresentados estão corretos para Desligamento de Cooperado
    Then Validar os Motivos apresentados estão corretos 

    Given O usuário selecionou Encerramento de Conta 
    Then Validar Tooltip informativo sobre o desligamento e encerramento
    When Apresentar os Contextos
    Then Validar os contextos apresentados para o Encerramento de Conta 
    Then Validar os Motivos apresentados estão corretos 

    Given O usuário selecionou Desligamento de Cooperato 
    When Selecionar o Contexto Falecimento 
    Then Deve ser auto selecionado o Motivo Falecimento e ser Obrigatório anexar o Atestado de Óbito 

    Given O usuário selecionou o Contexto Demissão 
    When Selecionar um motivo Outros
    Then Deve habilitar o campo para preenchimento de OUTRO MOTIVO 

    Given O usuário selecionou Encerramento de Conta 
    Then Selecionar Contexto Conta Conjunta
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 
    When Possuir mais de uma conta atividade 
    Then É possível selecionar a conta em que desejar encerrar 

    Given O usuário selecionou o Termo - Já Tenho o Termo Assinado 
    Then Deve ser Obrigatório anexar o Termo Assinado para Encerramento de Conta 
    
    Given O usuário selecionou Desligamento de Cooperato 
    Then Selecionar Contexto Demissão 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    Given O usuário selecionou o Termo - Já Tenho o Termo Assinado 
    Then Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado 
    When Selecionar Quero Gerar o Template do INTEGRA
    Then Deve habilitar a flag de Documentos serão Assinados Digitalmente 

    Given O usuário selecionou a Forma de pagamento - Pagamento Capital Imediado 
    Then Deve ser selecionado a Flag - Possuí exceção e habilitar o campo para preenchimento da exceção 
    When Desmarcar a opção - Há Dados de Favorecido 
    Then Deve mostrar um alert com informações de saldo a restituir
    When Marcar a opção - Há Dados de Favorecido
    When Marcar a opção - É mesma titularidade
    Then Deve preencher o nome e CNPJ-CPF Favorecido 

    Given O usuário selecionou Há Parcelamento
    Then Desmarcar a exceção
    When o campo do Parcelamento estiver visível
    Then Selecionar o Parcelamento de 12x
    Then Deve ser selecionado a Flag - Possuí exceção e habilitar o campo para preenchimento da exceção 
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno

    Given o Usuário selecionou Haverá baixa de capital para liquidação de valores em aberto
    When ficar visível o campo Valor Baixa
    Then Preencher o valor da Baixa
    When Preencher o Parecer
    Then Validar se o CheckList está presente e correto 
    Then Clicar em Cancelar para encerrar o teste de Formulário




    