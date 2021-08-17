const express = require("express"); // importa express
const app = express(); // instancia o express 

const fauna = require("./routes/faunaRoute");

app.use("/fauna", fauna);

module.exports = app