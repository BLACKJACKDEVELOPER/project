const app = require("./middleware")

// external routes *
const index = require("./routes/index.js")
const login = require("./routes/login.js")
const logout = require("./routes/logout.js")
const register = require("./routes/register.js")
const profile = require("./routes/profile.js")
const bell = require("./routes/bell.js")

// mouted routes **
app.route("/")
.get(index.get);

app.route("/login")
.get(login.get)
.post(login.post)
app.route("/logout")
.get(logout.get)

app.route("/register")
.get(register.get)
.post(register.post)

app.route("/profile")
.get(profile.get)
.post(profile.post)

app.route("/notify")
.get(bell.get)

// start server
app.listen(3000,()=> {
    console.log("Server start on port 3000")
})
