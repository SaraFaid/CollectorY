// Impport the models
const UserModel = require('./models/user');
const CollectionModel = require('./models/collection');
const LicenseModel = require('./models/license');
const PostModel = require('./models/post');
const LikeModel = require('./models/like');
const CardModel = require('./models/card');
const RoleModel = require('./models/role');
const RoleUserModel = require('./models/roleUser');

//mocked data
const mockedUsers = require('./mock/mockedUsers');
const mockedRoles = require('./mock/mockedRoles');
const mockedRolesUsers = require('./mock/mockedRolesUsers');
const mockedCollections = require('./mock/mockedCollections');
const mockedCards = require('./mock/mockedCards');
const mockedLicenses = require('./mock/mockedLicenses');

// Sequelize
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const PG_URI = process.env.PG_URI;

const sequelize = new Sequelize(PG_URI, {dialect:'postgres'})

const verifyConnection = () => {
    sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error))
}


// The models here
const User = UserModel(sequelize, DataTypes);
const Collection = CollectionModel(sequelize, DataTypes);
const License = LicenseModel(sequelize, DataTypes);
const Post = PostModel(sequelize, DataTypes);
const Like = LikeModel(sequelize, DataTypes);
const Card = CardModel(sequelize, DataTypes);
const Role = RoleModel(sequelize, DataTypes);
const RoleUser = RoleUserModel(sequelize, DataTypes);


// The relations here
User.belongsToMany(Role, { through: "roleUsers",as: "roles", foreignKey: 'userId' });
Role.belongsToMany(User, { through: "roleUsers",as: "users", foreignKey: 'roleId' });
RoleUser.belongsTo(User, {foreignKey: 'userId' });
RoleUser.belongsTo(Role, {foreignKey: 'roleId' });

User.hasMany(Collection, {foreignKey: 'userId' });
Collection.belongsTo(User, {foreignKey: 'userId' });

Collection.belongsTo(License, {foreignKey: 'licenseId' });
License.hasMany(Collection, {foreignKey: 'licenseId' });

Collection.hasMany(Card, {foreignKey: 'collectionId' });
Card.belongsTo(Collection, {foreignKey: 'collectionId' });

User.hasMany(Post, {foreignKey: 'userId' });
Post.belongsTo(User, {foreignKey: 'userId' });

Post.hasMany(Like, {foreignKey: 'postId' });
Like.belongsTo(Post, {foreignKey: 'postId' });

User.hasMany(Like, {foreignKey: 'userId' });
Like.belongsTo(User, {foreignKey: 'userId' });

// Init the database
const initDB = (synchronize) => {
    if(synchronize) {
        return sequelize.sync({ force: true })
        .then(() => {
            console.log(`Initialized the database`)
        })
        .then(() => {
            User.bulkCreate(mockedUsers)
        })
        .then(() => {
            Role.bulkCreate(mockedRoles)
        })
        .then(() => {
            RoleUser.bulkCreate(mockedRolesUsers)
        })
        .then(() => {
            License.bulkCreate(mockedLicenses)
        })
        .then(() => {
            Collection.bulkCreate(mockedCollections)
        })
        .then(() => {
            Card.bulkCreate(mockedCards)
            return "mocked data created"
        })
    }
    else {
        return "Started without synchronizing the database"
    }
}


module.exports = { verifyConnection, initDB, User, Collection, License, Post, Like, Card, Role, RoleUser }   