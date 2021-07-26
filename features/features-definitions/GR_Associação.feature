Feature: GR_Associação

Feature Description
Scenario: GR Associação 

Given O usuário possuí um CPF para realizar o cadastro 
When O usuário estiver localizado na tela de Cadastro no GR 
Then Iniciar a solicitação de cadastro 

Given A inserção do CPF 
When Inserir o Nome Completo 
Then Selecionar Associação
When Selecionar a Carteira e Agência
Then Clicar em Salvar e Continuar 

Given O usuário preencheu os Dados Pessoais
When Preencher os Documentos
Then Preencher os Contatos

Given O usuário preencheu o Endereço
When O usuário preencher Dados Profissionais
Then Preencher a escolaridade

Given O usuário cadastrou os Bens Patrimoniais 
When O usuário preencher o Agendamento Capital 
Then Preencher a Comprovação
Then Preencher a Fomalização Assinatura Digital 


Scenario: Validar instância para associação

Given o usuário esta na url "https://bpm.e-unicred.com.br/"
When Realizar o Login "jose.correa" no sistema
Then inserir a senha "****" no sistema 

Given Localizar a instâncias do processo de "Associação" criada
When O usuário Validar a correta criação da instância para Associação
Then Validar se os anexos estão corretos para Associação 


Scenario: GR Conta Individual

Given O usuário possuí um CPF para realizar o cadastro 
When O usuário estiver localizado na tela de Cadastro no GR 
Then Iniciar a solicitação de cadastro 

Given A inserção do CPF 
When Inserir o Nome Completo 
Then Selecionar Associação + Conta 
When Selecionar a Carteira e Agência
Then Clicar em Salvar e Continuar 

Given O usuário selecionou a Modalidade da conta Individual
Given O usuário preencheu os Dados Pessoais
When Preencher os Documentos
Then Preencher os Contatos

Given O usuário preencheu o Endereço
When O usuário preencher Dados Profissionais
Then Preencher a escolaridade

Given O usuário cadastrou os Bens Patrimoniais 
When O usuário preencher o Agendamento Capital 
Then Prencher Produtos e Serviços
Then Preencher a Comprovação
Then Preencher a Fomalização Assinatura Digital 


Scenario: Validar instância Matrícula e CC Individual

Given o usuário esta na url "https://bpm.e-unicred.com.br/"
When Realizar o Login "jose.correa" no sistema
Then inserir a senha "****" no sistema 

Given Localizar a instâncias do processo de "Conta Individual" criada
When O usuário Validar a correta criação da instância para Conta Individual
Then Validar se os anexos estão corretos para "Matrícula e C/C Individual" 

Scenario: GR Conta Individual

Given O usuário possuí um CPF para realizar o cadastro 
When O usuário estiver localizado na tela de Cadastro no GR 
Then Iniciar a solicitação de cadastro 

Given A inserção do CPF 
When Inserir o Nome Completo 
Then Selecionar Associação + Conta 
When Selecionar a Carteira e Agência
Then Clicar em Salvar e Continuar 

Given O usuário selecionou a Modalidade da conta Individual
Given O usuário preencheu os Dados Pessoais
When Preencher os Documentos
Then Preencher os Contatos

Given O usuário preencheu o Endereço
When O usuário preencher Dados Profissionais
Then Preencher a escolaridade

Given O usuário cadastrou os Bens Patrimoniais 
When O usuário preencher o Agendamento Capital 
Then Prencher Produtos e Serviços
Then Preencher a Comprovação
Then Preencher a Fomalização Assinatura Digital 


Scenario: GR Conta Menor

Given O usuário possuí um CPF para realizar o cadastro 
When O usuário estiver localizado na tela de Cadastro no GR 
Then Iniciar a solicitação de cadastro 

Given A inserção do CPF 
When Inserir o Nome Completo 
Then Selecionar Associação + Conta 
When Selecionar a Carteira e Agência
Then Clicar em Salvar e Continuar 

Given O usuário selecionou a Modalidade da conta Menor
Given O usuário preencheu os Dados Pessoais
When Preencher os Documentos
Then Preencher os Contatos

Given O usuário preencheu o Endereço
When O usuário preencher Dados Profissionais
Then Preencher a escolaridade

Given O usuário cadastrou os Bens Patrimoniais 
When O usuário preencher o Agendamento Capital 
Then Prencher Produtos e Serviços
Then Preencher a Comprovação
Then Preencher a Fomalização Assinatura Digital 


Scenario: GR Conta Salário

Given O usuário possuí um CPF para realizar o cadastro 
When O usuário estiver localizado na tela de Cadastro no GR 
Then Iniciar a solicitação de cadastro 

Given A inserção do CPF 
When Inserir o Nome Completo 
Then Selecionar Associação + Conta 
When Selecionar a Carteira e Agência
Then Clicar em Salvar e Continuar 

Given O usuário selecionou a Modalidade da conta Salário
Given O usuário preencheu os Dados Pessoais
When Preencher os Documentos
Then Preencher os Contatos

Given O usuário preencheu o Endereço
When O usuário preencher Dados Profissionais
Then Preencher a escolaridade

Given O usuário cadastrou os Bens Patrimoniais 
When O usuário preencher o Agendamento Capital 
Then Prencher Produtos e Serviços
Then Preencher a Comprovação
Then Preencher a Fomalização Assinatura Digital 

Scenario: GR Conta de Serviço

Given O usuário possuí um CPF para realizar o cadastro 
When O usuário estiver localizado na tela de Cadastro no GR 
Then Iniciar a solicitação de cadastro 

Given A inserção do CPF 
When Inserir o Nome Completo 
Then Selecionar Associação + Conta 
When Selecionar a Carteira e Agência
Then Clicar em Salvar e Continuar 

Given O usuário selecionou a Modalidade da conta de Serviço
Given O usuário preencheu os Dados Pessoais
When Preencher os Documentos
Then Preencher os Contatos

Given O usuário preencheu o Endereço
When O usuário preencher Dados Profissionais
Then Preencher a escolaridade

Given O usuário cadastrou os Bens Patrimoniais 
When O usuário preencher o Agendamento Capital 
Then Prencher Produtos e Serviços
Then Preencher a Comprovação
Then Preencher a Fomalização Assinatura Digital 

Scenario: Validar instância Matrícula e CC para Menores de Idade

Given o usuário esta na url "https://bpm.e-unicred.com.br/"
When Realizar o Login "jose.correa" no sistema
Then inserir a senha "****" no sistema 

Given Localizar a instâncias do processo de "Conta Individual" criada
When O usuário Validar a correta criação da instância para Conta Individual
Then Validar se os anexos estão corretos para "Matrícula e C/C para Menores de Idade"