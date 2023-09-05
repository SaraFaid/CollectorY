const { Card } = require('../../sequelize');
const { Op } = require('sequelize')

module.exports = (app) => {
    app.post("/api/cards/add", async (req, res) => {
        const { collectionId, cardId, quantity } = req.body;
        console.log('collectionId', collectionId+' cardId', cardId+' quantity', quantity)
        const card = await Card.findOne({
            where: {
                [Op.and]: [{ collectionId: collectionId }, { cardId: cardId }],
            },
        });
        if (card) {
            const tmp = card.update({
                quantity: quantity + card.quantity,
            });
            console.log('card exists', tmp);
            return res.status(200).send(tmp);
        }
        else {
            try {
                const newCard = Card.create({
                    collectionId: collectionId,
                    cardId: cardId,
                    quantity: quantity,
                });
                res.status(200).send(newCard);
            }
            catch (err) {
                res.status(500).send({
                    message: 'Internal server error',
                });
                // internal failure
            }
        }
    });
};