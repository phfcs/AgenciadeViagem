Cadastro/Login de usuario
Mapear uma Viagem
Reservar hotel nas cidades da viagem	
Cancelar cidades e/ou hotéis da viagem	(x)
Notificar cliente de datas e checkin de vôos

Feature: realizar marcação de exames para pacientes

    AS Um usuario do sistema
    I WANT TO realizar cancelamentos de cidades/hoteis da viagem
    SO THAT o funcionário ou cliente tenha autonomia para mudanças no itinerario

Scenario: Funcionário cancela cidade(s) da viagem
GIVEN o funcionário de nome "Igor Xavier", está na área "Mapeamento de Viagem"
AND ele visualiza as cidades que o cliente irá visitar
AND visualiza a opção de excluir a cidade
WHEN o funcionário clica na opção de excluir cidade
THEN o sistema retorna a mensagem "Tem certeza que quer excluir a cidade do itinerario? S/N"
AND ele confirma e recebe a mensagem "Deseja também cancelar a reserva do hotel da cidade? S/N"
AND o funcionário é direcionado para a área de cancelamento da reserva

Scenario: Funcionário cancela hotel da viagem
GIVEN o funcionário de nome "Igor Xavier", está na área "Reserva de hotel"
AND ele clica na opção "Cancelar reserva"
WHEN recebe a mensagem "Tem certeza que deseja cancelar a reserva? S/N" e confirma
THEN o cancelamento é realizado
AND será redirecionado para "área inicial"

Scenario: Cliente cancela cidade(s) da viagem
GIVEN o cliente de nome "Elton Gomes", está na área "Mapeamento de Viagem"
AND ele visualiza as cidades que irá visitar
AND visualiza a opção de excluir a cidade
WHEN o cliente clica na opção de excluir cidade
THEN o sistema retorna a mensagem "Tem certeza que quer excluir a cidade do itinerario? S/N"
AND ele confirma e recebe a mensagem "Deseja também cancelar a reserva do hotel da cidade? S/N"
AND o cliente é direcionado para a área de cancelamento da reserva
AND o funcionário responsável por sua viagem é notificado a respeito

Scenario: Cliente cancela hotel da viagem
GIVEN o cliente de nome "Elton Gomes", está na área "Reserva de hotel"
AND ele clica na opção "Cancelar reserva"
WHEN recebe a mensagem "Tem certeza que deseja cancelar a reserva? S/N" e confirma
THEN o cancelamento é realizado
AND será redirecionado para "área inicial"
AND o funcionário responsável por sua viagem é notificado a respeito
 