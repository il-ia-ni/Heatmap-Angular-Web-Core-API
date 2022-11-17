using Heatmap_DataGenerator.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddPolicy("LocalOriginsPolicy",
    policy => policy.AllowAnyOrigin().WithOrigins("http://localhost:4200").AllowAnyHeader().AllowCredentials()));

builder.Services.AddScoped<IRandomDataService, RandomDataService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

app.UseRouting();
app.UseCors("LocalOriginsPolicy");
app.UseAuthorization();

app.Run();
