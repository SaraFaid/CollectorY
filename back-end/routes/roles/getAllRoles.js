// route to get all roles

const {Role} = require ('../../sequelize');
const verifyToken = require("../../helper/verifyToken");

module.exports = (app) => {
    // example url http://localhost:5000/api/roles/all
    app.get('/api/roles/all', verifyToken,  (req, res) => {
        Role.findAll()
        .then((roles) => {
            res.json(roles)
            })
            .catch((error) => {
                console.error(error)
                res.status(500).send('Internal server error')
            }
        )}
    )}