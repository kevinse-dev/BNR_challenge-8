const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerJSON = require('./swagger.json')
const swaggerUI = require('swagger-ui-express')

const app = express();
// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());


app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

const db = require("./app/models");
db.client.sync();

require("./app/routes/player.routes")(app);

const data = {
  name:'kevin sebastian',
  age:22,
  biography:this.name
}

console.log(data)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
