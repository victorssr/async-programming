function buscarRegistro() {
  const registro = { valor: 1 };
  console.log(`Registro encontrado ${JSON.stringify(registro)}`);
  return registro;
}

function somarValorDoRegistro(registro, somaValor) {
  registro.valor += somaValor;
  console.log(`Registro somado ${JSON.stringify(registro)}`);
  return registro;
}

function notificarCliente(registroSomado) {
  return { mensagem: `O valor final foi ${registroSomado.valor}` };
}

function* executar() {
  const somaValor = 1;

  try {
    console.log(`Iniciar buscarRegistro()`);
    const registro = yield buscarRegistro();
    console.log(`Iniciar somarValorDoRegistro()`);
    const registroSomado = yield somarValorDoRegistro(registro.value, somaValor);
    const notificacao = yield notificarCliente(registroSomado.value);
    console.log(`Cliente notificado: ${notificacao.value.mensagem}`);
  } catch (erro) {
    console.log(`Ocorreu um problema: ${erro}`);
  }
}

function chamada() {
  const generator = executar();
  const registro = generator.next();
  console.log("Fim da chamada");
  const registroSomado = generator.next(registro);
  const notificacao = generator.next(registroSomado);
  generator.next(notificacao);
}

chamada();
