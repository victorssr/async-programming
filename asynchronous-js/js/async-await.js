const indexErro = 3;
const excecao = true;

function buscarRegistro() {
  return new Promise((resolve, reject) => {
    if (indexErro == 0) {
      if (excecao) {
        throw Error("Erro exceção");
      }      

      reject(`Erro buscarRegistro()`);
    } else {      
      resolve({ valor: 1 });
    }
  });
}

function somarValorDoRegistro(registro, novoValor) {
  return new Promise((resolve, reject) => {
    if (indexErro == 1) {
      if (excecao) {
        throw Error("Erro exceção");
      }

      reject(`Erro somarValorDoRegistro()`);
    } else {
      registro.valor += novoValor;
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

async function executar() {
  const novoValor = 2;

  try {
    const registro = await buscarRegistro();
    console.log(`Registro encontrado ${JSON.stringify(registro)}`);

    const registroSomado = await somarValorDoRegistro(registro, novoValor);
    console.log(`Registro somado ${JSON.stringify(registroSomado)}`);

    const notificacao = await notificarCliente(registroSomado);

    console.log(`Cliente notificado: ${notificacao.mensagem}`);
  } catch (erro) {
    console.log(`Ocorreu um problema: ${erro}`);
  }
}

executar();
