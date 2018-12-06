/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface UsersGetState {
    data: __model.User[] | null;
    loading: boolean;
    error: HttpErrorResponse | null;
}

export const initialUsersGetState: UsersGetState = {
    data: null,
    loading: false,
    error: null,
};

export const getUsersGetStateSelectorName = 'Users_UsersGet';
export const getUsersGetStateSelector = createFeatureSelector<UsersGetState>(getUsersGetStateSelectorName);

export function UsersGetReducer(
    state: UsersGetState = initialUsersGetState,
    action: actions.UsersGetAction): UsersGetState {
    switch (action.type) {
        case actions.GetUsersActions.GET_USERS: return { ...state, loading: true, error: null };
        case actions.GetUsersActions.GET_USERS_SUCCESS: return { ...state, data: action.payload, loading: false };
        case actions.GetUsersActions.GET_USERS_ERROR: return { ...state, error: action.payload, loading: false };
        default: return state;
    }
}
