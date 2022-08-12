function buscarRegistro() {
  return new Promise((resolve) => {
    const registro = { valor: 1 };
    console.log(`Registro encontrado ${JSON.stringify(registro)}`);
    resolve(registro);
  });
}

function somarValorDoRegistro(registro, novoValor) {
  return new Promise((resolve) => {
    registro.valor += novoValor;
    console.log(`Registro somado ${JSON.stringify(registro)}`);
    resolve(registro);
  });
}

function notificarCliente(registroSomado) {
  return new Promise((resolve) => {
    resolve({ mensagem: `O valor final foi ${registroSomado.valor}` });
  });
}

function executar() {
  const novoValor = 1;

  buscarRegistro()
    .then((registro) => {
      return somarValorDoRegistro(registro, novoValor);
    })
    .then((registroSomado) => {
      return notificarCliente(registroSomado);
    })
    .then((notificacao) =>
      console.log(`Cliente notificado: ${notificacao.mensagem}`)
    );
}

executar();
