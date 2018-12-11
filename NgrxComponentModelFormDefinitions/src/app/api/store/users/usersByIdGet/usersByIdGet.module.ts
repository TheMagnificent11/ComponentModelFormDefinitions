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

import { UsersByIdGetEffects } from './states/effects';
import { UsersByIdGetReducer } from './states/reducers';
import { getUserStateSelectorName } from './states/reducers';

@NgModule({
    imports: [
        NgrxStoreModule.forFeature(getUserStateSelectorName, UsersByIdGetReducer),
        NgrxEffectsModule.forFeature([UsersByIdGetEffects]),
        NgxNetCoreApiModule
    ],
    providers: [
        UsersService
    ],
})
export class UsersByIdGetModule { }
