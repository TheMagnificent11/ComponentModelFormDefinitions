/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';
import { PutUserSuccessAction } from '../../usersByIdPut/states/actions';

export interface UsersByIdDeleteState {
  success: boolean;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialUsersByIdDeleteState: UsersByIdDeleteState = {
  success: false,
  loading: false,
  error: null,
};

export const getUsersDeleteStateSelectorName = 'Users_UsersByIdDelete';
export const getUsersByIdDeleteStateSelector = createFeatureSelector<UsersByIdDeleteState>(getUsersDeleteStateSelectorName);

export function UsersByIdDeleteReducer(
  state: UsersByIdDeleteState = initialUsersByIdDeleteState,
  action: actions.UsersByIdDeleteAction): UsersByIdDeleteState {
  switch (action.type) {
    case actions.Actions.DELETE_USER: return {...state, loading: true, success: false, error: null};
    case actions.Actions.DELETE_USER_SUCCESS: return {...state, success: true, loading: false};
    case actions.Actions.DELETE_USER_ERROR: return {...state, success: false, error: action.payload, loading: false};
    default: return state;
  }
}
