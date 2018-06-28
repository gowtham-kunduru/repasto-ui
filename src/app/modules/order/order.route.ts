import { OrderComponent } from './order.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const orderModuleRoutes: Routes = [
    { path: '', component: OrderComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(orderModuleRoutes)
      ]
})
export class OrderRouteModule {

}
