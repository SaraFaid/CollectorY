const axios = require('axios').default;


// axios to get https request
function getCardById(cardId) {
    return axios.get('https://api.pokemontcg.io/v2/cards/' + cardId)
}

module.exports = getCardById;