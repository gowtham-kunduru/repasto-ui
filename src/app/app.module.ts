import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderModule } from './modules/order/order.module';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
