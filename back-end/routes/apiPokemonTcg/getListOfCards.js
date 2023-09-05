const getCardById = require("../../helper/getCardByIdRoute");
const { verifyToken } = require("../../verifyToken");

module.exports = (app) => {
    // example url http://localhost:5000/api/pokemon/cardList
  app.get("/api/pokemon/cardList", verifyToken, (req, res) => {
    const  list  = req.query.list;
    const cardList = [];
    if (list !== undefined && list.length !== 0) {
    list.map((cardId) => {
     const temp = getCardById(cardId)
        .then((card) => {
          cardList.push(card.data.data);
          if (cardList.length === list.length) {
            res.json(cardList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      });
    }
  });
};
