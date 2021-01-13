export class Product {

    public idProduct: string;
    public name: string;
    public price: string;
    public description: string;
    public image: string;
    public stock: number;
    public category: string;
    public character: string;

    constructor(idProduct: string, name: string, price: string, description: string, image: string, stock: number, category: string, character: string) {
        this.idProduct = idProduct;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.stock = stock;
        this.category = category;
        this.character = character;
    }
}
