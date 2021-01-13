import { Product } from "../model/product";


export class AddProductCart {
    static readonly type = '[CartProduct] Add';

    constructor(public payload: Product) {
    }
}

export class AddQuantityProduct {
    static readonly type = '[CartProduct] AddQuantity';

    constructor(public payload: Product) {
    }
}

export class RemoveQuantityProduct {
    static readonly type = '[CartProduct] RemoveQuantity';

    constructor(public payload: Product) {
    }
}

export class RemoveProductCart {
    static readonly type = '[CartProduct] Remove';

    constructor(public payload: Product) {
    }
}

export class CleanCart {
    static readonly type = '[CartProduct] Vider';

    constructor() {
    }
}
