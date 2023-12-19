// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const {body, validationResult } = require("express-validator");

// router.post("/createuser",[
// ], async (req,res) =>{

//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()});
//     }

//     try{
//         await User.create({
//              name: req.body.name,
//              email:req.body.email,
//              address:req.body.address,
//              age:req.body.age,
//              contactInfo:req.body.contactInfo,
//              batchPreference: req.body.batchPreference 
//             });
 
//          res.json({success:true});
 
//      }catch(err){
//         console.log(err);
//         res.json({success:false});
//      }
// });

// module.exports = router;