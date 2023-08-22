const axios = require('axios').default;
const  {verifyToken}  = require('../../verifyToken');

function getCards(setId) {
   return axios.get('https://api.pokemontcg.io/v2/cards/?q=set.id:' + setId)
}

module.exports = (app) => {
    app.get('/api/pokemon/cards/:setId', verifyToken, (req, res) => {
        getCards(req.params.setId)
        .then((cards) => {
            res.send(cards.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })
}