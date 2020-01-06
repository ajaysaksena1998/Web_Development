const mongoose= require('mongoose')
const user=new mongoose.Schema({
	Evaluator:{
		type: String,
		min: 3,
		max: 255
	},
    Studentid:{
		type: String,
	},
	Date:{
		type: Date,
		default: Date.now()
	},
	formtype:{
	 	type: String,
		min: 3,
		max: 255					   
	},
	desc1:{
		type: String,
		min: 3,
		max:255
	},
	d1:{
		type: String,
		min: 3,
		max:255
	},
	val1:{
	    type: Number	
	},
	desc2:{
		type: String,
		min: 3,
		max:255
	},
	d2:{
		type: String,
		min: 3,
		max:255
	},
	val2:{
	    type:Number				   
	},
	desc3:{
		type: String,
		min: 3,
		max:255
	},
	d31:{
		type: String,
		min: 3,
		max:255
	},
	val31:{
	    type:Number						   
    },
	d32:{
		type: String,
		min: 3,
		max:255
	},
	val32:{
	    type:Number						   
    },
	desc4:{
		type: String,
		min: 3,
		max:255
	},
	d4:{
		type: String,
		min: 3,
		max:255
	},
	val4:{
		type:Number					   
	},
	desc5:{
		type: String,
		min: 3,
		max:255
	},
	d5:{
		type: String,
		min: 3,
		max:255
	},
	val5:{
		type:Number					   
	},
	sum:{
	type:Number
},
	comment:{
	type: String,
		min: 3,
		max: 1000
}
})
module.exports=mongoose.model('users',user)