import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
    const allItems = props.items.map(item => <ListItem key={item.id} item={item} handleClickGroceryItem={props.handleClickGroceryItem} itemType={props.itemType} />)
    return (
        <div>
            <ul>
                {allItems}
            </ul>
        </div>
    )
}

export default List