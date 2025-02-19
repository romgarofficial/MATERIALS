/* 
	Steps 1 - 9
	// Use the "require" directive to load Node.js modules
	// A module is a software component or part of a program that contains one or more routines
	// The "http module" lets Node.js transfer data using the Hyper Text Transfer Protocol
	// The "http module" is a set of individual files that contain code to create a "component" that helps establish data transfer between applications
	// HTTP is a protocol that allows the fetching of resources such as HTML documents
	// Clients (browser) and servers (node JS/express JS applications) communicate by exchanging individual messages.
	// The messages sent by the "client", usually a Web browser, are called "requests"
	// The messages sent by the "server" as an answer are called "responses"
	let http = require("http");

	// Using this module's createServer() method, we can create an HTTP server that listens to requests on a specified port and gives responses back to the client
	// The http module has a createServer() method that accepts a function as an argument and allows for a creation of a server
	// The arguments passed in the function are request and response objects (data type) that contains methods that allow us to receive requests from the client and send responses back to it
	// A port is a virtual point where network connections start and end.
	// Each port is associated with a specific process or service
	// The server will be assigned to port 4000 via the "listen(4000)" method where the server will listen to any requests that are sent to it eventually communicating with our server
	http.createServer(function (request, response) {

		// Use the writeHead() method to:
		// Set a status code for the response - a 200 means OK
		// Set the content-type of the response as a plain text message
		response.writeHead(200, {'Content-Type': 'text/plain'});
	
		// Send the response with text content 'Hello World'
		response.end('Hello World');

	}).listen(4000)

	// When server is running, console will print the message:
	console.log('Server running at localhost:4000'); 

*/
/* Refactoring */

const http = require('http');

// Creates a variable "port" to store the port number
const port = 4000;

// Add an array of items to return to the client.
let items = ["Laptop","Desktop","Tablet"]

// Creates a variable "app" that stores the output of the "createServer" method
// This will allow us to use http createServer's other methods. 
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

	// Accessing the "homepage" route returns a message of "This is the homepage"
	} else if (request.url == '/homepage') {

		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('This is the homepage')

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

// Uses the "app" and "port" variables created above.
// Since the app is now our defined server we can then use the listen method here to assign our port and run our server
// This makes our code and server creating more readable rather than having to chain .listen() at the end of createServer() which is a little longer.
app.listen(port);

// When server is running, console will print the message:
console.log(`Server now accessible at localhost:${port}.`);