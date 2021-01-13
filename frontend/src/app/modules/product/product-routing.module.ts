import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { ShowProductsComponent } from './show-products/show-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
    {
        path: '',
        component: ShowProductsComponent
    },
    {
        path: 'tt',
        component: SearchProductComponent
    },
    {
        path: 'product/:id',
        component: DetailProductComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingComponent {
}
