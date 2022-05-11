Feature: Notificar 
Scenario: Notificação de reserva de Viagem
Given Eu estou na pagina de Reserva
Given A reserva está registrada em Pacotes disponíveis
When Clico no botão Adicionar 
Then Eu vejo uma mensagem de sucesso
Then A reserva está registrada em Reservas disponíveis



Scenario: Cliente deseja cancelar uma reserva
Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste"	
When A reserva está registrada em Reservas disponíveis
When Clico no botão Cancelar
Then Eu vejo uma mensagem de sucesso



