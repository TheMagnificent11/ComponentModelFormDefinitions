using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;

namespace ComponentModelFormDefinitions
{
    /// <summary>
    /// Form Definition Manager
    /// </summary>
    public sealed class FormDefinitionManager
    {
        /// <summary>
        /// Gets a form definition from a request type
        /// </summary>
        /// <param name="requestType">Request type</param>
        /// <returns>Form defintion if request type has the <see cref="RequestModelAttribute"/>, otherwise null</returns>
        public FormDefinition GetFormDefinition(Type requestType)
        {
            if (requestType == null) throw new ArgumentNullException(nameof(requestType));

            var requestModelAttribute = requestType.GetCustomAttribute<RequestModelAttribute>();
            if (requestModelAttribute == null) throw new ArgumentException("Invalid request type");

            var fieldDefinitions = new List<FieldDefinition>();
            var formDefinition = new FormDefinition()
            {
                FormId = requestModelAttribute.FormId
            };

            foreach (var item in requestType.GetProperties())
            {
                fieldDefinitions.Add(GenerateFieldDefinition(item));
            }

            formDefinition.FieldDefinitions = fieldDefinitions;

            return formDefinition;
        }

        /// <summary>
        /// Gets all the form defintions (from classes with <see cref="RequestModelAttribute"/> set) in the provided <see cref="Assembly"/>
        /// </summary>
        /// <param name="modelsAssembly">Models assembly containing classes with <see cref="RequestModelAttribute"/></param>
        /// <returns>An enumerable collection of <see cref="FormDefinition"/> objects</returns>
        public IEnumerable<FormDefinition> GetFormDefintions(Assembly modelsAssembly)
        {
            if (modelsAssembly == null) throw new ArgumentNullException(nameof(modelsAssembly));

            var formDefintions = new List<FormDefinition>();
            var requestTypes = GetRequestTypes(modelsAssembly);

            requestTypes
                .ToList()
                .ForEach(i => formDefintions.Add(GetFormDefinition(i)));

            return formDefintions;
        }

        private static IEnumerable<Type> GetRequestTypes(Assembly assembly)
        {
            foreach (Type type in assembly.GetTypes())
            {
                if (type.GetCustomAttributes(typeof(RequestModelAttribute), true).Length > 0)
                {
                    yield return type;
                }
            }
        }

        private static FieldDefinition GenerateFieldDefinition(PropertyInfo property)
        {
            var fieldDef = new FieldDefinition()
            {
                Id = GetId(property),
                Label = GetLabel(property),
                InputType = GetInputType(property),
                Validators = GetValidators(property)
            };

            return fieldDef;
        }

        private static string GetId(PropertyInfo property)
        {
            var lowerCaseFirstLetter = property.Name.Substring(0, 1).ToLower();
            var remaining = property.Name.Substring(1, property.Name.Length - 1);

            return $"{lowerCaseFirstLetter}{remaining}";
        }

        private static string GetLabel(PropertyInfo property)
        {
            var attr = property.GetCustomAttribute<DisplayAttribute>();
            if (attr == null) return property.Name;

            return attr.Name;
        }

        private static string GetInputType(PropertyInfo property)
        {
            switch (Type.GetTypeCode(property.PropertyType))
            {
                case TypeCode.Boolean:
                    return "checkbox";

                case TypeCode.UInt16:
                case TypeCode.UInt32:
                case TypeCode.UInt64:
                case TypeCode.Int16:
                case TypeCode.Int32:
                case TypeCode.Int64:
                case TypeCode.Decimal:
                case TypeCode.Double:
                case TypeCode.Single:
                    return "number";

                default:
                    var emailAttr = property.GetCustomAttribute<EmailAddressAttribute>();
                    if (emailAttr != null) return "email";

                    if (property.Name.Contains("Password")) return "password";

                    return "text";
            }
        }

        private static IList<FieldValidation> GetValidators(PropertyInfo property)
        {
            var validators = new List<FieldValidation>();

            var validationAttributes = property.GetCustomAttributes<ValidationAttribute>();
            if (validationAttributes == null) return validators;

            foreach (var item in validationAttributes)
            {
                if (item is RequiredAttribute ||
                    item is EmailAddressAttribute ||
                    item is MinLengthAttribute ||
                    item is MaxLengthAttribute)
                {
                    var validationType = GetValidationAttributeType(item, out int? validationValue);

                    validators.Add(new FieldValidation()
                    {
                        ValidationType = validationType,
                        ValidationValue = validationValue,
                        ErrorMessage = item.ErrorMessage
                    });
                }
            }

            return validators;
        }

        private static string GetValidationAttributeType(
            ValidationAttribute validationAttribute,
            out int? validationValue)
        {
            validationValue = null;

            var typeName = validationAttribute
                .GetType()
                .Name
                .Replace("Attribute", string.Empty);

            var firstChar = char.ToLowerInvariant(typeName[0]);

            var attributeType = $"{firstChar}{typeName.Substring(1)}";

            if (validationAttribute is MinLengthAttribute)
            {
                validationValue = ((MinLengthAttribute)validationAttribute).Length;
            }
            else if (validationAttribute is MaxLengthAttribute)
            {
                validationValue = ((MaxLengthAttribute)validationAttribute).Length;
            }

            if (attributeType == "emailAddress") return "email";

            return attributeType;
        }
    }
}
