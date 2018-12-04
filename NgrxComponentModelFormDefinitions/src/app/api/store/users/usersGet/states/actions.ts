/* tslint:disable:max-line-length max-classes-per-file */
/**
 * v1
 * Sample API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Users usersGet] Start',
  SUCCESS = '[Users usersGet] Success',
  ERROR = '[Users usersGet] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor() {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.User[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UsersGetAction = Start | Success | Error;
