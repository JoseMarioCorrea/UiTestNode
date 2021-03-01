Feature: PR 9008 Assinatura Digital 

    Feature Description

        Scenario: Realizar a validação do Processo de Assinatura Digial - Adesão de trabalho remoto 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then Usuário é direcionado a tarefa de Iniciar Solicitação de Assinatura Digital

        Given o usuário inicia o preenchimento das Informações da Solicitação
        When o Tipo de Solicitação for igual a Adesão de trabalho remoto
        Then deve ser obrigatório anexar arquivo Adesão ao Trabalho Remoto

        Given que o tipo de solicitação é para Adesão de Trabalho Remoto e com as Informações do Associado preenchidos
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
