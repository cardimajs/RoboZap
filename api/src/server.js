const fastify = require('fastify');
const WPBOT = require('./wp');

const server = fastify();

server.get('/', async (request, reeply) => {
  return "Works"
});

server.post('/send', async (request, reply) => {
  const result = await WPBOT.sendMassMessage(
    {
      to: request.body.to, 
      messages: request.body.messages,
      phoneField: request.body.phoneField
    });
  return result;
});

const start = async () => {
  await server.listen(27015, '::');
  const address = server.server.address()
  console.log(`server started on port ${address.port}`);
}

start();