import React from 'react';

const AddItem = (props) => {
    return (
        <div>
            <form onSubmit={props.addItem}>
                <input
                    type="text"
                    name="newTitle"
                    placeholder="vul je boodschappen in"
                    onChange={props.handleChange}
                />
                <button type="submit">Voeg toe</button>
            </form>
        </div>
    )
}

export default AddItem

