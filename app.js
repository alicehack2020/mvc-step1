const express=require("express")
const app=express()
const Connection=require("./database/mongodatabase.js")
const router=require("./routers/userRouter.js")
app.use(router)

app.listen(2021,()=>{
    new Connection()
    console.log("server is started");
})



 
// app.get()
// app.post()
// app.delete()
// app.put()


// login  post =>send data
//register post=>data send

//userAllData  get()=> data featch

//update
//delete


//user

//blog
//coureese



 