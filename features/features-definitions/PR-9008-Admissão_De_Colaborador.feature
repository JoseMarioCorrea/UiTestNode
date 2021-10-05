Feature: PR 9008 - Admissão de Colaborador

Scenario: Admissão de Colaborador - Formulario Abertura de Vaga
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Admissão de Colaborador(a)"
    When Inicia o teste do Processo "PR 9008 - Admissão de Colaborador(a)"
    Then Direcionar para Iniciar Solicitação de Admissão de Colaborador

    Given O usuário seleciona a cooperativa 9008
    When Habilitar o campo Solicitar uma Admissão ou Abertura de Vaga?
    Then Selecionar a opção "Abertura de Vaga"
    Then Deve apresentar o botão Inicar Abertura de Vaga

    Given O usuário está localizado na atividade Iniciar Solicitação de Abertura de Vaga
    When Preencher o Nome da Vaga 
    Then Preencher o Detalhamento da Vaga 

    Given O preenchimento de Informações da Vaga
    When Preencer os dados do Local da Vaga
    Then Preencher os dados de Informações Internas da Vaga

    Given O preenchimento do Responsável pela Vaga
    When Preencher os Dados Adicionais
    Then Encaminhar Informações

Scenario: Admissão de Colaborador - Formulario Admissão
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Admissão de Colaborador(a)"
    When Inicia o teste do Processo "PR 9008 - Admissão de Colaborador(a)"
    Then Direcionar para Iniciar Solicitação de Admissão de Colaborador

    Given O usuário seleciona a cooperativa 0507
    When Iniciar o preenchimento do formulário
    Then verificar a regra para dispensado do Ponto
    When Finalizar o preenchimento da area, centro de custo e Gestor
    Then Deve habilitar o campo Data Admissão
    Then Selecionar uma data de admissão

    Given A seleção de É Admissão de Aprendiz Estagiário? como Sim
    When Apresentar os campos de estágios e forem preenchidos os campos restantes
    Then Encaminhar Solicitação
    
Scenario: Admissão de Colaborador - Fluxo completo Abertura de Vaga
     Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Admissão de Colaborador(a)"
    When Inicia o teste do Processo "PR 9008 - Admissão de Colaborador(a)"
    Then Direcionar para Iniciar Solicitação de Admissão de Colaborador

    Given O usuário seleciona a cooperativa 9008
    When Habilitar o campo Solicitar uma Admissão ou Abertura de Vaga?
    Then Selecionar a opção "Abertura de Vaga"
    Then Deve apresentar o botão Inicar Abertura de Vaga

    Given O usuário está localizado na atividade Iniciar Solicitação de Abertura de Vaga
    When Preencher o Nome da Vaga 
    Then Preencher o Detalhamento da Vaga 

    Given O preenchimento de Informações da Vaga
    When Preencer os dados do Local da Vaga
    Then Preencher os dados de Informações Internas da Vaga

    Given O preenchimento do Responsável pela Vaga
    When Preencher os Dados Adicionais
    Then Encaminhar Informações

    Given O usuário está localizado na atividade Repassar Informações de Admissão para Gupy
    When O usuário Assumiu Atividade
    Then Deve ser validados os dados de abertura de vaga
    Then Solicitar Informações

    Given Repassar Mais Informações para Abertura de Vaga Admissão
    When Alterar o Nome da Vaga 
    Then Encaminhar Novas Informações

    Given O usuário está localizado na atividade Repassar Informações de Admissão para Gupy
    When O usuário Assumiu Atividade
    Then Confirmar a Abertura de Vaga

    Given O usuário está localizado na atividade Aguardar Finalização de Recrutamento e Seleção
    When O usuário Assumiu Atividade
    Then Preencher a Data de Admissão e Centro de Custo
    When Preencher o Formulário da Admissão
    Then Selecionar dispensado do Ponto
    Then Encaminhar para Admissão de Colaborador


    