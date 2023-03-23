const PORT = process.env.PORT || 7124
const morgan = require('morgan');
const initDB = require('./config/db');
const mongoose = require("mongoose");
const express = require("express");
const app = express();

initDB();

app.use(morgan("dev"));

app.use(express.urlencoded({extended :false}));

app.use(express.json());

app.use('/', require("./routes/MainRouter"))

mongoose.connection.once("open", () => {
    console.log("Connected to database")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  