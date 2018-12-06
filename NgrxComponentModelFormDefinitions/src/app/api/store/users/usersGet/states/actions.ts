/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import * as __model from '../../../../model';

export enum GetUsersActions {
    GET_USERS = '[Users usersGet] Start',
    GET_USERS_SUCCESS = '[Users usersGet] Success',
    GET_USERS_ERROR = '[Users usersGet] Error',
}

export class GetUsersAction implements Action {
    readonly type = GetUsersActions.GET_USERS;
    constructor() { }
}

export class GetUsersSuccessAction implements Action {
    readonly type = GetUsersActions.GET_USERS_SUCCESS;
    constructor(public payload: __model.User[]) { }
}

export class GetUsersErrorAction implements Action {
    readonly type = GetUsersActions.GET_USERS_ERROR;
    constructor(public payload: HttpErrorResponse) { }
}

export type UsersGetAction = GetUsersAction | GetUsersSuccessAction | GetUsersErrorAction;
