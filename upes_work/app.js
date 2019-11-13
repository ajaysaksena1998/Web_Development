const express= require('express')
var app= express()
const mongoose=require('mongoose')
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const dotenv = require('dotenv')
dotenv.config()
const user= require('./routes/restapi')
//Connect to DB
mongoose.connect( process.env.DBConnect,{useNewUrlParser: true, useUnifiedTopology: true},() =>
		console.log("Data Base Connected Successfully")
		)
app.use(express.json())
//Route MiddleWare
app.use("/",user)
app.listen(3000,function(){
	console.log("Server running on port 3000!!")
})