import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../shared/food-item.model';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html'

})
export class OrderComponent implements OnInit {
    foodItem: FoodItem[];
    order: Order;
    optionSelected: any;
    ngOnInit(): void {
        this.orderService.getFoodItemTypes().subscribe(data => {
            console.log(data);
            this.foodItem = data;
        });
        // this.foodItem = [{ itemId: '5b2106008a2dca2908a3da8c', itemName: 'Item1' },
        // { itemId: '5b2106298a2dca2908a3da8d', itemName: 'Item2' }];
        this.order = new Order();
    }
    constructor(private orderService: OrderService) {
    }
    private createOrder() {
        console.log(this.order);
        this.orderService.createOrder(this.order).subscribe(data => {
            console.log(data);
        });
    }

    onSubmit() {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.createOrder();
    }
}
