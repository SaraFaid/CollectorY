const { Card, Quantity } = require('../../sequelize');
const { Op } = require('sequelize')

module.exports = (app) => {
    app.post("/api/cards/add", async (req, res) => {
        const { collectionId, cardId, quality, quantity } = req.body;
        console.log('collectionId', collectionId+' cardId', cardId+' quality', quality+' quantity', quantity)


        const card = await Card.findOne({
            where: {
                [Op.and]: [{ collectionId: collectionId }, { cardId: cardId }],
            },
        });
        if (card) {
            const tmp = card.update({
                quantity: quantity + card.quantity,
            })
            .then(async (tmp) => {
            
            
            const oldquantity = await Quantity.findOne({
                where: 
                    { cardId: card.id }}
                    )
            if(oldquantity) {
                const qntt = oldquantity[quality]
                const tmp2 = oldquantity.update({
                    [quality]: qntt + quantity,
                })
                .then((tmp2) => {
                    console.log('card exists', tmp+' quantity updated', tmp2);
                    return res.status(200).send([tmp, tmp2]);
                })
            }
        })

        }
        else {
            try {
                const newCard = Card.create({
                    collectionId: collectionId,
                    cardId: cardId,
                    quantity: quantity,
                })
                .then((newCard) => {
                    const newQuantity = Quantity.create({
                        cardId: newCard.id,
                        mint: 0,
                        nearMint: 0,
                        excellent: 0,
                        lightlyPlayed: 0,
                        played: 0,
                        poor: 0,
                    })
                    .then((newQuantity) => {
                        newQuantity.update({
                            [quality]: quantity,
                        });
                        console.log('new card and quantity created', newCard, newQuantity);
                        return res.status(200).send([newCard, newQuantity]);
                    })
                    .catch((err) => {
                        console.log('error creating quantity', err);
                        return res.status(500).send({
                            message: 'Internal server error',
                        });
                    });
                })
                .catch((err) => {
                    console.log('error creating card', err);
                    return res.status(500).send({
                        message: 'Internal server error',
                    });
                })
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