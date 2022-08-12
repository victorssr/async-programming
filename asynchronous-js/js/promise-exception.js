const indexErro = -1;
const excecao = false;

function buscarRegistro() {
  return new Promise((resolve, reject) => {
    if (indexErro == 0) {
      if (excecao) {
        throw Error("Erro exceção");
      }

      reject(`Erro buscarRegistro()`);
    } else {
      const registro = { valor: 1 };
      console.log(`Registro encontrado ${JSON.stringify(registro)}`);
      resolve(registro);
    }
  });
}

function somarValorDoRegistro(registro, somaValor) {
  return new Promise((resolve, reject) => {
    if (indexErro == 1) {
      if (excecao) {
        throw Error("Erro exceção");
      }

      reject(`Erro somarValorDoRegistro()`);
    } else {
      registro.valor += somaValor;
      console.log(`Registro somado ${JSON.stringify(registro)}`);
      resolve(registro);
    }
  });
}

function notificarCliente(registroSomado) {
  return new Promise((resolve, reject) => {
    if (indexErro == 2) {
      if (excecao) {
        throw Error("Erro exceção");
      }

      reject(`Erro somarValorDoRegistro()`);
    } else {
      resolve({ mensagem: `O valor final foi ${registroSomado.valor}` });
    }
  });
}

function executar() {
  const somaValor = 1;

  buscarRegistro()
    .then((registro) => somarValorDoRegistro(registro, somaValor))
    .then((registroSomado) => notificarCliente(registroSomado))
    .then((notificacao) => console.log(`Cliente notificado: ${notificacao.mensagem}`))
    .catch((erro) => console.log(`Ocorreu um problema: ${erro}`));
}

executar();
