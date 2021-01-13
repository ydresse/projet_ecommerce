import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { User } from "../../shared/model/user"
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { 
  }

  login(login: string, password: string) : Observable<{ success: boolean, login: string, id: string}> {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('password', password);
    return this.http.post<{ success: boolean, login: string, id: string }>(
        environment.backendAPI + 'users/login',
        body.toString(),
        {
            headers: {'content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*'},
        }
    );
  }

  register(user: User) : Observable<{ success: boolean, login: string, id: string}> {
    let body = new URLSearchParams();
    body.set('user', JSON.stringify(user));
    return this.http.post<{ success: boolean, login: string, id: string }>(
        environment.backendAPI + 'users/register',
        body.toString(),
        {
            headers: {'content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*'},
        }
    );
  }
}
