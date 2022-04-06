Cadastro/Login de usuario
Mapear uma Viagem (x)
Reservar hotel nas cidades da viagem	
Cancelar cidades e/ou hotéis da viagem	
Notificar cliente de datas e checkin de vôos

Feature: realizar mapeamento de uma viagem

    AS Um usuario do sistema (funcionário)
    I WANT TO mapear uma viagem
    SO THAT os clientes ou funcionários possam visualizar o itinerario e outros detalhes

Scenario: Funcionário mapear a viagem de um cliente
GIVEN o funcionário de nome "Igor Xavier", de CPF: "095104875-68", está na área "Mapeamento de Viagem"
AND ele adiciona o nome do cliente, número do CPF, data de nascimento, endereço e telefone
AND adiciona as cidades e hoteis que o cliente irá visitar/hospedar-se
WHEN o funcionário termina de adicionar os detalhes
THEN o mapeamento foi realizado com sucesso
AND a mensagem "Viagem mapeada!" aparece na tela
AND o funcionário é direcionado para a "área inicial"


Scenario: Dados essenciais do mapeamento não foram preenchidos
GIVEN o funcionário de nome "Igor Xavier", de CPF: "095104875-68", está na área "Marpeamento de Viagem"
AND ele adiciona informações essenciais: o nome do cliente, CPF, informações de contato
AND complementa com as informações da viagem: cidades, itinerario, horários
AND não adiciona informações dos hotéris
WHEN o funcionário tenta terminar de mapear a viagem
THEN receberá a mensagem "Campos essenciais não preenchidos!"
AND o funcionário é direcionado para a área de "Mapeamento de Viagem" para completar o mapeamento


Scenario: Cliente quer alterar/adicionar o itinerário ou outro detalhe da viagem
GIVEN o cliente Elton Gomes com CPF: "104645253-61", deseja modificar detalhes da viagem
AND ele repassa a demanda para o funcionário
WHEN o funcionário realiza as alterações necessárias
THEN realiza o que foi demandado
AND receberá a mensagem "Alterações realizadas com sucesso!"
AND será redirecionado para "área inicial"
