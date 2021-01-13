import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngxs/store";
import { AccountService } from "../account.service";
import { ActionLogin } from "../../../shared/action/user-action";
import { Router } from "@angular/router";
import { User } from "../../../shared/model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submit: Boolean = false;
  loginForm: FormGroup;
  loginResponse$: Observable<{ success: boolean, login: string, id: string }>;
  login: Subscription = null;
  loginSuccess: boolean = false;
  newUser: User = new User;

  constructor(private accountService: AccountService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  
  ngOnDestroy(): void {
    this.check_login();
  }

  check_login(): void {
      if (this.login != null) {
          this.login.unsubscribe();
      }
  }


  onSubmit() {
    this.submit = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loginResponse$ = this.accountService.login(this.loginForm.value.login, this.loginForm.value.password);
    this.check_login();

    this.login = this.loginResponse$.subscribe(body => {
      console.log(body);
        if (body.success) {
            this.newUser.jwt(body['user'].idUser, body['user'].login);
            this.store.dispatch(new ActionLogin(this.newUser));
            this.router.navigate(['/']);
        }
    });

  }

}
