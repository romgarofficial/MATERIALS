# Introduction to Debugging

## Resources

### References

- [What is Debugging?](https://www.techtarget.com/searchsoftwarequality/definition/debugging)
- [HTML Debugging](https://www.linkedin.com/advice/0/what-some-common-html-css-debugging-tools-techniques)
- [CSS Debugging?](https://www.smashingmagazine.com/2021/10/guide-debugging-css/)
    
### Tools/Technologies Version

- CSS - ^3.0.0
- HTML - 5.0.0
- JS - ES14
- ExpressJS - 
- ReactJS -
 
## Code Discussion #1

### 1. Folder and File Preparation

- In the individual/fullstack folder, create a new folder called s68.
- In the s68 folder, create a new folder called discussion-1
- Instructor: Push discussion-1-template as a repo in Batch Resource.
- Bootcamper: In the discussion-1 folder, pull the discussion-1-template repo using `git pull <sshUrl>`
- Open your sublime IDE in the folder.

### 2. Debugging JS

- The best way to check if a JS program or file has an error is through the Browser Console. The console is able to log errors as our JS program runs.

- Checking the browser console, there is immediately, an error message. 

![1](./images/1.png)

- Error messages are not something to be scared of but instead something to be learned from. The error message here is verbose and is able to tell us What the error is, Where the error is.

![2](./images/2.png)

- The error message tells us there is a Syntax error and it is in our index.js file, line 10. The "index.js:27" part of the error message tells us which file the error is in, "index.js" and which line, "27"

- Checking our index.js file, tells us that there is indeed an error.

- One of the most common problems in JS and most programming languages is syntax and misspellings. 

![3](./images/3.png)

-  Let's fix this error.

```javascript

        //Syntax Error

    const users = [
        {
            username: "shinji1",
            role: "swordsman"
        },

        {
            username: "reirei02",
            role: "healer"
        },

        {
            username: "asukaEva3",
            role: "rogue"
        }

    ];


    function displayUsernames() {

        users.forEach((user)=>{

            console.log(user.username);

        })

    }

```

**output**

![4](./images/4.png)

- After our update, there should be another error Message. But why didn't it show immediately? 

- That is because Javascript is a single-thread programming language, It only runs in one way, therefore any uncaught error with try-catch causes the entire program to stop at the error point.

- When JS code takes a significant amount of time to run and prevents the execution of the following code, it is called "blocking."

- Now, that we understand what happened, Let's identify further, the error. The error message is a Reference Error. In our case the cause of this error is a "not defined error" where we are trying to access or call a variable taht does not exist. It can also be seen that is in line 45.

- Let's update our code:

```js

    /* ... */

    //The reference error here is that we are trying to push the "userDetail" into the users array. However, userDetail variable does not exist within our function instead has a "user" variable. Let's update the code to reflect.
    function createUser(username,role) {

        const user = {

            username,
            role

        }

        users.push(user);

    }

    createUser("makoto", "healer");

```

**Output**

![5](./images/5.png)

- A new error has come up. A TypeError on line 56. TypeErrors in JS are errors that occur when an operation is performed on a value of the wrong type, such as trying to call a method on an undefined or null value. In this, it seems we are access a property from an undefined value.

![6](./images/6.png)

- The error message said that we are getting a TypeError because we're trying to access the property role from an undefined element. Let's make use of the console.log() method.

- The console.log() method is one of the most used methods for debugging in JS. Let's try to check each user element to check which is undefiend and use console.log()

```js

    /* ... */

    function displayAvailableRoles(){
    
    //We'll use a combination of two usual JS debugging techniques, the use of console log and code isolation. For now, let's comment out the erratic code and log users[i] to check each item instead.
    for(let i = 0; i <= users.length; i++){

        console.log(users)
        //console.log(users[i].role);  

    }

}

displayAvailableRoles();

```
**output**

![7](./images/7.png)

- It seems there is an undefined result. However, checking the users array, there are no undefined elements. So, where does this undefined come from?

- It's because our loop is going out of bounds. The loop condition is wrong where our loop runs one more time when our counter is equal to users.length. However, because arrays start at 0, there are no elements at that index. The last element in an array is at array[array.length-1].

- So, let's update the loop.

```js

    /* ... */

    function displayAvailableRoles(){
    
    //We'll use a combination of two usual JS debugging techniques, the use of console log and code isolation. For now, let's comment out the erratic code and log users[i] to check each item instead.
    //Simply updating our loop condition should do it.
    for(let i = 0; i < users.length; i++){

        console.log(users)
        //console.log(users[i].role);  

    }

}

displayAvailableRoles();

```
**output**

![8](./images/8.png)

- There should no longer be an undefined element being logged.

- Return the isolated code. It debugging, it's not always the logged line in the error message that is the problem. We must also be aware of identifying the root of the problem. Effective use of console.log() and code isolation will help us achieve this.

```js

    /* ... */

    function displayAvailableRoles(){
    
    //We'll use a combination of two usual JS debugging techniques, the use of console log and code isolation. For now, let's comment out the erratic code and log users[i] to check each item instead.
    //Simply updating our loop condition should do it.
    for(let i = 0; i < users.length; i++){

        console.log(users[i].role);  

    }

}

displayAvailableRoles();

```

**output**

![8](./images/9.png)

- There is no more error messages. However, an array is returned as empty.

- Another common problem is scoping. Erratic scoping sometimes can cause erratic behaviors especially if a Global variable is added. Check the following code. There is no "error" here but the behavior is erratic. Can you tell the erratic behavior?

```js

    function returnUsernameArray(){

    let users = [];

    for(let i = 0; i < users.length; i++){

        users.push(users[i].username);

    }

    return users;

    }

    let usernames = returnUsernameArray();

    console.log(usernames)

```

- The problem in the code is that the function is erratically using a variable name that is already declared as a global variable.

- Let's log the users array.

```js

    /* ... */

    console.log(users);

```

**output**

- The function could not properly add the items because there is confusion in the provided variables. 

![10](./images/10.png)

- Instead, let's update the function to have a more unique name within the function.

```js

    function returnUsernameArray(){

        let usernamesArr = [];

        for(let i = 0; i < users.length; i++){

            usernamesArr.push(users[i].username);

        }

        return usernamesArr;

    }

    let usernames = returnUsernameArray();

    console.log(usernames)

    console.log(users)

```

## Activity #1

### Activity References

Sample:
- [Markdown Basics](https://www.markdownguide.org/basic-syntax)

### Activity Instructions

- Type of Activity:
    - Coding
    - Individual

#### Instructions

1. In the s68 folder, create a new folder called activity-1
2. Instructor: Push activity-1-template as a repo in Batch Resource.
3. Bootcamper: In the activity-1 folder, pull the activity-1-template repo using `git pull <sshUrl>`
4. Analyze and debug the index.js file to avoid any errors
    - Ensure that all methods works as intended.
5. Update the individual repo with the appropriate commit message.
6. Link your individual repo to Boodle.

#### Activity Solution:

- Activity Solution can be found in : [activity-1/index.js](./activity-1/index.js)

## Code Discussion #2

### 1. Folder and File Preparation

- In the individual/fullstack folder, create a new folder called s68.
- In the s68 folder, create a new folder called discussion-2
- Instructor: Push discussion-2-template as a repo in Batch Resource.
- Bootcamper: In the discussion-2 folder, pull the discussion-2-template repo using `git pull <sshUrl>`
- Install the node_modules with `npm install`, then run using `npm run dev`
- Open your sublime IDE in the folder.

### 2. Debugging ExpressJS

- In ExpressJS, the terminal is used as the console. Most errors and console.logs() will be displayed here.

- Upon running our application, There is an error in our terminal.

![1](./images/Screenshot_2.png)

- This displayed error means that there is a get route that has an undefined middleware.
- Let's check our routes to identify which get method route produces this error.
- Scanning over the error, in particular, the error is coming from our task.js route file.

![1](./images/Screenshot_3.png)

- Just like reading errors in JS, we can also trace which file returns an error within the error messages itself.

- Let's check our task.js route file and log our middlewares used in the file to check which returns undefined.

```js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { verify } = require("../auth");

//log the middlewares in our route file to check our middlewares
console.log("verify: ", verify)
console.log("taskController: ", taskController)

router.get("/all", verify, taskController.getTasks)
router.post("/", verify, taskController.addTask)
router.patch("/:taskId", verify, taskController.updateTaskStatus)
router.delete("/:taskId/activate", verify, taskController.deleteTask)

module.exports = router;

```

- Checking our middlewares, none is returning undefined. So, how are we getting this error?

- Once checking if we have undefined middlewares, next, check our route codes.

- You will find that in our get() method route, we are trying to retrieve the .getTasks() controller. Checking our taskControllers, we do not have a getTasks controller but rather a getAllTasks controller.

![1](./images/Screenshot_4.png)

- Let's update our route. Comment out our console.log() as those were only used for debugging. Always comment out or delete console.logs() that were only used for debugging.


```js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { verify } = require("../auth");

//log the middlewares in our route file to check our middlewares
// console.log("verify: ", verify)
// console.log("taskController: ", taskController)

router.get("/all", verify, taskController.getAllTasks)
router.post("/", verify, taskController.addTask)
router.patch("/:taskId", verify, taskController.updateTaskStatus)
router.delete("/:taskId/activate", verify, taskController.deleteTask)

module.exports = router;

```

- Check our terminal again. This where nodemon can be very helpful as we save our code, nodemon will re-run our application.

- There is another error. Trace the error by reading the error message.

![1](./images/Screenshot_5.png)

- Tracing code in ExpressJS and other frameworks usually starts from reading the error message.
- Here we'll find that "expresss is not defined" error in index.js. Which means a spelling error that results in an error.
- Update our index.js file to update our code to the correct spelling.

```js

    /* ... */

    const app = express();

    app.use(cors());

    /* ... */

```

![1](./images/Screenshot_6.png)

- There shouldn't be any error in our application. However, to best check if our API is clear of errors, let's use our Postman App to check our routes. Being able to check and review our application is crucial and the Postman API tester is an important tool.

- Let's test our registration route using Postman. Check our controller to define the request body structure needed.

- Upon checking our Postman request there is an error.

![1](./images/Screenshot_7.png)

- Check our terminal to trace the error further. Tracing our error, we can see that we are getting a TypeError, accessing the 'email' property of an undefined element. You can recall to our JS debugging session that accessing the properties of an undefined variable results to a TypeError.

![1](./images/Screenshot_9.png)

- Let's check our user controller. We can find in our code that the only variable we are accessing the email property of is req.body.

- Let's add a console.log() to check the req.body.

```js
    const User = require("../models/user");
    const bcrypt = require("bcrypt");
    let salt = bcrypt.genSaltSync(10);
    const auth = require("../auth");

    module.exports.registerUser = (req,res) => {

        console.log("registerUser reqBody",req.body);

            let newUser = new User({
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 10)
            })

            return newUser.save()
            .then((user) => res.status(201).send({ message: "Registered Successfully" }))
            .catch(err => res.status(500).send({ error: "Error in saving" }))   

    };

    /* ... */
```

- Run another request in Postman. Route testing and debugging requires this cycle: code update -> postman request

![1](./images/Screenshot_10.png)

- There is still an error returned. Let's check the terminal for the result of our console.log()

![1](./images/Screenshot_11.png)

- The result of our console.log() returns that our req.body seems to be undefined. How does this happen? 

- The usual reason of the whole req.body being undefined is because of a probable missing middleware express.json()
- Let's check our index.js for this middleware and we'll find that it is missing. 

```js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/task");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin:admin123@cluster0.7iowx.mongodb.net/task-app?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/tasks", productRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };

```

- The express.json() app middleware is crucial as it is used to parse request body from json to js object.
- We should now be able to register successfully.

![1](./images/Screenshot_12.png)

- Test our other routes.

- Login and details route should not return an error:

- Login:

![1](./images/Screenshot_13.png)

- Details:

![1](./images/Screenshot_14.png)

- Let's add a new task using our logged in user.

![1](./images/Screenshot_18.png)

- An error is returned again. Similar to our previous error, it seems there is a TypeError attempting to access undefined again.

- According to our error, in the module.exports.addTask method, we are trying to access the name property of an undefined variable.

![1](./images/Screenshot_15.png)

- Check the task controller. In the addTask controller, let's log the req.body once more.

```js
module.exports.addTask = (res,req) => {

	console.log(req.body)
    
	let newTask = new Task({
		name : req.body.name,
		description : req.body.description
	});

	return newTask.save()
	.then((task) => res.status(201).send({task}))
	.catch(err => res.status(500).send({ error: "Error in Save", details: err}))  
}

```

- req.body seems undefined again. However, we already added our express.json() middleware. What could be another common reason for this error? Another possible error is wrong req and res parameters. res and req are incorrectly ordered. 
- In route handlers, request always comes before response whatever the name of the parameters are. Update the parameters:

```js
module.exports.addTask = (req,res) => {

	console.log(req.body)
    
	let newTask = new Task({
		name : req.body.name,
		description : req.body.description
	});

	return newTask.save()
	.then((task) => res.status(201).send({task}))
	.catch(err => res.status(500).send({ error: "Error in Save", details: err}))  
}

```

- Updating the parameters should now allow us to add tasks properly:

![1](./images/Screenshot_19.png)

- Let's now try to update our task to complete status using postman again.

![1](./images/Screenshot_20.png)

- There should be an error in saving and upon checking the returned error in postman, we can see our errors.

![1](./images/Screenshot_21.png)

- Upon checking our error you'll find that we're trying to pass an object to where a string should have been.

- Let's check our updateTask controller. There seems to be a misuse error. findByIdAndUpdate() has two arguments. id and the update. The id should be a simple string. However, in our case, it was improperly added in an object.


```js

    module.exports.updateTaskStatus = (req, res) => {

        let updatedTask = {
            status: req.body.status
        }

        return Task.findByIdAndUpdate({id: req.params.taskId}, updatedTask)
        .then((Task) => res.status(200).send({ 
            message: 'Task updated successfully', 
            updatedTask: Task 
        }))
        .catch(err => res.status(500).send({ error: "Error in Saving", details: err}))
    }

```

- Let's update the code properly and simply pass req.params.taskId as this is our id and is a string.


```js

    module.exports.updateTaskStatus = (req, res) => {

        let updatedTask = {
            status: req.body.status
        }

        return Task.findByIdAndUpdate(req.params.taskId, updatedTask)
        .then((Task) => res.status(200).send({ 
            message: 'Task updated successfully', 
            updatedTask: Task 
        }))
        .catch(err => res.status(500).send({ error: "Error in Saving", details: err}))
    }

```

- Using postman to run the request again, we should now be able to update our task.

![1](./images/Screenshot_22.png)

- Let's then check our deleteTask route. Use postman again to run a delete method request.

![1](./images/Screenshot_23.png)

- There should be another TypeError. However, this is different from our previous errors. 

![1](./images/Screenshot_24.png)

![1](./images/Screenshot_25.png)

- This time the errors relays "is not function" which means, that whatever we were trying to invoke or use with () is not actually a function. 

- This may be because of invoking a method that does not exist in the object or trying to invoke a non-function code entirely (undefined or null).

- Let's check the code. Read the code properly and we'll find the controller trying to invoke Task.deleteById({ _id: req.params.taskId }).

```js

module.exports.deleteTask = (req, res) => {

	return Task.deleteById({ _id: req.params.taskId })
	.then((deleteStatus) => res.status(200).send({ 
    	message: 'Task deleted successfully'
    }))
	.catch(err => res.status(500).send({ error: "Error in Saving", details: err}))  
}

```

- There is no deleteById() method in mongoose models. Which means we were trying to run a method that didn't exist and therefore a misuse and syntax error resulting in a TypeError: "is not function" error.

- Update our code. The correct syntax should be deleteOne().

```js

module.exports.deleteTask = (req, res) => {

	return Task.deleteOne({ _id: req.params.taskId })
	.then((deleteStatus) => res.status(200).send({ 
    	message: 'Task deleted successfully'
    }))
	.catch(err => res.status(500).send({ error: "Error in Saving", details: err}))  
}

```

- We should now be able to delete document properly.

![1](./images/Screenshot_26.png)

## Activity #2

### Activity References

Sample:
- [Markdown Basics](https://www.markdownguide.org/basic-syntax)

### Activity Instructions

- Type of Activity:
    - Coding
    - Individual

#### Instructions

1. In the s68 folder, create a new folder called activity-2
2. Instructor: Push activity-2-template as a repo in Batch Resource.
3. Bootcamper: In the activity-2 folder, pull the activity-2-template repo using `git pull <sshUrl>`
4. Analyze and debug the index.js file to avoid any errors
    - Ensure that all methods works as intended.
5. Update the individual repo with the appropriate commit message.
6. Link your individual repo to Boodle.

#### Activity Solution:

- Activity Solution can be found in : [activity-2/index.js](./activity-2/index.js)

## Code Discussion #3

### 1. Folder and File Preparation

- In the individual/fullstack folder, create a new folder called s68.
- In the s68 folder, create a new folder called discussion-3
- Instructor: Push discussion-3-template as a repo in Batch Resource.
- Bootcamper: In the discussion-3 folder, pull the discussion-3-template repo using `git pull <sshUrl>`
- Install the node_modules with `npm install`, then run using `npm start`.
- Make sure to run the discussion-2 api using `npm run dev`
- Open your sublime IDE in the folder.

### 2. Debugging ReactJS

- Run our application. Immediately after running the app, there should be an error. 

- Fortunately, ReactJS errors are very visual and verbose. In which there are noticeable and detailed error messages.

![1](./images/Screenshot_27.png)

- We can easily see that the error stems from missing ReactJS fragments in the appnavbar component. If you recall, in JSX, whenever we try to return ReactJS elements they should be wrapped in a single element or with React Fragments <></>

- Update the AppNavbar code.

```js

/* ... */
		<Navbar bg="primary" expand="lg">
			<Container fluid>
			    <Navbar.Brand as={Link} to="/">Tasks</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ms-auto">
				        <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
				        {(user.id !== null) 
                        
                            ? 
								<>
                                    <Nav.Link as={NavLink} to="/tasks" exact="true">Tasks</Nav.Link>
                                    <Nav.Link as={Link} to="/addTask">Add Task</Nav.Link>
                                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                </>
							: 
								<>
									<Nav.Link as={Link} to="/login">Login</Nav.Link>
									<Nav.Link as={Link} to="/register">Register</Nav.Link>
								</>
						}
				    </Nav>
			    </Navbar.Collapse>
			</Container>
		</Navbar>
		)
}
```
- Due to hot reloading, our page should refresh immediately, however, there seems to be more errors! in fact, there are 2.
- In ReactJS, multiple errors can be reported at once.

![1](./images/Screenshot_28.png)

- Let's first handle the first error. Read the error message. "Can't Resolve" errors usually stem from missing or wrong imports of modules.

- In Logout.js, it seems that the userContext is being imported incorrectly.

- Let's fix the Logout.js code.

```js

import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

/* ... */

```

- Though our page will reload, an error message remain. 

- We can read the error message where there seems to be misspelling and wrong syntax in our App.js file.

![1](./images/Screenshot_29.png)

- Update the code to fix the misspelling.

```js

    /* ... */

        useEffect(() => {

        fetch(`http://localhost:4000/users/details`, {
        headers: {
            Authorization: `Bearer ${ localStorage.getItem('token') }`
        }
        })
        .then(res => res.json())
        .then(data => {
        if (typeof data.user !== "undefined") {

            setUser({
            id: data.user._id,
            isAdmin: data.user.isAdmin
            });

        } else {

            setUser({
            id: null
            });

        }

        })

        }, []);
        

    /* ... */

```

- There should not be a visible error message for now. To continue checking our application however, let's test our pages and features.

- Home Page

![1](./images/Screenshot_30.png)

- Register Page

![1](./images/Screenshot_31.png)

- Login Page

![1](./images/Screenshot_32.png)

- There seems to be an error in our login page. Read the error message.

![1](./images/Screenshot_33.png)

- Assignment to Constant Variable. There seems to be a code where we are erratically assigning to a constant variable. The error here likely stems from an incorrect assignment.

- Test the page again. The error only occurs upon typing into the email input.

![1](./images/Screenshot_34.png)

- Scan the file for error. Check the input elements. WE can find then in the login page, within the email input, misuse and assignment of a state. The email state is directly assigned to. Instead, being a state, it should be updated using the setter function.

- Let's update the code.

```js

    /* ... */

                <Form onSubmit={(e) => authenticate(e)}>
                    <h1 className="my-5 text-center">Login</h1>
                    <Form.Group controlId="userEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
    /* ... */

```
- Upon Logging In, we should now be able to properly go to the tasks page without issues.

![1](./images/Screenshot_35.png)

- There should be no visible error currently. But just to check, view the console and we'll find a warning in this page.

![1](./images/Screenshot_36.png)

- This warning is a result of not adding a key prop to a mapped ReactJS element or component. ReactJS properly tracks elements mapped from an array trhough this prop.

- Although a warning is not technically an error, it's best to address it as this cause errors further down the line and especially in hosting.
- We can add a key prop in our Col component as this is the component being mapped. Key props value must be unique. We can use the id of each task as the key prop value

- Go the Task page component and update the code. Add a key prop.

```js
    /* ... */

    	return(
		<>
            {
            	user
                ?
                        tasks.length > 0

                        ?
                        <>  
                        <h1 className='text-center mt-5'>Tasks</h1>
                        <Row> 
                            
                                {   

                                    tasks.map(task => { 

                                        return (
                                            <Col md={3} key={task._id}>
                                                <TaskCard task={task} />
                                            </Col>
                                        )
                                        
                                    })
                                }   

                        </Row>

    /* ... */

```

- The Warning should now disappear. 

![1](./images/Screenshot_37.png)

- Let's now try our update and delete features.

- Update

![1](./images/Screenshot_38.png)

- Delete

![1](./images/Screenshot_39.png)

- Both features seem to be working correctly. 

- Let's continue to our addTask page. 

![1](./images/Screenshot_40.png)

- There should be an error alert message and There should be an internal server error upon checking the console.
- Being there is an error only when we submit the form and get the response, we can then assess that the error occurs upon server response.
- In this case, the best tool to use is console.log(). Upon dealing with incorrect responses or error messages as response, we can use console.log() to check the response.

```js

/* ... */
    	function createTask(e){

		e.preventDefault();

		let token = localStorage.getItem('token');
		fetch('http://localhost:4000/tasks/',{

			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({

				taskName: name,
				description: description

			})
		})
		.then(res => res.json())
		.then(data => {

            //Check response details
			console.log(data);
			
            if (data.error === "Error in Save") {

				Swal.fire({

					icon: "error",
					title: "Unsuccessful Task Creation",

				})


/* ... */

```
- Check the response details to see the error details.

![1](./images/Screenshot_41.png)

- There is an error in saving, in the field validation and it seems that the name field is missing.

- Let's review the fetch() code. You will find that the request body properties are incorrect. The request body should be structured as needed in our API. 
- In our API, we use req.body.name to retrieve a name input from our request. 

![1](./images/Screenshot_42.png)

- However, incorrectly, "taskName" was added in the request body in our fetch. We have to match the requirements of the API and update our request body in the fetch()

- Comment out the use of console.log() in our page as it was only used for debugging.

```js

/* ... */
    	function createTask(e){

		e.preventDefault();

		let token = localStorage.getItem('token');
		fetch('http://localhost:4000/tasks/',{

			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({

				name: name,
				description: description

			})
		})
		.then(res => res.json())
		.then(data => {

            //Check response details
			//console.log(data);
			
            if (data.error === "Error in Save") {

				Swal.fire({

					icon: "error",
					title: "Unsuccessful Task Creation",

				})


/* ... */

```

- We should now be able to add a task successfully.

![1](./images/Screenshot_43.png)

- Let's then check if we can logout correctly.

## Activity #3

### Activity References

### Activity Instructions

- Type of Activity:
    - Coding
    - Individual

#### Instructions

1. In the s68 folder, create a new folder called activity-3
2. Instructor: Push activity-3-template as a repo in Batch Resource.
3. Bootcamper: In the activity-3 folder, pull the activity-3-template repo using `git pull <sshUrl>`
4. Analyze and debug the index.js file to avoid any errors
    - Ensure that all pages works as intended.
5. Update the individual repo with the appropriate commit message.
6. Link your individual repo to Boodle.

#### Activity Solution:

- Activity Solution can be found in : [activity-3/index.js](./activity-3/index.js)