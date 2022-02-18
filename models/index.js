const dbConfig = require("../config/config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.cocktails = require("./cocktails.js")(mongoose);

module.exports = db;