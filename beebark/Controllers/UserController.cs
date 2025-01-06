using beebark.IServices;
using beebark.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace beebark.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly string _secretKey;

        public UserController(IUserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _secretKey = configuration["Jwt:SecretKey"]; // Get the secret key from appsettings
        }

        // POST: api/user/register
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] UserSignUpModel userSignUp)
        {
            if (userSignUp == null)
            {
                return BadRequest("User data is required.");
            }

            if (string.IsNullOrEmpty(userSignUp.Name) || string.IsNullOrEmpty(userSignUp.Email) || string.IsNullOrEmpty(userSignUp.Password))
            {
                return BadRequest("Name, email, and password are required.");
            }

            var result = await _userService.RegisterUser(userSignUp);

            if (result)
            {
                return Ok("User registered successfully.");
            }
            else
            {
                return Conflict("Email already in use.");
            }
        }

        // POST: api/User/Login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserSignInModel userLogin)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            var token = await _userService.ValidateUser(userLogin.Email, userLogin.Password);
            if (string.IsNullOrEmpty(token))
                return Unauthorized("Invalid credentials.");

            return Ok(new { Token = token });
        }
    }
}

