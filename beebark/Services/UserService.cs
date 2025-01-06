using beebark.IServices;
using beebark.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace beebark.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IConfiguration _configuration; 

       
        public UserService(ApplicationDbContext context, IPasswordHasher<User> passwordHasher, IConfiguration configuration)
        {
            _context = context;
            _passwordHasher = passwordHasher;
            _configuration = configuration; // Assign the injected IConfiguration to the private field
        }
        public async Task<User> GetUserByEmail(string email)
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<bool> RegisterUser(UserSignUpModel userSignUp)
        {
         
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == userSignUp.Email);

            if (existingUser != null)
            {
                return false; 
            }

            // Hash the password
            var hashedPassword = _passwordHasher.HashPassword(null, userSignUp.Password); // Use null for the User parameter

            // Create the new user
            var newUser = new User
            {
                Name = userSignUp.Name,
                Email = userSignUp.Email,
                PasswordHash = hashedPassword,
                CreatedAt = DateTime.UtcNow 
            };

           
            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return true; // User created successfully
        }
        public async Task<string> ValidateUser(string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return null; // User not found
            }

            // Verify the password
            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            if (result == PasswordVerificationResult.Failed)
            {
                return null; // Invalid password
            }

            // Generate JWT token
            return GenerateJwtToken(user);
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Email, user.Email)
            };

            var jwtConfig = _configuration.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig["SecretKey"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: jwtConfig["Issuer"],
                audience: jwtConfig["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(Convert.ToInt32(jwtConfig["TokenExpirationMinutes"])),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}