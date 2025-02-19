//[SECTION] Dependencies and Modules
const User = require("../models/User");

//[SECTION] Create a new course

module.exports.registerUser = (reqBody) => {
// Finds for a document with the matching username provided in the client
return	User.findOne({ email : reqBody.email }).then((result) => {

		// Check for duplicates
		if(result != null && result.email == reqBody.email){

			return  ("Duplicate email found");

		} else {

			// If the username and password are both not blank
			if(reqBody.firstName !== '' && reqBody.lastName !== '' && reqBody.email !== '' && reqBody.password !== ''){

				// Create/instantiate a "newUser" from the "User" model
                let newUser = new User({
					firstName: reqBody.firstName,
					lastName: reqBody.lastName,
					email: reqBody.email,
                    password : reqBody.password
                });
    
    			// Create a document in the database
               return newUser.save()
				.then(() => ("New user registered"))
				.catch((err) =>  (err))

            // If at least one of the fields are left blank
            } else {

            	/// Send a response back to the client/Userman of "created"
                return  ("All fields must be provided");
            }			
		}
	})
	.catch((err) =>  (err))

}

module.exports.loginUser = (reqBody) => {
    // Finds for a document with the matching username provided in the client/Userman
    return	User.findOne({ email : reqBody.email }).then((result) => {

        // Check if email exists in the database.
        if(result != null && result.email == reqBody.email){
    
            //if it is check password from db and reqBody match
            if(result.password === reqBody.password){
                return  ("Thank you for logging in!")
            } else {
                //else, send a message to the client.
                return  ("Wrong Password")
            }
    
        // If email does not exist in the database
        } else {
            return  ("Email does not exist");			
        }
    })
    .catch(err =>  (err))
    
}

module.exports.updateUser = (id,reqBody) => {
	// Finds for a document with the matching username provided in the client/Userman
	return	User.findById(id).then(result => {

        result.firstName = reqBody.firstName;
        result.lastName = reqBody.lastName;
        result.email = reqBody.email;
    
        return result.save()
        .then((updateUser) => (updateUser))
        .catch(() => ("Update failed"))
    
    //Catch the error and send a message to the client.	
    }).catch(() => ("Find Failed"))
	
}