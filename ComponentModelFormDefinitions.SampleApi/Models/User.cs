﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComponentModelFormDefinitions.SampleApi.Models
{
    public class User
    {
        public Guid Id { get; set; }

        public string GivenName { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }
    }
}