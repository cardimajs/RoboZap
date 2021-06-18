const fs = require("fs").promises;
const parse = require("csv-parse/lib/sync");
const Mustache = require("mustache");
const venom = require('venom-bot')

// le o csv e transforma em objeto
const mapearCsv = async ({ nomeArquivo }) => {
  const dadosBrutos = await fs.readFile(nomeArquivo, "utf8");
  const listaDeContatos = parse(dadosBrutos, {
    columns: true,
    skip_empty_lines: true,
  });
  return listaDeContatos.map((contato) => ({
    ...contato,
    Idade: parseInt(contato.Idade),
  }));
};

const filtrarDinamico = ({ listaDeContatos, filtros }) => {
  // gt  -> greater than -> maior que
  // gte -> greater than or equal -> maior que ou igual
  // eq  -> equal to -> igual
  // lt  -> less than -> menor que
  // lte -> less than or equal -> menor que ou igual
  // incl -> includes -> inclui

  const contatosFiltrados = listaDeContatos.filter((contato) => {
    for (campo of Object.keys(filtros)) {
      for (filtro of Object.keys(filtros[campo])) {
        if (filtro === "eq") {
          if (!(contato[campo] === filtros[campo][filtro])) {
            return false;
          }
        } else if (filtro === "gt") {
          if (!(contato[campo] > filtros[campo][filtro])) {
            return false;
          }
        } else if (filtro === "gte") {
          if (!(contato[campo] >= filtros[campo][filtro])) {
            return false;
          }
        } else if (filtro === "lt") {
          if (!(contato[campo] < filtros[campo][filtro])) {
            return false;
          }
        } else if (filtro === "lte") {
          if (!(contato[campo] <= filtros[campo][filtro])) {
            return false;
          }
        } else if (filtro === "incl") {
          if (!filtros[campo][filtro].includes(contato[campo])) {
            return false;
          }
        }
      }
    }
    return true;
  });
  return contatosFiltrados;
};

const gerarTextTemplate = ({ template, dados }) => {
  return Mustache.render(template, dados);
};


const cleanPhone = (phone) => {
  return '55' + phone.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '');
}

const main = async () => {
  const listaDeContatos = await mapearCsv({ nomeArquivo: "data.csv" });
  console.log(`total de ${listaDeContatos.length}`);

  const contatosFiltrados = filtrarDinamico({
    listaDeContatos,
    filtros: { CHAMADO: { incl: [
      
    ]}}
  });

  console.log(`contatos filtrados ${contatosFiltrados.length}`);
  
  const client = await venom.create();

  for(contato of contatosFiltrados){
    const mensagem = gerarTextTemplate({
      template: `
      `, 
      dados: contato
    })
    // console.log(mensagem)
    
    const phone = cleanPhone(contato.FONE)
    console.log(phone)
    try {
      await client.sendImage(`${phone}@c.us`, './img1.jpeg')
      await client.sendText(`${phone}@c.us`, mensagem); 
    }
    catch(err){
      console.log('erro ao enviar mensagem');
    }
  }
};

main();