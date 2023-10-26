import product from "@/models/product"

import connectDb from "@/middleware/moongose"
import user from "@/models/user"
var CryptoJS = require("crypto-js");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const  handler=async(req,res)=>{

    if(req.method=='POST'){
        const { name, email } = req.body;
        let users = await user.findOne({ email: email });
        console.log(req.body);
        if (!users) {
            let u = new user({
            name,
            email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                "secretkey123"
            ).toString(),
            });
            await u.save();
            res.status(200).json({ success: true });
        } else {
            res.status(200).json({ success: false });
        }
}
  else {
    res.status(400).json({error:"This method is not allowed"})
  }
}

export default  connectDb(handler)

   
  
  