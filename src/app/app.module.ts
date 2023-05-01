import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./shared/Convert-to-spaces-pipe";
import {StarComponent} from "./shared/star.component";
import{HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./products/product-detail.guard";
//import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products',component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate:[ProductDetailGuard],
        component: ProductDetailComponent
      },
      {path:'welcome', component:WelcomeComponent},
      {path:' ', redirectTo: 'welcome' , pathMatch:'full'},
      {path:'**',redirectTo:'welcome' ,pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
