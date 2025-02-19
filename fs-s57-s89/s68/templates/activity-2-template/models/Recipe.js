//[Section] Activity
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Recipe Name is Required']
    },
    description: {
        type: String,
        required: [true, 'Recipe Description is Required']
    },
    ingredients: {
        type: String,
        required: [true, 'Recipe Ingredients is Required']
    },
    steps: {
        type: String,
        required: [true, 'Recipe Steps is Required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
