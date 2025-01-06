using beebark.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beebark.Services
{
    public class PasswordHasher 
    {
        private readonly IPasswordHasher<User> _passwordHasher;

        public PasswordHasher(IPasswordHasher<User> passwordHasher)
        {
            _passwordHasher = passwordHasher;
        }

        public string HashPassword(string password)
        {
            var hashedPassword = _passwordHasher.HashPassword(null, password);
            return hashedPassword;
        }
    }
}

