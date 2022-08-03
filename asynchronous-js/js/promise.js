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

function executar() {
  const novoValor = 2;

  buscarRegistro()
    .then((registro) => {
      console.log(`Registro encontrado ${JSON.stringify(registro)}`);
      return somarValorDoRegistro(registro, novoValor);
    })
    .then((registroSomado) => {
      console.log(`Registro somado ${JSON.stringify(registroSomado)}`);
      return notificarCliente(registroSomado);
    })
    .then((notificacao) =>
      console.log(`Cliente notificado: ${notificacao.mensagem}`)
    );
}

executar();
