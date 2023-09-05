const { Card } = require ('../../sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/collections/newCard
    app.post('/api/collections/newCard', async (req, res) => {   
        const { collectionId, cardId } = req.body;
        const card = await Card.findOne({
            where: {
                [Op.and]: [{ collectionId: collectionId }, { cardId: cardId }],
            },
        });
        if (card) {
            card.update({
                quantity: card.quantity + 1,
            });

            return res.status(200).send({card});
        }
        try {
            const newCard = Card.create({
                collectionId: collectionId,
                cardId: cardId,
            });
            res.status(200).send(newCard);
        }
        catch (err) {
            res.status(500).send({
                message: 'Internal server error',
            });
            // internal failure
        }
    });
    }