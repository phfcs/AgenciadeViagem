Feature: mapear pacote
    AS Um usuario do sistema
    I WANT TO mapear uma viagem
    SO THAT possa interagir com pacotes

Scenario: Adicionar pacotes e torná-los disponíveis - !!! Vai rodar nos testes? Pelo questão de ser algo do admin...
Given Eu estou na pagina de Pacotes
Given Seleciono todos os dados de pacote
When Clico no botão Adicionar
Then Eu vejo uma mensagem de sucesso

Scenario: Excluir pacote
Given Eu estou na pagina de Pacotes
When Clico no botão Cancelar
Then Eu recebo uma notificação e clico em OK
Then Eu vejo uma mensagem de sucesso
Then A reserva é excluída
 
