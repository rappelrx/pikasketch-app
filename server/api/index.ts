const express = require('express');
const PokemonService = require('../services/pokemon'); // import Pokemon Schema

const router = express.Router(); // define a router

/**
 * Express.js API Routes:
 * - router.get(PATH on the server, HANDLER function)
 * - router.post(PATH, HANDLER)
 * - router.put(PATH, HANDLER)
 * - router.delete(PATH, HANDLER)
 */

// GET method route for finding all pokemon
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
    const pokemon = await PokemonService.findAll();

    res.status(200).json({ pokemon }); // 'pokemon' is both key and value
});

// GET method route for finding pokemon by id
router.get('/pokemon/:id', async (req, res) => {
    const pokemon = await PokemonService.findById(req.params.id);
    res.status(200).json({ pokemon });
});

// GET method route for generating random name for pokemon
router.get('/pokemonName', async (req, res) => {
    const pokemonName = await PokemonService.generateName();
    res.status(200).json({ pokemonName });
});

// POST method route for creating pokemon
router.post('/pokemon', async (req, res) => {
    const { name, description, type1, type2, image, moves } = req.body;
    const newPokemon = { name, description, image, type1, type2, moves };
    const pokemon = await PokemonService.createPokemon(newPokemon);
    res.status(200).json({ pokemon });
});

module.exports = router; // to be imported in /server/index.js