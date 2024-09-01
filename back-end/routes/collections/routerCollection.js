module.exports = (app) => {
    // TODO: Add routes to delete a collection
    require('./getAllCollectionsByUserId')(app);
    require('./getAllCardInCollection')(app);
    require('./createNewCollection')(app);
    require('./getWishlistByUserId')(app);
}