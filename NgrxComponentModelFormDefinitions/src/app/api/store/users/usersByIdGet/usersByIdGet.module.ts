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
import {FormsSharedModule} from '../../forms-shared.module';
import {UsersByIdGetFormService} from './usersByIdGet.service';

import {UsersByIdGetEffects} from './states/effects';
import {UsersByIdGetReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UsersByIdGetReducer),
    NgrxEffectsModule.forFeature([UsersByIdGetEffects]),
  ],
  providers: [
    UsersService,
    UsersByIdGetFormService,
  ],
})
export class UsersByIdGetModule {}
