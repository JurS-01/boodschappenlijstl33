import React from "react"

const ListItem = (props) => {
    return (
        <li
            key={props.item.id}
            value={props.item.title}
            className="list-item"
            onClick={props.handleClickGroceryItem}
            itemType={props.itemType}
        >{props.item.amount ? <span className="item-quantity"> {props.item.amount}x</span> : ""} {props.item.title}</li>
    )
}

export default ListItem

