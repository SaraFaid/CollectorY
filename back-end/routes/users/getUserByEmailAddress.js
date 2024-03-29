//route to find a user with a user with their email address
const getCardById = require("../../helper/getCardByIdRoute");

const { User, Role, Collection, Card, License } = require("../../sequelize");

module.exports = (app) => {
  // example url http://localhost:5000/api/users/beo.san@outlook.be
  app.get("/api/users/:emailAddress", (req, res) => {
    User.findOne({
      where: {
        emailAddress: req.params.emailAddress,
      },
      include: [
        {
          model: Role,
          as: "roles",
        },
        {
          model: Collection,
          as: "collections",
          include: [
            {
              model: License,
              as: "license",
            },
            {
              model: Card,
              as: "cards",
            },
          ],
        },
      ],
    })
      .then((user) => {
        res.json(user);
      })

      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal server error");
      });
  });
};
