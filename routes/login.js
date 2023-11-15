const USERS = require("../models/users")

module.exports = {
    async get(req,res) {
        return res.render("login.ejs",{
            data:req.session
        });
    },
    async post(req,res) {
        try {
            const { email , password } = req.body
            const data = await USERS.findOne({email,password})
            
            // session call
            req.session.uid = data._id
            req.session.profile = data.profile
            req.session.email = data.email
            req.session.login = true

            return res.redirect("/")
        }catch(e) {
            return res.redirect("/login?msg="+e.message)
        }
    }
}