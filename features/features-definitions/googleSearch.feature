Feature: Pesquisar no google

    Feature Description

        Scenario: Pesquisar por José Mario no google
        Given o usuário esta na url "https://google.com.br"
        When pesquisar por "José Mario" no google
        Then o resultado deve ser exibido no google