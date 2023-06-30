import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './style.css';

/**
 * This is a functional component for the View Pokemon page.
 */
const ViewPokemon = () => {
    return (
        <div>
            <Navbar />
            <button>Log Pokemon</button>
            <div className="pokemon">
                <h2>Torchic</h2>
                <img src="https://i.pinimg.com/originals/03/94/dc/0394dc888f790a94f316f6ca7132a60d.gif" width="500" />
                <p>Torchic sticks with its Trainer, following behind with
                unsteady steps. This Pokémon breathes fire of over 1,800
                degrees Fahrenheit, including fireballs that leave the
                foe scorched black.</p>
                <br />
                <h2>Mudkip</h2>
                <img src="https://media1.tenor.com/images/43f33b5dadadac5aa92cf2367818d906/tenor.gif?itemid=10506984" width="500" />
                <p>The fin on Mudkip’s head acts as highly sensitive radar.
                Using this fin to sense movements of water and air,
                this Pokémon can determine what is taking place around
                it without using its eyes.</p>
                <br />
                <h2>Treecko</h2>
                <img src="https://media1.tenor.com/images/ac8059ebda75f12f5df142d05f591418/tenor.gif?itemid=5483105" width="500" />
                <p>Treecko has small hooks on the bottom of its feet that enable
                it to scale vertical walls. This Pokémon attacks by slamming
                foes with its thick tail.</p>
            </div>
        </div>
    );
}

export default ViewPokemon;