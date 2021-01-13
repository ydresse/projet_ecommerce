import { Injectable } from "@angular/core";
import { CartStateModel } from "./cart-model";
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductCart } from "../model/productcart";
import { AddProductCart, AddQuantityProduct, CleanCart, RemoveProductCart, RemoveQuantityProduct } from "../action/cart-action";

@Injectable()
@State<CartStateModel>({
    name: 'cart',
    defaults: {
        products: []
    }
})

export class CartState {

    @Selector()
    static getLength(state: CartStateModel): number {
        return state.products.length;
    }

    @Selector()
    static getTotalCart(state: CartStateModel): number {
        let total: number = 0;
        state.products.forEach((item) => { 
            total += (item.quantity * item.nbPrice);
        });
        return total;
    }

    
    @Selector()
    static getLengthWithQuantity(state: CartStateModel): number {
        let total: number = 0;
        state.products.forEach((item) => { 
            total += item.quantity;
        });
        return total;
    }

    @Action(AddProductCart)
    add(
        {getState, patchState}: StateContext<CartStateModel>,
        {payload}: AddProductCart
    ): void {
        const state = getState();
        const product = state.products.find((p: ProductCart) => p.idProduct == payload.idProduct);

        // S'il n'y a pas de produit
        if(!product){
            const productCard = new ProductCart(payload, 1);
            patchState({ products: [...state.products, productCard ]});
        }
        else {
            product.quantity++;
        }
    }

    @Action(RemoveProductCart)
    remove(
        {getState, patchState}: StateContext<CartStateModel>,
        {payload}: RemoveProductCart
    ): void {

        const state = getState();
        const index = state.products.findIndex((p: ProductCart) => p.idProduct == payload.idProduct);

        // S'il n'y a un produit
        if(index !== -1){
            const tmpCart = state.products;
            tmpCart.splice(index, 1);
            patchState({ products: tmpCart });
        }
    }

    @Action(CleanCart)
    clear(
        {patchState}: StateContext<CartStateModel>,
    ): void {

        patchState({
            products: []
        });
    }
}

