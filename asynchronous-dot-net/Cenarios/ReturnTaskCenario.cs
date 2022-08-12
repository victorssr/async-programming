namespace Cenarios;

public class ReturnTaskCenario
{
    public Task<bool> ExecutarAsync()
    {
        return MetodoPrivadoAsync();
    }

    private async Task<bool> MetodoPrivadoAsync()
    {
        await Task.Delay(1000);
        Console.WriteLine($"Fim do método. Thread: {Thread.CurrentThread.ManagedThreadId}");
        return true;
    }
}