/**
 * API calls in frontend (client-side) allow the frontend to 
 * interact with the backend.
 * 
 * Axios is an HTTP client for calling REST APIs from JS programs
 * running in the server as well as in web browsers.
 * 
 * This file serves as a utility to make API calls.
 */

import axios from 'axios';

// Specify server location
const serverURL = 'https://pikasketch-app-826df761be74.herokuapp.com/';

// Define API object
const API = {
    // Send GET request for finding pokemon name
    getPokemonName: function () {
        return axios.get(`${serverURL}/api/pokemonName`);
    },

    // Send GET request for finding pokemon
    getPokemon: function () {
        return axios.get(`${serverURL}/api/pokemon`); // use data route defined in our backend (i.e., /server/api/index.js)
    },

    // Send GET request for finding pokemon by id
    getPokemonByID: function(id) {
        return axios.get(`${serverURL}/api/pokemon/${id}`);
    },

    // Send POST request
    /* createPokemon: function (pokemon) {
        return axios.post(`${serverURL}/api/pokemon`, pokemon);
    } */
    createPokemon: function (payload) {
        const moves = payload.moves.filter(move => {
            return move.name && move.type && move.power;
        });
        const config = {
            method: 'post',
            url: `${serverURL}/api/pokemon`,
            data: {
                name: payload.name,
                description: payload.desc,
                image: payload.image,
                type1: payload.type1,
                type2: payload.type2,
                moves,
            }
        };
        return axios(config);
    },
};

export default API;
/**
 * We will use this utility in our ViewPokemon page to fetch 
 * Pokemon, and in our CreatePokemon page to create Pokemon.
 */