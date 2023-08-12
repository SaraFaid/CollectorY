//route to get all rolesUsers

const {User, Role} = require ('../../sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/rolesUsers/all
    app.get('/api/rolesUsers/all', (req, res) => {
        User.findAll(
            {
                include: [{
                    model: Role,
                    as: 'roles'
                }]
            }
        )
        .then((users) => {
            res.json(users)
            })
            .catch((error) => {
                console.error(error)
                res.status(500).send('Internal server error')
            }
        )}
    )}