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

Scenario: Cadastro PF - Associado apenas matrícula
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 0 - "Associado (apenas matrícula)"
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento

    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    
    Given Anexar arquivo  Documento de identificação Obrigatório
    When Anexar arquivo  Comprovante de residência endereço Obrigatório
    Then Anexar arquivo  Autorização débito capital conta de terceiros Obrigatório
    
    Given Anexar arquivo  Serasa Obrigatório
    When Anexar arquivo  Bacén Obrigatório
    Then Anexar arquivo  Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Associado (apenas matrícula)" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PF - Associado apenas matrícula para Menores de Idade
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 1 - "Associado (apenas matrícula) para Menores de Idade"
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento

    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    
    Given Anexar arquivo  Documento de identificação Obrigatório
    When Anexar arquivo  Comprovante de residência endereço Obrigatório
    Then Anexar arquivo  Autorização débito capital conta de terceiros Obrigatório
    Then Anexar arquivo  Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Associado (apenas matrícula) para Menores de Idade" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 


Scenario: Cadastro PF - Conta Salário
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 2 - "Conta Salário"
    Then Deve habilitar o campo Matricula Empregador
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento

    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Conta Salário" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PF - Matrícula e CC Conjunta
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 3 - "Matrícula e C/C Conjunta"
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Documento de identificação Obrigatório
    When Anexar arquivo  Comprovante de residência endereço Obrigatório
    Then Anexar arquivo  Autorização débito capital conta de terceiros Obrigatório
    Then Anexar arquivo Cartão autógrafo Obrigatório
    
    Given Anexar arquivo  Serasa Obrigatório
    When Anexar arquivo  Bacén Obrigatório
    Then Anexar arquivo  Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Matrícula e C/C Conjunta" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PF - Matrícula e CC Individual
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 4 - "Matrícula e C/C Individual"
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Documento de identificação Obrigatório
    When Anexar arquivo  Comprovante de residência endereço Obrigatório
    Then Anexar arquivo  Autorização débito capital conta de terceiros Obrigatório
    Then Anexar arquivo Cartão autógrafo Obrigatório
    
    Given Anexar arquivo  Serasa Obrigatório
    When Anexar arquivo  Bacén Obrigatório
    Then Anexar arquivo  Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Matrícula e C/C Individual" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PF - Matrícula e CC para Menores de Idade
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 5 - "Matrícula e C/C para Menores de Idade"
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Documento de identificação Obrigatório
    When Anexar arquivo  Comprovante de residência endereço Obrigatório
    Then Anexar arquivo Cartão autógrafo Obrigatório
    Then Anexar arquivo  Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Matrícula e C/C para Menores de Idade" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PF - Terceiro Sócio Representante, Aval, Tutor e Curador
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 6 - "Terceiro (Sócio/Representante, Aval, Tutor e Curador)"
    Then Selecionar o Motivo 0 - "Campanhas"

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    
    Given Anexar arquivo  Documento de identificação Obrigatório
    When Anexar arquivo  Comprovante de residência endereço Obrigatório
    Then Anexar arquivo  Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Terceiro (Sócio/Representante, Aval, Tutor e Curador)" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PF - Vendedor
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 7 - "Vendedor"
    Then Selecionar o Motivo 0 - "Campanhas"

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Vendedor" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - CC para Matriz e Filial
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 0 - "C/C para Matriz e Filial"
    Then Deve selecionar automaticamente o Motivo Outros 

   Given Cooperativa, Posto preenchidos 
    When Preencher um CNPJ não cadastrado e clicar em Buscar
    Then Mensagem informando que o CNPJ não possui cadastro 
    
    Given O CNPJ digitado é um CNPJ cadastrado 
    When Clicar em Buscar  
    Then Deve mostrar os dados corretamente - "Cadastro PJ"
    
    Given Existem documentos obrigatórios que devem ser anexados 
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo   Comprovante de endereço Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Anexar arquivo da Receita Federal Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PJ - "C/C para Matriz e Filial" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Cadastrar Terceiro
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 1 - "Cadastrar Terceiro"
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Cadastrar Terceiro" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - Associações
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 2 - "Matrícula e C/C - Associações"
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - Associações" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - Condomínios
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 3 - "Matrícula e C/C - Condomínios"
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - Condomínios" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - Cooperativas
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 4 - "Matrícula e C/C - Cooperativas"
    Then Deve aparecer uma mensagem informando o envio de relação de faturamento 
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - Cooperativas" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - Empresário Individual
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 5 - "Matrícula e C/C - Empresário Individual"
    Then Deve aparecer uma mensagem informando o envio de relação de faturamento 
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - Empresário Individual" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - Entidades Sem Fins Lucrativos
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 6 - "Matrícula e C/C - Entidades Sem Fins Lucrativos"
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - Entidades Sem Fins Lucrativos" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - LTDA EIRELI ou Sociedade Simples LTDA ou PURA
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 8 - "Matrícula e C/C - LTDA/EIRELI ou Sociedade Simples LTDA ou PURA"
    Then Deve aparecer uma mensagem informando o envio de relação de faturamento 
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - LTDA/EIRELI ou Sociedade Simples LTDA ou PURA" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - MEI
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 9 - "Matrícula e C/C - MEI"
    Then Deve aparecer uma mensagem informando o envio de relação de faturamento 
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - MEI" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Matrícula e CC - SA
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 10 - "Matrícula e C/C - SA"
    Then Deve aparecer uma mensagem informando o envio de relação de faturamento 
    Then Deve selecionar automaticamente o Motivo Outros 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Anexar arquivo  Proposta de Admissão e Ficha Matrícula Obrigatório
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Anexar arquivo  Proposta de Adesão de Produtos e Serviços Obrigatório
    
    Given Anexar arquivo  Cartão CNPJ Obrigatório
    When Anexar arquivo  Ata de eleição ou de posse Diretoria e ou Síndico Obrigatório
    Then Anexar arquivo  Contrato Social ou Estatuto Social de constituição e alterações Obrigatório
    Then Anexar arquivo Certidões de Verificação de Situação de Contratos Obrigatório
    Then Anexar arquivo de Cartão autógrafo Obrigatório
    
    Given Anexar arquivo do Serasa Obrigatório
    When Anexar arquivo do Bacén Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Matrícula e C/C - SA" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Cadastro PJ - Vendedor
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 11 - "Vendedor" 
    Then Selecionar o Motivo 0 - "Campanhas" 
     
    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Cadastro PJ - "Vendedor" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes 

Scenario: Procurador - Alterar Procurador na CC do Cooperado
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Procurador
    When O usuário seleciona o Contexto 0 - "Alterar Procurador na C/C do Cooperado" 
    Then Selecionar o Motivo 0 - "Campanhas" 

    Given Cooperativa, Posto Selecionados 
    When Preenchido a Conta do Outorgante 
    Then Preencher CPF Procurador e o Nome Completo 

    Given Ao clicar em Buscar 
    When Anexar Arquivo Procuração Obrigatório
    Then Deve anexar o arquivo Revogação Obrigatório  
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Procurador - "Alterar Procurador na C/C do Cooperado" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes

Scenario: Procurador - Atualizar Procurador
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Procurador
    When O usuário seleciona o Contexto 1 - "Atualizar Procurador" 
    Then Selecionar o Motivo 0 - "Campanhas" 

    Given Cooperativa, Posto Selecionados 
    When Preenchido a Conta do Outorgante 
    Then Preencher CPF Procurador e o Nome Completo 

    Given Ao clicar em Buscar 
    When Anexar Arquivo Procuração Obrigatório
    Then Deve anexar o arquivo Revogação Obrigatório  
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Procurador - "Atualizar Procurador" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes

Scenario: Procurador - Incluir Procurador na C/C do Cooperado
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Procurador
    When O usuário seleciona o Contexto 2 - "Incluir Procurador na C/C do Cooperado" 
    Then Selecionar o Motivo 0 - "Campanhas" 

    Given Cooperativa, Posto Selecionados 
    When Preenchido a Conta do Outorgante 
    Then Preencher CPF Procurador e o Nome Completo 

    Given Ao clicar em Buscar 
    When Anexar Arquivo Procuração Obrigatório
    Then Deve anexar o arquivo Revogação Obrigatório  
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Procurador - "Incluir Procurador na C/C do Cooperado" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes

Scenario: Procurador - Revogar Procurador na C/C do Cooperado
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Procurador
    When O usuário seleciona o Contexto 3 - "Revogar Procurador na C/C do Cooperado" 
    Then Selecionar o Motivo 0 - "Campanhas" 

    Given Cooperativa, Posto Selecionados 
    When Preenchido a Conta do Outorgante 
    Then Preencher CPF Procurador e o Nome Completo 

    Given Ao clicar em Buscar 
    When Anexar Arquivo Procuração Obrigatório
    Then Deve anexar o arquivo Revogação Obrigatório  
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para o Procurador - "Revogar Procurador na C/C do Cooperado" 
    Then Clicar em Cancelar Instância 
    Then Limpar dados de testes

Scenario: isPreExceção = Sim 
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
    Then Cooperativa, Posto preenchidos 

    Given O usuário marcou o checkbox Deseja realizar uma análise prévia de exceção?
    Then Deve mostrar uma tooltip informativa Esse tipo de solicitação enquadra-se...
    When Selecionar o Tipo Exeção 
    Then Preencher a Justificativa Exceção 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário anexou arquivo Ficha de Dados Cadastrais Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação

    Given O usuário Assumiu a atividade e analisou a solicitação e validou os dados 
    When Aprovar Solicitação 
    Then Deve encaminhar para a tarefa Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário validou se os campos estão com preenchimento correto 
    When O usuário anexar os documentos obrigatórios para Associação 
    Then O usuário deve Clicar em Encaminhar Solicitação

    Given O usuário	Assumiu Atividade  
    When O usuário validar os Arquivos anexados para isPreExceção
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: isExceção = Sim 

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 2 - "Alterar Diversos Contextos"
    Then Deve mostrar uma mensagem de encaminhar documentos obrigatórios 

    Given A seleção do Motivo Crédito
    Then mostrar a mensagem de atendimento com SLA diferenciado
    Then Cooperativa, Posto preenchidos

    Given O usuário marcou o checkbox Solicitação possui alguma exceção? 
    When Selecionar o Tipo Exeção 
    Then Preencher a Justificativa Exceção

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 

    Given O usuário anexou arquivo Ficha de Dados Cadastrais Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação

    Given O usuário Assumiu a atividade e analisou a solicitação e validou os dados PJ isExceção 
    When Aprovar Solicitação 

    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When O usuário validar os Arquivos anexados para isExceção
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: isMediaComprovante = Sim 

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Atualização PJ
    When O usuário seleciona o Contexto 2 - "Alterar Diversos Contextos"
    Then Deve mostrar uma mensagem de encaminhar documentos obrigatórios 

    Given A seleção do Motivo Crédito
    Then mostrar a mensagem de atendimento com SLA diferenciado
    Then Cooperativa, Posto preenchidos

    Given O usuário marcou o checkbox Renda é comprovada através de média de comprovantes?
    When Validar a mensagem O valor solicitado de média pode ser alterado pelo diretor...
    Then Preencher o Valor Média Extrato 

    Given O CPF digitado é um CPF cadastrado 
    When Clicar em Buscar 
    Then Deve mostrar os dados corretamente 
    Then Deve mostrar a Profissão, Score Serasa e Risco Serasa 

    Given O usuário anexou arquivo Ficha de Dados Cadastrais Obrigatório
    When O usuário Clicar em Encaminhar Solicitação 
    Then Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação

    Given O usuário Assumiu a atividade e analisou a solicitação e validou os dados PJ isMediaComprovante 
    When Aprovar Solicitação

    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When O usuário validar os Arquivos anexados para isExceção
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: isContaEspelho = Sim 

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 2 - "Conta Salário"
    Then Deve habilitar o campo Matricula Empregador
    Then Deve selecionar automaticamente o Motivo Outros 
    When O usuário marcar o checkbox Abertura de Conta Espelho?
    Then Validar o Tooltio para Abertura de Conta Espelho

    Given Cooperativa, Posto preenchidos  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento

    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação 
    Then Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação

    Given O usuário Assumiu a atividade e analisou a solicitação e validou os dados Cadastro PF isContaEspelho 
    When Aprovar Solicitação

    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When O usuário validar os Arquivos anexados para Cadastro PF - Conta Corrente
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Aguardar Retorno da Remessa BB 1 dia

    Given O usuário está localizado em Verificar Retorno Abertura da Conta Espelho
    When Conta Espelho Aberto
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: Necessita aprovacao da Diretoria   

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 2 - "Conta Salário"
    Then Deve habilitar o campo Matricula Empregador
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Conta Salário" 
    Then O usuário seleciona Necessita de Aprovação da Diretoria 

    Given Direcionou para a atividade Regularizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Encaminhar Novas Informações
    
    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When O usuário validar os Arquivos anexados para Cadastro PF - Conta Corrente 
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: Aprovar com Pendência  

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 2 - "Conta Salário"
    Then Deve habilitar o campo Matricula Empregador
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    
    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  

    Given O usuário	Assumiu Atividade 
    When Validar os dados mostrados estão corretos para Cadastro PF - "Conta Salário" 
    Then O usuário seleciona Aprovar com Pendência  

    Given Foi direcionado para a atividade Verificar Pendências para Finalizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Pendências para Finalização da Solicitação  

    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When O usuário validar os Arquivos anexados para Cadastro PF - Conta Corrente 
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: Solicitar Mais Informações - Associação, Abertura de Conta ou Atualização Cadastral
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral
    Given O usuário selecionou o Objetivo - Cadastro PJ
    When O usuário seleciona o Contexto 11 - "Vendedor" 
    Then Selecionar o Motivo 0 - "Campanhas" 
     
    Given O usuário marcou o checkbox Deseja realizar uma análise prévia de exceção?
    Then Deve mostrar uma tooltip informativa Esse tipo de solicitação enquadra-se...
    When Selecionar o Tipo Exeção 
    Then Preencher a Justificativa Exceção 

    Given Cooperativa, Posto Selecionados  
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  
    Then Analisar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação

    Given O usuário Assumiu a atividade e analisou a solicitação e validou os dados para Cadastro PJ 
    When Solicitar Mais Informações e preencher a justificativa

    Given Direcionou para a atividade Regularizar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral que Necessita de Aprovação
    Then Encaminhar Novas Informações
    
    Given O usuário Assumiu a atividade e analisou a solicitação e validou os dados para Cadastro PJ 
    When Aprovar Solicitação
    Then Deve direcionar para Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When  O usuário validar os Arquivos anexados Conta Corrente
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes

Scenario: Lista Restretiva   

    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário selecionou o Objetivo - Cadastro PF
    When O usuário seleciona o Contexto 2 - "Conta Salário"
    Then Deve habilitar o campo Matricula Empregador
    Then Deve selecionar automaticamente o Motivo Outros 

    Given Cooperativa, Posto preenchidos 
    When Preencher os campos e inserir um CNPJ com Restrição e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CNPJ possui Restrição
    
    Given Existem documentos obrigatórios que devem ser anexados 
    When Anexar arquivo  Cartão Autografo
    Then Anexar arquivo  Ficha de Dados Cadastrais Obrigatório
    Then Deve Encaminhar Solicitação  

    Given Estamos na atividade Analisar Solicitação de Associação ou Abertura de Conta que Enquadrou-se em Lista Restritiva
    Then O usuário Assumiu Atividade 
    When Clicar em Restrição Confirmada 
    Then Encaminhar para Verificar Parecer do CPF-CNPJ Identificado em Lista Restritiva

    Given O usuário	Assumiu Atividade
    When Solicitar Mais Informações e ao habilitar preencher a justificativa
    Given Retornamos na atividade Analisar Solicitação de Associação ou Abertura de Conta que Enquadrou-se em Lista Restritiva
    When Clicar em Restrição Não Confirmada 

    Given O usuário	Assumiu Atividade de Conferir Informações e Documentos
    When O usuário validar os Arquivos anexados para Cadastro PF - Conta Corrente 
    When O botão Aprovar é habilitado e clicado
    Then Deve ir para a atividade de Salvar Documentos e Indexadores no ECM
    Then Limpar dados de testes