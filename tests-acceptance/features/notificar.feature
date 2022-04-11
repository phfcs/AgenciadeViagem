Cadastro/Login de usuario
Mapear uma Viagem
Reservar hotel nas cidades da viagem	
Cancelar cidades e/ou hotéis da viagem	
Notificar cliente de datas e checkin de vôos (x)

Feature: realizar o Cadastro ou Login de usuário

    AS Um usuario do sistema (funcionário ou cliente)
    I WANT TO cadastrar e/ou efetuar o login no sistema
    SO THAT Eu possa acessar o sistema e ser capaz de efetuar operações


Scenario: O cliente realiza cancelamento de uma cidade 
GIVEN o funcionário "Igor Xavier" está na área inicial do sistema e recebe a notificação de que um cliente realizou solicitou o cancelamento de uma cidade
AND então trabalha em questões como um "roteamento" para o novo itinerário
WHEN após realizar seu trabalho, aplica as alterações no sistema e em seu planejamento
THEN as alterações são realizadas com sucesso
AND a mensagem "Alterações realizadas com sucesso!" aparece na tela
AND o funcionário é direcionado para a tela do mapeamento atualizado


Scenario: O cliente realiza cancelamento de uma reserva de hotel
GIVEN o cliente "Elton Gomes" está na área inicial do sistema e recebe a notificação de que um cliente realizou solicitou o cancelamento de um hotel
AND ele precisa gerenciar questões como taxas de cancelamentos e afins
WHEN após realizar seu trabalho, aplica as alterações no sistema e em seu planejamento
THEN as alterações são realizadas com sucesso
AND a mensagem "Alterações realizadas com sucesso!" aparece na tela
AND o funcionário é direcionado para a tela do mapeamento atualizado

Scenario: O cliente é notificado sobre as questões de cancelamentos de cidade/hoteis
GIVEN o cliente "Elton Gomes" realiza o cancelamento de uma cidade ou hotel, recebe notificações
AND analisa esses detalhes, como taxas e reembolsos, dependendo dos casos, detalhados num relatório que preza pela "transparência"
WHEN analisa e certifica-se em comunicar-se com seu agente de viagens
THEN as alterações são realizadas ou direcionadas com sucesso
AND o funcionário e cliente é direcionado para a tela do mapeamento atualizado

