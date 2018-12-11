/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import { NgModule } from '@angular/core';
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { NgxNetCoreApiModule } from 'ngx-netcore-api';

import { UsersService } from '../../../controllers/Users';

import { UsersByIdDeleteEffects } from './states/effects';
import { UsersByIdDeleteReducer } from './states/reducers';
import { getUsersDeleteStateSelectorName } from './states/reducers';

@NgModule({
    imports: [
        NgrxStoreModule.forFeature(getUsersDeleteStateSelectorName, UsersByIdDeleteReducer),
        NgrxEffectsModule.forFeature([UsersByIdDeleteEffects]),
        NgxNetCoreApiModule
    ],
    providers: [
        UsersService
    ],
})
export class UsersByIdDeleteModule { }
