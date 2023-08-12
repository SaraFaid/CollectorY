// module for userRole with (id, userId, roleId)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('roleUsers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roleId: {
            type: DataTypes.INTEGER,
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