import { ActionReducer, MetaReducer, createSelector } from '@ngrx/store';

import { UsersGetState, UsersGetReducer } from './api/store/users/usersGet/states/reducers';
import { UsersPostState, UsersPostReducer } from './api/store/users/usersPost/states/reducers';

export interface AppState {
    usersGet: UsersGetState;
    usersPost: UsersPostState;
}

export const reducers = {
    usersGet: UsersGetReducer,
    usersPost: UsersPostReducer
};

export const metaReducer: Array<MetaReducer<AppState>> = [];

export const getUsersState = (state: AppState) => state.usersGet;
export const postUsersState = (state: AppState) => state.usersPost;

export const getUsers = createSelector(getUsersState, (state: UsersGetState) => state.data);
export const postUserSuccess = createSelector(postUsersState, (state: UsersPostState) => state.success);
