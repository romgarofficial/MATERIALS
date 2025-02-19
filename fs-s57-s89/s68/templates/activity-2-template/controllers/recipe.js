const Recipe = require("../models/Recipe");

module.exports.getAll = (req,res) => {

	return Recipe.find()
	.then(recipes => res.status(200).send({ recipes }))
	.catch(err => res.status(500).send({ error: "Error in Find", details: err}))

}

module.exports.getAllActive = (req,res) => {

	return Recipe.find({isActive : true})
	.then(recipes => res.status(200).send({ recipes }))
	.catch(err => res.status(500).send({ error: "Error in Find", details: err}))
}

module.exports.addRecipe = (req,res) => {
    
	let newRecipe = new Recipe({
		name : req.body.name,
		description : req.body.description,
		ingredients : req.body.ingredients,
		steps: req.body.Steps
	});

	return newRecipe.save()
	.then((Recipe) => res.status(201).send({Recipe}))
	.catch(err => res.status(500).send({ error: "Error in Save", details: err}))  
}

module.exports.getRecipe = (req,res) => {
	return Recipe.findById(req.params.recipeId)
	.then(recipe  => res.status(200).send({ recipe }))
	.catch(err => res.status(500).send({ error: "Error in Find", details: err}))  
}

module.exports.updateRecipe = (req, res) => {

	let updatedRecipe = {
		name : req.body.name,
		description	: req.body.description,
		ingredients : req.body.ingredients,
		steps: req.body.Steps
	}

	return Recipe.findByIdAndUpdate(req.params.recipeId, updatedRecipe)
	.then((Recipe) => res.status(200).send({ 
    	message: 'Recipe updated successfully', 
    	updatedRecipe: Recipe 
    }))
	.catch(err => res.status(500).send({ error: "Error in Saving", details: err}))
}

module.exports.archiveRecipe = (req, res) => {
	let updateActiveField = {
		isActive : false
	}

	return Recipe.findByIdAndUpdate(req.params.recipeId, updateActiveField)
	.then((archiveRecipe) => res.status(200).send({ 
    	message: 'Recipe archived successfully', 
    	archiveRecipe: archiveRecipe 
    }))
	.catch(err => res.status(500).send({ error: "Error in Saving", details: err}))  
}

module.exports.activateRecipe = (req, res) => {
	let updateActiveField = {
		isActive : true
	}

	return Recipe.findByIdAndUpdate(req.params.recipeId, updateActiveField)
	.then((activateRecipe) => res.status(200).send({ 
    	message: 'Recipe activated successfully', 
    	activateRecipe: activateRecipe 
    }))
	.catch(err => res.status(500).send({ error: "Error in Saving", details: err}))  
}
