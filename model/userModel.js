const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    "first_name":{type:String},
    "last_name":{type:String},
    "email":{type:String},
    "password":{type:String},
})