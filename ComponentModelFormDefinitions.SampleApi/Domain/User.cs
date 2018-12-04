using System;

namespace ComponentModelFormDefinitions.SampleApi.Domain
{
    public class User
    {
        public Guid Id { get; set; }

        public string GivenName { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }
    }
}
