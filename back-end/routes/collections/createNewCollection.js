const { Collection } = require('../../sequelize');
const { Op } = require('sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/collections/create
    app.post('/api/collections/create', async (req, res) => {
        const { collectionName, userId, licenseId } = req.body;
        const collection = await Collection.findOne({
            where: {
                [Op.and]: [{ userId: userId }, { collectionName: collectionName }, { licenseId: licenseId }],
            },
        });
        if (collection) {
            return res.status(400).send({
                message: 'Collection already exists.',
            });
        }
        try {
            const newCollection = Collection.create({
                collectionName: collectionName,
                userId: userId,
                licenseId: licenseId,
            });
            res.status(200).send(newCollection);
        }
        catch (err) {
            res.status(500).send({
                message: 'Internal server error',
            });
            // internal failure
        }
    });
};
