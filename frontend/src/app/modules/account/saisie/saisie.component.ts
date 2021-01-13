import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from "rxjs";
import { Router } from '@angular/router';
import { Store } from "@ngxs/store";
import { User } from '../../../shared/model/user';
import { ActionLogin } from '../../../shared/action/user-action';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss']
})

export class SaisieComponent implements OnInit {

  newUser: User = new User();
  lastnamePattern: string = '^[A-Za-z ]{1,256}$';
  firstnamePattern: string = '^[A-Za-z]{1,256}$';
  addressPattern: string = '^[A-Za-z0-9 ]{1,256}$';
  cityPattern: string = '^[A-Za-z]{1,256}$';
  phonePattern: string = '^[0-9]{0,16}$';
  emailPattern: string = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';
  loginPattern: string = '^[A-Za-z0-9]{4,256}$';
  passwordPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,256}$';

  submitted: boolean = null;

  registrationResponse$: Observable<{ success: boolean, login: string }>;
  registred: Subscription = null;

  userForm: FormGroup = this.formBuilder.group({
    gender: ['Homme', [Validators.required]],
    lastname: ['', [Validators.required, Validators.pattern(this.lastnamePattern)]],
    firstname: ['', [Validators.required, Validators.pattern(this.firstnamePattern)]],
    address: ['', [Validators.required, Validators.pattern(this.addressPattern)]],
    cp: ['', [Validators.required]],
    city: ['', [Validators.required, Validators.pattern(this.cityPattern)]],
    country: ['France', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    login: ['', [Validators.required, Validators.pattern(this.loginPattern)]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService, private store: Store) {}

  ngOnInit(): void {
    //this.newUser.sample();
  }

  get gender(): AbstractControl {
    return this.userForm.get('gender');
  }

  get lastname(): AbstractControl {
    return this.userForm.get('lastname');
  }

  get firstname(): AbstractControl {
    return this.userForm.get('firstname');
  }

  get address(): AbstractControl {
    return this.userForm.get('address');
  }

  get cp(): AbstractControl {
    return this.userForm.get('cp');
  }

  get city(): AbstractControl {
    return this.userForm.get('city');
  }

  get country(): AbstractControl {
    return this.userForm.get('country');
  }

  get phone(): AbstractControl {
    return this.userForm.get('phone');
  }

  get email(): AbstractControl {
    return this.userForm.get('email');
  }

  get login(): AbstractControl {
    return this.userForm.get('login');
  }

  get password(): AbstractControl {
    return this.userForm.get('password');
  }

  ngOnDestroy(): void {
    this.check_registred();
  }

  setUser(): void {
    console.log(this.gender.value);
    this.newUser.setUser(
        this.gender.value, this.firstname.value, this.lastname.value, this.address.value,
        this.cp.value, this.city.value, this.country.value, this.phone.value.substring(1),
        this.email.value, this.login.value, this.password.value
    );
  }


  check_registred(): void {
    if (this.registred != null) {
      this.registred.unsubscribe();
    }
  }

  submitForm(){
    this.submitted = false;
    // if (this.userForm.invalid) {
    //   return;
    // }
    this.submitted = true;
    this.setUser();
     this.registrationResponse$ = this.accountService.register(this.newUser);
     this.registred = this.registrationResponse$.subscribe(body => {
       if (body.success) {
           this.newUser.idUser = body['id'];
           this.store.dispatch(new ActionLogin(this.newUser));
           this.router.navigate(['/']);
       }
    });
  }
}
