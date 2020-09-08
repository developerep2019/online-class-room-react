import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }
    return (
        <div>
            <h4>Courses Ordered : {cart.length}</h4>
            <h3>Total Price : {total}</h3>
        </div>
    );
};

export default Cart;