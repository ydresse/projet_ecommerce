import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { User } from '../shared/model/user';
import { CartState } from '../shared/state/cart-state';
import { UserState } from '../shared/state/user-state';
import { ActionJWT, ActionLogin } from '../shared/action/user-action';

@Component({
    selector: 'app-tetiere',
    templateUrl: './tetiere.component.html',
    styleUrls: ['./tetiere.component.scss']
})
export class TetiereComponent implements OnInit {

    login: Observable<string>;
    cartLength: Observable<number>;

    constructor(private store: Store, private router: Router) {
    }

    ngOnInit(): void {
      this.cartLength = this.store.select(CartState.getLength);
      this.login = this.store.select(UserState.getLogin);
    }

    logout(): void {
        // Delete user
        this.store.dispatch(new ActionLogin(new User));
        this.store.dispatch(new ActionJWT(''));
        this.router.navigate(['/']);
    }
}
