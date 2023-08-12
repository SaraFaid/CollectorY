//model for  collection (user_id, collection_name)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('collections', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        collectionName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    })
}