function buscarRegistro() {
  return new Promise((resolve) => {
    resolve({ valor: 1 });
  });
}

function somarValorDoRegistro(registro, novoValor) {
  return new Promise((resolve) => {
    registro.valor += novoValor;
    resolve(registro);
  });
}

function notificarCliente(registroSomado) {
  return new Promise((resolve) => {
    resolve({ mensagem: `O valor final foi ${registroSomado.valor}` });
  });
}

async function executar(id) {
  const novoValor = 2;

  try {
    console.log(`Iniciar buscarRegistroComSyscall, id: ${id}`);
    const registro = await buscarRegistro();
    console.log(`Registro encontrado ${JSON.stringify(registro)}, id: ${id}`);

    const registroSomado = await somarValorDoRegistro(registro, novoValor);
    console.log(`Registro somado ${JSON.stringify(registroSomado)}, id: ${id}`);

    const notificacao = await notificarCliente(registroSomado);

    console.log(`Cliente notificado: ${notificacao.mensagem}, id: ${id}`);
  } catch (erro) {
    console.log(`Ocorreu um problema: ${erro}, id: ${id}`);
  }
}

function chamada() {
  executar("1");
  executar("2");
  console.log("Fim da chamada");
}

chamada();
