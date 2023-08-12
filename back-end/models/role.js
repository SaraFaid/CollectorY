// model role for user (roleName)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('roles', {
        roleName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}