Feature: As a antigo cliente
         I want to me cancelar no Sistema
         So that I can fazer login como CLIENTE

Scenario: Cadastro de cliente com cpf e e-mail não cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "12345678910" ainda não foi cadastrado
    Given O E-mail "jgpp@cin.ufpe.br" ainda não foi cadastrado
    When Eu cadastro com CPF "12345678910" Nome "Joao Guilherme Pontes de Paiva" Senha: "joaodelas" Senha confirmação:"joaodelas" e E-mail: "jgpp@cin.ufpe.br" 
    Then Eu sou redirecionado para a página "Login"
    Then Eu vejo uma mensagem de sucesso


 Scenario: Login de cliente com sucesso
        Given Eu estou na pagina Login
        Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
        When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste"
        Then Eu vejo uma mensagem de sucesso
        Then Eu sou redirecionado para a página "Reservas"