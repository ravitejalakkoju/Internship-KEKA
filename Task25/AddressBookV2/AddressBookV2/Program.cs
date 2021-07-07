using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;

namespace AddressBookV2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            const string EnvironmentKey = "ASPNETCORE_STAGING_ENVIRONMENT";
            var config = new ConfigurationBuilder()
                            .AddEnvironmentVariables().Build();
            CreateHostBuilder(args, config[EnvironmentKey]).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args, string EnvironmentKey) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseEnvironment(EnvironmentKey).UseStartup<Startup>();
                });
    }
}
