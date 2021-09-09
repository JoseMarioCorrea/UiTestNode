Feature: PR 9008 - Onboarding Digital

    Feature Description
Scenario: Onboarding Digital - Solicitação Rejeitada
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Onboarding Digital"
    When Localizar a instância iniciada através do Post na API o teste do Processo
    Then Direcionar para Receber Solicitação de Onboarding Digital e Realizar Trâmites Iniciais

    Given O usuário	Assumiu Atividade
    When Validar os dados Onboarding
    Then Documentos Não Aceitos - Rejeitar Associação


Scenario: Onboarding Digital - Enviar para Analise
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Onboarding Digital"
    When Localizar a instância iniciada através do Post na API o teste do Processo
    Then Direcionar para Receber Solicitação de Onboarding Digital e Realizar Trâmites Iniciais

    Given O usuário Assumiu Atividade
    When Validar os dados Onboarding
    Then Anexar arquivo IdWall 
    Then Enviar para Analise da Cooperativa

    Given O usuário está na tela de busca de processos e Realizar a busca novamente do Processo - "PR 9008 - Onboarding Digital"
    When Localizar a instância de teste do Processo
    Given Estamos localizados na atividade Analisar Solicitação de Onboarding Digital 
    When O usuário Assumiu Atividade
    Then Preencher Carteiras e Colaborador Responsável
    Then Aprovar Cadastro Onboarding

    Given O usuário está na tela de busca de processos e Realizar novamente a busca do Processo - "PR 9008 - Onboarding Digital"
    When Localizar a instância com a atividade de teste do Processo
    Given Estamos localizados na atividade Encaminhar Documento de Onboarding para Assinatura Digital 
    When O usuário Assumiu Atividade
    When Validar os dados Onboarding
    Then Clicar em Solicitação Cancelada Sem Notificar o Prospect




