Cadastro/Login de usuario
Mapear uma Viagem
Reservar hotel nas cidades da viagem (x)	
Cancelar cidades e/ou hotéis da viagem	
Notificar cliente de datas e checkin de vôos

Feature: reservar hotel nas cidades da viagem

    AS Um usuario do sistema (funcionário ou cliente)
    I WANT TO reservar hotel nas cidades de uma viagem
    SO THAT eu possa consultar ou realizar a reserva solicitada por um cliente

Scenario: Reserva bem sucedidade
GIVEN o funcionário "Igor Xavier", está na área "reservar hotéis"
AND ele fornece suas credenciais bem como as do cliente que deseja consultar
WHEN o funcionário visualiza o itinerário e a lista dos hoteis disponiveis em cada cidade
THEN seleciona o hotel na cidade que o cliente irá visitar
AND a mensagem "Reserva realizada com sucesso!" aparece na tela
AND o funcionário é direcionado para a tela inicial


Scenario: Dados incompletos na tentativa de reserva
GIVEN o funcionário Elton Gomes, está na área "reservar hotéis"
AND ele fornece suas credenciais e as do cliente
AND seleciona hotel mas determina a data e horário de checkin
WHEN o usuario tenta finalizar a reserva
THEN a reserva não é realizada com sucesso
AND a mensagem "Há campos que ainda não foram preenchidos!"
AND o usuário retorna a área de "reservar hotéis"


Scenario: Cliente deseja consultar reservas
GIVEN A cliente "Rose Santos", está na área "reservar hotéis"
AND A usuária visualiza seu itinerário
AND seleciona a cidade pela qual vai passar
AND lhe é retornado uma lista com os hoteis disponiveis
WHEN a usuária seleciona o hotel visualiza detalhes como preço e horário de checkin e checkout
THEN envia essas informações para o agente de viagens
AND este realiza a reserva com sucesso
