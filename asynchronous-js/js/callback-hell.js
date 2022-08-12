function buscarRegistro(callback) {
  callback({
    valor: 1,
  });
}

function somarValorDoRegistro(registro, novoValor, callback) {
  registro.valor += novoValor;
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
