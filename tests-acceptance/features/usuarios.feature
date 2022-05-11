Feature: As a novo cliente
         I want to me cadastrar no Sistema
         So that I can fazer login como CLIENTE

Scenario: Cadastro de cliente com cpf e e-mail não cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "12345691419" ainda não foi cadastrado
    Given O E-mail "phfcs@cin.ufpe.br" ainda não foi cadastrado
    When Eu cadastro com CPF "12345691419" Nome "Pedro Henrique F. Cardoso dos Santos" Senha: "teste" Senha confirmação:"teste" e E-mail: "phfcs@cin.ufpe.br" 
    Then Eu sou redirecionado para a página "Login"
    Then Eu vejo uma mensagem de sucesso

Scenario: Cadastro de cliente com cpf já cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "12345691419" já foi cadastrado
    Given O E-mail "phfcs.santos@gmail.com" ainda não foi cadastrado
    When Eu cadastro com CPF "12345691419" Nome "Pedro Henrique F. Cardoso dos Santos" Senha: "teste" Senha confirmação:"teste" e E-mail: "phfcs.santos@gmail.com" 
    Then Eu vejo uma mensagem de erro

Scenario: Cadastro de cliente  não cadastrado 
    Given Eu estou na pagina Crie sua conta!
    When Eu cadastro com CPF "012345678910" Nome "Bruno Cezario" Senha: "bruno123" Senha confirmação:"bruno123" e E-mail: "brsc@cin.ufpe.br" 
    Then Eu sou redirecionado para a página "Login"
    Then Eu vejo uma mensagem de sucesso
    
Scenario: Cadastro de cliente com e-mail já cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "40570104084" ainda não foi cadastrado
    Given O E-mail "phfcs@cin.ufpe.br" já foi cadastrado
    When Eu cadastro com CPF "40570104084" Nome "Pedro Henrique F. Cardoso dos Santos" Senha: "teste" Senha confirmação:"teste" e E-mail: "phfcs.santos@gmail.com"
    Then Eu vejo uma mensagem de erro

Scenario: Cadastro de cliente com senha diferente da senha de confirmação
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "02963152060" ainda não foi cadastrado
    Given O E-mail "phfcs.santos@hotmail.com" ainda não foi cadastrado
    When Eu cadastro com CPF "02963152060" Nome "Pedro Henrique F. Cardoso dos Santos" Senha: "teste" Senha confirmação:"teste1" e E-mail: "phfcs.santos@hotmail.com"
    Then Eu vejo uma mensagem de erro

Scenario: Login de cliente com sucesso
    Given Eu estou na pagina Login
    Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
    When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste"
    Then Eu vejo uma mensagem de sucesso
    Then Eu sou redirecionado para a página "Reservas"

Scenario: Login de cliente e-mail não cadastrado
    Given Eu estou na pagina Login
    Given O E-mail "phfcs.santos@yahoo.com" ainda não foi cadastrado
    When Eu faço login E-mail: "phfcs.santos@yahoo.com" Senha: "teste"
    Then Eu vejo uma mensagem de erro

Scenario: Login de cliente com senha inválida
    Given Eu estou na pagina Login
    Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
    When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste@senha@invalida"
    Then Eu vejo uma mensagem de erro

Scenario: Cadastro de cliente com cpf e e-mail não cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "12345691410" ainda não foi cadastrado
    Given O E-mail "phfcs2@cin.ufpe.br" ainda não foi cadastrado
    When Eu cadastro com CPF "12345691410" Nome "Pedro Henrique F. Cardoso dos Santos" Senha: "teste" Senha confirmação:"teste" e E-mail: "phfcs2@cin.ufpe.br" 
    Then Eu sou redirecionado para a página "Login"
    Then Eu vejo uma mensagem de sucesso

Scenario: Cadastro de cliente com cpf e e-mail não cadastrado 
    Given Eu estou na pagina Crie sua conta!
    Given O CPF "12345678910" ainda não foi cadastrado
    Given O E-mail "jgpp@cin.ufpe.br" ainda não foi cadastrado
    When Eu cadastro com CPF "12345678910" Nome "Joao Guilherme Pontes de Paiva" Senha: "joaodelas" Senha confirmação:"joaodelas" e E-mail: "jgpp@cin.ufpe.br" 
    Then Eu sou redirecionado para a página "Login"
    Then Eu vejo uma mensagem de sucesso


 Scenario: Login de cliente com sucesso
        Given Eu estou na pagina Login
        Given O E-mail "jgpp@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
        When Eu faço login E-mail: "jgpp@cin.ufpe.br" Senha: "joaodelas"
        Then Eu vejo uma mensagem de sucesso
        Then Eu sou redirecionado para a página "Reservas"

Scenario: Login de cliente com sucesso
        Given Eu estou na pagina Login
        Given O E-mail "jgpp2@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
        When Eu faço login E-mail: "jgpp2@cin.ufpe.br" Senha: "joaodelas"
        Then Eu vejo uma mensagem de sucesso
        Then Eu sou redirecionado para a página "Reservas"
