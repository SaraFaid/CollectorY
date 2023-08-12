// route to get all users by roleId

const {User, Role} = require ('../../sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/rolesUsers/roles/3
    app.get('/api/rolesUsers/roles/:id', (req, res) => {
        const id = req.params.id;
        User.findAll(
                {include: [{
                    model: Role,
                    as : 'roles',
                    where: {id: id},
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