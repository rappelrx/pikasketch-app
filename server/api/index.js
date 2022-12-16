const express = require('express');

const router = express.Router(); // define a router

/* router that creates an api route */
router.get('/pokemon', (req, res) => {
    // define our own pokemon in a JSON array
    const pokemon = [
        {
            name: 'Pikachu',
            description: 'the mouse pokemon',
            type1: 'Electric',
            type2: null,
            image: 'google.com',
            moves: [
                {
                    name: 'Static',
                    type: 'Normal',
                    power: 30,
                }
            ]
        },
        {
            name: 'Squirtle',
            description: 'turtle pokemon',
            type1: 'Water',
            type2: null,
            image: 'google.com',
            moves: [
                {
                    name: 'Torrent',
                    type: 'Water',
                    power: 80,
                }
            ]
        }
    ]
    res.status(200).json({ pokemon }); // 'pokemon' is both key and value
});

module.exports = router; // to be imported in /server/index.js