import { AppHttp } from '../../shared/app.http';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class OrderService {
    constructor(private appHttp: AppHttp) {
    }
    createOrder(order: Order) {
        return this.appHttp.post(environment.createOrder, order);
    }
    getFoodItemTypes() {
        return this.appHttp.get(environment.getFoodItems);
    }
}
