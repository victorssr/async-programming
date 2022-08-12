namespace Cenarios;

public class ParameterCheckCenario
{
    public async Task<bool> ExecutarAsync()
    {
        bool teste = true;
        if (true == teste)
            throw new ArgumentException("Exceção na validação do parâmetro.");

        return await ResultadoAsync();
    }

    private Task<bool> ResultadoAsync()
    {
        return Task.FromResult(true);
    }
}