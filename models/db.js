const mongoose = require("mongoose")
require("dotenv").config()

if (mongoose.connection.readyState == false) {
    mongoose.connect(process.env.db)
}

module.exports = mongoose