// centralized router for all api routes

module.exports = (app) => {
    require('./getAllCards')(app);
    require('./getCardById')(app);
}