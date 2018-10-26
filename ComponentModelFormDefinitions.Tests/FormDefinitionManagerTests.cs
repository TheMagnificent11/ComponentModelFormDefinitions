using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Xunit;

namespace ComponentModelFormDefinitions.Tests
{
    public static class FormDefinitionManagerTests
    {
        [Fact]
        public static void GetFormDefinition()
        {
            var target = new FormDefinitionManager();
            var result = target.GetFormDefinition(typeof(SampleFormRequest));

            result.Should().NotBeNull();

            result.FormId.Should().Be("sample-form-request");
            result.FieldDefinitions.Should().NotBeNull();

            var fieldDefintions = result.FieldDefinitions.ToList();

            result.FieldDefinitions.Should().HaveCount(5);

            for (var i = 0; i < fieldDefintions.Count; i++)
            {
                GetExpectedValues(
                    i,
                    out string id,
                    out string label,
                    out string inputType,
                    out Dictionary<string, string> errorMessages);
                AssertFieldDefinition(
                    fieldDefintions[i],
                    id,
                    label,
                    inputType,
                    errorMessages);
            }
        }

        private static void GetExpectedValues(
            int index,
            out string id,
            out string label,
            out string inputType,
            out Dictionary<string, string> errorMessages)
        {
            switch (index)
            {
                case 0:
                    id = "givenName";
                    label = "Given Name";
                    inputType = "text";
                    errorMessages = new Dictionary<string, string>()
                    {
                        { "required", "Given Name is required" },
                        { "maxLength", null }
                    };
                    break;

                case 1:
                    id = "surname";
                    label = "Surname";
                    inputType = "text";
                    errorMessages = new Dictionary<string, string>()
                    {
                        { "required", "Surname is required" },
                        { "maxLength", null }
                    };
                    break;

                case 2:
                    id = "email";
                    label = "Email";
                    inputType = "email";
                    errorMessages = new Dictionary<string, string>()
                    {
                        { "required", "Email is required" },
                        { "email", "Invalid email address" },
                        { "maxLength", null }
                    };
                    break;

                case 3:
                    id = "password";
                    label = "Password";
                    inputType = "password";
                    errorMessages = new Dictionary<string, string>()
                    {
                        { "required", "Password is required" }
                    };
                    break;

                case 4:
                    id = "confirmPassword";
                    label = "Confirm Password";
                    inputType = "password";
                    errorMessages = new Dictionary<string, string>();
                    break;

                default:
                    throw new ArgumentException("Invalid field index");
            }
        }

        private static void AssertFieldDefinition(
            FieldDefinition field,
            string id,
            string label,
            string inputType,
            Dictionary<string, string> errorMessages)
        {
            field.Id.Should().Be(id, "Field ID");
            field.Label.Should().Be(label, "Label");
            field.InputType.Should().Be(inputType, "Input Type");

            if (errorMessages == null || errorMessages.Count == 0)
            {
                field.Validators.Should().BeNullOrEmpty();
            }
            else
            {
                field.Validators.Should().HaveCount(errorMessages.Count);

                foreach (var item in errorMessages)
                {
                    field.Validators.Should().ContainSingle(i => i.ValidationType == item.Key);

                    var validator = field.Validators.FirstOrDefault(i => i.ValidationType == item.Key);

                    validator.ErrorMessage.Should().Be(item.Value);
                }
            }
        }
    }
}
