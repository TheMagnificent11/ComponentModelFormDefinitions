import { ActionReducer, MetaReducer, createSelector } from '@ngrx/store';

import { UsersGetState, UsersGetReducer } from './api/store/users/usersGet/states/reducers';
import { UsersPostState, UsersPostReducer } from './api/store/users/usersPost/states/reducers';
import { UsersByIdGetState, UsersByIdGetReducer } from './api/store/users/usersByIdGet/states/reducers';
import { UsersByIdPutState, UsersByIdPutReducer } from './api/store/users/usersByIdPut/states/reducers';
import { UsersByIdDeleteState, UsersByIdDeleteReducer } from './api/store/users/usersByIdDelete/states/reducers';

export interface AppState {
    usersGet: UsersGetState;
    usersPost: UsersPostState;
    userGet: UsersByIdGetState;
    userPut: UsersByIdPutState;
    userDelete: UsersByIdDeleteState;
}

export const reducers = {
    usersGet: UsersGetReducer,
    usersPost: UsersPostReducer,
    userGet: UsersByIdGetReducer,
    userPut: UsersByIdPutReducer,
    userDelete: UsersByIdDeleteReducer
};

export const metaReducers: Array<MetaReducer<AppState>> = [];

export const getUsersState = (state: AppState) => state.usersGet;
export const postUsersState = (state: AppState) => state.usersPost;
export const getUserState = (state: AppState) => state.userGet;
export const putUserState = (state: AppState) => state.userPut;
export const deleteUserState = (state: AppState) => state.userDelete;

export const getUsers = createSelector(getUsersState, (state: UsersGetState) => state.data);
export const postUserSuccess = createSelector(postUsersState, (state: UsersPostState) => state.success);
export const getUserById = createSelector(getUserState, (state: UsersByIdGetState) => state.data);
export const putUserSuccess = createSelector(putUserState, (state: UsersByIdPutState) => state.success);
export const deleteUserSuccess = createSelector(deleteUserState, (state: UsersByIdDeleteState) => state.success);
