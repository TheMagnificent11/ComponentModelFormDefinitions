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
            string surname,
            string password)
        {
            return new User
            {
                Id = Guid.NewGuid(),
                Email = email,
                GivenName = givenName,
                Surname = surname
            };
        }

        public static class MaxLengths
        {
            public const int Email = 255;
            public const int GiveName = 50;
            public const int Surname = 50;
        }
    }
}
