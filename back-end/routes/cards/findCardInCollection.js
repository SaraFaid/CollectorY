const {Card} = require('../../sequelize');
const {Op} = require('sequelize')

module.exports = (app) => {
    app.get("/api/cards/find", async (req, res) => {
        const {collectionId, cardId} = req.query;
        // console.log('collectionId', collectionId + ' cardId', cardId)
        const card = await Card.findOne({
            where: {
                [Op.and]: [{collectionId: collectionId}, {cardId: cardId}],
            },
        });
        if (card) {
            return res.status(200).send(card);
        }
        else {
            return res.status(404).send('Card not found');
        }
    }
    )
}