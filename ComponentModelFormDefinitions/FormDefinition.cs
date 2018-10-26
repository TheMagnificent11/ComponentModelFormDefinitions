using System.Collections.Generic;

namespace ComponentModelFormDefinitions
{
    /// <summary>
    /// Form Definition
    /// </summary>
    public class FormDefinition
    {
        /// <summary>
        /// Gets or sets the form ID
        /// </summary>
        public string FormId { get; set; }

        /// <summary>
        /// Gets or sets the field definitions
        /// </summary>
        public IEnumerable<FieldDefinition> FieldDefinitions { get; set; }
    }
}
