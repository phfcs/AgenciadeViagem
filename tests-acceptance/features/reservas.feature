Feature: reservar hotel nas cidades da viagem
    AS Um usuário do sistema
    I WANT TO reservar hotel nas cidades de uma viagem
    SO THAT eu possa consultar, realizar ou excluir uma reserva
Scenario: Cliente deseja excluir uma reserva
Given O E-mail "phfcs@cin.ufpe.br" está cadastrado com senha "teste" e tipo "CLIENTE"
When Eu faço login E-mail: "phfcs@cin.ufpe.br" Senha: "teste"	
When Visualizo minhas reservas
When clico no bota “Cancelar” 
Then  É realizada a exclusão da reserva com sucesso