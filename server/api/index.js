const express = require('express');
const Pokemon = require('../models/pokemon'); // Pokemon Schema

const router = express.Router(); // define a router

/**
 * Express.js API Routes:
 * - router.get(PATH on the server, HANDLER function)
 * - router.post(PATH, HANDLER)
 * - router.put(PATH, HANDLER)
 * - router.delete(PATH, HANDLER)
 */

// GET method route
router.get('/pokemon', async (req, res) => {
    // define our own pokemon in a JSON array
    /* const pokemon = [
        {
            name: 'Pikachu',
            description: 'the mouse pokemon',
            type1: 'Electric',
            type2: null,
            image: 'google.com',
            moves: [{ name: 'Static', type: 'Normal', power: 30, }]
        },
        {
            name: 'Squirtle',
            description: 'turtle pokemon',
            type1: 'Water',
            type2: null,
            image: 'google.com',
            moves: [{ name: 'Torrent', type: 'Water', power: 80, }]
        }
    ] */
    // Since we defined Pokemon Schema, we can simplify the above code into one line:
    const pokemon = await Pokemon.find().exec();

    res.status(200).json({ pokemon }); // 'pokemon' is both key and value
});


// POST method route
router.post('/pokemon', async (req, res) => {
    const { pokemon } = req.body;
    const { name, description, type1, image, moves } = pokemon;
    if ((!name || !description || !type1 || !image || !moves) || moves.length > 4) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        /* const punchMoves = moves.filter((move) => move.name.includes('Punch'));
        res.status(200).json({ punchMoves }); */
        // Since we defined Pokemon Schema, we can simplify the above code into one line:
        const newPokemon = await Pokemon.create(pokemon);

        res.status(200).json({ pokemon: newPokemon });
    }
});

module.exports = router; // to be imported in /server/index.js