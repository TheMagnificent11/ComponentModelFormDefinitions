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
export class UsersByIdPutEffects {
    @Effect()
    UsersByIdPut = this.storeActions.ofType<actions.PutUserAction>(actions.PutUserActions.PUT_USER).pipe(
        switchMap((action: actions.PutUserAction) => this.usersService.usersByIdPut(action.payload)
            .pipe(
                map(result => new actions.PutUserSuccessAction()),
                catchError((error: HttpErrorResponse) => of(new actions.PutUserErrorAction(error))),
            ),
        ),
    );

    constructor(
        private storeActions: Actions,
        private usersService: UsersService,
    ) { }
}
