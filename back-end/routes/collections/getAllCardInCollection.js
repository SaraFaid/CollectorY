const { Card } = require("../../sequelize");
const { verifyToken } = require("../../verifyToken");

module.exports = (app) => {
  // example url http://localhost:5000/api/cards/collection/2
  app.get("/api/cards/collection/:id", verifyToken, (req, res) => {
    const id = req.params.id;
    Card.findAll({ where: { collectionId: id } })
      .then((cards) => {
        res.json(cards);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal server error");
      });
  });
};
