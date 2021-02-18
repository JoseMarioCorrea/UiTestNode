Feature: PR 9008 Assinatura Digital 

    Feature Description

        Scenario: Realizar a validação do Processo de Assinatura Digial 
        Given o usuário esta na url "https://bpm.e-unicred.com.br/"
        When Realizar o Login "jose.correa" no sistema
        Then inserir a senha "Unijui2421" no sistema 

        Given o usuário está no Processo Assinaura Digital 
        When O usuário inicia o teste do Processo de Assinatura Digital 
        Then O usuário inicia o teste do processo de Assinatura Digital, porém testar o fluxo do cancelamento
        
