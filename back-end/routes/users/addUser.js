const { User } = require("../../sequelize");
const argon2 = require('argon2');

module.exports = (app) => {
    app.post("/api/users/add", async (req, res) => {
        const { username, emailAddress, password, collectory } = req.body;
        const user = await User.findOne({
            where: {
                emailAddress: emailAddress,
            },
        });
        if (user) {
            return res.status(400).send({
                message: "User already exists.",
            });
        }

        try {
        const hash = await argon2.hash(password)
        .then(hash => {
            const newUser = User.create({
                username: username,
                emailAddress: emailAddress,
                passwordDigest: hash,
                collectory: collectory,
            });
            const wishlist = Collection.create({
                userId: newUser.id,
                collectionName: newUser.username + "'s wishlist",
                licenseId: 0,
            });
            res.status(200).send(newUser);
        })

        } catch (err) {
            console.log(err);
            // internal failure
        }
    }
    );
};