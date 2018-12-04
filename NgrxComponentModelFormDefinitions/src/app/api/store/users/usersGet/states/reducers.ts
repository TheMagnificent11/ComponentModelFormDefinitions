/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
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

export const selectorName = 'Users_UsersGet';
export const getUsersGetStateSelector = createFeatureSelector<UsersGetState>(selectorName);

export function UsersGetReducer(
  state: UsersGetState = initialUsersGetState,
  action: actions.UsersGetAction): UsersGetState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
