import { fakeAsync, tick } from '@angular/core/testing';
import { FormDefinition } from 'ngrx-componentmodelformdefinitions';
import { FormDefinitionConverter } from './form-definition-converter';

describe('FormDefinitionConverter', () => {

    const input: FormDefinition = {
        formId: 'login',
        fieldDefinitions: [
            {
                id: 'email',
                label: 'Email',
                inputType: 'email',
                validators: [
                    {
                        validationType: 'required',
                        errorMessage: 'Email is required'
                    },
                    {
                        validationType: 'email',
                        errorMessage: 'Invalid email address'
                    }
                ]
            },
            {
                id: 'password',
                label: 'Password',
                inputType: 'password',
                validators: [
                    {
                        validationType: 'required',
                        errorMessage: 'Password is required'
                    }
                ]
            }
        ]
    };

    describe('convert', () => {
        it(
            'should return correct form defintion',
            fakeAsync(() => {
                const actual = FormDefinitionConverter.convert(input);
                tick();

                expect(actual).toBeTruthy();
                expect(actual.length).toBe(2);

                // Email
                const email = actual[0];
                expect(email).toBeTruthy();
                expect(email.id).toBe('email');
                expect(email.label).toBe('Email');
                expect(email.validators).toBeTruthy();
                expect(email.errorMessages).toBeTruthy();
                expect(email.errorMessages.required).toBe('Email is required');
                expect(email.errorMessages.email).toBe('Invalid email address');

                // Email
                const password = actual[1];
                expect(password).toBeTruthy();
                expect(password.id).toBe('password');
                expect(password.label).toBe('Password');
                expect(password.validators).toBeTruthy();
                expect(password.errorMessages).toBeTruthy();
                expect(password.errorMessages.required).toBe('Password is required');
            })
        );
    });

});
