using beebark.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace beebark.IServices
{
    public interface IUserService
    {
     
        Task<bool> RegisterUser(UserSignUpModel userSignUp);

        Task<User> GetUserByEmail(string email);
        Task<string> ValidateUser(string email, string password);
    }
}