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
export class UsersByIdGetEffects {
    @Effect()
    UsersByIdGet = this.storeActions.ofType<actions.GetUserAction>(actions.GetUserActions.GET_USER).pipe(
        switchMap((action: actions.GetUserAction) => this.usersService.usersByIdGet(action.payload)
            .pipe(
                map(result => new actions.GetUserSuccessAction(result)),
                catchError((error: HttpErrorResponse) => of(new actions.GetUserErrorAction(error))),
            ),
        ),
    );

    constructor(
        private storeActions: Actions,
        private usersService: UsersService,
    ) { }
}
