# MTE - App Building - API - 1

## Resources

### References

Sample:

- [Model-Route-Controller-ExpressJS](https://soonsantos.medium.com/nodejs-api-part-5-model-router-controller-structure-c5b13c2660ae)
    
### Tools/Technologies Version

    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.1.3",
    "nodemon": "^3.0.3"

## Code Discussion

### 1. Folder and File Preparation

- In the individual/MTE folder, create a new folder called s82.
- In the s82 folder, create a new folder called discussion.
- In the discussion folder create a new file called project.txt

### 2. Step 1 - Define the Project Specification

#### batchfolder > individual > s82 > discussion > project.txt

- First breakdown and note down the given objective.

```txt

Objective: ExpressJS API - Inventory Management

1. What is the main objective of the project?
	- ExpressJS API - Inventory Management with Simple CRUD functionalities

2. Who are the target users of the application?
	- Company Employees

3. What are the core features or functionalities required?

	- Basic CRUD operations for managing inventory items (Create, Read, Update, Delete).
		- Authenticated user ability to retrieve a list of all inventory items.
		- Authenticated user ability to add a new inventory item.
		- Authenticated user to update an existing inventory item.
		- Authenticated user to delete an inventory item.

4. What data will the application need to store and manage?

	- Item
		- name
		- quantity
		- description

	- User information 
		- email
		- password
		- isAdmin

5. Are there any specific technical requirements or constraints?

	- Express.js API.
	- MongoDB with Mongoose for data storage and management.
	- RESTful Architecture.

6. What are the security and authentication requirements?

	- Token-based Authentication (JWT).
	- Brcypt hash

7. What are your routes and controllers?

	Routes:

	User

	POST /users/login - User login route.
	POST /users/register - User registration route.

	Inventory Routes:

	GET /items/ - Retrieve a list of all inventory items.
	POST /items/ - Add a new inventory item.
	GET /items/:id - Retrieve a specific inventory item by its ID.
	PUT /items/:id - Update an existing inventory item.
	DELETE /items/:id - Delete an inventory item by its ID.

	Controllers:

	User Controller:

	loginUser
	registerUser

	Inventory Controller:

	getAllInventoryItems
	createInventoryItem
	getInventoryItemById
	updateInventoryItem
	deleteInventoryItem

```

### 3. Initialize an ExpressJS API

- In the discussion folder, create a file called index.js

- In the folder, open a terminal or git bash.

- Then use `npm init -y` to initialize the folder as an npm project

- Using your project txt, check the technical requirements needed and install

```bash

    npm install nodemon express mongoose bcrypt jsonwebtoken 

```

- Then, update the scripts for the project and add the start and dev scripts

#### batchfolder > individual > s82 > discussion > package.json

```json

    {
        "name": "discussion",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node index",
            "dev": "nodemon index"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
            "bcrypt": "^5.1.1",
            "express": "^4.18.2",
            "jsonwebtoken": "^9.0.2",
            "mongoose": "^8.1.3",
            "nodemon": "^3.0.3"
        }
    }

```

- Add your initial expressjs server setup.
- You can copy from our previous projects. 
- To quickly create applications, it is a good strategy to be able to use references as boilerplate codes. Being that we already have basic definitions for some of our files, we can simply copy them.

- Clean and Remove codes. For now, our initial index.js file should look like this.

#### batchfolder > individual > s82 > discussion > index.js
```js

    const express = require("express");
    const mongoose = require("mongoose");

    const cors = require("cors");

    const port = 4000;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.use(cors());

    //MongoDB database
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/course-booking-API?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));


    if(require.main === module){
        app.listen(process.env.PORT || port, () => {
            console.log(`API is now online on port ${ process.env.PORT || port }`)
        });
    }

    module.exports = {app,mongoose};

```

- Next, update the mongodb atlas connection string. If you're using your own connection string, then, you can quickly and simply change the db name within the string.

- MongoDB will automatically create a new DB in atlas once we create document later.

```js
    //MongoDB database
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/inventory-management?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


```

- Add .gitignore to avoid pushing node_modules.

#### batchfolder > individual > s82 > discussion > .gitignore

```gitignore

    node_modules

```

### 4. Create Your Schema

- Create your models folder first.
- Then, Based on your sketch and features, create your schema. 
- Make sure to include field validation and correct data type.

#### batchfolder > individual > s82 > discussion > models > Item.js
```js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: [true, 'Name is Required']
	},
	quantity: {
		type: String,
		required: [true, 'Quantity is Required']
	},
	isActive: {
		type: Boolean,
		default: TransformStreamDefaultController
	}

});


module.exports = mongoose.model('Item', itemSchema);

```

#### batchfolder > individual > s82 > discussion > models > User.js

```js
const mongoose = require('mongoose');

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


module.exports = mongoose.model('User', userSchema);

```

### 5. Organize your route and controller's files and folders

- The number of routes and controllers needed will be based on your models. We have two. 
- Create the controllers and routes folders.

- Create your user routes. Since we have sketched out routes earlier, let's create our endpoints from that.

#### batchfolder > individual > s82 > discussion > routes > user.js
```js

    const express = require("express");
    const userController = require("../controllers/user");

    const router = express.Router();

    router.post("/register", userController.registerUser);
    router.post("/login", userController.loginUser);

    module.exports = router;

```

- Create our registerUser and loginUser controllers. 

- We can copy from our previous projects such as our booking-api. Remove the unnecessary code.

#### batchfolder > individual > s82 > discussion > controllers > user.js

```js

const bcrypt = require('bcrypt');
const User = require("../models/User");

const auth = require("../auth");

module.exports.registerUser = (req,res) => {

    //Our register code should shorten because of our shorter User schema.
	if (!req.body.email.includes("@")){
	    return res.status(400).send({ error: "Email invalid" });
	} else if (req.body.password.length < 8) {
	    return res.status(400).send({ error: "Password must be atleast 8 characters" });
	} else {

		let newUser = new User({
			email : req.body.email,
			password : bcrypt.hashSync(req.body.password, 10)
		})

		return newUser.save()
		.then((user) => res.status(201).send({ message: "Registered Successfully" }))
		.catch(err => {
			console.error("Error in saving: ", err)
			return res.status(500).send({ error: "Error in save"})
		})
	}

};

module.exports.loginUser = (req,res) => {

	if(req.body.email.includes("@")){
		return User.findOne({ email : req.body.email })
		.then(result => {


			if(result == null){
				return res.status(404).send({ error: "No Email Found" });
			} else {

				const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
				if (isPasswordCorrect) {

					return res.status(200).send({ access : auth.createAccessToken(result)})

				} else {

					return res.status(401).send({ message: "Email and password do not match" });

				}

			}

		})
		.catch(err => err);
	} else {
	    return res.status(400).send(false)
	}
};

```
- Since we are to use an auth module here for our JWT, then we have to create that file. Create a new file called auth.js in the discussion folder. 

- We can simply copy the definition from our previous application.

#### batchfolder > individual > s82 > discussion > auth.js

```js

const jwt = require("jsonwebtoken");
const secret = "inventoryManagement";


    module.exports.createAccessToken = (user) => {

        const data = {
            id : user._id,
            email : user.email,
            isAdmin : user.isAdmin
        };

        return jwt.sign(data, secret, {});
        
    };

    module.exports.verify = (req, res, next) => {
        console.log(req.headers.authorization);

        let token = req.headers.authorization;

        if(typeof token === "undefined"){
            return res.send({ auth: "Failed. No Token" });
        } else {
            token = token.slice(7, token.length);
            jwt.verify(token, secret, function(err, decodedToken){

                if(err){
                    return res.send({
                        auth: "Failed",
                        message: err.message
                    });

                } else {

                    req.user = decodedToken;
                    next();
                }
            })
        }
    };

```

- Update the index.js file to include the routes and group them.

#### batchfolder > individual > s82 > discussion > index.js
```js

    /* ... */

    //Routes Middleware
    const itemRoutes = require("./routes/item");
    const userRoutes = require("./routes/user");

    app.use("/items", itemRoutes);
    app.use("/users", userRoutes);

    if(require.main === module){
        app.listen(process.env.PORT || port, () => {
            console.log(`API is now online on port ${ process.env.PORT || port }`)
        });
    }

    module.exports = {app,mongoose};

```

- Run your application using `npm run dev` and then using postman, test your register and login routes.


### 6. Create your item routes and controller's files and folders

- If both routes are working, let's continue to our inventory CRUD.

- Create your items routes. Since we have sketched out routes earlier, let's create our endpoints from that.

#### batchfolder > individual > s82 > discussion > routes > item.js
```js

    //Simply copy the content of the user routes. Remove the routes. Update the imports.
    const express = require("express");
    const itemController = require("../controllers/item");

    //Our features require an authenticated user to access. Import our auth module.
    //Retrieve verify from the auth module
    const {verify} = require("../auth");

    const router = express.Router();

    //You can copy from our project.txt the endpoints and controller names.
    //Comment them in and out as you go to prevent errors in node/express.
    //As previously learned, undefined controllers produce an error in express.

    router.post("/", verify, itemController.addItem);
    //router.get("/", verify, itemController.getAllItems);
    //router.get("/:id", verify, itemController.getItemById);
    //router.put("/:id", verify, itemController.updateItem);
    //router.delete("/:id", verify, itemController.deleteItem);

    module.exports = router;

```
- Let's create our addItem controller.

#### batchfolder > individual > s82 > discussion > controllers > item.js
```js

    const Item = require("../models/Item");

    module.exports.addItem = (req,res) => {

        let newItem = new Item({
            name : req.body.name,
            quantity : req.body.quantity
        });

        newItem.save()
        .then(savedItem => res.status(201).send(savedItem))
        .catch(saveErr => {

            console.error("Error in saving the item: ", saveErr)
            return res.status(500).send({ error: 'Failed to save the item' });
        })

    };

```

- Test your route and controller using postman.

![]()

### 8. Create the get item route and controller

- Comment in the get item route.

#### batchfolder > individual > s82 > discussion > routes > item.js
```js

    //Simply copy the content of the user routes. Remove the routes. Update the imports.
    const express = require("express");
    const itemController = require("../controllers/item");

    //Our features require an authenticated user to access. Import our auth module.
    //Retrieve verify from the auth module
    const {verify} = require("../auth");

    const router = express.Router();

    //You can copy from our project.txt the endpoints and controller names.
    //Comment them in and out as you go to prevent errors in node/express.
    //As previously learned, undefined controllers produce an error in express.

    router.post("/", verify, itemController.addItem);
    router.get("/", verify, itemController.getAllItems);
    router.get("/:id", verify, itemController.getItemById);
    //router.put("/:id", verify, itemController.updateItem);
    //router.delete("/:id", verify, itemController.deleteItem);

    module.exports = router;

```

```js
    /* ... */

    module.exports.getItemById = (req, res) => {

        Item.findById(req.params.id)
        .then(foundItem => {
            if (!foundItem) {
                return res.status(404).send({ error: 'Item not found' });
            }
            return res.status(200).send({ foundItem });
        })
        .catch(err => {
            console.error("Error in fetching the Item: ", err)
            return res.status(500).send({ error: 'Failed to fetch Item' });
        });

    };

```

- Test your route and controller using postman.

![]()

### 9. Create the update item route and controller

- Comment in the get item route.

#### batchfolder > individual > s82 > discussion > routes > item.js
```js

    //Simply copy the content of the user routes. Remove the routes. Update the imports.
    const express = require("express");
    const itemController = require("../controllers/item");

    //Our features require an authenticated user to access. Import our auth module.
    //Retrieve verify from the auth module
    const {verify} = require("../auth");

    const router = express.Router();

    //You can copy from our project.txt the endpoints and controller names.
    //Comment them in and out as you go to prevent errors in node/express.
    //As previously learned, undefined controllers produce an error in express.

    router.post("/", verify, itemController.addItem);
    router.get("/", verify, itemController.getAllItems);
    router.get("/:id", verify, itemController.getItemById);
    router.put("/:id", verify, itemController.updateItem);
    //router.delete("/:id", verify, itemController.deleteItem);

    module.exports = router;

```

```js
    /* ... */

    module.exports.updateItem = (req, res) => {

        let itemUpdates = {
            name: req.body.name,
            quantity: req.body.quantity
        }

        return Item.findByIdAndUpdate(req.params.id, itemUpdates)
        .then(updatedItem => {

            if (!updatedItem) {

                return res.status(404).send({ error: 'Item not found' });

            }

            return res.status(200).send({ 
                message: 'Item updated successfully', 
                updatedItem: updatedItem 
            });

        })
        .catch(err => {
            console.error("Error in updating an Item : ", err)
            return res.status(500).send({ error: 'Error in updating an Item.' });
        });
    };

```

- Test your route and controller using postman.

![]()

### 10. Create the delete item route and controller

- Comment in the get item route.

#### batchfolder > individual > s82 > discussion > routes > item.js
```js

    //Simply copy the content of the user routes. Remove the routes. Update the imports.
    const express = require("express");
    const itemController = require("../controllers/item");

    //Our features require an authenticated user to access. Import our auth module.
    //Retrieve verify from the auth module
    const {verify} = require("../auth");

    const router = express.Router();

    //You can copy from our project.txt the endpoints and controller names.
    //Comment them in and out as you go to prevent errors in node/express.
    //As previously learned, undefined controllers produce an error in express.

    router.post("/", verify, itemController.addItem);
    router.get("/", verify, itemController.getAllItems);
    router.get("/:id", verify, itemController.getItemById);
    router.put("/:id", verify, itemController.updateItem);
    router.delete("/:id", verify, itemController.deleteItem);

    module.exports = router;

```

```js
    /* ... */

    module.exports.deleteItem = (req, res) => {

        return Item.deleteOne({ _id: req.params.id})
        .then(deletedResult => {

            if (deletedResult < 1) {

                return res.status(400).send({ error: 'No Item deleted' });

            }

            return res.status(200).send({ 
                message: 'Item deleted successfully'
            });

        })
        .catch(err => {
            console.error("Error in deleting an Item : ", err)
            return res.status(500).send({ error: 'Error in deleting an Item.' });
        });
    };


```

- Test your route and controller using postman.

![]()

## Activity
Use the GS Framework
- [GS Framework](https://www.markdownguide.org/basic-syntax)

```
Developer's Note:
Include hands-on activities to reinforce theoretical concepts. Clearly specify the purpose of each activity and its relevance to the overall learning goals.
```
### Activity References
```
Developer's Note:
Include references to aid bootcampers in research and activity development.
```
Sample:
- [Markdown Basics](https://www.markdownguide.org/basic-syntax)

### Activity Instructions

- Type of Activity:
    - Coding
    - Individual

#### Instructions

**Activity 1**
1. In the MTE/s68 folder, create a folder called activity-1
2. Create a simple Fitness Tracker: Build a fitness tracking application where users can log their workouts and track their progress over time. 
    - A user should be able to add, retrieve, update, and delete workouts.
        - Users can only access their own workout documents.
    - Each workout should include exercise type, duration, date/time, progress and status.
        - date/time does not need to be Date type.
Other requirements:
3. Create a fitnessApp.json in the project folder and add all available routes.
    - Follow the template to be given by your instructor.
4. Add, commit and push your updates to your individual repo.
5. Add the individual repo link in Boodle as s80 - App Building API - 1

#### Activity Solution:

**Solution will vary from each student. This will be graded automatically using endpoint jsons.**
