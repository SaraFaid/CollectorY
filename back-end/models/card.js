// model for card in collection (collection_id, card_id, quantity)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cards', {
        collectionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cardId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
        },
    })
}