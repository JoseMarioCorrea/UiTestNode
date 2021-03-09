Feature: PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral

    Feature Description

Scenario: Cadastro PF - Associado apenas matrícula
    Given o usuário esta na url "https://bpm.e-unicred.com.br/"
    When Realizar o Login "jose.correa" no sistema
    Then inserir a senha "Unijui2421" no sistema 

    Given O usuário está na tela de busca de processos e Realizar a busca do Processo - "PR 9008 - Associação, Abertura de Conta ou Atualização Cadastral"
    When Inicia o teste do Processo "Associação, Abertura de Conta ou Atualização Cadastral"
    Then Deve direcionar para a tela de Iniciar Solicitação de Associação, Abertura de Conta ou Atualização Cadastral

    Given O usuário está localizado na Seção Informaçoes da Solicitação 
    When Selecionar Cadastro PF
    Then Contexto Associado | Apenas matrícula 
    Then Deve auto selecionar o Motivo - Outros  

    Given O usuário prencheu os campos acima e habilitou os novos campos Cooperativa Posto CPF-CNPJ Nome Completo
    When Preencher os campos e inserir um CNPJ-CPF incorreto e Clicar em buscar
    Then Ocorrer o erro informando que o CNPJ-CPF está incorreto 
    When Preencher os campos e inserir um CNPJ-CPF Correto e Clicar em buscar
    Then Ocorrer uma mensagem informando que o CPF é valido e deve prosseguir com o preencimento  
 
    Given O usuário está localizado em Informações Adicionais
    Then Necessário validar a mensagem tooltip explicativa de Abertura de Conta Espelho?
    Then Necessário validar a mensagem tooltip explicativa de Possui Assinatura Digital?
    Then Necessário validar a mensagem tooltip explicativa de Deseja realizar uma análise prévia de exceção?
    Then Necessário validar a mensagem tooltip explicativa de Solicitação possui alguma exceção?


    Given O usuário habilita a primeira flag Abertura de Conta Espelho 
    When O usuário habiliar a segunda flag - Possui Assinatura Digital? 
    Then Deve aprecer uma mensagem em tela mostrando - Essa opção apenas retira a obrigatoriedade do cartão autógrafo. Assinatura digital ainda deve ser feita pelo PR 9008 - Assinatura Digital
    
    Given O usuário marca a flag - Abertura de Conta Com Procuração?
    When O usuário marcar a flag - Renda é comprovada através de média de comprovantes?
    Then Deve aparecer um mensagem em tela mostrando - O valor solicitado de média pode ser alterado pelo diretor da cooperativa ou alçada competente via instância do processo associação, abertura de conta ou atualização cadastral no INTEGRA
    Then Deve abrir o campo Valor Média Extrato

    Given O usuário marca a flag - Deseja realizar uma análise prévia de exceção?
    When Abrir o campo - Informações da Exceção
    Then Deve preencher os campos da Exceção 

    Given O usuário marca a flag - Solicitação possui alguma exceção? 
    When Clicar em Buscar 
    Then Deve habilitar os campos Profissão, Score Serasa, Risco Serasa 

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

    Given O usuário assume a tarefa 
    When Validar se os campos foram populados e estão presentes corretamente na seção Informações da Solicitação
    Then Validar se os campos foram populados e estão presentes corretamente na seção Informações Adicionais 

    Given O usuário está na seção Anexos 
    Then Localizar os arquivos anexados  
    When Aprovar Solicitação
    Then Deve direcionar para a tarefa Complementar Solicitação com os Documentos Obrigatórios de Associação, Abertura de Conta ou Atualização Cadastral
    
    When Validar se os campos foram populados e estão presentes corretamente na seção Informações da Solicitação
    Then Validar se os campos foram populados e estão presentes corretamente na seção Informações Adicionais

    Given O usuário está na seção Anexos 
    When Localizar os arquivos anexados 
    Then Encaminhar Solicitação





    