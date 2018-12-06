using System.ComponentModel.DataAnnotations;
using ComponentModelFormDefinitions.SampleApi.Domain;

namespace ComponentModelFormDefinitions.SampleApi.Models
{
    [RequestModel(FormId = "registration")]
    public class RegistrationRequest
    {
        [MaxLength(User.MaxLengths.Email)]
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Display(Name = "Given Name")]
        [MaxLength(User.MaxLengths.GiveName)]
        [Required(ErrorMessage = "Given Name is required")]
        public string GivenName { get; set; }

        [MaxLength(User.MaxLengths.Surname)]
        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }
    }
}
