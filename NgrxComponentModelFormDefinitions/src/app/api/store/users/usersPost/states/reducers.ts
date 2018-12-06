/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import * as actions from './actions';

export interface UsersPostState {
    success: boolean;
    loading: boolean;
    error: HttpErrorResponse | null;
}

export const initialUsersPostState: UsersPostState = {
    success: false,
    loading: false,
    error: null
};

export const getUsersPostStateSelectorName = 'Users_UsersPost';
export const getUsersPostStateSelector = createFeatureSelector<UsersPostState>(getUsersPostStateSelectorName);

export function UsersPostReducer(
    state: UsersPostState = initialUsersPostState,
    action: actions.UsersPostAction): UsersPostState {
    switch (action.type) {
        case actions.PostUsersActions.POST_USERS: return { ...state, loading: true, success: false, error: null };
        case actions.PostUsersActions.POST_USERS_SUCCESS: return { ...state, success: true, loading: false };
        case actions.PostUsersActions.POST_USERS_ERROR: return { ...state, success: false, error: action.payload, loading: false };
        default: return state;
    }
}
