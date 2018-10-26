namespace ComponentModelFormDefinitions
{
    /// <summary>
    /// Field Validation
    /// </summary>
    public class FieldValidation
    {
        /// <summary>
        /// Gets or sets the validation type
        /// </summary>
        public string ValidationType { get; set; }

        /// <summary>
        /// Gets or sets the validation value
        /// </summary>
        /// <remarks>
        /// For example, max length value
        /// </remarks>
        public int? ValidationValue { get; set; }

        /// <summary>
        /// Gets or sets the validation error message
        /// </summary>
        public string ErrorMessage { get; set; }
    }
}
