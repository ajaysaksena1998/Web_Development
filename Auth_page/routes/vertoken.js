const jwt= require('jsonwebtoken')
//Here we just have register and login routes for user authentication. We can simply make any route protected by verifying this token.
module.exports= function(req,res,next){
	const token= req.header('auth-token')
	if(!token){
		return res.status(401).send("Access Denied")
	}
	try{
		const verified= jwt.verify(token,process.env.Token_Secret)
		req.user=verified
		next()
	}
	catch(err){
		res.status(400).send('Invalid Token')
	}
}
