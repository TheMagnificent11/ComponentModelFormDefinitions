using System;
using ComponentModelFormDefinitions.SampleApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ComponentModelFormDefinitions.SampleApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public sealed class UsersController : Controller
    {
        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(200)]
        [ProducesResponseType(400, Type = typeof(ValidationProblemDetails))]
        public IActionResult Post([FromBody]RegistrationRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            return Ok();
        }
    }
}
