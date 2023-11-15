

module.exports = {
    async get(req,res) {
        req.session.destroy();
        return res.redirect("/login")
    }
}