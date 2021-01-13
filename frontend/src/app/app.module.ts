import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { AccountModule } from './modules/account/account.module';
import { ProductModule } from './modules/product/product.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiHttpInterceptorService } from "./api-http-interceptor.service";
import { UserState } from './shared/state/user-state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { CartState } from './shared/state/cart-state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TetiereComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    HttpClientModule,
    AccountModule,
    ProductModule,
    NgxsModule.forRoot([UserState, CartState], { developmentMode: environment.production })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
