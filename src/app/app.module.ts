import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { ProductGuardService } from './Services/product-guard.service';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  {
    path: 'Products',
    component: ProductsComponent,
    canActivate: [ProductGuardService],
  },
  { path: 'ProductDetails/:id', component: ProductDetailsComponent },
  { path: 'Login', component: LoginComponent },
  //{ path: 'About', component: AboutComponent },
  //{ path: 'Cart', component: CartComponent }
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FilterComponent,
    SearchComponent,
    LoginComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
  ],
  providers: [ProductGuardService, AuthService, ProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
