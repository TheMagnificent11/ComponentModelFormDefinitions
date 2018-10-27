import { Action } from '@ngrx/store';
import { FormDefinition } from './form-definition';

export const ActionTypes = {
    GET_FORM_DEFINITION: '[Form Definitions] Get Form',
    GET_FORM_DEFINITION_ERROR: '[Form Defintions] Get Form Error',
    GET_FORM_DEFINITION_SUCCESS: '[Forms Definitions] Get Form Success'
};

export class GetFormDefinitionAction implements Action {
    type = ActionTypes.GET_FORM_DEFINITION;
    constructor(public payload: string) {}
}

export class GetFormDefintionErrorAction implements Action {
    type = ActionTypes.GET_FORM_DEFINITION_ERROR;
    constructor(public payload: any) {}
}

export class GetFormDefitionSuccessAction implements Action {
    type = ActionTypes.GET_FORM_DEFINITION_SUCCESS;
    constructor(public payload: FormDefinition) {}
}

export type Actions =
    GetFormDefinitionAction |
    GetFormDefintionErrorAction |
    GetFormDefitionSuccessAction;
