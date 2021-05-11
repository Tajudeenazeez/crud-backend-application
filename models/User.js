const {Schema,model} = require("mongoose");

const userSChema = Schema({
    name:String,
    email:String,
    country:String,

})

module.exports = model("User",userSChema);