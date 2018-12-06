using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ComponentModelFormDefinitions.SampleApi.Data;
using ComponentModelFormDefinitions.SampleApi.Domain;
using ComponentModelFormDefinitions.SampleApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ComponentModelFormDefinitions.SampleApi.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("[controller]")]
    public sealed class UsersController : Controller
    {
        public UsersController(DatabaseContext context)
        {
            Context = context;
        }

        public DatabaseContext Context { get; }

        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(400, Type = typeof(ValidationProblemDetails))]
        public async Task<IActionResult> Post(
            [FromBody]RegistrationRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            var isEmailInUse = await Context
                .Users
                .AnyAsync(i => i.Email.Equals(request.Email, StringComparison.CurrentCultureIgnoreCase));

            if (isEmailInUse)
            {
                ModelState.AddModelError(nameof(request.Email), "Email already in use");
                return BadRequest(new ValidationProblemDetails(ModelState));
            }

            var newUser = Domain.User.Register(request.Email, request.GivenName, request.Surname);
            Context.Users.Add(newUser);
            await Context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            var users = await Context.Users.ToListAsync();

            return Ok(users);
        }
    }
}
