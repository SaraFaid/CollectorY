const { User } = require('../../sequelize');

module.exports = (app) => {
    app.get('/api/users/id/:id', (req, res) => {
        User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal server error');
        });
    });
};