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

Scenario:Template Encerramento Conta Salário

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Encerramento de Conta 
    Then Selecionar Contexto Conta Salário
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação Conta Salário e pesquisar 

    Given O usuário preencheu as informações do cooperado
    When Selecionar Quero Gerar o Template do INTEGRA
    Then Deve habilitar a flag de Documentos serão Assinados Digitalmente 
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno
    When Preencher o Parecer
    Then Clicar em Gerar Template 

    Given O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign
    When O usuário Assumiu Atividade 
    Then Validar o Template Conta Salário 

Scenario:Template Encerramento Conta Individual

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Encerramento de Conta 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Selecionar Contexto Conta Individual
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 
    When Possuir mais de uma conta atividade 
    Then É possível selecionar a conta em que desejar encerrar
    When Selecionar Quero Gerar o Template do INTEGRA
    Then Deve habilitar a flag de Documentos serão Assinados Digitalmente 
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno
    When Preencher o Parecer
    Then Clicar em Gerar Template 

    Given O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign
    When O usuário Assumiu Atividade 
    Then Validar o Template Conta

Scenario:Template Demissão Pagamento Imediato

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    Then Selecionar Contexto Demissão 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

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
    Then Clicar em Gerar Template 

    Given O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign
    When O usuário Assumiu Atividade 
    Then Validar o Template Pagamento Imediato

Scenario:Template Demissão Pagamento AGO

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    Then Selecionar Contexto Demissão 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    When Selecionar Quero Gerar o Template do INTEGRA 
    Then Deve habilitar a flag de Documentos serão Assinados Digitalmente 
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
    Then Clicar em Gerar Template 

    Given O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign
    When O usuário Assumiu Atividade 
    Then Validar o Template Pagamento AGO

Scenario:Template Eliminado

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Selecionar Contexto Eliminação
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    When Selecionar Quero Gerar o Template do INTEGRA 
    Then Deve habilitar a flag de Documentos serão Assinados Digitalmente 
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
    Then Clicar em Gerar Template 

    Given O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign
    When O usuário Assumiu Atividade 
    Then Validar o Template Eliminado

Scenario:Template Excluido

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Selecionar Contexto Exclusão
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    When Selecionar Quero Gerar o Template do INTEGRA 
    Then Deve habilitar a flag de Documentos serão Assinados Digitalmente 
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
    Then Clicar em Gerar Template 

    Given O usuário está na tela de Encaminhar Documento ao Cooperado no DocuSign
    When O usuário Assumiu Atividade 
    Then Validar o Template Exclusão

Scenario: Demissão - Alçadas 

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    Then Selecionar Contexto Demissão 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    Given O usuário selecionou o Termo - Já Tenho o Termo Assinado 
    Then Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado 
    When Anexado o termo assinado

    Given O usuário selecionou a Forma de pagamento - Pagamento Capital Imediado 
    Then Deve ser selecionado a Flag - Possuí exceção e habilitar o campo para preenchimento da exceção
    When Desmarcar a opção - Há Dados de Favorecido  
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno

    Given o Usuário selecionou Haverá baixa de capital para liquidação de valores em aberto
    When ficar visível o campo Valor Baixa
    Then Preencher o valor da Baixa
    When Preencher o Parecer
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Exceção
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given Analisar Solicitação e Realizar Encerramento de Conta ou Desligamento de Cooperado
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Finalizar o teste e Limpar instâncias

Scenario: Encerramento Alçadas

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Encerramento de Conta 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Selecionar Contexto Conta Individual
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 
    When Possuir mais de uma conta atividade 
    Then É possível selecionar as contas para encerrar
    Given O usuário selecionou o Termo - Já Tenho o Termo Assinado 
    When Anexado o termo assinado
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno
    When Preencher o Parecer
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given Analisar Solicitação e Realizar Encerramento de Conta ou Desligamento de Cooperado
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Finalizar o teste e Limpar instâncias

Scenario: Demissão - Regularizacao 

   Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Desligamento de Cooperato 
    Then Selecionar Contexto Demissão 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 

    Given O usuário selecionou o Termo - Já Tenho o Termo Assinado 
    Then Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado 
    When Anexado o termo assinado

    Given O usuário selecionou a Forma de pagamento - Pagamento Capital Imediado 
    Then Deve ser selecionado a Flag - Possuí exceção e habilitar o campo para preenchimento da exceção
    When Desmarcar a opção - Há Dados de Favorecido  
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno

    Given o Usuário selecionou Haverá baixa de capital para liquidação de valores em aberto
    When ficar visível o campo Valor Baixa
    Then Preencher o valor da Baixa
    When Preencher o Parecer
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Solicitar Mais Informações
    
    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    When Selecionar Quero Gerar o Template do INTEGRA
    Then Clicar em Gerar Template 

    Given O usuário está na atividade Coletar Assinatura nos Templates Gerados
    Then Validar o Templates Encerramento
    Then Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado 
    When Anexar o termo assinado
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Solicitar Mais Informações

    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    Then Clicar em Gerar Template 

    Given O usuário está na atividade Coletar Assinatura nos Templates Gerados
    Then Validar o Templates Encerramento
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Exceção
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Solicitar Mais Informações

    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    Then Clicar em Gerar Template

    Given O usuário está na atividade Coletar Assinatura nos Templates Gerados
    Then Validar o Templates Encerramento
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Exceção
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Solicitar Mais Informações

    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    Then Clicar em Gerar Template

    Given O usuário está na atividade Coletar Assinatura nos Templates Gerados
    Then Validar o Templates Encerramento
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Exceção
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Clicar em Aprovar Solicitação

    Given Analisar Solicitação e Realizar Encerramento de Conta ou Desligamento de Cooperado
    When O usuário Assumiu Atividade
    Then Validar os dados de Desligamento
    Then Finalizar o teste e Limpar instâncias
    

Scenario: Encerramento de Conta - Regularizacao 

   Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "****" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    When Inicia o teste do Processo "PR 9008 - Encerramento de Conta ou Desligamento de Cooperado"
    Then Deve Iniciar Solicitação de Encerramento de Conta ou Desligamento de Cooperado

    Given O usuário selecionou Encerramento de Conta 
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Selecionar Contexto Conta Individual
    When Selecionar o Motivo Ausência de Convênio para Recebimento de Salário Aposentadoria
    Then Preencher as Informações da Solicitação e pesquisar 
    When Possuir mais de uma conta atividade 
    Then É possível selecionar as contas para encerrar

    Given O usuário selecionou o Termo - Já Tenho o Termo Assinado 
    Then Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado 
    When Anexado o termo assinado
    
    Given o Usuário selecionou Estorno de Juros, IOF e Tarifas
    When ficar visível o campo Valor Estorno
    Then preencher o valor do Estorno
    When Preencher o Parecer
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Solicitar Mais Informações

    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    When Selecionar Quero Gerar o Template do INTEGRA
    Then Clicar em Gerar Template 

    Given O usuário está na atividade Coletar Assinatura nos Templates Gerados
    Then Validar o Templates Encerramento
    Then Deve ser Obrigatório anexar o Termo Assinado para Desligamento de Cooperado 
    When Anexar o termo assinado
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Solicitar Mais Informações

    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    Then Validar o Templates Encerramento
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Solicitar Mais Informações

    Given O usuário está na atividade Regularizar Pendências de Solicitação de Encerramento de Conta ou Desligamento de Cooperado 
    Then Clicar em Encaminhar a Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Agência
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Núcelo Estratégico
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação

    Given O usuário está localizado na atividade Analisar Solicitação de Encerramento de Conta ou Desligamento de Cooperado Alçada Estorno ou Baixa
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Clicar em Aprovar Solicitação
    
    Given Analisar Solicitação e Realizar Encerramento de Conta ou Desligamento de Cooperado
    When O usuário Assumiu Atividade
    Then Validar os dados de Encerramento
    Then Finalizar o teste e Limpar instâncias

