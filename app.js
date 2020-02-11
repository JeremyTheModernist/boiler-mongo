const express = require("express");
const routes = require("./routes/index");
const connectDB = require("./connectDB/index");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config({
	path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

const app = express();

connectDB();
mongoose.connection.once("open", () => {
	console.log("connection has been opened with mongoose");
});

app.listen(3260, () => {
	console.log("now listening on port 3260");
});

app.use(bodyParser.json());

routes(app);
