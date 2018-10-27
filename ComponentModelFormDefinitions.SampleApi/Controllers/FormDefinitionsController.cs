using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using ComponentModelFormDefinitions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    /// <summary>
    /// Form Defintions Controller
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public sealed class FormDefinitionsController : Controller
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FormDefinitionsController"/> class
        /// </summary>
        /// <param name="manager">Form definition manager</param>
        public FormDefinitionsController(FormDefinitionManager manager)
        {
            Manager = manager;
        }

        private FormDefinitionManager Manager { get; }

        /// <summary>
        /// Gets all the form defintions
        /// </summary>
        /// <returns>
        /// HTTP 200 containing an enumerable list of form definitions
        /// HTTP 404 if not form defintions exist
        /// </returns>
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<FormDefinition>))]
        public ActionResult<IEnumerable<FormDefinition>> GetAll()
        {
            var webModelsAssembly = GetWebModelsAssembly();
            if (webModelsAssembly == null) return NotFound();

            var formDefintions = new List<FormDefinition>();
            var requestTypes = GetRequestTypes(webModelsAssembly);

            requestTypes
                .ToList()
                .ForEach(i => formDefintions.Add(Manager.GetFormDefinition(i)));

            return Ok(formDefintions);
        }

        /// <summary>
        /// Gets a form definition for the specified ID
        /// </summary>
        /// <param name="formId">ID of form defnition to retrieve</param>
        /// <returns>
        /// HTTP 200 containing the form defintion if it exists
        /// HTTP 404 if the a form definition with the specified ID does not exist
        /// </returns>
        [HttpGet]
        [Route("{formId}")]
        [ProducesResponseType(200, Type = typeof(FormDefinition))]
        [ProducesResponseType(404)]
        public ActionResult<FormDefinition> Get(string formId)
        {
            var webModelsAssembly = GetWebModelsAssembly();
            if (webModelsAssembly == null) return NotFound();

            var requestType = GetRequestType(webModelsAssembly, formId);
            if (requestType == null) return NotFound();

            var formDefintion = Manager.GetFormDefinition(requestType);
            if (formDefintion == null) return NotFound();

            return Ok(formDefintion);
        }

        private static Assembly GetWebModelsAssembly()
        {
            return Assembly.Load("Api.Models");
        }

        private static IEnumerable<Type> GetRequestTypes(Assembly assembly)
        {
            foreach (Type type in assembly.GetTypes())
            {
                if (type.GetCustomAttributes(typeof(RequestModelAttribute), true).Length > 0)
                {
                    yield return type;
                }
            }
        }

        private static Type GetRequestType(Assembly assembly, string formId)
        {
            foreach (Type type in assembly.GetTypes())
            {
                var requestModelAttributes = type.GetCustomAttributes(typeof(RequestModelAttribute), true);
                if (requestModelAttributes == null || requestModelAttributes.Length == 0) continue;

                var attribute = requestModelAttributes[0] as RequestModelAttribute;
                if (attribute.FormId == formId) return type;
            }

            return null;
        }
    }
}
