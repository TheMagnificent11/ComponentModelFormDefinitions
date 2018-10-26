using System.Collections.Generic;

namespace ComponentModelFormDefinitions
{
    /// <summary>
    /// Field Defintion
    /// </summary>
    public class FieldDefinition
    {
        /// <summary>
        /// Gets or sets the field ID
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets the field label
        /// </summary>
        public string Label { get; set; }

        /// <summary>
        /// Gets or sets the input type
        /// </summary>
        public string InputType { get; set; }

        /// <summary>
        /// Gets or sets the valiadators
        /// </summary>
        public IList<FieldValidation> Validators { get; set; }
    }
}
