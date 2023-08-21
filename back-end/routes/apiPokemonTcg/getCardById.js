const getCardById = require("../../helper/getCardByIdRoute");
const verifyToken = require("../../helper/verifyToken");

module.exports = (app) => {
    app.get('/api/pokemon/card/:cardId', verifyToken, (req, res) => {
        getCardById(req.params.cardId)
        .then((card) => {
            res.send(card.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })
}