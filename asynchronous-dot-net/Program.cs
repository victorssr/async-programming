using Cenarios;

CallbackCenario cenario = new();

Console.WriteLine($"Iniciando programa... Thread: {Thread.CurrentThread.ManagedThreadId}");
cenario.Executar();
// var execucao = cenario.ExecutarAsync();
Console.WriteLine($"Fim do programa. Thread: {Thread.CurrentThread.ManagedThreadId}");
// await execucao;