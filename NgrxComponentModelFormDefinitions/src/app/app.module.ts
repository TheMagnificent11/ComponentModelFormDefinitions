import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxComponentModelFormDefinitionsModule, FORM_DEFINTIONS_API_ROUTE } from 'ngrx-componentmodelformdefinitions';
import { NgrxComponentmodelFormDefinitionsMaterialModule } from 'ngrx-componentmodelformdefinitions-material';
import { NgxNetCoreApiModule, BASE_URL, AUTHORIZATION_TOKEN_SERVICE } from 'ngx-netcore-api';

import { UsersGetModule } from './api/store/users/usersGet/usersGet.module';
import { UsersPostModule} from './api/store/users/usersPost/usersPost.module';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RegisterComponent } from './register/register.component';
import { TokenService } from './token.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: UsersListComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]),
        FlexLayoutModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgrxComponentModelFormDefinitionsModule,
        NgrxComponentmodelFormDefinitionsMaterialModule,
        NgxNetCoreApiModule,
        UsersGetModule,
        UsersPostModule
    ],
    declarations: [
        AppComponent,
        MenuItemsComponent,
        UsersListComponent,
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
