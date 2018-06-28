import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { OrderComponent } from './order.component';
import { OrderRouteModule } from './order.route';
import { OrderService } from './order.service';
import { AppHttp } from '../../shared/app.http';
import { HttpClient } from '@angular/common/http';


@NgModule({
    imports: [CommonModule, FormsModule, OrderRouteModule],
    declarations: [OrderComponent],
    providers: [OrderService, AppHttp, HttpClient]
})
export class OrderModule {
}
