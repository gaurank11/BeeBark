using beebark.Services;
using beebark.IServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Identity;
using System;
using beebark.Models;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace beebark
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();

            // Register your user service
            services.AddScoped<IUserService, UserService>();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp", policy =>  // Consistent name
                {
                    policy.WithOrigins("http://localhost:5174")  // The URL of your frontend
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });
            // JWT Authentication Configuration
            var jwtConfig = Configuration.GetSection("Jwt");
            var key = Encoding.ASCII.GetBytes(jwtConfig["SecretKey"]);
            var tokenExpirationMinutes = int.Parse(jwtConfig["TokenExpirationMinutes"] ?? "10");

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.RequireHttpsMetadata = false;
                        options.SaveToken = true;
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidIssuer = jwtConfig["Issuer"],
                            ValidAudience = jwtConfig["Audience"],
                            IssuerSigningKey = new SymmetricSecurityKey(key),
                            ClockSkew = TimeSpan.Zero // Optional: removes clock skew to make token expire exactly after specified minutes
                        };
                    });
            // Add controllers
            services.AddControllers();

            // Add Swagger for API documentation
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "beebark", Version = "v1" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "beebark v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            // Enable CORS for the React app
            app.UseCors("AllowReactApp");  // Use the same name as in ConfigureServices

            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
