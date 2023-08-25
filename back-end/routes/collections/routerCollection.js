module.exports = (app) => {
    require('./getAllCollectionsByUserId')(app);
    require('./getAllCardInCollection')(app);
}