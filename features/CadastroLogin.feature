Cadastro/Login de usuario (x)
Mapear uma Viagem
Reservar hotel nas cidades da viagem	
Cancelar cidades e/ou hotéis da viagem	
Notificar cliente de datas e checkin de vôos

Feature: realizar o Cadastro ou Login de usuário

    AS Um usuario do sistema (funcionário ou cliente)
    I WANT TO cadastrar e/ou efetuar o login no sistema
    SO THAT Eu possa acessar o sistema e ser capaz de efetuar operações

Scenario: Cadastrar um usuário
GIVEN o funcionário "Igor Xavier" está na área "cadastro de usuário"
AND ele fornece seu nome, "Igor Xavier", CPF: "095104875-68", Seleciona a caixa "Funcionário" ou "Cliente", e-mail: "igor@gmail.com", telefone: "8198666-1006" e senha: "senha123"
AND CPF: "095104875-68" não constava no banco de dados
WHEN o funcionário finaliza seu cadastro
THEN o cadastro do funcionário é realizado com sucesso
AND a mensagem "Cadastro realizado com sucesso!" aparece na tela
AND o funcionário é direcionado para a tela de login


Scenario: Cadastro de um usuário que não preencheu todos os campos
GIVEN o usuário Elton Gomes com CPF: "104645253-61" está na área "cadastro de usuário"
AND Ele fornece seu nome, "Elton Gomes", CPF: "104645253-61", Seleciona a caixa "Funcionário" ou "Cliente", e-mail: "eltongomes@gmail.com", senha: "heylookatme", mas não cadastrou telefone
WHEN o usuario tentar finalizar seu cadastro
THEN o cadastro do usuário não é realizdo com sucesso
AND a mensagem "Há campos que ainda não foram preenchidos!"
AND o usuário retorna a área de cadastro


Scenario: Cadastro de um usuário com CPF já cadastrado no sistema
GIVEN A usuária "Rose Santos", já está cadastrada com seu nome e CPF: "123584693-85", está na área "cadastro de usuário"
AND A usuária fornece seu nome, "Rose Santos", CPF: "123584693-85", Seleciona a caixa "Funcionário" ou "Cliente" (mesmo que já o fez anteriormente), e-mail: "rose_htinha@yahoo.com.br", telefone: "8196966969, senha: "adorosk8" 
WHEN a usuária tentar finalizar seu cadastro
THEN o cadastro da usuária não é realizado com sucesso
AND a mensagem "CPF já cadastrado!"
AND a usuária retorna a área "cadastro de usuário"

Scenario: Login bem sucedido
GIVEN o usuário "Igor Xavier" está na "área de login"
AND o usuário "Igor Xavier" fornece seu CPF: "095104875-68" e senha: "senha123"
WHEN o usuário "Igor Xavier" realiza o login
THEN o login é realizado com sucesso
AND o usuário "Igor Xavier" entra na "área inicial"

Scenario: Dados do login incorretos
GIVEN o usuário "Igor Xavier" está na "área de login"
AND o usuário "Igor Xavier" fornece seu CPF: "095104875-68" e senha: "drehquemtemdoutorado123"
WHEN o usuário "Igor Xavier" realiza o login
THEN o login NÃO é realizado com sucesso
AND a mensagem "Dados incorretos!"
AND o usuário retorna a "área de login"


Scenario: Login incompleto
GIVEN o usuário "Igor Xavier" está na "área de login"
AND o usuário "Igor Xavier" fornece seu CPF: "095104875-68" porém não fornece sua senha
WHEN o usuário "Igor Xavier" realiza o login
THEN o login NÃO é realizado com sucesso
AND a mensagem "Existem campos não preenchidos"
AND o usuário retorna a "área de "login"


