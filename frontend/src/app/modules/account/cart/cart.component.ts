import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CleanCart, RemoveProductCart } from 'src/app/shared/action/cart-action';
import { ProductCart } from 'src/app/shared/model/productcart';
import { CartState } from 'src/app/shared/state/cart-state';
import { UserState } from 'src/app/shared/state/user-state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Observable<ProductCart[]>;
  cartLength: Observable<number>;
  totalPrice: Observable<number>;
  login: Observable<string>;
  command : boolean = false;


  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
      this.products = this.store.select(state => state.cart.products);
      this.cartLength = this.store.select(CartState.getLengthWithQuantity);
      this.totalPrice = this.store.select(CartState.getTotalCart);
      this.login = this.store.select(UserState.getLogin);
  }

  ngOnDestroy() {

  }

  removeProduct(product: ProductCart){
    this.store.dispatch(new RemoveProductCart(product));
  }

  setCard(){
    alert('Commande passée');
    this.command = true;
    this.store.dispatch(new CleanCart());
  }


}
