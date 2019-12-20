const router= require('express').Router()
const todos = require('../model/todos')
const verify= require('./vertoken') 

//Create a todo
router.post("/create", verify ,async (req,res)=>{
	const todo= new todos({
		title:req.body.title,
		description: req.body.description
	})
	try
		{
			const savedtodo= await todo.save()
		    res.json(savedtodo)
		}
	catch(err){
		res.json({message:err})
	}
})

//Find and retrieve the list of all todo
router.get("/find", verify, async (req,res)=>{
	try{
		const gotuser= await todos.find()
		res.json(gotuser)
	}
	catch(err){
		res.json({ message:err })
    }
})

//Find a todo on the basis of an id
router.get("/find/:postId", verify , async (req,res) =>{
	try{
		const founduser= await todos.findById(req.params.postId)
		res.json(founduser)
	}
	catch(err){
		res.json({ message:err })
	}
})

//Delete a Todo
router.delete("/delete/:postId", verify , async (req,res)=>{
	try{
		const removedTodo= await todos.remove({_id: req.params.postId})
		res.json(removedTodo)
	}
	catch(err) {
		res.json({ message: err })
}
})

//Update a Todo
router.patch("/update/:postId", verify , async (req,res)=>{
	try{
		const UpdatedTodo= await todos.updateOne({_id: req.params.postId},
												 {$set:{title: req.body.title,
													   description: req.body.description}})
		res.json(UpdatedTodo)
	}
	catch(err){
		res.json({ message: err })
	}
})

module.exports= router
