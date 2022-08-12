using System.Text.Json;
using Modelos;

namespace Cenarios;

public class ParalelismoCenario
{
    private async Task<Registro> BuscarRegistroAsync()
    {
        Console.WriteLine($"Iniciar busca do registro (Thread: {Thread.CurrentThread.ManagedThreadId})");
        await Task.Delay(1000);
        Registro registro = new() { Valor = 1 };
        Console.WriteLine($"Registro encontrado {JsonSerializer.Serialize(registro)} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return registro;
    }

    private Registro SomarValorDoRegistro(Registro registro, int somaValor)
    {
        Console.WriteLine($"Iniciando calculo da soma (Thread: {Thread.CurrentThread.ManagedThreadId})");
        for (int i = 0; i < 1000000000; i++)
        {
        }
        registro.Valor += somaValor;
        Console.WriteLine($"Registro somado {JsonSerializer.Serialize(registro)} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return registro;
    }

    private async Task<string> BuscarEmailDoClienteAsync(int idCliente)
    {
        Console.WriteLine($"Iniciando busca pelo email (Thread: {Thread.CurrentThread.ManagedThreadId})");
        await Task.Delay(1000);
        string email = "teste@gmail.com";
        Console.WriteLine($"E-mail encontrado {email} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        return email;
    }

    private async Task<Notificacao> NotificarClienteAsync(Registro registro, string email)
    {
        await Task.Delay(1000);
        return new Notificacao()
        {
            Mensagem = $"O valor final foi {registro.Valor} para o email {email} (Thread: {Thread.CurrentThread.ManagedThreadId})"
        };
    }

    public async Task ExecutarAsync()
    {
        var somaValor = 1;
        try
        {
            var registro = await BuscarRegistroAsync();
            
            var registroSomadoTask = Task.Run(() => SomarValorDoRegistro(registro, somaValor));
            var emailClienteTask = BuscarEmailDoClienteAsync(registro.IdCliente);
            await Task.WhenAll(registroSomadoTask, emailClienteTask);

            var notificacao = await NotificarClienteAsync(registroSomadoTask.Result, emailClienteTask.Result);

            Console.WriteLine($"Cliente notificado: {notificacao.Mensagem} (Thread: {Thread.CurrentThread.ManagedThreadId})");
        }
        catch (Exception erro)
        {
            Console.WriteLine(erro);
        }
    }
}