// model for license of a collection (collection_id, license_id)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('licenses', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        licenseName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    })
}