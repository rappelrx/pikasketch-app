import React from 'react';

/**
 * This is a functional component for selecting a type.
 * Prop(s): id of the select element
 */
const Type = (props) => {
    // Any form options/input with these IDs is made to be optional.
    const defaultEmptyIDs = ['type2', 'move2type', 'move3type', 'move4type'];
    let emptyOption;
    if (defaultEmptyIDs.includes(props.id)) {
        emptyOption = <option defaultValue=""></option>;
    }

    return (
        <select id={props.id} name={props.id}>
            {emptyOption}
            <option>Normal</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Grass</option>
            <option>Electric</option>
            <option>Psychic</option>
            <option>Ice</option>
            <option>Dragon</option>
            <option>Dark</option>
            <option>Fairy</option>
            <option>Fighting</option>
            <option>Flying</option>
            <option>Poison</option>
            <option>Ground</option>
            <option>Rock</option>
            <option>Bug</option>
            <option>Ghost</option>
            <option>Steel</option>
        </select>
    );
};

export default Type;