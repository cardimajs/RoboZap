Criar um robo que manda mensagens em massa
no whatsapp

Requisitos

-> lista contatos
  -> nome
  -> chamado
  -> sexo
  -> celular

-> mensagem
   olá irmão/irmã {nome da pessoa} {chamado} vc tem uma reunião no dia 10.

ETAPAS
-> Pegar dados da planilha csv e transformar em um objeto
  [
    {
      nome: "Alexandre",
      chamado: "Bispo",
      sexo: "masculino",
      celular: "13123123"
    }
  ]
-> filtrar por chamado
-> criar uma função que pega o template de texto e aplicar
  variaveis
-> mandar mensagem para pessoas que foram filtradas


dependencias
https://github.com/orkestral/venom
https://csv.js.org/parse/api/callback/


Tarefas
  -> Criar conta no github https://github.com/