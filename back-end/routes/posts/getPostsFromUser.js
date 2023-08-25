const {verifyToken} = require("../../verifyToken");
const { Post } = require("../../sequelize");

module.exports = (app) => {
  // example url http://localhost:5000/api/posts/3
  app.get('/api/posts/:userId', verifyToken, (req, res) => {
    Post.findAll({
      where: {
        userId: req.params.userId,
      },
    })
      .then((posts) => {
        res.json(posts);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal server error");
      });
  });
};
