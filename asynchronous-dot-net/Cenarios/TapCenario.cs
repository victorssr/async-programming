using System.Text.Json;

namespace Cenarios;

public class TapCenario
{
    private async Task<Registro> BuscarRegistro()
    {
        await Task.Delay(1000);
        Registro registro = new() { Valor = 1 };
        Console.WriteLine($"Registro encontrado {JsonSerializer.Serialize(registro)} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return registro;
    }

    private async Task<Registro> SomarValorDoRegistro(Registro registro, int somaValor)
    {
        await Task.Delay(1000);
        registro.Valor += somaValor;
        Console.WriteLine($"Registro somado {JsonSerializer.Serialize(registro)} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return registro;
    }

    private async Task<Notificacao> NotificarCliente(Registro registro)
    {
        await Task.Delay(1000);
        return new Notificacao()
        {
            Mensagem = $"O valor final foi {registro.Valor} (Thread: {Thread.CurrentThread.ManagedThreadId})"
        };
    }

    public async Task Executar()
    {
        var somaValor = 1;
        try
        {
            var registro = await BuscarRegistro();
            var registroSomado = await SomarValorDoRegistro(registro, somaValor);
            var notificacao = await NotificarCliente(registroSomado);

            Console.WriteLine($"Cliente notificado: {notificacao.Mensagem} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        }
        catch (Exception erro)
        {
            Console.WriteLine(erro);
        }
    }
}

public class Registro
{
    public int Valor { get; set; }
}

public class Notificacao
{
    public string Mensagem { get; set; }
}