module.exports = (sequelize, DataTypes) => {
    return sequelize.define('friends', {
        userId1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
}