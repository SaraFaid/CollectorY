const {User, Role, Collection} = require ('../../sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/users/all
    app.get('/api/users/all', (req, res) => {
        User.findAll(
            {include: [{
                model: Role,
                as : 'roles',
            },
            {
                model: Collection,
                as : 'collections'
            }
            ]
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
            