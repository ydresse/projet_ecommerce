import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Product } from '../../shared/model/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(environment.backendAPI + 'products/all');
    }

    getOneProduct(id: string): Observable<Product> {
        return this.getProducts().pipe(
            map(
                (product: Product[]): Product => {
                    return product.find((p) => p.idProduct == id);
                }
            )
        );
    }
}
