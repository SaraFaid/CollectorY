// model for quantity and quality of card in collection 

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('quantities', {
        cardId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        excellent: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        lightlyPlayed: {
            type : DataTypes.INTEGER,
            allowNull: true
        },
        poor: {
            type : DataTypes.INTEGER,
            allowNull: true
        }
    })
}