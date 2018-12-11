/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
    GET_USER = '[Users usersByIdGet] Start',
    GET_USER_SUCCESS = '[Users usersByIdGet] Success',
    GET_USER_ERROR = '[Users usersByIdGet] Error',
}

export class GetUserAction implements Action {
    readonly type = Actions.GET_USER;
    constructor(public payload: string) { }
}

export class GetUserSuccessAction implements Action {
    readonly type = Actions.GET_USER_SUCCESS;
    constructor(public payload: __model.User) { }
}

export class GetUserErrorAction implements Action {
    readonly type = Actions.GET_USER_ERROR;
    constructor(public payload: HttpErrorResponse) { }
}

export type UsersByIdGetAction = GetUserAction | GetUserSuccessAction | GetUserErrorAction;
