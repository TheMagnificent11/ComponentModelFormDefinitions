using System.ComponentModel.DataAnnotations;
using ComponentModelFormDefinitions.SampleApi.Domain;

namespace ComponentModelFormDefinitions.SampleApi.Models
{
    [RequestModel(FormId = "registration")]
    public class RegistrationRequest
    {
        [Display(Name = "Given Name")]
        [MaxLength(User.MaxLengths.GiveName)]
        [Required(ErrorMessage = "Given Name is required")]
        public string GivenName { get; set; }

        [MaxLength(User.MaxLengths.Surname)]
        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }

        [MaxLength(User.MaxLengths.Email)]
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
