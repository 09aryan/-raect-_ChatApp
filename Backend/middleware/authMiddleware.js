const jwt=require("jsonwebtoken");
const User=require("../models/userModel");
const ayscHandler=require("express-async-handler");
const protect=ayscHandler(async (req,res,next)=>{
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
           token=req.headers.authorization.split(" ")[1];
           const decoded=jwt.verify(token,process.env.JWT_SECRET);
           req.user=await User.findById(decoded.id).select("-password");
           next();
    }catch(err){
        res.status(401);
        throw new Error("Not authorized,token failed");
    }
}
if(!token){
    res.status(401);
    throw new Error("Not authorized,no token");
}
});
module.exports={protect};