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

import { UsersByIdPutEffects } from './states/effects';
import { UsersByIdPutReducer } from './states/reducers';
import { getPustUsersStateSelectorName } from './states/reducers';

@NgModule({
    imports: [
        NgrxStoreModule.forFeature(getPustUsersStateSelectorName, UsersByIdPutReducer),
        NgrxEffectsModule.forFeature([UsersByIdPutEffects]),
        NgxNetCoreApiModule
    ],
    providers: [
        UsersService
    ],
})
export class UsersByIdPutModule { }
