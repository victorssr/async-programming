function buscarRegistroComSyscall() {
  return { valor: 1 };
}

function somarValorDoRegistro(registro, novoValor) {
  registro.valor += novoValor;
  return registro;
}

function notificarCliente(registroSomado) {
  return { mensagem: `O valor final foi ${registroSomado.valor}` };
}

function* executar(id) {
  const novoValor = 2;

  try {
    console.log(`Iniciar buscarRegistroComSyscall, id: ${id}`);
    const registro = yield buscarRegistroComSyscall();
    console.log(
      `Registro encontrado ${JSON.stringify(registro.value)}, id: ${id}`
    );

    const registroSomado = yield somarValorDoRegistro(
      registro.value,
      novoValor
    );
    console.log(
      `Registro somado ${JSON.stringify(registroSomado.value)}, id: ${id}`
    );

    const notificacao = yield notificarCliente(registroSomado.value);

    console.log(`Cliente notificado: ${notificacao.value.mensagem}, id: ${id}`);
  } catch (erro) {
    console.log(`Ocorreu um problema: ${erro}, id: ${id}`);
  }
}

function chamada() {
  const generator = executar("1");
  const registro = generator.next();

  console.log("Fim da chamada");

  const registroSomado = generator.next(registro);
  const notificacao = generator.next(registroSomado);
  generator.next(notificacao);
}

chamada();
