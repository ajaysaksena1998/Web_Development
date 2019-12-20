const express=require('express')
const app= express()
const mongoose=require('mongoose')
const bodyParser= require('body-parser')
app.use(bodyParser.json())
//Importing the routes
const auth_route=require('./routes/authen')
const todo= require("./routes/resttodoapi")
const dotenv = require('dotenv')
dotenv.config()
//Connect to DB
mongoose.connect( process.env.DBConnect,{useNewUrlParser: true, useUnifiedTopology: true},() =>
		console.log("Data Base Connected Successfully")
		)
//MiddleWares
app.use(express.json())
//Route MiddleWare
app.use("/api/use",auth_route)
app.use("/todo",todo)
app.get("*",(req,res)=>{
	res.send("Page Not Found!!!")
})
app.listen(3000,()=>{
	    console.log("Server listening on port 3000!!")
        })
