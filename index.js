const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');

// le o csv e transforma em objeto
const mapearCsv = async ({nomeArquivo}) => {
  const dadosBrutos = await fs.readFile(nomeArquivo, 'utf8');
  const listaDeContatos = parse(dadosBrutos, {
    columns: true,
    skip_empty_lines: true
  });
  return listaDeContatos;
}

const filtrarChamado = ({listaDeContatos, chamados}) => {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const chamadosFiltrados = listaDeContatos.filter( contato => chamados.includes(contato.Chamado) );
  return chamadosFiltrados;
}


const main = async () => {
  const listaDeContatos = await mapearCsv({nomeArquivo: 'data.csv'});
  const contatosFiltrados = filtrarChamado({listaDeContatos, chamados: ['Bispo']});
  console.log(contatosFiltrados);
}
main();