Feature: PR 9008 - Gestão de Pagamento de Contratos

Feature Description
Scenario: Gestao de Pagamento de Contratos - Inclusão
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given Estamos na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Gestão de Pagamento de Contratos"
    When Inicia o teste do Processo "PR 9008 - Gestão de Pagamento de Contratos"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contrato Firmado com Fornecedor

    Given O selecionamento da Cooperativa 
    When Preencher o CPFCNPJ Fornecedor
    Then Clicar em Buscar o CPF do Fornecedor

    Given O Objetivo foi selecionado como - Adicionar Contrato
    When Selecionado o Centro de Custo 
    Then Preencher os dados da Informações do Fornecedor

    Given As Informações de Contrato foram preenchidas 
    When A Vigência de Oferto for igual a Determinado
    Then Deve habilitar o campo Data Vigência
    When A Vigência de Oferto for igual a Evento
    Then Deve habilitar o campo Data Vigência
    When A Vigência de Oferto for igual a Indeterminado
    Then Deve ocultar o campo Data Vigência

    Given O Contrato possuí rateio
    When habilitar o campo Tipo de Rateio e selecionar o tipo Váriavel 
    Then habilitar Critério Rateio 
    When Selecionar o tipo de rateio Fixo
    Then Deve habilitar a seção para preenchimento do Centro de Custo do Rateio, Valor, Porcentagem 

    Given O usuário preencheu o centro de custo, valor e porcentagem 
    When Clicar em adicionar um novo Centro de Custo
    Then Preencher os campos do Centro de Custo adicionado 
    Then Preencher os dados restantes
    When Selecionar a Forma de Pagamento - Transferência 
    Then Deve habilitar os campos para inserir a conta para Transferência
    Then Encaminhar Novas Informações da Gestão de Pagamento de Contratos

    Given Estamos localizado na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    When Assumir a atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    Then Validar os dados apresentados na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    When Abertura Automática NFX for igual a Não 
    Then Solicitar Mais informações ao Requisitante

    Given O usuário regulariza os dados pendentes 
    When Encaminhar as novas informações das regularizações pendentes 

    Given Estamos localizado na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    When Assumir a atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    Then Validar os dados apresentados na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor após alterações
    When Abertura Automática NFX for igual a Não
    Then Contrato de Acordo para Controle Interno

Scenario: Gestao de Pagamento de Contratos - Edição
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given Estamos na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Gestão de Pagamento de Contratos"
    When Inicia o teste do Processo "PR 9008 - Gestão de Pagamento de Contratos"
    Then Deve direcionar para a tela de Iniciar Solicitação de Contrato Firmado com Fornecedor

    Given O selecionamento da Cooperativa 
    When Preencher o CPFCNPJ Fornecedor
    Then Clicar em Buscar o CPF do Fornecedor e localizar o contrato para edição

    Given Selecionado o Objetivo Atualizar Contrato 
    When Selecionar o tipo de rateio Fixo
    Then Deve habilitar a seção para preenchimento do Centro de Custo do Rateio, Valor, Porcentagem 

    Given O usuário preencheu o centro de custo, valor e porcentagem 
    When Clicar em adicionar um novo Centro de Custo
    Then Preencher os campos do Centro de Custo adicionado 
    Then Encaminhar Novas Informações da Gestão de Pagamento de Contratos

    Given Estamos localizado na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    When Assumir a atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor
    Then Validar os dados apresentados na atividade Analisar Contrato para Estruturar Pagamentos ao Fornecedor para atualização
    When Abertura Automática NFX for igual a Não 
    Then Contrato de Acordo para Controle Interno






    