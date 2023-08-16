//route to find a user with a user with their email address

const {User} = require ('../../sequelize');

module.exports = (app) => {
    // example url http://localhost:5000/api/users/user1%40gmail.com
    app.get('/api/users/:emailAddress', (req, res) => {
        User.findOne({
            where: {
                emailAddress: req.params.emailAddress
            }
        })
        .then((user) => {
            res.json(user)
            })
            .catch((error) => {
                console.error(error)
                res.status(500).send('Internal server error')
            }
        )}
    )}