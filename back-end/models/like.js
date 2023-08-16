// model for like on post (post_id, user_id)

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('likes', {
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}