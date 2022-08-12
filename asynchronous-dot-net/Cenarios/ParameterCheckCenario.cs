namespace Cenarios;

public class ParameterCheckCenario
{
    public async Task<bool> Executar()
    {
        bool teste = true;
        if (true == teste)
            throw new ArgumentException("Exceção na validação do parâmetro.");

        return await Resultado();
    }

    private Task<bool> Resultado()
    {
        return Task.FromResult(true);
    }
}