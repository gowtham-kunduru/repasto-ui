import { Routes } from '@angular/router';
import { DailyOrderComponent } from './dailyorder/dailyorder.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const adminModuleRoutes: Routes = [
    { path: '', component: DailyOrderComponent },
    { path: '/dailyOrder', component: DailyOrderComponent }];

@NgModule(
    {
        imports: [RouterModule.forChild(adminModuleRoutes)]
    }
)
export class AdminRouterModule {
}
