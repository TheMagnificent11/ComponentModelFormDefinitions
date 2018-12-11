/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

export enum Actions {
    DELETE_USER = '[Users usersByIdDelete] Start',
    DELETE_USER_SUCCESS = '[Users usersByIdDelete] Success',
    DELETE_USER_ERROR = '[Users usersByIdDelete] Error'
}

export class DeleteUserAction implements Action {
    readonly type = Actions.DELETE_USER;
    constructor(public payload: string) { }
}

export class DeleteUserSuccessAction implements Action {
    readonly type = Actions.DELETE_USER_SUCCESS;
    constructor() { }
}

export class DeleteUserErrorAction implements Action {
    readonly type = Actions.DELETE_USER_ERROR;
    constructor(public payload: HttpErrorResponse) { }
}

export type UsersByIdDeleteAction = DeleteUserAction | DeleteUserSuccessAction | DeleteUserErrorAction;
