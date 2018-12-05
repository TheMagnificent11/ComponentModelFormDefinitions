/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
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

export const selectorName = 'Users_UsersPost';
export const getUsersPostStateSelector = createFeatureSelector<UsersPostState>(selectorName);

export function UsersPostReducer(
  state: UsersPostState = initialUsersPostState,
  action: actions.UsersPostAction): UsersPostState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, success: false, error: null};
    case actions.Actions.SUCCESS: return {...state, success: true, loading: false};
    case actions.Actions.ERROR: return {...state, success: false, error: action.payload, loading: false};
    default: return state;
  }
}
