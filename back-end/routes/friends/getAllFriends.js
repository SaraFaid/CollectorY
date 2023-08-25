const { Friend } = require("../../sequelize");
const { Op } = require("sequelize");

module.exports = (app) => {
  app.get("/api/friends/:id", (req, res) => {
    Friend.findAll({
      where: {
        [Op.or]: [{ userId1: req.params.id }, { userId2: req.params.id }],
      },
    })
      .then((friends) => {
        res.json(friends);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal server error");
      });
  });
};
