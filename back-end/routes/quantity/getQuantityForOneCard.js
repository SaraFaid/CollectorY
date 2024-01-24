//route to get all the quantity for one card from one collection

const {Quantity} = require ('../../sequelize');
const  {verifyToken}  = require('../../verifyToken');

module.exports = (app) => {
    // example url http://localhost:5000/api/quantity/1
    app.get('/api/quantity/:cardId', verifyToken, (req, res) => {
        Quantity.findOne(
            {where: {cardId: req.params.cardId}}
        )
        .then((quantity) => {
            res.json(quantity)
            })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Internal server error')
        }
    )}
)}