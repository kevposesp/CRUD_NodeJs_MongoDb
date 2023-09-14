const mdbConfig = require("../../config/mdb.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const mdb = {};
mdb.mongoose = mongoose;

mdb.url = mdbConfig.url;

mdb.products = require("./product.model.js")(mongoose);

module.exports = mdb;