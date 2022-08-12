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

function executar() {
  const somaValor = 1;

  buscarRegistro()
    .then((registro) => somarValorDoRegistro(registro, somaValor))
    .then((registroSomado) => notificarCliente(registroSomado))
    .then((notificacao) =>console.log(`Cliente notificado: ${notificacao.mensagem}`));
}

executar();
