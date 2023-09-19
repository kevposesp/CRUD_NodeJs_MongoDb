const mdbConfig = require("../../config/mdb.config.js");
const mongoose = require("mongoose");
const slugify = require('slugify')
const uniqueValidator = require('mongoose-unique-validator');

mongoose.Promise = global.Promise;

const mdb = {};
mdb.mongoose = mongoose;

mdb.url = mdbConfig.url;

mdb.products = require("./product.model.js")(mongoose, slugify, uniqueValidator);

module.exports = mdb;