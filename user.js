import { v4 as uuidv4 } from 'uuid';
import { Order } from './order.js';

export class User {
    constructor(name, balance) {
        this.name = name,
        this.balance = balance
        this.userId = uuidv4();
    }

    createOrder() {
        const order1 = new Order();
        return order1;
    }
}


export const user1 = new User();
const order = user1.createOrder();
console.log(user1)
console.log(order)
order.pay()
order.ship()
order.getHistory()