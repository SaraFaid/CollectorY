const { Collection } = require('../../sequelize');
const { verifyToken } = require('../../verifyToken');

module.exports = (app) => {
    // example url http://localhost:5000/api/collections/users/1
    app.get('/api/collections/users/:id', verifyToken, (req, res) => {
        Collection.findAll(
            { where: { userId: req.params.id } }
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