import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AddProductCart } from 'src/app/shared/action/cart-action';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  productObs: Observable<Product>;
  productSub: Subscription;
  product: Product;
  quantity: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productObs = this.productService.getOneProduct(id);
    this.productSub = this.productObs.subscribe(res => {console.log(res); return this.product = res});

  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

  addToCart(quantity: number){
    for(let i = 0; i < quantity; i++)
      this.store.dispatch(new AddProductCart(this.product))
  }
}
