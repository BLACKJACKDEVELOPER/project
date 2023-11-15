const USERS = require("../models/users")

module.exports = {
    async get(req, res) {
        return res.render("register.ejs", {
            data:req.session
        })
    },
    async post(req, res) {
        try {
            const { fname, lname, email, password } = req.body
            // create new user
            const doc = await new USERS({ fname, lname, email, password })
            await doc.save()

            return res.json({
                pass: true
            })
        }catch(e) {
            return res.json({
                pass:false,
                msg:e.message
            })
        }
    }
}