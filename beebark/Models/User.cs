﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beebark.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; } // Use PasswordHash instead of Password
        public DateTime CreatedAt { get; set; }
       // public DateTime UpdatedAt { get; set; }
    }
}

