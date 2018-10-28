# Component Model Form Definitions

## Build 

NuGet Package: 
NPM Packages:

## Overview

`ComponentModelFormDefintions` is a NuGet packages that analyses `System.ComponentModel.DataAnnotations` attributes on request model objects and generates a form definition model.

`ngrx-componentmodelformdefintions` is an NPM package that has an NGRX implemenation that retrieves that form defintions produced by the NuGet package (via an API GET route).

`ngrx-componentmodelformdefintions-material` displays that form definition as a simple Angular Material form.  It uses the `@ng-dynamic-forms/core` and `@ng-dynamic-forms/ui-material` under the covers.

## Getting Started

### API
1. Add the `ComponentModelFormDefintions` to your ASP.Net Web API project.
2. Add the `[RequestModel]` attribute to your POST/PUT request models (the `FormId` property should be the route parameter for retrieving the form defintions).
3. Use the `FormDefintionManager` class in your API controller to generate the form defintion for the request form ID.

### Angular