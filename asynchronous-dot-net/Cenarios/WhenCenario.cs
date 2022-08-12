namespace Cenarios;

public class WhenCenario
{
    public async Task ExecutarAsync()
    {
        Console.WriteLine($"Iniciando execução... Thread: {Thread.CurrentThread.ManagedThreadId}");

        var mensagemLogadaTask = LogarNoConsoleAsync("Primeiro teste assíncrono.");
        var mensagemLogadaTask2 = LogarNoConsoleAsync("Segundo teste assíncrono.");

        Console.WriteLine($"Primeira linha depois da task. Thread: {Thread.CurrentThread.ManagedThreadId}");

        await Task.WhenAll(mensagemLogadaTask, mensagemLogadaTask2);
        // await Task.WhenAny(mensagemLogadaTask, mensagemLogadaTask2);

        if (mensagemLogadaTask.Result && mensagemLogadaTask2.Result)
            Console.WriteLine($"Mensagem logada. Thread: {Thread.CurrentThread.ManagedThreadId}");

        Console.WriteLine($"Fim da execução. Thread: {Thread.CurrentThread.ManagedThreadId}");
    }

    public async Task<bool> LogarNoConsoleAsync(string mensagem)
    {
        Console.WriteLine($"{mensagem} Thread: {Thread.CurrentThread.ManagedThreadId}");
        await Task.Delay(3000);
        return true;
    }
}