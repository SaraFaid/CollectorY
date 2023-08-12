const { RoleUser, User, Role} = require ('../../sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/rolesUsers/allAdmin
    app.get('/api/rolesUsers/allAdmin', (req, res) => {
        User.findAll(
            {
                include: [{
                    model: Role,
                    as: 'roles',
                    where: {roleName: 'admin'},
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
