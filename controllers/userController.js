class userController{

    static login =(req,res,next)=>{
        res.send({"message":"login successfully"})
     }

     static register=(req,res,next)=>{
        res.send({"message":"registration successfully"})
    }

    static userAllData=(req,res,next)=>{
        res.send("users all data") 
    }

    static delete=(req,res,next)=>{
        res.send("user data deleted") 
    }

    static update=(req,res,next)=>{
        res.send("user data updated") 
    }

}

module.exports=userController
