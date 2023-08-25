// centralized router for all api routes

module.exports = (app) => {
    require ('./getCardsBySetId')(app);
    require ('./getAllSets')(app);
    require ('./getCardById')(app);
}