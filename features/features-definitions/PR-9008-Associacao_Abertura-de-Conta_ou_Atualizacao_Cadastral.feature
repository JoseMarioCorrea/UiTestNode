Feature: PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral

    Feature Description
Scenario: Atualização PF - Alterar Diversos Contextos
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Alterar Diversos Contextos
    Then Deve mostrar uma mensagem de encaminhar documentos obrigatórios 

    Given A seleção do Motivo Crédito
    Then mostrar a mensagem de atendimento com SLA diferenciado
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos não estão anexados 
    Then Deve mostrar uma mensagem informando que não possuí anexos. 

    Given O usuário anexou arquivo Ficha de Dados Cadastrais Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 
    
Scenario: Atualização PF - Alterar Endereço 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Alterar Endereço 
    Then Selecionar o Motivo Campanhas
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Comprovante de residência e endereço é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Comprovante de residência e endereço 
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Alterar Endereço
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes  

Scenario: Atualização PF - Alterar Estado Civil 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Alterar Estado Civil 
    Then Deve mostrar a mensagem Quando for casado ou união estável deve ser anexado o documento de identificação do cônjuge
    Then Selecionar o Motivo Movimentação na Cooperativa
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Estado Civil é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Comprovante de Estado Civil 
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Alterar Estado Civil
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes  

Scenario: Atualização PF - Alterar Nome 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Alterar Nome 
    Then Selecionar o Motivo Movimentação na Cooperativa
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Documento e identificação e Receita Federal é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Comprovante de Documento e identificação e Receita Federal é obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Alterar Nome
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PF - Alterar Renda 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Alterar Renda 
    Then Selecionar o Motivo Movimentação na Cooperativa
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Comprovante de renda é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Comprovante de renda
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Alterar Renda
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PF - C/C para Associado que possui apenas matrícula 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - CC para Associado que possui apenas matrícula
    Then Selecionar o Motivo Movimentação na Cooperativa
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro  

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar uma mensagem informando que cooperado já possui conta 
    Then Clicar em Cancelar  
     
Scenario: Atualização PF - Conta Salário  
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Conta Salário
    Then Deve selecionar automaticamente o Motivo Outros 
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF válido e não preencher Matricula Empregador e clicar em Buscar
    Then Mensagem informando que a Matricula não existe na base de dados  

    Given O CPF digitado e uma Matricula Empregador válido 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente para o CPF e Matricula digitados

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Comprovante de Ficha de Dados Cadastrais é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Comprovante de Ficha de Dados Cadastrais
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Conta Salário
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PF - Excluir Segundo Titular por Óbito
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Excluir Segundo Titular por Óbito 
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Certidão de Óbito é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Certidão de Óbito é obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Excluir Segundo Titular por Óbito
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PF - Excluir Segundo Titular por Óbito
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto - Excluir Segundo Titular por Óbito 
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Certidão de Óbito é obrigatório 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Certidão de Óbito é obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Excluir Segundo Titular por Óbito
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 
