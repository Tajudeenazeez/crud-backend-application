const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/",async (req,res)=>{

    const {name,email,country} = req.body

    try{
        const newUser = new User({
            name,email,country
        })


        newUser.select("__v")
    
    
        result = await newUser.save()
    
        return res.status(201).json({
            status:'success',
            data:{
                id:result._id,
                ...result._doc
            }
           
        })

    }catch(err){

            return res.status(500).json({

                status:"fail",
                message:err.message
            })
        
        
        }

                
});router.patch("/:id",async (req,res)=>{

    try{

        const id = req.params.id
        const data = req.body

        const user = await User.findByIdAndUpdate(id,{...req.body});

        if(user){


           
           return res.json({
            status:'success',
            data:user
        })
        }
    }catch(err){

        return res.status(500).json({

            status:"fail",
            message:err.message
        })
    
    }
})






router.delete("/:id",async (req,res)=>{

    try{

        const id = req.params.id

        const user = await User.findById(id);

        if(user){

           await user.delete()

           return res.json({
            status:'success',
            data:'user deleted'
        })
        }
    }catch(err){

        return res.status(500).json({

            status:"fail",
            message:err.message
        })
    
    }
})


router.get("/",async (req,res)=>{

    const users = await User.find();



    return res.status(200).json({
        users
    })



});


module.exports = router;