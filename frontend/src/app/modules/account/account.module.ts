import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountRoutingComponent } from './account-routing.module';

import { SaisieComponent } from './saisie/saisie.component';
import { LoginComponent } from './login/login.component';
import { RecapComponent } from './recap/recap.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
    declarations: [
        SaisieComponent,
        LoginComponent,
        RecapComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccountRoutingComponent,
    ]
})
export class AccountModule {
}
