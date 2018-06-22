import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { OrderRouteModule } from './order.route';
@NgModule({
    imports: [OrderRouteModule],
    declarations: [OrderComponent]
})
export class OrderModule {
}
