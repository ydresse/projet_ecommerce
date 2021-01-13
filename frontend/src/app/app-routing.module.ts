import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
        import('./modules/account/account.module').then(
            m => m.AccountModule
        )
  },
  {
    path: 'products',
    loadChildren: () =>
        import('./modules/product/product.module').then(
            m => m.ProductModule
        )
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
