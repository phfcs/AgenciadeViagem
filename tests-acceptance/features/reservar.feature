Cadastro/Login de usuario
Mapear uma Viagem
Reservar hotel nas cidades da viagem (x)	
Cancelar cidades e/ou hotéis da viagem	
Notificar cliente de datas e checkin de vôos

Feature: reservar hotel nas cidades da viagem

    AS Um usuário do sistema (funcionário ou cliente)
    I WANT TO reservar hotel nas cidades de uma viagem
    SO THAT eu possa consultar, realizar ou excluir uma reserva

Scenario: Cadastro de Hoteis e Vôos
GIVEN o funcionário "Igor Xavier", está na área "Reservas"
AND ele fornece os detalhes da reserva
WHEN o funcionário clica em "Adicionar"
THEN ele cadastra o hotel e vôo com sucesso
AND a mensagem "Sucesso! Cadastro realizado com sucesso." aparece na tela
AND o funcionário é capaz de visualizar e remover o que cadastrou

Scenario: Reserva bem sucedida
GIVEN A cliente "Rose Santos", está na área do cliente
AND ela visualiza os detalhes de "Pacotes disponíveis"
WHEN seleciona o que deseja reservar
THEN seleciona o hotel na cidade que o cliente irá visitar, tal como o vôo
AND a mensagem "Sucesso! Cadastro realizado com sucesso." aparece na tela
AND sua reserva é registrada em "Reservas disponíveis"


Scenario: Dados incompletos na tentativa de cadastro de reserva
GIVEN o funcionário Elton Gomes, está na área "Reservas"
AND seleciona o vôo, o hotel, mas não determina a data e horário de checkin
WHEN o usuario tenta finalizar a reserva
THEN a reserva não é realizada com sucesso
AND a mensagem "Há campos que ainda não foram preenchidos!"
AND o usuário retorna a área de "Reservas"


Scenario: Cliente deseja excluir uma reserva
GIVEN A cliente "Rose Santos", está na área do cliente
AND A usuária visualiza suas reservas
WHEN a usuária seleciona o hotel visualiza detalhes como preço e horário de checkin e checkout
THEN clica em “Excluir” 
AND esta realiza a exclusão da reserva com sucesso
