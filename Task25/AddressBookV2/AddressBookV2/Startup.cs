using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressBookV2.Services.DBModels;
using Microsoft.EntityFrameworkCore;
using AddressBookV2.Services;
using AddressBookV2.Services.AutoMapperProfiles;
using System.Web;

namespace AddressBookV2
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AddressBookContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("SQLServerEmployeeConnection")));

            services.AddDatabaseDeveloperPageExceptionFilter();

            services.AddScoped<IEmployeeService, EmployeeService>();

            services.AddAutoMapper(typeof(EmployeeProfile));
            services.AddAutoMapper(typeof(DBEmployeeProfile));

            services.AddControllersWithViews();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else if (env.IsStaging())
            {
                app.UseDeveloperExceptionPage();
//                app.UseExceptionHandler("/Home/Error");
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "Employees",
                    pattern: "{controller=Employee}/{action=Index}/{id?}");
            });
        }
    }
}
