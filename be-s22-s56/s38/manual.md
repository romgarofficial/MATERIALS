# NodeJS - Introduction
### Discussion Topics List
- Node Installation
- require()
- http
- createServer()
- listen()
- request
- response
- response.writeHead()
- Content-Type
- response.end()
- request.url() with if-else
- Postman

### Activity Topics List
#### Discussed
- require()
- http
- createServer()
- listen()
- request
- response
- response.writeHead()
- Content-Type
- response.end()
- request.url() with if-else
- Postman

#### Researched
- nodemon installation
- request.url with http method

## Resources
### References
- [NPM Install](https://docs.npmjs.com/cli/v7/commands/npm-install)
- [Bootcamp Installation Guides]()
- [What Does Module Mean](https://www.techopedia.com/definition/3843/module)
- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Node JS Documentation createServer](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener)
- [Request Object](https://developer.mozilla.org/en-US/docs/Web/API/Request)
- [Response Object](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [What is a Computer Port](https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/)
- [Request Response Cycle](https://iq.opengenus.org/content/images/2019/09/Untitled-1-.png)

    
### Tools/Technologies Version

- Node - ^20.11.2

## Code Discussion
### 1. Folder and File Preparation
Inside the **s38 folder**, create a **discussion folder** and an **index.js** the discussion folder.


### 2. Step 1

#### Terminal
Verify installation of node JS
```terminal
node --version
```
**Important Note**
- If node JS is not installed the student's device, have them install it. Take note of the node version needed in the "Tools/Technologies Version" secion.
- Refer to "references" section of this file to find the documentation for bootcamp installation guides.


1. Use the "require" directive to load the HTTP module of node JS.
- Use the "require" directive to load Node.js modules
- A "module" is a software component or part of a program that contains one or more routines
- The "http module" lets Node.js transfer data using the Hyper Text Transfer Protocol
- The "http module" is a set of individual files that contain code to create a "component" that helps establish data transfer between applications
- HTTP is a protocol that allows the fetching of resources such as HTML documents
- Clients (browser) and servers (node JS/express JS applications) communicate by exchanging individual messages.
- The messages sent by the client, usually a Web browser, are called requests
- The messages sent by the server as an answer are called responses.
#### batchfolder > individual > s38 > discussion > index.js
```js
let http = require("http");
```

2. Create a server.
- Using this module's createServer() method, we can create an HTTP server that listens to requests on a specified port and gives responses back to the client
- The http module has a createServer() method that accepts a function as an argument and allows for a creation of a server
- The arguments passed in the function are request and response objects (data type) that contains methods that allow us to receive requests from the client and send responses back to it
#### batchfolder > individual > s38 > discussion > index.js
```js
let http = require("http");

http.createServer(function (request, response) {});
```

3. Define the port number that the server will be listening in to.
- A port is a virtual point where network connections start and end.
- Each port is associated with a specific process or service
- The server will be assigned to port 4000 via the "listen(4000)" method where the server will listen to any requests that are sent to it eventually communicating with our server
#### batchfolder > individual > s38 > discussion > index.js
```js
let http = require("http");

http.createServer(function (request, response) {}).listen(4000);
```

4. Send a response back to the client.
#### batchfolder > individual > s38 > discussion > index.js
```js
/*...*/
http.createServer(function (request, response) {
    
    // Use the writeHead() method to:
    // Set a status code for the response - a 200 means OK
    // Set the content-type of the response as a plain text message
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response with text content 'Hello World'
    response.end('Hello World');

}).listen(4000);
```
5. Create a console log to indicate that the server is running.
#### batchfolder > individual > s38 > discussion > index.js
```js
http.createServer(function (request, response) {

    /*...*/

}).listen(4000);

// When server is running, console will print the message:
console.log('Server running at localhost:4000');
```
6. Run the server.
#### batchfolder > individual > s38 > discussion > index.js
```terminal
node index.js
```

7. Access the port 4000 via the browser to see the response sent back to the client.
```text
Browser > localholst:4000
```
8. Refactor the server to prepare it in creating routes
```js
const http = require('http');

// Creates a variable "port" to store the port number
const port = 4000;

// Creates a variable "app" that stores the output of the "createServer" method
// This will allow us to use http createServer's other methods. 
const app = http.createServer((request, response) => {
    /* ... */
});

// Uses the "app" and "port" variables created above.
// Since the app is now our defined server we can then use the listen method here to assign our port and run our server
// This makes our code and server creating more readable rather than having to chain .listen() at the end of createServer() which is a little longer.
app.listen(port);

// When server is running, console will print the message:
console.log(`Server now accessible at localhost:${port}.`);
```

9. Stop the server.
#### batchfolder > individual > s38 > discussion > terminal
```terminal
ctrl + c
```

10. Run the server.
#### batchfolder > individual > s38 > discussion > terminal
```terminal
node index.js
```

11. Create a condition and a response when the route "/greeting" is accessed.
#### batchfolder > individual > s38 > discussion > index.js
```js

/*...*/

const app = http.createServer((request, response) => {

    // Accessing the "greeting" route returns a message of "Hello World"
    // "request" is an object that is sent via the client (browser)
    // The "url" property refers to the endpoint of the url in the browser
    // The endpoints are usually the last end of a URL.
    // In the full address: http://localhost:4000/greeting to access this request
    // /greeting is the endpoint 
    if (request.url == '/greeting') {

        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end('Hello Again')

    }

});
```
**Important Note**
- In simpler terms, a route is like a set of instructions for your server on how to respond when someone visits a particular URL using a certain HTTP method. It determines what action should be taken and what response should be sent back to the client.

12. Access the "/greeting" route via the browser to see the response sent back to the client.
#### batchfolder > individual > s38 > discussion > terminal
```terminal
Browser > localhost:4000/greeting
```

13. Create a condition and a response when the route "/greeting" is accessed.
#### batchfolder > individual > s38 > discussion > index.js
```js
/*...*/

const app = http.createServer((request, response) => {

    if (request.url == '/greeting') {

        /*...*/

    // Accessing the "homepage" route returns a message of "This is the homepage"
    } else if (request.url == '/homepage') {

        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end('This is the homepage')

    }

});
```

14. Access the "/homepage" route via the browser to see the response sent back to the client.
#### batchfolder > individual > s38 > discussion > terminal
```terminal
Browser > localhost:4000/homepage
```

15. Create a condition and a response when any other route is accessed.
#### batchfolder > individual > s38 > discussion > index.js
```js
/*...*/

const app = http.createServer((request, response) => {

    if (request.url == '/greeting') {

        /*...*/

    } else if (request.url == '/homepage') {

        /*...*/

    // All other routes will return a message of "Page not available"
    } else {

        // Set a status code for the response - a 404 means Not Found
        response.writeHead(404, {'Content-Type': 'text/plain'})
        response.end('Page not available')

    }

});
/*...*/
```
16. Access any other route via the browser to see the response sent back to the client.
#### Browser > localhost:4000/hello
However, currently, we cannot use the same endpoint for each route or else our application may wrongfully produce the required response.

17. Refactor the elseif codes
#### batchfolder > individual > s38 > discussion > index.js
```js
// Add an array of items to return to the client.
let items = ["Laptop","Desktop","Tablet"]

//Add 2 routes of the same endpoint but different responses.
const app = http.createServer((request, response) => {

    /*...*/

    } else if (request.url == '/homepage') {

        /*...*/

    } else if (request.url == '/items') {

        //This route should get the items array and send it to our client.
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end(items)
    } 

    else if (request.url == '/items') {

        //This route should be used to add another item in the items array.
        //For now, we will simply simulate and respond a message
        //This will be further elaborated in ExpressJS
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end("This route will be used to add another item")

    } 
    
    else {

        // Set a status code for the response - a 404 means Not Found
        response.writeHead(404, {'Content-Type': 'text/plain'})
        response.end('Page not available')

    }

});

/* ... */
```
18. Add the following url in the browser:http://localhost:4000/items. You will see that what will be returned will always be the first items route.
#### Browser > http://localhost:4000/items

19. Instead, the requests and responses can be further specified using HTTP methods. 
- HTTP methods are used in conjunction with endpoints to produce different responses for different requests. 
- This way, routes can share the same endpoints and yet still produce different responses.
#### batchfolder > individual > s38 > discussion > index.js
```js
/* ... */

const app = http.createServer((request, response) => {

    /*...*/

    } else if (request.url === '/items' && request.method === 'GET') {

        //The default HTTP method made by the browser is GET.
        console.log(request.method);

        //This route should get the items array and send it to our client.
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end(items)
    } 

    else if (request.url == '/items' && request.method === 'POST') {

        //Will display POST everytime a POST request is sent from a client.
        console.log(request.method);

        //This route should be used to add another item in the items array.
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end("This route will be used to add another item")

    } 
    
    else {

        // Set a status code for the response - a 404 means Not Found
        response.writeHead(404, {'Content-Type': 'text/plain'})
        response.end('Page not available')

    }

});

/* ... */
```

20. Add the following url in the browser:http://localhost:4000/items. You will see that what will be returned will still be the first items route. The browser, however, can only send GET requests.
#### Browser > http://localhost:4000/items

21. Open postman and create accounts. Then, Create a simple get request with the following http://localhost:4000/items
#### Postman > localhost:4000
**Important Note**
- Postman is preferred for API testing over browsers due to its specialized environment, support for various request types, and improved response visualization.
- Browsers lack the focused capabilities and customization options for thorough API testing.
- Postman will be able to create a POST request unlike the browser.

22. Create a POST request in postman with the following url http://localhost:4000/items

#### Postman > localhost:4000

- Students will now be able to receive a different response with the same endpoint because now, the request method is POST.

- HTTP Methods are used to not only specify routes but also to simplify routes as through HTTP Methods, it is easy to determine which action to response 

    - GET - Usually used for GETTING data from a server
    - POST - Usually used for inputting data into a server to create a new document.
    - PUT - Usually used for inputting data into a server to update a whole document.
    - PATCH - Usually used for inputting data into a server to update a small part of a document.
    - DELETE - Usually used to delete a document.

## Activity
### Activity References
- [NPM Install](https://docs.npmjs.com/cli/v7/commands/npm-install)
- [Bootcamp Installation Guides]()
- [What Does Module Mean](https://www.techopedia.com/definition/3843/module)
- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Node JS Documentation createServer](https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener)
- [Request Object](https://developer.mozilla.org/en-US/docs/Web/API/Request)
- [Response Object](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [What is a Computer Port](https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/)
- [Request Response Cycle](https://iq.opengenus.org/content/images/2019/09/Untitled-1-.png)
- [Nodemon](https://www.npmjs.com/package/nodemon)

### Activity Instructions
- Type of Activity:
    - Coding

#### Instructions
Member 1:
1. In the s38 folder, create an activity folder and an index.js file inside of it.
	- Create an index.js file
	- Copy the template provided by your Instructor and paste it in an index.js file.
	- Update your local sessions git repository and push to git with the commit message of Add template code s38.
2. Install Nodemon to avoid constant resetting of servers
    - Look up the use of nodemon package
    - Look up the syntax of instaling packages globally
    - Install the nodemon globally

Member 2:
3. Create a simple server using HTTP modules' createServer() method.
Add the following routes with their corresponding HTTP methods and responses:
	- If the url is http://localhost:4000/ AND the HTTP method is get, sends a response message: Welcome to Booking System
	- If the url is http://localhost:4000/profile AND the HTTP method is get, sends a response message:  Welcome to your profile!

Member 3:
4. Add the following routes with their corresponding HTTP methods and responses:
	- If the url is http://localhost:4000/courses AND the HTTP method is get, sends a response message: Here’s our courses available
	- If the url is http://localhost:4000/addCourse AND the HTTP method is post, sends a response message:  with text: Add a course to our resources
	
Member 4:
5.  Create a simple server and the following routes with their corresponding HTTP methods and responses:
	- If the url is http://localhost:4000/updateCourse AND the HTTP method is put, sends a response message:  Update a course to our resources
	- If the url is http://localhost:4000/deleteCourse AND the HTTP method is delete, sends a response message: Delete courses to our resources

Member 5:	
6. Create a simple server and the following routes with their corresponding HTTP methods and responses:
	- If the url is http://localhost:4000/updateProfile AND the HTTP method is patch, sends a response message:  Update your profile to our resources
7. Test all the endpoints in Postman.
8. Save a screenshot of each requests in your activity folder.

All Members:
9. Update your local backend git repository and push to git with the commit message of Add activity code s38.
10. Add the link in Boodle for s38.


#### Activity Solution:
**Solution**
Install nodemon globally
```terminal
npm install -g nodemon
```


#### batchfolder > individual > s38 > activity > index.js
```js
let http = require("http");
const app = http.createServer(function (request, response) {
    // Retrieving the home
	if(request.url === "/" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Welcome to booking system');

	}
    // Retrieving a user profile
	if(request.url === "/profile" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Welcome to your profile');
	}
    // Updating a user profile
	if(request.url === "/updateProfile" && request.method == "PATCH"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Update your profile to our resources');
	}
	// Retrieving a course
	if(request.url === "/courses" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end(`Here's our courses available`);
	}
	// Adding a new course
	if(request.url === "/addCourse" && request.method == "POST"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Add course to our resources');
	}
	// Updating a course
	if(request.url === "/updateCourse" && request.method == "PUT"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Update a course to our resources');
	}
	// Deleting a course
	if(request.url === "/archiveCourse" && request.method == "DELETE"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Archive courses to our resources');
	}
})
//No need to add app.listen and port number variable.
//Do not modify
//Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;
```
