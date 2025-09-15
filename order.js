import { v4 as uuidv4 } from 'uuid';
// import { User } from "./user.js";
import { user1 } from './user.js';

export class Order {
    constructor() {
        this.state = new ActiveState();
        this.userId = user1.userId
        this.orderId = uuidv4();
    }

    pay() {
        this.state.pay(this);
      }
      ship() {
        this.state.ship(this);
      }
      deliver() {
        this.state.deliver(this);
      }
      cancel() {
        this.state.cancel(this);
      }

    setState(state) {
        this.state = state;
    }
}

class ActiveState {
    pay(order) {
        console.log('order has been paid for')
        order.setState(new PaidState());
    }

    cancel(order) {
        console.log('order has been cancelled')
        order.setState(new CancelledState());

    }

    ship() {
        console.log('order has to be paid for first')
    }

    deliver() {
        console.log('order has neither been paid for nor shipped')
    }
}

class PaidState {
    ship(order) {
        console.log('order has been shipped')
        order.setState(new ShippedState())
    }

    cancel(order) {
        console.log('order has been cancelled')
        order.setState(new CancelledState());
    }

    pay() {
        console.log('order has already been paid for')
    }

    deliver() {
        console.log('order is yet to be shipped')
    }
}

class ShippedState {
    deliver(order) {
        console.log('order has been delivered')
        order.setState(new DeliveredState());
    }

    pay() {
        console.log('order has already been paid for')
    }

    ship() {
        console.log('order has already been shipped')
    }

    cancel() {
        console.log("can't cancel an already shipped order")
    }
}

class DeliveredState {

}


class CancelledState {

}

// const order1 = new Order();
// order1.pay()
// order1.ship()
// order1.deliver();