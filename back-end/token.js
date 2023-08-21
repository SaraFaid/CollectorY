const jwt = require("jsonwebtoken");

require('dotenv').config();
const secretAccess = process.env.SECRET_TOKEN_ACCESS;
const secretRefresh = process.env.SECRET_TOKEN_REFRESH;

const generateAccessToken= function(User) {
  const user = {
    id: User.id,
    username: User.username,
    emailAddress: User.emailAddress,
    
  }; 
    return jwt.sign(user, secretAccess, {
      expiresIn: "8h",
    });
  }

const generateRefreshToken=function(User) {
  const user = {
    id: User.id,
    username: User.username,
    emailAddress: User.emailAddress,
  }; 
    return jwt.sign(user, secretRefresh, {
      expiresIn: "1y",
    });
  }

  module.exports={
    generateAccessToken,
    generateRefreshToken
   };