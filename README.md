# Component Model Form Definitions

## Build 

NuGet Package: [![Build status](https://saji.visualstudio.com/Open%20Source/_apis/build/status/ComponentModelFormDefinitions)](https://saji.visualstudio.com/Open%20Source/_build/latest?definitionId=30)

NPM Packages: [![Build status](https://saji.visualstudio.com/Open%20Source/_apis/build/status/NgrxComponentModelFormDefintions)](https://saji.visualstudio.com/Open%20Source/_build/latest?definitionId=31)

## Overview

`ComponentModelFormDefintions` is a NuGet packages that analyses `System.ComponentModel.DataAnnotations` attributes on a class and generates a form definition model.

`ngrx-componentmodelformdefintions` is an NPM package that has an NGRX implemenation that retrieves those form defintions produced by the NuGet package (via an API GET route or some other mechanism).

`ngrx-componentmodelformdefintions-material` displays that form definition as a simple Angular Material form.  It uses the `@ng-dynamic-forms/core` and `@ng-dynamic-forms/ui-material` NPM packages under the covers.

## Getting Started

### API
1. Add the `ComponentModelFormDefintions` to your ASP.Net Web API project.
2. Add the `[RequestModel]` attribute to your POST/PUT request models (the `FormId` property should be the route parameter for retrieving the form defintions).
* Example request model: [RegistrationRequest](/ComponentModelFormDefinitions.SampleApi/Models/RegistrationRequest.cs)
3. Use the `FormDefintionManager` class in your API controller to generate the form defintion for the request form ID.
* Example API controller: [FormDefinitionsController](/ComponentModelFormDefinitions.SampleApi/Controllers/FormDefinitionsController.cs)

### Angular
1. Setup [Angular Material](https://material.angular.io/guide/getting-started).
2. Install the following NPM packages to your app.
* `ngrx-componentmodelformdefinitions`
* `ngrx-componentmodelformdefinitions-material`
* `ngx-netcore-api`
* `@ngrx/store`
* `@ngrx/effects`
* `@ng-dynamic-forms/core`
* `@ng-dynamic-forms/ui-material`
* `angular2-text-mask`
3. Implement the `AuthorizationTokenService` from `ngx-netcore-api` (used to authorize API requests).
4. Setup the various providers required by module dependencies.
* Example: [AppModule](/NgrxComponentModelFormDefinitions/src/app/app.module.ts)
5. Use the `mat-fd-form` element in your form componet
* Example component: [RegisterComponent](/NgrxComponentModelFormDefinitions/src/app/register/register.component.ts)
* Example component HTML template: [register.component.html](/NgrxComponentModelFormDefinitions/src/app/register/register.component.html)
