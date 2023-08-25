// import { getCardById } from "../apiPokemonTcg/getCardById";
const  {verifyToken}  = require('../../verifyToken');

const { User, Role, Collection, Card, License } = require("../../sequelize");

module.exports = (app) => {
  // example url http://localhost:5000/api/users/all
  app
    .get("/api/users/all", verifyToken, (req, res) => {
      User.findAll({
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
      }).then(async (users) => {
        res.json(users);
      })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
});
};

