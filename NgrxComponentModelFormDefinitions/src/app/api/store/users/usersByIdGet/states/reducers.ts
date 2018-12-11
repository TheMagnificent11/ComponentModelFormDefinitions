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

export interface UsersByIdGetState {
  data: __model.User | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialUsersByIdGetState: UsersByIdGetState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Users_UsersByIdGet';
export const getUsersByIdGetStateSelector = createFeatureSelector<UsersByIdGetState>(selectorName);

export function UsersByIdGetReducer(
  state: UsersByIdGetState = initialUsersByIdGetState,
  action: actions.UsersByIdGetAction): UsersByIdGetState {
  switch (action.type) {
    case actions.Actions.GET_USER: return {...state, loading: true, error: null};
    case actions.Actions.GET_USER_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.GET_USER_ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
