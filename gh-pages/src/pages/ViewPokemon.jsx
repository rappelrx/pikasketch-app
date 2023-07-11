import React from 'react';
import Navbar from '../components/Navbar';
import './style.css';

/**
 * Component for the view pokemon page
 */
const ViewPokemon = () => {

    return (
        <div>
            <Navbar/>
            <h2 className="view-pokemons-header">All Pokemon</h2>
            <div className="pokemon-filter">
                <label htmlFor="type">Filter by type:{'\u00A0'}</label>
                <select id="type" name="type">
                    <option value="All">All</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                </select>
            </div>
            <br />
        </div>
    );
}

export default ViewPokemon;