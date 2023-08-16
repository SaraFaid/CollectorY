const pokemon = require('pokemontcgsdk');

require('dotenv').config();

pokemon.configure({apiKey: process.env.PKMN_KEY})

function getCardById (id)
{
    pokemon.card.find(id)
        .then(card => {

            return card
    })
    .catch(error => {
        console.log(error)
        return error
    })
}

module.exports = { getCardById }