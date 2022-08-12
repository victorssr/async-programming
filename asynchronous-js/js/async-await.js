function buscarRegistro() {
  return new Promise((resolve) => {
    const registro = { valor: 1 };
    console.log(`Registro encontrado ${JSON.stringify(registro)}`);
    resolve(registro);
  });
}

function somarValorDoRegistro(registro, somaValor) {
  return new Promise((resolve) => {
    registro.valor += somaValor;
    console.log(`Registro somado ${JSON.stringify(registro)}`);
    resolve(registro);
  });
}

function notificarCliente(registroSomado) {
  return new Promise((resolve) => {
    resolve({ mensagem: `O valor final foi ${registroSomado.valor}` });
  });
}

async function executar() {
  const somaValor = 1;

  try {
    const registro = await buscarRegistro();
    const registroSomado = await somarValorDoRegistro(registro, somaValor);
    const notificacao = await notificarCliente(registroSomado);
    console.log(`Cliente notificado: ${notificacao.mensagem}`);
  } catch (erro) {
    console.log(`Ocorreu um problema: ${erro}`);
  }
}

executar();
