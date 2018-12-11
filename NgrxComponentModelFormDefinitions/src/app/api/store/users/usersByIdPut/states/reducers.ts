/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import * as actions from './actions';

export interface UsersByIdPutState {
    success: boolean;
    loading: boolean;
    error: HttpErrorResponse | null;
}

export const initialUsersByIdPutState: UsersByIdPutState = {
    success: false,
    loading: false,
    error: null,
};

export const getPustUsersStateSelectorName = 'Users_UsersByIdPut';
export const getUsersByIdPutStateSelector = createFeatureSelector<UsersByIdPutState>(getPustUsersStateSelectorName);

export function UsersByIdPutReducer(
    state: UsersByIdPutState = initialUsersByIdPutState,
    action: actions.UsersByIdPutAction): UsersByIdPutState {
    switch (action.type) {
        case actions.PutUserActions.PUT_USER: return { ...state, loading: true, success: false, error: null };
        case actions.PutUserActions.PUT_USER_SUCCESS: return { ...state, success: true, loading: false };
        case actions.PutUserActions.PUT_USER_ERROR: return { ...state, success: false, error: action.payload, loading: false };
        default: return state;
    }
}
