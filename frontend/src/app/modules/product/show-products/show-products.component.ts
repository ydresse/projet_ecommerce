import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';
import { AddProductCart } from 'src/app/shared/action/cart-action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  products: Observable<Product[]>;
  productsFilters: Observable<Product[]>;
  filters: BehaviorSubject<Array<any>>;

  constructor(private productService: ProductService, private store: Store) { }

  ngOnInit(): void {

    this.products = this.productService.getProducts();
    this.filters = new BehaviorSubject(["", "All", "All", 0, 0]);

    this.productsFilters = combineLatest([this.products, this.filters]).pipe(
      map(([products, filters]) => {
          return products.filter(product => {

            let name: boolean;
            let minPrice: boolean;
            let maxPrice: boolean;
            let category: boolean;
            let character: boolean;

            // Name
            if((filters[0] === "")){
              name = true;
            }
            else {
              name = product.name.toLocaleLowerCase().includes(filters[0].toLocaleLowerCase());
            }

            // Category
            if((filters[1] === "All")){
              category = true;
            }
            else {
              category = product.category.toLocaleLowerCase().includes(filters[1].toLocaleLowerCase());
            }

            // Character
            if((filters[2] === "All")){
              character = true;
            }
            else {
              character = product.character.toLocaleLowerCase().includes(filters[2].toLocaleLowerCase());
            }

            if ((filters[3] === null)) {
                minPrice = true;
            } else {
                minPrice = product.price >= filters[3];
            }


            if ((filters[4] === null || filters[3] >= filters[4])) {
                maxPrice = true;
            } else {
                maxPrice = product.price <= filters[4];
            }

            return name && category && character && minPrice && maxPrice; //name && minPrice && maxPrice;
          })
        }
      )
    )
  }

  onFilterEvent(filters: Array<any>): void {
    this.filters.next(filters);
  }

  addToCart(product: Product){
    this.store.dispatch(new AddProductCart(product))
  }

}
