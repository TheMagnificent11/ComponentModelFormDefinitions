using System.ComponentModel.DataAnnotations;

namespace ComponentModelFormDefinitions.Tests
{
    /// <summary>
    /// Sample Form Request
    /// </summary>
    [RequestModel(FormId = "sample-form-request")]
    public class SampleFormRequest
    {
        /// <summary>
        /// Gets or sets the given name
        /// </summary>
        [Display(Name = "Given Name")]
        [MaxLength(100)]
        [Required(ErrorMessage = "Given Name is required")]
        public string GivenName { get; set; }

        /// <summary>
        /// Gets or sets the surname
        /// </summary>
        [MaxLength(100)]
        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }

        /// <summary>
        /// Gets or sets the email address
        /// </summary>
        [MaxLength(255)]
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the password
        /// </summary>
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets the password confirmation
        /// </summary>
        [Display(Name = "Confirm Password")]
        [Compare(nameof(Password), ErrorMessage = "Passwords do not match")]
        public string ConfirmPassword { get; set; }
    }
}
