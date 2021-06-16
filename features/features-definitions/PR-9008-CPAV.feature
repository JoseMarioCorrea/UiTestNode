Feature: PR 9008 - CPAV

Feature Description
Scenario: CPAV
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - CPAV"
    When Localizar a instância iniciada através do Post na API o teste do Processo
    Then Deve Verificar Documentos e Fazer Contato Caso Necessário de Solicitação de CPAV

    Given Assumir a atividade Verificar Documentos e Fazer Contato Caso Necessário de Solicitação de CPAV
    When Validar os dados importados da requisição Post no EndPoint
    Then Finalizar o Teste de CPAV