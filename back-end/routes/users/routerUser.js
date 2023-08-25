// Router for users
// possibility to get all users
// possibility to get a user by their email address


module.exports = (app) => {
    require('./getAllUsers')(app);
    require('./getUserByID')(app);
    require('./getUserByEmailAddress')(app);
    require('./logUserIn')(app);
    require('./addUser')(app);
}