const express = require("express");
const mongoose = require("mongoose");



const usersRoutes = require("./routes/usersRoutes");
const {mngoURI, mongoURI} = require("./config")



const app = express()

app.use(express.json())

app.use("/users",usersRoutes)


mongoose.connect(mongoURI,{useNewUrlParser:true,useFindAndModify:true}).then(()=>{
    console.log('mongoDB connected')
}).catch((err) => {
    
    
    console.log('failed to connect')
    process.exit();

});


const port = process.env.PORT || 5000;


app.listen(port,()=>{

    console.log(`Server running on ${port}`)
})