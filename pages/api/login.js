import connectDb from "@/middleware/moongose"
import user from "@/models/user"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const  handler=async(req,res)=>{
    if(req.method=='POST'){
       console.log(req.body)
       
       let users=await user.findOne({'email':req.body.email})
       var decryptpassword  = CryptoJS.AES.decrypt(users.password,  "secretkey123");
       var finalpassword = decryptpassword.toString(CryptoJS.enc.Utf8);
   
       if(users)
       {
       if(req.body.email==users.email && req.body.password== finalpassword){
        var token = jwt.sign({ email:users.email,name:users.name }, 'jwtsecret',{expiresIn:"2d"});
        res.status(200).json({success:true,token})
       }
       else{res.status(200).json({success:false, error:"Invalid Credentials"})}

      }
      else{res.status(200).json({success:false, error:"No user found"})}
   }
  else {
    res.status(400).json({error:"This method is not allowed"})
  }
}

export default  connectDb(handler)

   
  
  