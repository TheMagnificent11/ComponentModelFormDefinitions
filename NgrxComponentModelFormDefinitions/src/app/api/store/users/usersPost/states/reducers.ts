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
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialUsersPostState: UsersPostState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Users_UsersPost';
export const getUsersPostStateSelector = createFeatureSelector<UsersPostState>(selectorName);

export function UsersPostReducer(
  state: UsersPostState = initialUsersPostState,
  action: actions.UsersPostAction): UsersPostState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
