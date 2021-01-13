import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingComponent } from './product-routing.module';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        DetailProductComponent,
        SearchProductComponent,
        ShowProductsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductRoutingComponent
    ],
    providers: [ProductService],
})

export class ProductModule {

}
