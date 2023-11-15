const USER = require("../models/users");
const fs = require("fs")

module.exports = {
    async get(req,res) {
        try {
            console.log(req.query.id)
            const user = await USER.findOne({_id:req.query.id})
            return res.render("profile.ejs",{
                data:req.session,
                user
            });
        }catch(e) {
            
        }
    },
    async post(req,res) {
        try {

            const { body:{ fname, lname , image64 } } = req
            
            const data = await USER.findOneAndUpdate({_id:req.session.uid},{ fname , lname },{new:true})
            // Profile has been sended of not
            if (image64 !== false) {
                const FILENAME = (Math.floor(Math.random() * 1000000))+".png"
                fs.writeFileSync(__dirname+"/../public/img/"+FILENAME,image64,{ encoding:"base64" })
                await USER.findOneAndUpdate({_id:req.session.uid},{profile:FILENAME},{new:true})
                req.session.profile = FILENAME
            }
            console.log(__dirname)

            return res.json({
                pass:true,
                msg:"test direction"
            })

        }catch(e) {
            return res.json({
                pass:false,
                msg:e.message
            })
        }
    }
}