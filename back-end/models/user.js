module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordDigest: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        collectory: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['emailAddress']
            }
        ]
    })
}