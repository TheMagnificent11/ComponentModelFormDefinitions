/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from '../../../../controllers/Users';
import * as actions from './actions';

@Injectable()
export class UsersByIdDeleteEffects {
    @Effect()
    UsersByIdDelete = this.storeActions.ofType<actions.DeleteUserAction>(actions.DeleteUserActions.DELETE_USER).pipe(
        switchMap((action: actions.DeleteUserAction) => this.usersService.usersByIdDelete(action.payload)
            .pipe(
                map(result => new actions.DeleteUserSuccessAction()),
                catchError((error: HttpErrorResponse) => of(new actions.DeleteUserErrorAction(error))),
            ),
        ),
    );

    constructor(
        private storeActions: Actions,
        private usersService: UsersService,
    ) { }
}
