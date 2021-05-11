Feature: PR 9008 Assinatura Digital 

    Feature Description

Scenario: Realizar a validação do Processo de Assinatura Digial - Adesão de trabalho remoto 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "****" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de trabalho remoto
        Then deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Adesão de Cobrança 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de Cobrança
        Then deve ser obrigatório anexar arquivo Adesão de Cobrança

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Adesão de Seguros - ( Vida ) 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de Seguros - Vida 
        Then deve ser obrigatório anexar arquivo Adesão de Seguros - Vida

       Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Adesão e Cancelamento de Cesta de Relacionamento 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão e Cancelamento de Cesta de Relacionamento 
        Then deve ser obrigatório anexar arquivo Adesão e Cancelamento de Cesta de Relacionamento

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Aditamento de Contrato 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Aditamento de Contrato
        Then deve ser obrigatório anexar arquivo Aditamento de Contrato

       Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Alteração de Garantia 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Alteração de Garantia
        Then deve ser obrigatório anexar arquivo Alteração de Garantia

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Alteração de Modalidade de Conta Corrente 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Alteração de Modalidade de Conta Corrente
        Then deve ser obrigatório anexar arquivo Alteração de Modalidade de Conta Corrente

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Atualização Cadastral 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Atualização Cadastral
        Then deve ser obrigatório anexar arquivo Atualização Cadastral

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Atualização de Renda por Média de Depósito 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Atualização de Renda por Média de Depósito
        Then deve ser obrigatório anexar arquivo Atualização de Renda por Média de Depósito

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Auxílio Funeral 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Auxílio Funeral
        Then deve ser obrigatório anexar arquivo Auxílio Funeral

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Câmbio 

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Câmbio
        Then deve ser obrigatório anexar arquivo Câmbio

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Canais IB Mobile

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Canais IB Mobile
        Then deve ser obrigatório anexar arquivo Canais IB Mobile

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Cheque Especial

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Cheque Especial
        Then deve ser obrigatório anexar arquivo Cheque Especial

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Cheques Folhas Talão

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Cheques Folhas Talão
        Then deve ser obrigatório anexar arquivo Cheques Folhas Talão

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário clicar em Solicitar Mais Informações
        Then o usuário deve preencher a justificativa e Confirmar 

        Given que o usuário está localizado na tarefa Verificar Solicitação e Repassar Novas Informações
        When o usuário encaminhar as novas informações clicando no botão Encaminhar Novas Informações
        Then o usuário precisa preencher a justificativa e confirmar a justificativa

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário
       
       Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento expirado 
        Then deve direcionar para a tarefa LOOP Notificar Status de Assinatura para o Requisitante

        Given que a tarefa se encontra no Loop de notificação de status 
        When quando o status de envio for finalizado 
        Then deve direcionar para a tarefa de Verificação e Solicitação de Repassar Novas Informações

        Given que o usuário está localizado na tarefa Verificar Solicitação e Repassar Novas Informações
        When o usuário encaminhar as novas informações clicando no botão Encaminhar Novas Informações
        Then o usuário precisa preencher a justificativa e confirmar a justificativa

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário clicar em documento encaminhado ao cooperado
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Contrato de Crédito

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Contrato de Crédito
        Then deve ser obrigatório anexar arquivo Contrato de Crédito

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Contrato de Investimentos

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Contrato de Investimentos
        Then deve ser obrigatório anexar arquivo Contrato de Investimentos

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Débito Automático

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Débito Automático
        Then deve ser obrigatório anexar arquivo Débito Automático

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Desligamento de Cooperado

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Desligamento de Cooperado
        Then deve ser obrigatório anexar arquivo Desligamento de Cooperado

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Documentos para Associação

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Documentos para Associação
        Then deve ser obrigatório anexar arquivo Documentos para Associação

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Encerramento de Conta

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Encerramento de Conta
        Then deve ser obrigatório anexar arquivo Encerramento de Conta

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Integralização Espontânea

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Integralização Espontânea
        Then deve ser obrigatório anexar arquivo Integralização Espontânea

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Outros

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Outros
        Then deve ser obrigatório anexar arquivo Outros

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Portabilidade de Salário

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Portabilidade de Salário
        Then deve ser obrigatório anexar arquivo Portabilidade de Salário

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Precaver

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Precaver
        Then deve ser obrigatório anexar arquivo Precaver

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Prestamista DPS 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Prestamista DPS
        Then deve ser obrigatório anexar arquivo Prestamista DPS

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Prestamista Termo de Adesão

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Prestamista Termo de Adesão
        Then deve ser obrigatório anexar arquivo Prestamista Termo de Adesão

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Procuração Particular

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Procuração Particular
        Then deve ser obrigatório anexar arquivo Procuração Particular

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Renda Familiar Estrangeira

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Renda Familiar Estrangeira
        Then deve ser obrigatório anexar arquivo Renda Familiar Estrangeira

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Sustação de Cheque

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Sustação de Cheque
        Then deve ser obrigatório anexar arquivo Sustação de Cheque

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Termo de Adesão ao Cartão

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Termo de Adesão ao Cartão
        Then deve ser obrigatório anexar arquivo Termo de Adesão ao Cartão

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Titularidade de Conta

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Titularidade de Conta
        Then deve ser obrigatório anexar arquivo Titularidade de Conta

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Realizar a validação do Processo de Assinatura Digial - Transferência de Associado entre Agências

        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Transferência de Associado entre Agências
        Then deve ser obrigatório anexar arquivo Transferência de Associado entre Agências

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Cancelamento de solicitação - Tarefa Iniciar Solicitação 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital
        Then deve clicar em cancelar a solicitação 

Scenario: Cancelamento de solicitação - Verificar Solicitação e Repassar Novas Informações
         Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de trabalho remoto
        Then deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos 
        When o usuário clicar em Solicitar Mais Informações
        Then o usuário deve preencher a justificativa e Confirmar 

        Given que o usuário está localizado na tarefa Verificar Solicitação e Repassar Novas Informações
        Then deve clicar em cancelar a solicitação 

Scenario: Solicitar Mais Informações 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de trabalho remoto
        Then deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos 
        When o usuário clicar em Solicitar Mais Informações
        Then o usuário deve preencher a justificativa e Confirmar 

        Given que o usuário está localizado na tarefa Verificar Solicitação e Repassar Novas Informações
        When o usuário encaminhar as novas informações clicando no botão Encaminhar Novas Informações
        Then o usuário precisa preencher a justificativa e confirmar a justificativa

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário
       
        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Documento expirado
         Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de trabalho remoto
        Then deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento expirado 
        Then deve direcionar para a tarefa LOOP Notificar Status de Assinatura para o Requisitante

        Given que a tarefa se encontra no Loop de notificação de status 
        When quando o status de envio for finalizado 
        Then deve direcionar para a tarefa de Verificação e Solicitação de Repassar Novas Informações

        Given que o usuário está localizado na tarefa Verificar Solicitação e Repassar Novas Informações
        When o usuário encaminhar as novas informações clicando no botão Encaminhar Novas Informações
        Then o usuário precisa preencher a justificativa e confirmar a justificativa

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos 
        When o usuário clicar em documento encaminhado ao cooperado
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Documento Assinado 
        Then deve finalizar o Processo

Scenario: Validar Manualmente 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de trabalho remoto
        Then deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto

        Given que o tipo de solicitação esta com as Informações do Associado preenchidos
        When preencher os campos Celular e marcar a flag contas Associado
        Then verificar se está presente em tela o alerta amarelo  

        Given que o usuário realiza a pesquisa de Vinculos
        When os dados são buscados automaticamente 
        Then Deve ser preenchido manualmente a qualificação 

        Given que o usuário está localizado Dados dos demais participantes para assinarem digitalmente o documento da solicitação, caso houver: para quando não houverem os dados no SAU  
        When inserir dois participantes para assinar digitalmente o documento 
        Then verificar alerta na seção Mensagens está presente 

        Given que o usuário deve enviar em anexo o Termo de Solicitação para Prestação de Serviços de Cobrança
        When o usuário tiver mais de uma função no sistema
        Then Deve selecionar a função desejada e encaminhar a solicitação

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário 

        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Validar Manualmente 
        When deve direcionar para a tarefa LOOP Notificar Status de Assinatura para o Requisitante

        Given que a tarefa se encontra no Loop de notificação de status 
        When quando o status de envio for finalizado 
        Then deve direcionar para a atividade Integração Retorno DocuSIgn Não Realizada - Realizar Atividade Manualmente

        Given que o usuário Assumiu Atividade 
        When o usuário clicar em Retornar ao Requisitante para Contato com Cooperado 
        Then Preencher a justificativa

        Given que o usuário está localizado na tarefa Verificar Solicitação e Repassar Novas Informações
        When o usuário encaminhar as novas informações clicando no botão Encaminhar Novas Informações
        Then o usuário precisa preencher a justificativa e confirmar a justificativa

        Given que usuário está na tarefa Encaminhar Documento ao Cooperado no DocuSign 
        When o usuário Assumir Atividade 
        Then deve liberar as funcionalidades para o usuário
       
        Given que o usuário que assumiu a atividade validou todos os campos do formulário estão corretos
        When o usuário encaminhar o documento ao cooperado 
        Then deve entrar no fluxo AUTO Aguardar Assinatura Digital no DocuSign

        Given que o usuário tem a visibilidade estatística de documento Assinado e Documento Expirado
        When o usuário clicar em Validar Manualmente 
        When deve direcionar para a tarefa LOOP Notificar Status de Assinatura para o Requisitante

        Given que a tarefa se encontra no Loop de notificação de status 
        When quando o status de envio for finalizado 
        Then deve direcionar para a atividade Integração Retorno DocuSIgn Não Realizada - Realizar Atividade Manualmente
        
        Given que o usuário Assumiu Atividade 
        When o usuário clicar em Documentos Assinado Digitalmente
        Then deve finalizar o Processo

 


        