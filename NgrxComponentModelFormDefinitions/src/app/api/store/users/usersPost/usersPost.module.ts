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

import { UsersPostEffects } from './states/effects';
import { UsersPostReducer } from './states/reducers';
import { getUsersPostStateSelectorName } from './states/reducers';

@NgModule({
    imports: [
        NgrxStoreModule.forFeature(getUsersPostStateSelectorName, UsersPostReducer),
        NgrxEffectsModule.forFeature([UsersPostEffects]),
        NgxNetCoreApiModule
    ],
    providers: [
        UsersService
    ],
})
export class UsersPostModule { }
