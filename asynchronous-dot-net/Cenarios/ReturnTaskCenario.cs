namespace Cenarios;

public class ReturnTaskCenario
{
    public Task<bool> ExecutarAsync()
    {
        return MetodoPrivadoAsync();
    }

    private async Task<bool> MetodoPrivadoAsync()
    {
        await Task.Delay(3000);
        return true;
    }
}