using System;
using System.Collections.Generic;
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

            var isEmailInUse = await IsEmailInUse(request.Email, null, cancellationToken);
            if (isEmailInUse) return EmailInUseBadRequest(nameof(request.Email));

            var newUser = Domain.User.Register(request.Email, request.GivenName, request.Surname);
            Context.Users.Add(newUser);
            await Context.SaveChangesAsync(cancellationToken);

            return Ok();
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            var users = await Context.Users.ToListAsync(cancellationToken);

            return Ok(users);
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(200, Type = typeof(User))]
        [ProducesResponseType(404)]
        public async Task<IActionResult> GetOne(
            [FromRoute]Guid id,
            CancellationToken cancellationToken)
        {
            var user = await Context.Users.SingleOrDefaultAsync(i => i.Id == id, cancellationToken);
            if (user == null) return NotFound();

            return Ok(user);
        }

        [HttpPut]
        [Route("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400, Type = typeof(ValidationProblemDetails))]
        [ProducesResponseType(404)]
        public async Task<IActionResult> Put(
            [FromRoute]Guid id,
            [FromBody]User user,
            CancellationToken cancellationToken)
        {
            if (user == null) throw new ArgumentNullException(nameof(user));

            var existingUser = await Context.Users.SingleOrDefaultAsync(i => i.Id == id, cancellationToken);
            if (existingUser == null) return NotFound();

            var isEmailInUse = await IsEmailInUse(user.Email, user.Id, cancellationToken);
            if (isEmailInUse) return EmailInUseBadRequest(nameof(user.Email));

            existingUser.Update(user);

            await Context.SaveChangesAsync(cancellationToken);

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> Delete(
            [FromRoute]Guid id,
            CancellationToken cancellationToken)
        {
            var existingUser = await Context.Users.SingleOrDefaultAsync(i => i.Id == id, cancellationToken);
            if (existingUser == null) return NotFound();

            Context.Users.Remove(existingUser);

            await Context.SaveChangesAsync(cancellationToken);

            return Ok();
        }

        private async Task<bool> IsEmailInUse(string email, Guid? id, CancellationToken cancellationToken)
        {
            return await Context
                .Users
                .AnyAsync(
                    i => i.Email.Equals(email, StringComparison.CurrentCultureIgnoreCase) && i.Id != id,
                    cancellationToken);
        }

        private IActionResult EmailInUseBadRequest(string emaliPropertyName)
        {
            ModelState.AddModelError(emaliPropertyName, "Email already in use");
            return BadRequest(new ValidationProblemDetails(ModelState));
        }
    }
}
