import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { OrderModule } from './modules/order/order.module';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'order', loadChildren: 'app/modules/order/order.module#OrderModule' },
  { path: 'dailyOrder', loadChildren: 'app/modules/admin/admin.module#AdminModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
