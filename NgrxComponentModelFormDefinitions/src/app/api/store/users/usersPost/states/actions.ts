/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {UsersPostParams} from '../../../../controllers/Users';

export enum Actions {
  START = '[Users usersPost] Start',
  SUCCESS = '[Users usersPost] Success',
  ERROR = '[Users usersPost] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UsersPostParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UsersPostAction = Start | Success | Error;
