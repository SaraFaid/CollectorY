const { RoleUser, User, Role} = require ('../../sequelize');
const verifyToken = require("../../helper/verifyToken");

module.exports = (app) => {
    // example url http://localhost:5000/api/rolesUsers/allAdmin
    app.get('/api/rolesUsers/allAdmin', verifyToken, (req, res) => {
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
