import { DynamicFormControlModel, DynamicInputModel } from '@ng-dynamic-forms/core';
import { FormDefinition } from 'ngrx-componentmodelformdefinitions';

export class FormDefinitionConverter {

    static convert(apiDefintion: FormDefinition): Array<DynamicFormControlModel> {
        const formDefintion: Array<DynamicFormControlModel> = [];

        for (const apiField of apiDefintion.fieldDefinitions) {
            const field = new DynamicInputModel({
                id: apiField.id,
                label: apiField.label,
                inputType: apiField.inputType
            });

            if (apiField.validators) {
                const validators = {};
                const errorMessages = {};

                for (const fieldDef of apiField.validators) {
                    Reflect.set(validators, fieldDef.validationType, fieldDef.validationValue);
                    Reflect.set(errorMessages, fieldDef.validationType, fieldDef.errorMessage);
                }

                field.validators = validators;
                field.errorMessages = errorMessages;
            }

            formDefintion.push(field);
        }

        return formDefintion;
    }
}
