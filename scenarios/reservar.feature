Feature: reservar pacote
    AS Um usuário do sistema
    I WANT TO reservar hotéis e vôos para as cidades de uma viagem
    SO THAT eu possa consultar, realizar ou excluir uma reserva

Scenario: Reserva bem sucedida
Given Eu estou na pagina de Reserva
Given A reserva está registrada em Pacotes disponíveis
When Clico no botão Adicionar 
Then Eu vejo uma mensagem de sucesso
Then A reserva está registrada em Reservas disponíveis

Scenario: Cliente deseja excluir uma reserva
Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste"	
When A reserva está registrada em Reservas disponíveis = diferente do THEN?
When Clico no botão Cancelar
Then Eu vejo uma mensagem de sucesso
Then Eu estou na página Reserva
