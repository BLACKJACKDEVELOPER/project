

module.exports = {
    async get(req,res) {
        console.log(req.session)
        return res.render("index.ejs",{
            data:req.session
        });
    },
    async post(req,res) {

    }
}