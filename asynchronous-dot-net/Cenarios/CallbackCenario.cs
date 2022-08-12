namespace Cenarios;

public class CallbackCenario
{
    public void Executar()
    {
        CallbackFuncao(1, (result) => Console.WriteLine(result));
    }

    private void CallbackFuncao(int parametro, Action<int> funcaoCallback)
    {
        parametro++;
        funcaoCallback(parametro);
    }
}