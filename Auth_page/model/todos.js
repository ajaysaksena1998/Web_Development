const mongoose= require('mongoose')
const todostyle=new mongoose.Schema({
	title:{
		type: String,
		required: true,
		min: 3,
		max: 255
	},
	description:{
		type: String,
		required: true,
		min: 3,
		max: 255
    },
    date:{
		type: Date,
		default: Date.now()
	}
})
module.exports=mongoose.model('todos',todostyle)
