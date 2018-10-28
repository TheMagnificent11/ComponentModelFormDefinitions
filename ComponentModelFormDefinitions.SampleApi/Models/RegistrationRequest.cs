using System.ComponentModel.DataAnnotations;

namespace ComponentModelFormDefinitions.SampleApi.Models
{
    [RequestModel(FormId = "registration")]
    public class RegistrationRequest
    {
        [Display(Name = "Given Name")]
        [MaxLength(100)]
        [Required(ErrorMessage = "Given Name is required")]
        public string GivenName { get; set; }

        [MaxLength(100)]
        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }

        [MaxLength(255)]
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Display(Name = "Confirm Password")]
        [Compare(nameof(Password), ErrorMessage = "Passwords do not match")]
        public string ConfirmPassword { get; set; }
    }
}
