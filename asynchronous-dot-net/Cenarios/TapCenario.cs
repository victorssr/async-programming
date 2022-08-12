using System.Text.Json;
using Modelos;

namespace Cenarios;

// ToDo:
// Execução normal
// Execução com await na Program.cs após o log
// Execução sem await Task.Delay()

public class TapCenario
{
    private async Task<Registro> BuscarRegistroAsync()
    {
        Console.WriteLine($"Iniciar busca do registro (Thread: {Thread.CurrentThread.ManagedThreadId})");
        await Task.Delay(1000);
        Registro registro = new() { Valor = 1 };
        Console.WriteLine($"Registro encontrado {JsonSerializer.Serialize(registro)} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return registro;
    }

    private async Task<Registro> SomarValorDoRegistroAsync(Registro registro, int somaValor)
    {
        await Task.Delay(1000);
        registro.Valor += somaValor;
        Console.WriteLine($"Registro somado {JsonSerializer.Serialize(registro)} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return registro;
    }

    private async Task<Notificacao> NotificarClienteAsync(Registro registro)
    {
        await Task.Delay(1000);
        return new Notificacao()
        {
            Mensagem = $"O valor final foi {registro.Valor} (Thread: {Thread.CurrentThread.ManagedThreadId})"
        };
    }

    public async Task ExecutarAsync()
    {
        var somaValor = 1;
        try
        {
            var registro = await BuscarRegistroAsync();
            var registroSomado = await SomarValorDoRegistroAsync(registro, somaValor);
            var notificacao = await NotificarClienteAsync(registroSomado);

            Console.WriteLine($"Cliente notificado: {notificacao.Mensagem} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        }
        catch (Exception erro)
        {
            Console.WriteLine(erro);
        }
    }
}
