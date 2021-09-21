Feature: PR 9008 - Análise de Contrato de Parceiro

Scenario: Analise de Contrato de Parceiro - Formulario
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Análise de Contrato de Parceiro"
    When Inicia o teste do Processo "PR 9008 - Análise de Contrato de Parceiro"
    Then Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro

    Given O usuário Selecionou o Mercado Interno
    When Preencher um CPF 
    Then o Tipo de Pessoa deve ser igual a Física 
    When Preencher um CNPJ 
    Then o Tipo de Pessoa deve ser igual a Jurídica

    Given o usuário selecionou o Tipo de Documento - Aditivo 
    Then deve habilitar a section Informações da Minuta
    When Validar a regra de rateio para cooperativas Fixo
    Then Validar a regra de rateio para cooperativas Variável
    When o usuário selecionou o Tipo de Documento - Contrato 
    Then deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Convênio Débito Automático 
    Then deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Convênio Órgão Público 
    Then deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Distrato 
    Then Não deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Notificação 
    Then Não deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Notificação ExtraJudicial
    Then Não deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Parecer de Contrato 
    Then Não deve habilitar a section Informações da Minuta
    Then deve habilitar o campo Parecer
    When o usuário selecionou o Tipo de Documento - Proposta Comercial  Técnica
    Then deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Qualificação de Fornecedor  Análise Saúde Financeira
    Then deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Registro de Ocorrência de Fornecedor 
    Then Não deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Solicitação de Contratos e Documentos Assinados 
    Then Não deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Termo de Adesão
    Then deve habilitar a section Informações da Minuta
    When o usuário selecionou o Tipo de Documento - Termo de Confidencialidade
    Then deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações
    
    When o usuário preencheu o Assunto
    Then preencher informaçoes de Parceiro
    
    Given O usuário inseriu os anexos para Análise de Contrato de Parceiro 
    When preencher o responsável pela assinatura 
    Then marcar as Informações Complementares e Encaminhar Solicitação

Scenario: Analise de Contrato de Parceiro - Análise Jurídico
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Análise de Contrato de Parceiro"
    When Inicia o teste do Processo "PR 9008 - Análise de Contrato de Parceiro"
    Then Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro

    Given O usuário Selecionou o Mercado Interno
    When Preencher um CPF 
    Then o Tipo de Pessoa deve ser igual a Física 
    When o usuário selecionou o Tipo de Documento - Termo de Confidencialidade
    Then deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações
    When o usuário preencheu o Assunto
    Then preencher informaçoes de Parceiro

    Given O usuário inseriu os anexos para Análise de Contrato de Parceiro 
    When preencher o responsável pela assinatura 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then Selecionar o Tipo de Contrato 
    When validar os dados do contrato com Parceiro 
    Then Análise Controladoria deve vir já habilitado
    When desabilitar a Análise Controladoria 
    Then anexar o sétimo arquivo
    Then Selecionar Análise Jurídico 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada Jurídico
    When O usuário Assumiu Atividade
    Then anexar o oitavo arquivo
    When validar os dados do contrato com Parceiro 
    Then clicar em Análise Realzada

Scenario: Analise de Contrato de Parceiro - Análise SI
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Análise de Contrato de Parceiro"
    When Inicia o teste do Processo "PR 9008 - Análise de Contrato de Parceiro"
    Then Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro

    Given O usuário Selecionou o Mercado Interno
    When Preencher um CPF 
    Then o Tipo de Pessoa deve ser igual a Física 
    When o usuário selecionou o Tipo de Documento - Termo de Confidencialidade
    Then deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações
    When o usuário preencheu o Assunto
    Then preencher informaçoes de Parceiro

    Given O usuário inseriu os anexos para Análise de Contrato de Parceiro 
    When preencher o responsável pela assinatura 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then Selecionar o Tipo de Contrato 
    When validar os dados do contrato com Parceiro 
    Then Análise Controladoria deve vir já habilitado
    When desabilitar a Análise Controladoria 
    Then anexar o sétimo arquivo
    Then Selecionar Análise SI 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada SI
    When O usuário Assumiu Atividade
    Then anexar o oitavo arquivo
    Then preencher Informações Segurança da Informação
    When validar os dados do contrato com Parceiro 
    Then clicar em Análise Realzada


Scenario: Analise de Contrato de Parceiro - Análise Controladoria
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Análise de Contrato de Parceiro"
    When Inicia o teste do Processo "PR 9008 - Análise de Contrato de Parceiro"
    Then Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro

    Given O usuário Selecionou o Mercado Interno
    When Preencher um CPF 
    Then o Tipo de Pessoa deve ser igual a Física 
    When o usuário selecionou o Tipo de Documento - Termo de Confidencialidade
    Then deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações
    When o usuário preencheu o Assunto
    Then preencher informaçoes de Parceiro

    Given O usuário inseriu os anexos para Análise de Contrato de Parceiro 
    When preencher o responsável pela assinatura 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then Selecionar o Tipo de Contrato 
    When validar os dados do contrato com Parceiro 
    Then Análise Controladoria deve vir já habilitado 
    Then anexar o sétimo arquivo
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada Controladoria
    When O usuário Assumiu Atividade
    Then anexar o oitavo arquivo
    Then preencher Informações Controladoria
    When validar os dados do contrato com Parceiro 
    Then clicar em Análise Realzada

Scenario: Analise de Contrato de Parceiro - Devolver para Análise
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Análise de Contrato de Parceiro"
    When Inicia o teste do Processo "PR 9008 - Análise de Contrato de Parceiro"
    Then Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro

    Given O usuário Selecionou o Mercado Interno
    When Preencher um CPF 
    Then o Tipo de Pessoa deve ser igual a Física 
    When o usuário selecionou o Tipo de Documento - Termo de Confidencialidade
    Then deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações
    When o usuário preencheu o Assunto
    Then preencher informaçoes de Parceiro

    Given O usuário inseriu os anexos para Análise de Contrato de Parceiro 
    When preencher o responsável pela assinatura 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then Selecionar o Tipo de Contrato 
    When validar os dados do contrato com Parceiro 
    Then Análise Controladoria deve vir já habilitado 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada Controladoria
    When O usuário Assumiu Atividade
    Then anexar o sétimo arquivo
    Then preencher Informações Controladoria
    When validar os dados do contrato com Parceiro 
    Then clicar em Análise Realzada

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Após Validação Times UBR
    When O usuário Assumiu Atividade
    Then Selecionar Análise Jurídico 
    Then anexar o oitavo arquivo
    Then Clicar em Devolver para Analise

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Alçada Jurídico
    When O usuário Assumiu Atividade
    When validar os dados do contrato com Parceiro 
    Then clicar em Análise Realzada

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Após Validação Times UBR


Scenario: Analise de Contrato de Parceiro - Fluxo Completo
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Análise de Contrato de Parceiro"
    When Inicia o teste do Processo "PR 9008 - Análise de Contrato de Parceiro"
    Then Direcionar para Iniciar Solicitação de Análise de Contrato de Parceiro

    Given O usuário Selecionou o Mercado Interno
    When Preencher um CPF 
    Then o Tipo de Pessoa deve ser igual a Física 
    When o usuário selecionou o Tipo de Documento - Termo de Confidencialidade
    Then deve habilitar a section Informações da Minuta porém mostrar somente Local, Vigência, Descrição, Penalidades e Considerações
    When o usuário preencheu o Assunto
    Then preencher informaçoes de Parceiro

    Given O usuário inseriu o primeiro anexo para Análise de Contrato de Parceiro
    When preencher o responsável pela assinatura 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then Selecionar o Tipo de Contrato 
    When validar os dados do contrato com Parceiro 
    Then Análise Controladoria deve vir já habilitado
    When desabilitar a Análise Controladoria 
    Then Encaminhar Solicitação

    Given o usuário está localizado em Analisar Solicitação de Contrato com Parceiro Após Validação Times UBR
    When O usuário Assumiu Atividade
    Then Clicar em Coletar Visto Jurídico

    Given o usuário está localizado Coletar Visto do Jurídico em Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then clicar em Coleta Realizada

    Given o usuário está localizado Encaminhar Documentos de Solicitação de Contrato com Parceiro para Assinatura Digital
    When O usuário Assumiu Atividade
    Then clicar em Documentos Encaminhados

    Given o usuário está localizado em Aguardar Assinatura de Documentos de Solicitação de Contrato com Parceiro
    When O usuário Assumiu Atividade
    Then Selecionar forma de pagamento
    When validar os dados do contrato com Parceiro 
    Then clicar em Aprovar a Solicitação

    Given o usuário está localizado na atividade Digitalizar o Contrato Assinado
    When O usuário Assumiu Atividade
    Then selecionar os procuradores 
    When inserir o Contrato Assinado 
    Then Clicar em Contrato Assinado 



