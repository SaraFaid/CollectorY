const axios = require('axios').default;

function getCardById(cardId) {
    return axios.get('https://api.pokemontcg.io/v2/cards/' + cardId)
}

module.exports = (app) => {
    app.get('/api/pokemon/card/:cardId', (req, res) => {
        getCardById(req.params.cardId)
        .then((card) => {
            res.send(card.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })
}