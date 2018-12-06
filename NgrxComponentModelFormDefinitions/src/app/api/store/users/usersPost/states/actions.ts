/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { RegistrationRequest } from '../../../../model';

export enum PostUsersActions {
    POST_USERS = '[Users usersPost] Start',
    POST_USERS_SUCCESS = '[Users usersPost] Success',
    POST_USERS_ERROR = '[Users usersPost] Error',
}

export class PostUsersAction implements Action {
    readonly type = PostUsersActions.POST_USERS;
    constructor(public payload: RegistrationRequest) { }
}

export class PostUsersSuccessAction implements Action {
    readonly type = PostUsersActions.POST_USERS_SUCCESS;
    constructor(public payload: void) { }
}

export class PostUsersErrorAction implements Action {
    readonly type = PostUsersActions.POST_USERS_ERROR;
    constructor(public payload: HttpErrorResponse) { }
}

export type UsersPostAction = PostUsersAction | PostUsersSuccessAction | PostUsersErrorAction;
