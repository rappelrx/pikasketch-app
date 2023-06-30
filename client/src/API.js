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
const server = 'http://localhost:5000'

// Define API object
const API = {
    // Send GET request 
    getPokemon: function () {
        return axios.get(`${server}/api/pokemon`); // use data route defined in our backend!
    },
    // Send POST request
    createPokemon: function (pokemon) {
        return axios.post(`${server}/api/pokemon`, pokemon);
    }
}

export default API;
/**
 * We will use this utility in our ViewPokemon page to fetch 
 * Pokemon, and in our CreatePokemon page to create Pokemon.
 */