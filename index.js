import { Order } from "./order.js";
import { user1 } from "./user.js";
import _ from 'readline-sync';




const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
function createMenu() {
    console.log('menu:')
    console.log('create - create order')
    console,log('pay - pay for order')
    console.log('ship - ship order')
    console.log('deliver - deliver order')
    console.log('cancel - cancel order')
    rl.question('choose: ', handleChoice)
}

function handleChoice(choice) {
    switch(choice) {
        case 'create':
            user1.createOrder()
            break


    }

}

