function buscarRegistro(callback) {
  const registro = { valor: 1 };
  console.log(`Registro encontrado ${JSON.stringify(registro)}`);
  callback(registro);
}

function somarValorDoRegistro(registro, somaValor, callback) {
  registro.valor += somaValor;
  console.log(`Registro somado ${JSON.stringify(registro)}`);
  callback(registro, somaValor);
}

function notificarCliente(registroSomado, callback) {
  callback({
    mensagem: `O valor final foi ${registroSomado.valor}`,
  });
}

function executar() {
  const somaValor = 1;
  buscarRegistro((registro) => {
    somarValorDoRegistro(registro, somaValor, (registroSomado) => {
      notificarCliente(registroSomado, (notificacao) => {
        console.log(`Cliente notificado: ${notificacao.mensagem}`);
      });
    });
  });
}

executar();
