// run `node index.js` in the terminal

//assincronismo sem Promise
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

// assincronismo com Promise
function buscarInformacoes2() {
  let resultado = [];
  return new Promise((resolve) => {
    setTimeout(() => {
      resultado = ['mathias', 'melissa'];
      resolve(resultado);
    }, 2000);
  });
}

buscarInformacoes2()
  .then((resultado) => {
    console.log(1, resultado);
    return Promise.reject('Erro na linha 22');
  })
  .then((resultado) => {
    console.log(2, resultado);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log('finally');
  });
