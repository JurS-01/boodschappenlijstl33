import React from 'react';
import List from './List';

const ShoppingCart = (props) => {
    return (
        <div className="listbox shopping">
            <h3>Winkelmand</h3>
            <button onClick={props.emptyCart}>Leeg winkelmand</button>
            <List items={props.items} itemType={props.itemType} />
        </div>
    )
}

export default ShoppingCart

