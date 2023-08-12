// Router for users
// possibility to get all users
// possibility to get a user by their email address


module.exports = (app) => {
    require('./getAllUsers')(app);
    require('./getUserByEmailAddress')(app);
}