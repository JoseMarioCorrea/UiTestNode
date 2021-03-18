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
    When O usuário seleciona o Contexto 1 - "Alterar Diversos Contextos"
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
    When O usuário seleciona o Contexto 2 - "Alterar Endereço"
    Then Selecionar o Motivo 0 - "Campanhas"
    
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
    When O usuário seleciona o Contexto 3 - "Alterar Estado Civil" 
    Then Deve mostrar a mensagem Quando for casado ou união estável deve ser anexado o documento de identificação do cônjuge
    Then Selecionar o Motivo 2 - "Movimentação na Cooperativa"
    
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
    When O usuário seleciona o Contexto 4 - "Alterar Nome" 
    Then Selecionar o Motivo 2 - "Movimentação na Cooperativa"
    
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
    When O usuário seleciona o Contexto 5 - "Alterar Renda" 
    Then Selecionar o Motivo 2 - "Movimentação na Cooperativa"
    
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
    When O usuário seleciona o Contexto 6 - "CC para Associado que possui apenas matrícula"
    Then Selecionar o Motivo 2 - "Movimentação na Cooperativa"
    
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
    When O usuário seleciona o Contexto 7 - "Conta Salário"
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
    When O usuário seleciona o Contexto 8 - "Excluir Segundo Titular por Óbito" 
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

Scenario: Atualização PF - Excluir Titularidade
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto 9 - "Excluir Titularidade" 
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo Formulário de Exclusão de Titularidade Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Formulário de Exclusão de Titularidade Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Excluir Titularidade
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PF - Incluir Titularidade
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto 10 - "Incluir Titularidade"
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos Proposta de Adesão de Produtos e Serviços - Cartão autógrafo Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Proposta de Adesão de Produtos e Serviços - Cartão autógrafo Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Incluir Titularidade
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PF - Nova CC possui matrícula e CC
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto 11 - "Nova CC" 
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    Then Mensagem informando que o CPF não possui cadastro 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos Proposta de Adesão de Produtos e Serviços Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Proposta de Adesão de Produtos e Serviços Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Nova CC
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes
    
Scenario: Atualização PF - Terceiros 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PF
    When O usuário seleciona o Contexto 12 - "Terceiros"
    Then Deve mostrar uma mensagem de encaminhar documentos obrigatórios
    Then Selecionar o Motivo 2 - "Movimentação na Cooperativa"
 
    Given Cooperativa, Posto preenchidos 
    When Preencher um CPF não cadastrado e clicar em Buscar
    
    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar  

    Given O usuário anexou arquivo Ficha de Dados Cadastrais Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PF - Terceiros 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Alterações Contratuais  
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 0 - "Alterações Contratuais"
    Then Selecionar o Motivo 0 - "Campanhas"
 
    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterações Contratuais"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterações Contratuais"
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 
    
Scenario: Atualização PJ - Alterações Diversos Contextos  
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 2 - "Alterações Diversos Contextos "
    Then Deve mostrar uma mensagem de encaminhar documentos obrigatórios 
    Then Selecionar o Motivo 1 - "Crédito"
    Then mostrar a mensagem de atendimento com SLA diferenciado

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterações Diversos Contextos"

    Given O usuário clicou em Encaminhar Solicitação 
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterar Diversos Contextos" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Alterar Endereço
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 3 - "Alterar Endereço"
    Then Selecionar o Motivo 2 - "Movimentação na Cooperativa"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterar Endereço"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos "Cartão CNPJ" obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterar Endereço" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Alterar Faturamento ou Documentos Contábeis
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 4 - "Alterar Faturamento ou Documentos Contábeis"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterar Faturamento ou Documentos Contábeis"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos "Relação Faturamento" obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterar Faturamento ou Documentos Contábeis" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Alterar Nome/Razão Social
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 5 - "Alterar Nome/Razão Social"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterar Nome/Razão Social"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterar Nome/Razão Social" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Alterar Síndicos 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 6 - "Alterar Síndicos"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterar Síndicos"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos " Ata de eleição ou posse Diretoria (Obrigatório)" obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterar Síndicos" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Alterar Sócios e/ou Representantes Legais 
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 7 - "Alterar Sócios e/ou Representantes Legais"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Alterar Sócios e/ou Representantes Legais"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Cartão CNPJ, Contrato Social, Certidão de verificação de situação de contrato obrigatórios
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Alterar Sócios e/ou Representantes Legais" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - C/C para Associado que possui apenas matrícula
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 8 - "C/C para Associado (que possui apenas matrícula)"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
     When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro  

    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar   
    Then Clicar em Cancelar  

Scenario: Atualização PJ - Nova C/C possui matrícula e C/C
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 9 - "Nova C/C (possui matrícula e C/C)"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Nova C/C (possui matrícula e C/C)"

    Given O usuário clicou em Encaminhar Solicitação 
    When Os arquivos  Proposta de Adesão de Produtos e Serviços, Cartão Autografo são obrigatórios
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Proposta de Adesão de Produtos e Serviços, Cartão Autografo são obrigatórios
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Nova C/C (possui matrícula e C/C)" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Para Crédito - Cooperativas
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 10 - "Para Crédito - Cooperativas"
    Then Selecionar o Motivo 3 - "Outros"
    
    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro  

    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar   
    Then Clicar em Cancelar 

Scenario: Atualização PJ - Para Crédito - Entidades Sem Fins Lucrativos
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 11 - "Para Crédito - Entidades Sem Fins Lucrativos"
    Then Ocorrer explicativa para Crédito - Entidades Sem Fins Lucrativos
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Para Crédito - Entidades Sem Fins Lucrativos"

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo  Relação de faturamento Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Relação de faturamento Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Para Crédito - Entidades Sem Fins Lucrativos" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Para Crédito - ERP e EIRELI
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 12 - "Para Crédito - ERP e EIRELI"
    Then Ocorrer explicativa para Crédito - Entidades Sem Fins Lucrativos
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Para Crédito - ERP e EIRELI"

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo  Relação de faturamento Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Relação de faturamento Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Para Crédito - ERP e EIRELI" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Para Crédito - MEI, ME e Empresário Individual
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 13 - "Para Crédito - MEI, ME e Empresário Individual"
    Then Ocorrer explicativa para Crédito - Entidades Sem Fins Lucrativos
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Para Crédito - MEI, ME e Empresário Individual"

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo  Relação de faturamento Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Relação de faturamento Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Para Crédito - MEI, ME e Empresário Individual" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Para Crédito - SA e LTDA
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 14 - "Para Crédito - SA e LTDA"
    Then Ocorrer explicativa para Crédito - Entidades Sem Fins Lucrativos
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Para Crédito - SA e LTDA"

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo  Relação de faturamento Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Relação de faturamento Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Para Crédito - SA e LTDA" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Atualização PJ - Terceiro
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 15 - "Terceiro"
    Then Selecionar o Motivo 3 - "Outros"

    Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Terceiro"

    Given O usuário clicou em Encaminhar Solicitação 
    When O arquivo  Relação de faturamento Obrigatório
    Then Deve mostrar uma mensagem informando que não possuí anexos.

    Given O usuário anexou Relação de faturamento Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then direcionar para a Tarefa Conferir Informações e Documentos 

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Atualização PJ - "Terceiro" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 