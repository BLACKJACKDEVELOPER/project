const mongoose = require("./db")

const schema = new mongoose.Schema({
    f_id:String,
    isFriend:{
        type:boolean,
        default:false
    }
},{
    collection:"friends"
})

// send out
module.exports = mongoose.model("Friend",schema)