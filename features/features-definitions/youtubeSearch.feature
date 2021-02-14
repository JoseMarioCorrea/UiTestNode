Feature: Pesquisar no youtube
    
    Feature Description

        Scenario: Pesquisar por José Mario no youtube
        Given o usuário esta na url "https://youtube.com.br"
        When pesquisar por "José Mario" no youtube
        Then o resultado deve ser exibido no youtube