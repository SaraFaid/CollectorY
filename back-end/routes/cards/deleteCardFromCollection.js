const {Card, Quantity} = require('../../sequelize');
const {Op} = require('sequelize')

module.exports = (app) => {
    app.delete("/api/cards/remove", (req, res) => {
        const {collectionId, cardId, quality} = req.body;
        console.log('collectionId: ', collectionId + ', cardId: ', cardId + ', quality: ', quality)

    const card = Card.findOne({
        where: {
            [Op.and]: [{collectionId: collectionId}, {cardId: cardId}],
        },
    })
    .then((card) => {
        console.log('CARD HERE :', card)
    if (card) {
        const previousQuantity = card.previousQuantity
        console.log('CARD HERE :', card)
        if (previousQuantity > 1) {
            const tmp = card.update({
                quantity: previousQuantity - 1,
            })
            .then((tmp) => {
                const oldquantity = Quantity.findOne({
                    where: {cardId: card.id}
                })
                if (oldquantity) {
                    const qntt = oldquantity[quality]
                    if (qntt > 0) {
                        const tmp2 = oldquantity.update({
                            [quality]: qntt - 1,
                        })
                        .then((tmp2) => {
                            // console.log('card exists', tmp + ' quantity updated', tmp2);
                            return res.status(200).send([tmp, tmp2]);
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.status(500).send(err)
                        })
                    }

                }
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send(err)
            })
        }
        else {
            const tmp= Quantity.findOne({
                where: {cardId: card.id}
            })
            .then(async (tmp) => {
                if (tmp) {
                    const tmp2 = tmp.destroy()
                    .then((tmp2) => {
                        const tmp3 = card.destroy()
                        // console.log('quantity deleted', tmp2);
                        .then((tmp3) => {

                            return res.status(200).send([tmp3, tmp2]);
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.status(500).send("error card: ",err)
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        return res.status(500).send("error quantoty: ", err)
                    })
            }
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send("error not found: ", err)
            })
        }
    }
    else {
        return res.status(404).send('Card not found in collection')
    }
}
)
})
}   