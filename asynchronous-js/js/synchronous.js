function executar(parametro, funcaoCallback) {
  parametro++;
  funcaoCallback(parametro);
}

executar(1, (numero) => console.log(numero));
