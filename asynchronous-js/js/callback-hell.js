function buscarRegistro(callback) {
  const registro = { valor: 1 };
  console.log(`Registro encontrado ${JSON.stringify(registro)}`);
  callback(registro);
}

function somarValorDoRegistro(registro, novoValor, callback) {
  registro.valor += novoValor;
  console.log(`Registro somado ${JSON.stringify(registro)}`);
  callback(registro, novoValor);
}

function notificarCliente(registroSomado, callback) {
  callback({
    mensagem: `O valor final foi ${registroSomado.valor}`,
  });
}

function executar() {
  const novoValor = 1;
  buscarRegistro((registro) => {
    somarValorDoRegistro(registro, novoValor, (registroSomado) => {
      notificarCliente(registroSomado, (notificacao) => {
        console.log(`Cliente notificado: ${notificacao.mensagem}`);
      });
    });
  });
}

executar();
