import React from 'react';
import List from "./List";
import AddItem from "./AddItem";

const GroceryList = (props) => {
    return (
        <div className="listbox grocery">
            <h3>Boodschappenlijst</h3>
            <AddItem addItem={props.addItem} handleChange={props.handleChange} items={props.groceryItems} />
            <List items={props.items} handleClickGroceryItem={props.handleClickGroceryItem} />
        </div>
    )
}

export default GroceryList
