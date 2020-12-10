import React from 'react';
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";
import { v4 as uuidv4 } from 'uuid';


class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: "boerenkool", amount: 1 },
                { id: 2, title: "vegetarische rookworst", amount: 1 },
                { id: 3, title: "vegetarische spekjes", amount: 1 },
                { id: 4, title: "aardappel", amount: 1 },
                { id: 5, title: "rode ui", amount: 1 }
            ],
            shoppingListItems: [
                { id: 6, title: "wortels bio", amount: 3 },
                { id: 7, title: "mosterd", amount: 1 },
                { id: 8, title: "zeezout", amount: 1 },
            ],
            newTitle: "",
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addItem = this.addItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addAmountToItem = this.addAmountToItem.bind(this)
    }

    addAmountToItem(clickedTitle) {
        this.setState(() => {
            const updatedItems = this.state.shoppingListItems.map(item => {
                if (item.title === clickedTitle) {
                    item.amount++
                }
                console.log(item);
                return item
            })
            return {
                shoppingListItems: updatedItems
            }
        })
    }




    handleClickGroceryItem(event) {

        const clickedTitle = event.target.getAttribute("value")
        const movedItem = this.state.groceryItems.find(item => item.title === clickedTitle)
        const updatedGroceryList = this.state.groceryItems.filter(item => item.title !== clickedTitle)
        // const updatedShoppingList = [...this.state.shoppingListItems, this.state.groceryItems.find(item => item.title === clickedTitle)]
        let updatedShoppingList = this.state.shoppingListItems
        let indexInList = -1
        updatedShoppingList.forEach((item, index) => {
            if (item.title.toUpperCase().trim() === movedItem.title.toUpperCase().trim())
                indexInList = index
        })

        if (indexInList === -1) {
            updatedShoppingList = [...this.state.shoppingListItems, movedItem]
        } else {
            updatedShoppingList[indexInList].amount = updatedShoppingList[indexInList].amount + movedItem.amount
        }

        this.setState(() => {
            return {
                groceryItems: updatedGroceryList,
                shoppingListItems: updatedShoppingList
            }
        })
    }

    handleChange(event) {
        this.setState({ newTitle: event.target.value });
    }

    addItem(event) {
        event.preventDefault()
        let updatedGroceryList = this.state.groceryItems;
        let plek = -1;
        updatedGroceryList.forEach((item, index) => {
            if (item.title.toUpperCase().trim() === this.state.newTitle.toUpperCase().trim())
                plek = index;
        });

        if (plek === -1) {
            const updatedItem = {
                id: uuidv4(),
                title: this.state.newTitle,
                amount: 1,
            };
            updatedGroceryList = [...this.state.groceryItems, updatedItem];
        } else {
            updatedGroceryList[plek].amount = updatedGroceryList[plek].amount + 1;
        }
        this.setState({ groceryItems: updatedGroceryList });
    }



    emptyCart() {
        this.setState({ shoppingListItems: [] });
    }

    render() {
        return (
            <div className="listcontainer" >
                <GroceryList
                    items={this.state.groceryItems}
                    handleClickGroceryItem={this.handleClickGroceryItem}
                    addItem={this.addItem}
                    handleChange={this.handleChange}
                />
                <ShoppingCart items={this.state.shoppingListItems} emptyCart={this.emptyCart} />
            </div>
        );
    }
}

export default Container