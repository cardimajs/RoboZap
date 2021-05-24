const fs = require("fs").promises;
const parse = require("csv-parse/lib/sync");
const Mustache = require("mustache");

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

const filtrarChamado = ({ listaDeContatos, chamados }) => {
  const contatosFiltrados = listaDeContatos.filter((contato) =>
    chamados.includes(contato.Chamado)
  );
  return contatosFiltrados;
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

const main = async () => {
  const listaDeContatos = await mapearCsv({ nomeArquivo: "data.csv" });
  // const contatosFiltrados = filtrarChamado({listaDeContatos, chamados: ['Bispo']});
  const contatosFiltrados = filtrarDinamico({
    listaDeContatos,
    filtros: {
      Chamado: {
        eq: "Bispo",
        // incl: ['Conselheiro', 'Bispo']
      },
      Idade: {
        gte: 20, //maior ou igual a 20
        // incl: [20, 21]
        lte: 30, //menor ou igual a 30
      },
    },
  });
  // console.log(contatosFiltrados);
  const mensagem = gerarTextTemplate({
    template: "Ola {{Nome}}, {{Chamado}} seja bem-vindo",
    dados: contatosFiltrados[0],
  });
  console.log(mensagem);
};

main();
