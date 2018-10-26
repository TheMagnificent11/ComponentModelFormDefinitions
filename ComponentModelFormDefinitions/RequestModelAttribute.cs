using System;

namespace ComponentModelFormDefinitions
{
    /// <summary>
    /// Request Model Attribute
    /// </summary>
    [AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = false)]
    public sealed class RequestModelAttribute : Attribute
    {
        /// <summary>
        /// Gets or sets the form ID
        /// </summary>
        public string FormId { get; set; }
    }
}
