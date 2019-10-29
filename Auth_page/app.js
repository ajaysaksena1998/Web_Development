const express=require('express')
const app= express()
const mongoose=require('mongoose')

//Importing the routes
const auth_route=require('./routes/authen')

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
app.listen(300,function(){
	console.log("Server running!!")
})