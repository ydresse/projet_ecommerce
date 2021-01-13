import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ActionJWT } from '../app/shared/action/user-action';
import { UserState } from './shared/state/user-state';

@Injectable({
  providedIn: 'root'
})

export class ApiHttpInterceptorService implements HttpInterceptor {

  private token: string = '';

    constructor(private router: Router, private store: Store) {
      this.store.select(UserState.getToken).subscribe(val => this.token = val);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (this.token !== '') {
          req = req.clone({setHeaders: {Authorization: `Bearer ${this.token}`}});
      }

      return next.handle(req).pipe(tap(
          (evt: HttpEvent<any>) => {
              if (evt instanceof HttpResponse) {
                  let tab: Array<string>;
                  let enteteAuthorization = evt.headers.get("Authorization");
                  if (enteteAuthorization != null) {
                      tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
                      if (tab.length > 1) {
                          this.token = tab[1];
                          this.store.dispatch(new ActionJWT(this.token));
                      }
                  }
              }
          }),
          catchError((error: HttpErrorResponse) => {
                  switch (error.status) {
                      case 401:
                          this.store.dispatch(new ActionJWT(''));
                          break;
                  }
                  return of(null);
              }
          ));
  }

}
