/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { User } from '../../../../model';

export enum PutUserActions {
    PUT_USER = '[Users usersByIdPut] Start',
    PUT_USER_SUCCESS = '[Users usersByIdPut] Success',
    PUT_USER_ERROR = '[Users usersByIdPut] Error',
}

export class PutUserAction implements Action {
    readonly type = PutUserActions.PUT_USER;
    constructor(public payload: User) { }
}

export class PutUserSuccessAction implements Action {
    readonly type = PutUserActions.PUT_USER_SUCCESS;
    constructor() { }
}

export class PutUserErrorAction implements Action {
    readonly type = PutUserActions.PUT_USER_ERROR;
    constructor(public payload: HttpErrorResponse) { }
}

export type UsersByIdPutAction = PutUserAction | PutUserSuccessAction | PutUserErrorAction;
