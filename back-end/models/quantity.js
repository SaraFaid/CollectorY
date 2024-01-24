// model for quantity and quality of card in collection 

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('quantities', {
        cardId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mint: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        nearMint: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        excellent: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        lightlyPlayed: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        played: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        poor: {
            type : DataTypes.INTEGER,
            allowNull: true
        }
    })
}