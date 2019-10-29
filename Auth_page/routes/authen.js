const router=require('express').Router()
const User= require('../model/User')
const Joi=require('@hapi/joi')
const {registervali, loginvali}= require('../routes/validation')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')
//Performing Validations
const Schema={
	name: Joi.string().
	      min(2).
	      required(),
	email: Joi.string().
	       required().
	       email(),
	password: Joi.string().
	          min(6).
	          required()
};

//Register
router.post('/register',async (req,res) => {
	//Validation
	const {error}= registervali(req.body)  //Returns an object therefore storing the error                                                        message from it
	if(error){
		return res.status(400).send(error.details[0].message)
	}
	//Check if the user already exists
	const emailexist= await User.findOne({email: req.body.email})
	if(emailexist){
		return res.status(400).send("The email already exists")
	}
	//Password Hashing
	const salt= await bcrypt.genSalt(10)
	const hashpassword= await bcrypt.hash(req.body.password,salt)
	//User Creation
	const user= new User({
		name:req.body.name,
		email:req.body.email,
		password:hashpassword
	});
	try{
		const savedUser = await user.save()
		res.send({user: user._id})
	}catch(err){
		res.status(400).send(err)
	}
});

//Login
router.post('/login', async (req,res)=> {
	const {error}= loginvali(req.body)
	if(error) return res.status(400).send(error.details[0].message)
	//Check if the user already exists
	const person= await User.findOne({email: req.body.email})
	if(!person){
		return res.status(400).send("The email does not exist")
	}
	//Password is valid or not
	const validPass= await bcrypt.compare(req.body.password, person.password) 
	if(!validPass){
		return res.status(400).send("Your Password is invalid")
	}
	//Creating and assigning the token
	const token= jwt.sign({_id:User._id}, process.env.Token_Secret)
	res.header('auth-token',token).send(token)
	// res.send("Successfully Logged in")
})
module.exports=router