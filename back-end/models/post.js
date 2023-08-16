// model for posts (userId, content, cardId)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('posts', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cardId: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}