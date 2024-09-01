const { Collection } = require('../../sequelize');
const { verifyToken } = require('../../verifyToken');
const { Op } = require('sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/collections/wishlist/1
    app.get('/api/collections/wishlist/:id', verifyToken, (req, res) => {
        console.log(req.params)
        Collection.findAll(
            { where: {[Op.and]: [{userId: req.params.id}, {licenseId: 0}] } }
        )
            .then((collections) => {
                res.json(collections)
            })
            .catch((error) => {
                console.error(error)
                res.status(500).send('Internal server error')
            }
            )
    })
}