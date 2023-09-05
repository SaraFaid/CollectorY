const getCardById = require("../../helper/getCardByIdRoute");
const  {verifyToken}  = require('../../verifyToken');

module.exports = (app) => {
    // example url http://localhost:5000/api/pokemon/card/xy7-54
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