function buscarRegistro(callback) {
  callback({ valor: 1 });
}

function somarValorDoRegistro(registro, novoValor, callback) {
  registro.valor += novoValor;
  callback(registro);
}

function notificarCliente(registroSomado, callback) {
  callback({ mensagem: `O valor final foi ${registroSomado.valor}` });
}

function executar() {
  const novoValor = 2;

  buscarRegistro((registro) => {
    console.log(`Registro encontrado ${JSON.stringify(registro)}`);
    somarValorDoRegistro(registro, novoValor, (registroSomado) => {

      console.log(`Registro somado ${JSON.stringify(registroSomado)}`);

      notificarCliente(registroSomado, (notificacao) => {
        console.log(`Cliente notificado: ${notificacao.mensagem}`);
      });
    });
  });
}

executar();