module.exports = (app) => {
    require ('./addCardToCollection')(app);
    require ('./deleteCardFromCollection')(app);
    require ('./findCardInCollection')(app);
}