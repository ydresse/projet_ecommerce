import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RecapComponent } from './recap/recap.component';
import { SaisieComponent } from './saisie/saisie.component';

const routes: Routes = [
    {
        path: 'register',
        component: SaisieComponent
    },
    {
        path: 'profil',
        component: RecapComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AccountRoutingComponent {
}
