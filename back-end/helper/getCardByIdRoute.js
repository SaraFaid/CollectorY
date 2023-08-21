const axios = require('axios').default;


function getCardById(cardId) {
    return axios.get('https://api.pokemontcg.io/v2/cards/' + cardId)
}

module.exports = getCardById;