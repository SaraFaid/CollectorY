// import { getCardById } from "../apiPokemonTcg/getCardById";

const { User, Role, Collection, Card, License } = require("../../sequelize");

module.exports = (app) => {
  // example url http://localhost:5000/api/users/all
  app
    .get("/api/users/all", (req, res) => {
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
        // https.get('https://api.pokemontcg.io/v2/cards/' + users.Card.cardId, (res) => {
        //     console.log(res)
        // })

        // let cards = [];

        // var users = await Promise.all(
        //   users.map(async (user) => {
        //     user.collections.map((collection) => {
        //       if (collection.licenseId === 1) {
        //         collection.cards.map((card) => {
        //           getCardById(card.cardId)
        //             .then((card) => {
        //               cards.push(card);
        //             })
        //             .catch((err) => {
        //               console.log(err);
        //             });
        //         });
        //       }
        //     });
        //   })
        // );
        //res.json(users);
      })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
});
};

