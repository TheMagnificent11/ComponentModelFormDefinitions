import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxNetCoreApiModule } from 'ngx-netcore-api';

import { formsReducer } from './form-definitions.reducer';
import { FormDefinitionsEffects } from './form-definitions.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('form-definitions', formsReducer),
        EffectsModule.forFeature([FormDefinitionsEffects]),
        NgxNetCoreApiModule
    ],
    declarations: [],
    exports: [
        NgxNetCoreApiModule
    ]
})
export class NgrxComponentModelFormDefinitionsModule { }
