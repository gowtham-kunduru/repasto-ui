import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router/src/router_module';
import { AdminRouterModule } from './admin.route';
import { DailyOrderComponent } from './dailyorder/dailyorder.component';

@NgModule({
    imports: [AdminRouterModule],
    declarations: [DailyOrderComponent],
    providers: []
})
export class AdminModule {


}
