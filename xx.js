const venom = require('venom-bot')

const vitima = "";
const mensagem = 'V de Vingança';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const main = async () => {
  const client = await venom.create();

  let numeroDeEnvios = 0

  for(;;){
    await sleep(50)
    client.sendText(`${vitima}@c.us`, mensagem);
    numeroDeEnvios = numeroDeEnvios + 1
    console.log('mensagem ', numeroDeEnvios);
  }

}

main();