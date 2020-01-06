const mongoose= require('mongoose')
const fast=new mongoose.Schema({
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
	d11:{
		type: String,
		min: 3,
		max:255
	},
	val11:{
	    type: Number	
	},
	d12:{
		type: String,
		min: 3,
		max:255
	},
	val12:{
	    type: Number	
	},
	d13:{
		type: String,
		min: 3,
		max:255
	},
	val13:{
	    type: Number	
	},
	desc2:{
		type: String,
		min: 3,
		max:255
	},
	d21:{
		type: String,
		min: 3,
		max:255
	},
	val21:{
	    type: Number	
	},
	d22:{
		type: String,
		min: 3,
		max:255
	},
	val22:{
	    type: Number	
	},
	d23:{
		type: String,
		min: 3,
		max:255
	},
	val23:{
	    type: Number	
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
	    type: Number	
	},
	d32:{
		type: String,
		min: 3,
		max:255
	},
	val32:{
	    type: Number	
	},
	d33:{
		type: String,
		min: 3,
		max:255
	},
	val33:{
	    type: Number	
	},
	desc4:{
		type: String,
		min: 3,
		max:255
	},
	d41:{
		type: String,
		min: 3,
		max:255
	},
	val41:{
	    type: Number	
	},
	d42:{
		type: String,
		min: 3,
		max:255
	},
	val42:{
	    type: Number	
	},
	d43:{
		type: String,
		min: 3,
		max:255
	},
	val43:{
	    type: Number	
	},
	desc5:{
		type: String,
		min: 3,
		max:255
	},
	d51:{
		type: String,
		min: 3,
		max:255
	},
	val51:{
	    type: Number	
	},
	d52:{
		type: String,
		min: 3,
		max:255
	},
	val52:{
	    type: Number	
	},
	d53:{
		type: String,
		min: 3,
		max:255
	},
	val53:{
	    type: Number	
	},
	desc6:{
		type: String,
		min: 3,
		max:255
	},
	d61:{
		type: String,
		min: 3,
		max:255
	},
	val61:{
	    type: Number	
	},
	d62:{
		type: String,
		min: 3,
		max:255
	},
	val62:{
	    type: Number	
	},
	desc7:{
		type: String,
		min: 3,
		max:255
	},
	d71:{
		type: String,
		min: 3,
		max:255
	},
	val71:{
	    type: Number	
	},
	d72:{
		type: String,
		min: 3,
		max:255
	},
	val72:{
	    type: Number	
	},
	desc8:{
		type: String,
		min: 3,
		max:255
	},
	d81:{
		type: String,
		min: 3,
		max:255
	},
	val81:{
	    type: Number	
	},
	d82:{
		type: String,
		min: 3,
		max:255
	},
	val82:{
	    type: Number	
	},
	d83:{
		type: String,
		min: 3,
		max:255
	},
	val83:{
	    type: Number	
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
module.exports=mongoose.model('fast',fast)