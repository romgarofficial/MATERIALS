//[SECTION] Modules and Dependencies
const mongoose = require('mongoose');

//[SECTION] Schema/Blueprint 
	const userSchema = new mongoose.Schema({

		email: {
			type: String,
			required: [true, 'Email is Required']
		},
		password: {
			type: String,
			required: [true, 'Password is Required']
		},
		isAdmin: {
			type: Boolean,
			default: false
		}
        
	});

//[SECTION] Model
	module.exports = mongoose.model('User', userSchema);