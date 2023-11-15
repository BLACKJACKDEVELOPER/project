

module.exports = {
    async get(req,res) {
        try {
            return res.render("bell.ejs",{data:req.session});
        }catch(e) {
            return 0
        }
    }
}