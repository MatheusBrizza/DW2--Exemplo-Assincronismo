// run `node index.js` in the terminal

function buscarInformacoes(callback) {
  let resultado = [];
  setTimeout(() => {
    resultado = ['mathias', 'melissa'];
    callback(resultado);
  }, 2000);
  return resultado;
}

buscarInformacoes((resultado) => {
  console.log(resultado);
});
