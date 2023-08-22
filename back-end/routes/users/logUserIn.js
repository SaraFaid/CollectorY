const { generateAccessToken, generateRefreshToken } = require("../../token");
const { User, Role } = require("../../sequelize");
const argon2 = require("argon2");

module.exports = (app) =>
  app.post("/api/users/login", async (req, res) => {
    const { emailAddress, password } = req.body;
    const user = await User.findOne({
      where: {
        emailAddress: emailAddress,
      },
      include: [
        {
          model: Role,
          as: "roles",
        },
      ],
    });
    if (!user) {
      return res.status(404).send({
        message: "User Not found.",
      });
    }
    try {
      if (await argon2.verify(user.passwordDigest, password)) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.send({ user, accessToken, refreshToken });
      } else {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
    } catch (err) {
      return res.status(401).send({
        accessToken: null,
        message: err.message,
      });
    }
  });
