const mongoose = require("./db")
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created:{
        type:Date,
        default:new Date()
    },
    profile:{
        type:String,
        default:"user.png"
    }
},{
    collection:"users"
})
schema.plugin(uniqueValidator, { message: 'ไม่สามารถทำรายการใด้ {PATH} ซ้ำในระบบ.' });
// send out
module.exports = mongoose.model("Users",schema)