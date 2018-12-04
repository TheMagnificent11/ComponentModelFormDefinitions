/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {UsersService} from '../../../controllers/Users';

import {UsersGetEffects} from './states/effects';
import {UsersGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, UsersGetReducer),
    NgrxEffectsModule.forFeature([UsersGetEffects]),
  ],
  providers: [
    UsersService,
  ],
})
export class UsersGetModule {}
