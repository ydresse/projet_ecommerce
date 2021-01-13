import { Product } from "./product";

export class ProductCart extends Product {
    public quantity: number;
    public nbPrice: number;
    constructor(product: Product, quantity: number) {
        super(product.idProduct, product.name, product.price, product.description, product.image, product.stock, product.category, product.character)
        this.nbPrice = +product.price;
        this.quantity = quantity;
    }
}
