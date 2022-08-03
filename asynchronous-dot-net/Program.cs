await Chamada();

async Task Chamada()
{
    Console.WriteLine("Iniciando chamada...");
    await Execucao().ContinueWith((test) =>
    {
        Console.WriteLine("Fim da task");
    });
    Console.WriteLine("Fim da chamada");
}

async Task Execucao()
{
    Console.WriteLine($"Thread ID: {Thread.CurrentThread.ManagedThreadId}");
    var task = Task.Run(() =>
    {
        Console.WriteLine($"Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        FuncaoDemorada(4);
        Console.WriteLine($"Thread ID: {Thread.CurrentThread.ManagedThreadId}");
    });
    Console.WriteLine("Fim da execução");
    Console.WriteLine($"Thread ID: {Thread.CurrentThread.ManagedThreadId}");
    await task;
}


Task FuncaoDemorada(int seconds)
{
    Console.WriteLine("Início da função demorada");

    var date = DateTime.Now;
    DateTime currentDate;

    do
    {
        currentDate = DateTime.Now;
    } while (currentDate.Subtract(date).Seconds < seconds);

    Console.WriteLine("Fim da função demorada");

    return Task.CompletedTask;
}