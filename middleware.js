const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser')
// session manager
const session = require("express-session")

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.set("views engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
// session initial
app.use(session({
    secret:"RETEXT",
    resave:false,
    saveUninitialized:true
}))

module.exports = app
