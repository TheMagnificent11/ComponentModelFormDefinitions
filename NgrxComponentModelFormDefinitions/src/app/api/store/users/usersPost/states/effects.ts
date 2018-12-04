/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {UsersService} from '../../../../controllers/Users';
import * as actions from './actions';

@Injectable()
export class UsersPostEffects {
  @Effect()
  UsersPost = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap((action: actions.Start) => this.usersService.usersPost(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private usersService: UsersService,
  ) {}
}
