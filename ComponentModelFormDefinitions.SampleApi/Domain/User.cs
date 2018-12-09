using System;

namespace ComponentModelFormDefinitions.SampleApi.Domain
{
    public class User
    {
        public Guid Id { get; set; }

        public string GivenName { get; protected set; }

        public string Surname { get; protected set; }

        public string Email { get; protected set; }

        public static User Register(
            string email,
            string givenName,
            string surname)
        {
            return new User
            {
                Id = Guid.NewGuid(),
                Email = email,
                GivenName = givenName,
                Surname = surname
            };
        }

        public void Update(User newDetails)
        {
            if (newDetails == null) throw new ArgumentNullException(nameof(newDetails));

            this.Email = newDetails.Email;
            this.GivenName = newDetails.GivenName;
            this.Surname = newDetails.Surname;
        }

        public static class MaxLengths
        {
            public const int Email = 255;
            public const int GiveName = 50;
            public const int Surname = 50;
        }
    }
}
