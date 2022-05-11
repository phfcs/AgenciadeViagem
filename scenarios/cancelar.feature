Feature: Cancelar    
AS Um usuario do sistema
    I WANT TO realizar cancelamentos de cidades/hoteis da viagem
    SO THAT o funcionário ou cliente tenha autonomia para mudanças no itinerário

Scenario: Funcionário cancela pacotes da viagem
Given Eu estou na pagina de Pacotes
When Clico no botão Cancelar
Then Eu recebo uma notificação e clico em OK
Then Eu vejo uma mensagem de sucesso
Then A reserva é excluída


Scenario: Cliente deseja cancelar uma reserva
Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste"	
When A reserva está registrada em Reservas disponíveis
When Clico no botão Cancelar
Then Eu vejo uma mensagem de sucesso
Then Eu estou na página Reserva
