const Joi=require('@hapi/joi')
const registervali = (value)=>{
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
	return Joi.validate(value,Schema)
}
const loginvali= (data)=>{
	const Schema={
	email: Joi.string().
		   required().
		   email(),
	password: Joi.string().
		      min(6).
		      required()
};
	return Joi.validate(data,Schema)
}
module.exports.registervali= registervali;
module.exports.loginvali= loginvali;
