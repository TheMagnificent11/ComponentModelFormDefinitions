/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';
import {NgxNetCoreApiModule} from 'ngx-netcore-api';

import {UsersService} from '../../../controllers/Users';
import {UsersPostFormService} from './usersPost.service';

import {UsersPostEffects} from './states/effects';
import {UsersPostReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, UsersPostReducer),
    NgrxEffectsModule.forFeature([UsersPostEffects]),
    NgxNetCoreApiModule
  ],
  providers: [
    UsersService,
    UsersPostFormService,
  ],
})
export class UsersPostModule {}
