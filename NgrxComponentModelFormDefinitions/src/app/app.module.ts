import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxComponentModelFormDefinitionsModule, FORM_DEFINTIONS_API_ROUTE } from 'ngrx-componentmodelformdefinitions';
import { NgrxComponentmodelFormDefinitionsMaterialModule } from 'ngrx-componentmodelformdefinitions-material';
import { NgxNetCoreApiModule, BASE_URL, AUTHORIZATION_TOKEN_SERVICE } from 'ngx-netcore-api';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { RegisterComponent } from './register/register.component';
import { TokenService } from './token.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: RegisterComponent
            }
        ]),
        FlexLayoutModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgrxComponentModelFormDefinitionsModule,
        NgrxComponentmodelFormDefinitionsMaterialModule,
        NgxNetCoreApiModule
    ],
    declarations: [
        AppComponent,
        MenuItemsComponent,
        RegisterComponent
    ],
    providers: [
        {
            provide: BASE_URL,
            useValue: 'https://localhost:5001'
        },
        {
            provide: FORM_DEFINTIONS_API_ROUTE,
            useValue: 'formdefinitions'
        },
        {
            provide: AUTHORIZATION_TOKEN_SERVICE,
            useClass: TokenService
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
