const { Collection } = require('../../sequelize');
const { verifyToken } = require('../../verifyToken');
const { Op } = require('sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/collections/users/1
    app.get('/api/collections/users/:id', verifyToken, (req, res) => {
        Collection.findAll(
            { where: { userId: req.params.id, licenseId: {[Op.not]: 0} } }
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