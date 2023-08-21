const getCardById = require("../../helper/getCardByIdRoute");

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