// route to get all roles by userId

const {RoleUser} = require ('../../sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/rolesUsers/users/1
    app.get('/api/rolesUsers/users/:id', (req, res) => {
        RoleUser.findAll(
            {where: {userId: req.params.id}}
        )
        .then((rolesUsers) => {
            res.json(rolesUsers)
            })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Internal server error')
        }
    )}
)}