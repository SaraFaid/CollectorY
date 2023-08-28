const express = require('express');

const bodyParser = require('body-parser');

const { verifyConnection, initDB } = require('./sequelize');

const app = express();

const PORT = process.env.PORT || 5000;

verifyConnection();
//console.log(process.env)

initDB(true);


app.use(bodyParser.json());


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Define your API routes here

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);

});



app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the API!'
  }
  res.json(data)
})

require('./routes/routerApi')(app);

module.exports = app;