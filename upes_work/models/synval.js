const mongoose= require('mongoose')
const val=new mongoose.Schema({
	 Studentid:{
		type: String,
	},
	Unaccepted:{
		type: Number
	},
    Marginal:{
		type: Number
	},
	Accepted:{
	 	type: Number				   
	},
	Result:{
		type: String
	}
	})
module.exports=mongoose.model('val',val)