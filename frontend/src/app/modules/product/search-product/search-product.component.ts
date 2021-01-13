import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AddProductCart } from 'src/app/shared/action/cart-action';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})

export class SearchProductComponent implements OnInit {

  @Output() filtreEvent: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

    filterForm = new FormGroup({
        nameFilter: new FormControl(''),
        categoryFilter: new FormControl('All'),
        characterFilter: new FormControl('All'),
        priceMaxFilter: new FormControl(''),
        priceMinFilter: new FormControl(''),


    });

    private filtreFormSub: Subscription;

    constructor(private productService: ProductService, private store: Store) {
    }

    ngOnInit(): void {
        this.filtreFormSub = this.filterForm.valueChanges.subscribe(filters => {
            this.filtreEvent.emit(
                [
                    filters.nameFilter,
                    filters.categoryFilter,
                    filters.characterFilter,
                    filters.priceMaxFilter,
                    filters.priceMinFilter,
                ]
            );
        });
    }

    ngOnDestroy(): void {
        this.filtreFormSub.unsubscribe();
    }



}
