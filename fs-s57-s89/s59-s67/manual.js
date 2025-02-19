/*
=======================================
[s59] - React.js - Component-Driven Development
=======================================
*/

/*
References:
	Create a New React App
		https://reactjs.org/docs/create-a-new-react-app.html
	Virtual DOM
		https://www.youtube.com/watch?v=M-Aw4p0pWwg
	React JS Documentation
		https://reactjs.org/docs/getting-started.html
	Introducing JSX
		https://reactjs.org/docs/introducing-jsx.html
	JSX Fragment
		https://legacy.reactjs.org/docs/fragments.html#short-syntax
	React-Bootstrap Documentation
		https://react-bootstrap.github.io/
	Adding Bootstrap
		https://create-react-app.dev/docs/adding-bootstrap/
	JavaScript import Statement
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
	React JS Components and Props
		https://reactjs.org/docs/components-and-props.html
	JavaScript export Statement
		https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
	Mount vs Render
		https://reacttraining.com/blog/mount-vs-render/
	React-Bootstrap Navbar Component
		https://react-bootstrap.github.io/components/navbar/
	React-Bootstrap Nav Component
		https://react-bootstrap.github.io/components/navs/
	React JS Strict Mode
		https://reactjs.org/docs/strict-mode.html
	React JS Fragment Component
		https://reactjs.org/docs/fragments.html
	React-Bootstrap Card Component
		https://react-bootstrap.github.io/components/cards/
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Application - Root folder for the application

*/

/*
==========
Discussion
========== 
*/

/*
1. Create a react application.
	Batch Folder > groupwork > Terminal
*/

		// Creating a react application
		/*
			- Syntax
				- npx create-react-app project-name
		*/
		npx create-react-app s54-s62

		/*
		IMPORTANT NOTE:
			- The command above allows us to create a react application that uses a "toolchain" that downloads a number of files/folders that make up our basic react application.
			- Some students will encounter an error creating a react application.
			- Common causes for this is having spaces or special characters in the student's user credentials.
			- The students may install the create-react-app toolchain globally. However take note that doing this will store the current version of the application in the local device. Running the command in the future will not install the latest version of the toolchain. Inform the students that they can update the toolchain by reinstalling it again globally to update the files.
			- Command to install the toolchain globally:
				npx install -g create-react-app
			- Refer to "references" section of this file to find the documentation for Create a New React App.
			- For MacOS, you can use this alternative command:
				sudo npm install -g create-react-app
		*/

/*
2. Run the application.
	batch folder > sessions > FS > s54-s62 > Terminal
*/

		npm start
/*
3. Delete unnecessary files from the newly created project.
	Application > src
*/

		App.test.js
		index.css
		logo.svg
		reportWebVitals.js
		setupTests.js

/*
4. Remove the importation of the "index.css" and "reportWebVitals" files from the "index.js" file. Also remove the code using the reportWebVitals function.
	Application > src > index.js
*/

		import React from 'react';
		import ReactDOM from 'react-dom';
		import App from './App';

		//createRoot - assigns the element to be managed by React with its Virtual DOM
		const root = ReactDOM.createRoot(document.getElementById('root'));

		//render() - displays the react elements/components into the root.
		//App component is our mother component, this is the component we use as entry point and where we can render all other components or pages.
		//<React.StrictMode> - component from React that manages future or possible conflicts. It allows us extend or expand certain error messages.
		root.render(
		  <React.StrictMode>
		    <App />
		  </React.StrictMode>
		);


/*
5. Remove the importation of the "logo.svg" file and most of the codes found inside the "App" component to remove any errors.
	Application > src > App.js
*/

		import './App.css';

		function App() {
			return (
				<div className="App">
				</div>
			);
		}

		export default App;

/*
6. Install the JavaScript (Babel) Linting for code readability.
	Sublime Text Editor
*/

		// 6a. Open Command Palette

			Linux and Windows
				Ctrl + Shift + P
			MacOS
				Cmd + Shift + P

		// 6b. In the input field type the word "install" and select the "Package Control: Install Package" option to trigger an installation of an add-on feature for sublime text editor.

			install

		// 6c. Type "babel" in the input field to search for the "Babel" linting to be installed.

			babel

		// 6d. Change the linting of the sublime text editor to "Javascript(Babel)"

			JavaScript (Babel)


		// NOTE: Latest version already have JSX extensions. Just go to Javascript > JSX

/*
7. Render a basic jsx element.
	Application > src > index.js
*/

		// 7a. Comment out the original code for future reference.

			/*...*/
			import App from './App';

			/*
				createRoot - assigns the element to be managed by React with its Virtual DOM
				const root = ReactDOM.createRoot(document.getElementById('root'));

				render() - displays the react elements/components into the root.
				App component is our mother component, this is the component we use as entry point and where we can render all other components or pages.
				<React.StrictMode> - component from React that manages future or possible conflicts. It allows us extend or expand certain error messages.
				root.render(
				  <React.StrictMode>
				    <App />
				  </React.StrictMode>
				);
			*/

		// 7b. Create a variable "name" that will contain a string and an "element" variable that will contain a react element. Render the react element in the application.

			/*...*/

			/*
			ReactDOM.render(
				...
			);
			*/

			const name = 'John Smith';
			const element = <h1>Hello, {name}</h1>

			const root = ReactDOM.createRoot(document.getElementById('root'));

			root.render(element)

			/*
			Important Note:
				- Changes applied to the react application are automatically applied to the output in our browser which is normally referred to as "hot-reloading".
				- This means that any code applied to our application will be displayed in the output upon saving the changes. This reloads the browser page applying all changes.
				- There are instances that the application does not "hot-reload". Simply refreshing the browser or restarting the application should fix the problem.
				- The way react works is that it applies changes to our application by comparing copies of the "DOM" creating what we call a "Virtual DOM".
				- The differences in both copies of the Virtual DOM are applied to the "actual/real DOM" which is one of the main reasons why React JS is able to quickly change the look and functionality of our application.
				- React JS utilizes the DOM by simply selecting and changing the "root" element of our application whenever changes are made to it.
				- Refer to "references" section of this file to find the documentation for Virtual DOM.
			*/

		// 7c. Create a "user" object with a "firstName" and "lastName" property and a function "formatName" that will print out the full name of the user.

			/*...*/

			const name = 'John Smith';
			const user = {
				firstName: 'Jane',
				lastName: 'Smith'
			}

			function formatName(user) {
				return user.firstName + ' ' + user.lastName;
			}

			const element = <h1>Hello, {formatName(user)}</h1>

			const root = ReactDOM.createRoot(document.getElementById('root'));

			root.render(element)

			/*
			Important Note:
				- The syntax for creating elements in JS is very similar to HTML tags, with one major difference being it is able to apply JavaScript code.
				- The "h1" tag that we see in the above example is what we call JSX.
				- JSX allows us to create HTML elements and at the same time allows us to apply JavaScript code to these elements making it easy to write both HTML and JavaScript code in a single file as opposed to creating two separate files (One for HTML and another for JavaScript syntax).
				- With JSX we can simply apply JavaScript logic with HTML elements that allows us to change the look and functionality of our application.
				- Refer to "references" section of this file to find the documentations for React JS Documentation and Introducing JSX.
			*/

		// 7d. Refactor the "index.js" to it's original form and comment out all the example codes to make sure the app works properly.

			/*...*/
			import App from './App';

			//createRoot - assigns the element to be managed by React with its Virtual DOM
			const root = ReactDOM.createRoot(document.getElementById('root'));

			//render() - displays the react elements/components into the root.
			//App component is our mother component, this is the component we use as entry point and where we can render all other components or pages.
			//<React.StrictMode> - component from React that manages future or possible conflicts. It allows us extend or expand certain error messages.
			root.render(
			  <React.StrictMode>
			    <App />
			  </React.StrictMode>
			);

			/*
			const name = 'John Smith';
			...

			ReactDOM.render(
				...
			);
			*/

/*
8. Install the necessary packages to be used in the project.
	Application > Terminal
*/

		npm install react-bootstrap bootstrap

		/*
		Important Note:
			- Similar to Node JS and Express JS, we can install packages in our react application to make the work easier for us.
			- The "react-bootstrap" package allows us to gain access to ready made React JS components similiar to Bootstrap components.
			- The "bootstrap" package is also installed within our application to allow us access to Bootstrap classes that we can utilize to rapidly create an application.
			- Refer to "references" section of this file to find the documentations for React-Bootstrap Documentation and Adding Bootstrap.
		*/

/*
9. Import the "bootstrap" package in the "index.js" file to give us access to Bootstrap classes that we can apply to our project.
	Application > src > index.js
*/

		/*...*/
		import App from './App';
		// Import the Bootstrap CSS
		import 'bootstrap/dist/css/bootstrap.min.css';

		ReactDOM.render(
		    /*...*/
		);

		/*
		Important Note:
			- The "import" statement allows us to use the code/exported modules from other files similar to how we use the "require" function in Node JS.
			- The code above provides us access to the bootstrap classes that is linked to an online resource for Bootstrap.
			- You may navigate to the file path provided above inside the "node_modules" folder to show the students how Bootstrap is applied to our application.
			- Refer to "references" section of this file to find the documentations for JavaScript import Statement and Adding Bootstrap.
		*/

/*
10. Create an "AppNavbar" component.
	Application > src > AppNavbar.js
*/

		// 10a. Add the code to create an "AppNavbar" component.

			export default function AppNavbar() {
				return (

				)
			}

			/*
			Important Note:
				- React JS Components are independent, reusable pieces of code which normally contains JavaScript and JSX syntax which make up a part of our application.
				- An example of this would be a navbar which contains several HTML elements that creates an interface for navigating through our application.
				- The navbar is a component which makes up a part of our application hence it is called a component.
				- React JS has two ways of implementing components which are namely "Class Components" and "Function components".
				- In the bootcamp, we will be using "Function Components" meaning that we will be mainly focusing on functions in creating our React JS components compared to Classes.
				- The reason for this is because Function Components are easier to digest for students.
				- Both approaches are accepted when dealing with React JS.
				- The naming convention for React JS components follows the "Pascal Case" having capitalized letters for all words of the function name AND the file name associated with it.
				- The "export default" statements allow us to create a JavaScript module that will be used when the file is exported in a different component.
				- Refer to "references" section of this file to find the documentations for React JS Components and Props and JavaScript export statement.
			*/

		// 10b. Import the "Navbar" and "Nav" components from react-bootstrap.

			// React Boostrap Components
			/*
				- Syntax
					- import moduleName from 'filePath';
			*/
			import Container from 'react-bootstrap/Container';
			import Navbar from 'react-bootstrap/Navbar';
			import Nav from 'react-bootstrap/Nav';


			export default function AppNavbar() {
				return (

				)
			}

			/*
			Important Note:
				- As mentioned before we will be using React-Bootstrap components to easily create our user interface instead of creating them from scratch which would be time consuming.
				- In the example above, we are importing the "Navbar" module from React Bootstrap to easily create a navbar.
				- The way React JS works is when the "import" statement is used, it will look for the corresponding file within the project folder where the Module is exported from.
			*/

		// 10c. Copy and paste the code snippet from the react JS documentation to render a "Navbar" component. Also change the text content of the elements and the alignment of the "Nav" component.

			/*...*/
		
			export default function AppNavbar() {
				return (
					<Navbar bg="light" expand="lg">
					    <Container fluid>
					        <Navbar.Brand href="#home">Zuitt Booking</Navbar.Brand>
					        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
					        <Navbar.Collapse id="basic-navbar-nav">
					            <Nav className="ms-auto">
					            <Nav.Link href="#home">Home</Nav.Link>
					            <Nav.Link href="#link">Courses</Nav.Link>
					            </Nav>
					        </Navbar.Collapse>
					    </Container>
					</Navbar>
				)
			}

		/*
		IMPORTANT NOTE:
			- React JS also applies the concepts of Rendering and Mounting in order to display and create components.
			- "Rendering" refers to the process of calling/invoking a component returning a set of instructions for creating DOM.
			- "Mounting" is when React JS "renders" or displays the component and builds the initial DOM based on the instructions.
			- Unlike HTML tags where we use the lowercase letters for creating them, React JS components use the Pascal Case indicating that we are using a component instead of using an HTML tag.
			- Refer to "references" section of this file to find the documentations for Mount vs Render, React-Bootstrap Navbar Component and React-Bootstrap Nav Component.
		*/

/*
11. Render the "AppNavbar" component in the root element of the application.
	Application > src > index.js
*/

		/*...*/
		import App from './App';
		import AppNavbar from './AppNavbar';
		import 'bootstrap/dist/css/bootstrap.min.css';

		const root = ReactDOM.createRoot(document.getElementById('root'));

		root.render(<AppNavbar />);

		/*...*/

/*
12. Create a "components" folder which still store all the reusable components to be used in the application and transfer the "AppNavbar.js" file inside of it.
	Application > src > components > AppNavbar.js
*/

		/*
		Important Note:
			- By creating a separate folder for our components, it allows us to follow the Separation of concerns architecture design principle.
			- This makes it easy to separate individual reusable components and allows us to quickly locate them whenever there is a need to make changes to them.
		*/

/*
13. Render the "App" component in the "index.js". Also remove the importation of the "AppNavbar" component which will no longer be used in the file.
	Application > src > index.js
*/
		
		/*...*/
		import App from './App';
		import 'bootstrap/dist/css/bootstrap.min.css';

		const root = ReactDOM.createRoot(document.getElementById('root'));

		root.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);

		/*...*/

		/*
		Important Note:
			- In React JS, normally a single component is rendered in the "index.js" file which is our entry point or the main file that the application uses for creating our application.
			- All other components are applied to this single component instead.
			- The "React.StrictMode" component is a tool for highlighting potential problems in an application and provide more information regarding the errors encountered.
			- Refer to "references" section of this file to find the documentation for React JS Strict Mode.
		*/

/*
14. Import and render the "AppNavbar" component in the "App" component.
	Application > src > App.js
*/

		import AppNavbar from './components/AppNavbar';
		import './App.css';

		function App() {
			return (
				<AppNavbar />
			);
		}

		/*...*/

		/*
		Important Note:
			- JSX syntax requires that components should always have closing tags.
			- In the example above, since the "AppNavbar" component does not require any text to be placed in between, we add a "/" at the end to signify that they are self-closing tags. 
		*/

/*
15. Create a "Banner" component.
	Application > components > Banner.js
*/

		// 15a. Add the code to create a "Banner" component.

			export default function Banner() {
				return (

				)
			}

		// 15b. Import the "Button", "Row" and "Col" components from react-bootstrap.
		
			import Button from 'react-bootstrap/Button';
			// Bootstrap grid system components
			import Row from 'react-bootstrap/Row';
			import Col from 'react-bootstrap/Col';

			export default function Banner() {
				/*...*/
			}

		// 15c. Create a simple Banner component.

			/*...*/

			export default function Banner() {
			    return (
	                <Row>
	                	<Col>
		                    <h1>Zuitt Coding Bootcamp</h1>
		                    <p>Opportunities for everyone, everywhere.</p>
		                    <Button variant="primary">Enroll now!</Button>
		                </Col>
	                </Row>
			    )
			}

		// 15d. Destructure the react bootstrap components to make the code cleaner.

			import { Button, Row, Col } from 'react-bootstrap';

			export default function Banner() {
			    return (
			        <Row>
			            <Col>
			                <h1>Zuitt Coding Bootcamp</h1>
		                    {/*...*/}
		                    <Button variant="primary">Enroll now!</Button>
			            </Col>
			        </Row>
			    )
			}

			/*
			Important Note:
				- Modules are treated as objects and object deconstruction maybe applied in order to shorten the syntax when importing modules from packages.
				- Other ways to import bootstrap components:
					import Button from 'react-bootstrap/Button';
					Bootstrap grid system components
					import Row from 'react-bootstrap/Row';
					import Col from 'react-bootstrap/Col';
					import { Row } from 'react-bootstrap';
					import { Col } from 'react-bootstrap';
			*/

		// 15e. Apply a padding to the "Col" component.

			/*...*/

			export default function Banner() {
			    return (
			        <Row>
			            <Col className="p-5 text-center">
		                    {/*...*/}
			            </Col>
			        </Row>
			    )
			}

			/*
			Important Note:
				- The "className" prop is used in place of the "class" attribute for HTML tags in React JS due to our use of JSX elements.
				- props will be discussed further in the next session.
			*/

/*
16. Import and render the "Banner" component in the "App" component.
	Application > src > App.js
*/

		// 16a. Import and render the "Banner" component along with JSX fragment (<> </>)
		
			/*...*/
			import AppNavbar from './components/AppNavbar';
			import Banner from './components/Banner';
			/*...*/

			function App() {
				return (
					<>
						<AppNavbar />
						<Banner />
					</>
				);
			}

			/*...*/

			/*
			Important Note:
				- When importing components, it's good practice to import them in the order they appear in our file/folder structure to make it easy to locate files when needed.
				- Based on the example above, the "Banner" component is imported after the "AppNavbar" component which follows the file/folder structure found in our project.
				- In React JS, multiple components rendered in a single component should be wrapped in a parent component.
				- Not doing so will return an error in our application.
				- The "JSX Fragment" component ensures that this error can be prevented.
				- You may remove the "JSX Fragment" component to show the student what the error looks like.
				- Refer to "references" section of this file to find the documentation for React JS Fragment Component.
			*/

		// 16b. Import and render a "Container" component to fix the layout of the "Banner" component.

			import Banner from './components/Banner';

			// Bootstrap
			import { Container } from 'react-bootstrap';
			/*...*/

			function App() {
				return (
					<>
						<AppNavbar />
						<Container>
							<Banner />
						</Container>
					</>
				);
			}

			/*...*/

			/*
			Important Note:
				- It's also good practice to organize importing of modules to improve code readability.
				- The example above follows the following pattern:
					- imports from built-in react modules
					- imports from downloaded packages
					- imports from user defined components
			*/

/*
17. Create Highlights component
	Application > src > components > Highlights.js
*/

		// 17a. Add the code to create a "Highlights" component.

			export default function Highlights() {
				return (

				)
			}

		// 17b. Import the "Row", "Col" and "Card" components from react-bootstrap.
			import { Row, Col, Card } from 'react-bootstrap';

			export default function Highlights() {
				return (

				)
			}

		// 17c. Create a "Row" component with several "Card" components in it.

			/*...*/

			export default function Highlights() {
			    return (
			        <Row className="mt-3 mb-3">
			            <Col xs={12} md={4}>
			                <Card className="cardHighlight p-3">
			                    <Card.Body>
			                        <Card.Title>
			                            <h2>Learn from Home</h2>
			                        </Card.Title>
			                        <Card.Text>
			                            Pariatur adipisicing aute do amet dolore cupidatat. Eu labore aliqua eiusmod commodo occaecat mollit ullamco labore minim. Minim irure fugiat anim ea sint consequat fugiat laboris id. Lorem elit irure mollit officia incididunt ea ullamco laboris excepteur amet. Cillum pariatur consequat adipisicing aute ex.
			                        </Card.Text>
			                    </Card.Body>
			                </Card>
			            </Col>
			            <Col xs={12} md={4}>
			                <Card className="cardHighlight p-3">
			                    <Card.Body>
			                        <Card.Title>
			                            <h2>Study Now, Pay Later</h2>
			                        </Card.Title>
			                        <Card.Text>
			                            Ex Lorem cillum consequat ad. Consectetur enim sunt amet sit nulla dolor exercitation est pariatur aliquip minim. Commodo velit est in id anim deserunt ullamco sint aute amet. Adipisicing est Lorem aliquip anim occaecat consequat in magna nisi occaecat consequat et. Reprehenderit elit dolore sunt labore qui.
			                        </Card.Text>
			                    </Card.Body>
			                </Card>
			            </Col>
			            <Col xs={12} md={4}>
			                <Card className="cardHighlight p-3">
			                    <Card.Body>
			                        <Card.Title>
			                            <h2>Be Part of Our Community</h2>
			                        </Card.Title>
			                        <Card.Text>
			                            Minim nostrud dolore consequat ullamco minim aliqua tempor velit amet. Officia occaecat non cillum sit incididunt id pariatur. Mollit tempor laboris commodo anim mollit magna ea reprehenderit fugiat et reprehenderit tempor. Qui ea Lorem dolor in ad nisi anim. Culpa adipisicing enim et officia exercitation adipisicing.
			                        </Card.Text>
			                    </Card.Body>
			                </Card>
			            </Col>
			        </Row>
			    )
			}

			/*
			IMPORTANT NOTE:
				- Refer to "references" section of this file to find the documentation for React-Bootstrap Card Component.
			*/

/*
18. Import and render the "Highlights" component in the "App" component.
	Application > src > App.js
*/

		/*...*/
		import Banner from './components/Banner';
		import Highlights from './components/Highlights';
		import './App.css';

		function App() {
			return (
				<>
					{/*...*/}
					<Container>
						<Banner />
						<Highlights />
					</Container>
				</>
			);
		}

		/*...*/

/*
19. Replace the "App.css" file with the following css rules.
	Application > src > App.css
*/

		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.cardHighlight {
		    min-height: 100%;
		}

/*
20. Create a "pages" folder and create a "Home" component. Import and render the "Banner" and "Highlights" component into a "Home" page component instead.
	Application > src > pages > Home.js
*/
		import Banner from '../components/Banner';
		import Highlights from '../components/Highlights';

		export default function Home() {
			return (
				<>
					<Banner />
					<Highlights />
				</>
			)
		}

/*
21. Render the "Home" page component in the "App" component. Refactor the App component and remove all the unused code.
	Application > src > App.js
*/

		/*...*/
		import AppNavbar from './components/AppNavbar';
		// import Banner from './components/Banner';
		// import Highlights from './components/Highlights';
		import Home from './pages/Home';
		import './App.css';
		
		function App() {
			return (
				<>
					<AppNavbar />
					<Container>
						<Home />
					</Container>
				</>
			);
		}

		export default App;


/*
==================
[s59] - Activity
==================

Activity References:

React JS Components and Props
	https://reactjs.org/docs/components-and-props.html

	React-Bootstrap Card Component
	https://react-bootstrap.github.io/components/cards/

Activity 

Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s59"
2. Create a CourseCard component which returns a React-Bootstrap Card. Add an id to the card as "courseComponent1"

Member 2:
3. Add a course name as the card title.

Member 3:
4. Add the description and price in the card body.

Member 4:
5. Add a button in the card.

Member 5:
6. Render the CourseCard component in the Home page.

All members:
7. Check out to your own git branch with git checkout -b <branchName>.
8. Update your local sessions git repository and push to git with the commit message of Add activity code s59.
9. Add the sessions repo link in Boodle for s59.

*/

/*
1. Create a "CourseCard" component that will display the name, description and price details of a course in a card.
	Application > src > components > Course.js
*/

		// 1a. Add the code to create a "Course" component.

			export default function CourseCard() {
			    return (
			        
			    )
			}

		// 1b. Import the "Card" and "Button" components from react-bootstrap.

			import { Card, Button } from 'react-bootstrap';

			export default function CourseCard() {
			    return (
			        
			    )
			}

		// 1c. Create a simple "Card" component containing hard coded values of a course.

			/*...*/

			export default function CourseCard() {
			    return (
			        <Card>
			            <Card.Body>
			                <Card.Title>Sample Course</Card.Title>
			                <Card.Subtitle>Description:</Card.Subtitle>
			                <Card.Text>This is a sample course offering.</Card.Text>
			                <Card.Subtitle>Price:</Card.Subtitle>
			                <Card.Text>PhP 40,000</Card.Text>
			                <Button variant="primary">Enroll</Button>
			            </Card.Body>
			        </Card>
			    )
			}

/*
2. Render the "Course" component in the "Home" page component.
	Application > src > pages > Home.js
*/

		/*...*/
		import Banner from '../components/Banner';
		import Highlights from '../components/Highlights';
		import CourseCard from '../components/CourseCard';

		export default function Home() {
			return (
				<>
					<Banner />
					<Highlights />
					<CourseCard />
				</>
			)
		}

/*
=================================
[s60] - React.js - Props and States
=================================
*/

/*

Reference Material:
	Discussion Slides
		https://docs.google.com/presentation/d/1zmzLfD3Rssj3Q22dNtLMRQAeqtKBH31U6xFO_bRn-Rs/
	Gitlab Repo
		https://gitlab.com/zuitt-coding-bootcamp-curricula/courses/wdc028v1.5b/-/tree/master/fullstack/s50-s55

Other References:
	React JS Props
		https://reactjs.org/docs/components-and-props.html
	Props Drilling
		https://medium.com/front-end-weekly/props-drilling-in-react-js-723be80a08e5
	Lists and Keys
		https://reactjs.org/docs/lists-and-keys.html
	Typechecking With PropTypes
		https://reactjs.org/docs/typechecking-with-proptypes.html
	React JS States
		https://reactjs.org/docs/hooks-state.html;
	Understanding Synchronous and Asynchronous Code in Javascript
		https://blog.devgenius.io/understanding-synchronous-and-asynchronous-code-in-javascript-46734bf29914
	Is JavaScript Synchronous or Asynchronous
		https://betterprogramming.pub/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-7aa9dd8f3bfb
	Creating Git Projects:
			GitLab
				https://gitlab.com/projects/new#blank_project
			GitHub
				https://github.com/new
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Application - Root folder for the application

*/

/*
==========
Discussion
========== 
*/

/*
1. Create a "data" folder and add a "coursesData.js" file which will be used as a mock database.
	Application > src > data > coursesData.js
*/

		const coursesData = [
		    {
		        id: "wdc001",
		        name: "PHP - Laravel",
		        description: "Nostrud velit dolor excepteur ullamco consectetur aliquip tempor. Consectetur occaecat laborum exercitation sint reprehenderit irure nulla mollit. Do dolore sint deserunt quis ut sunt ad nulla est consectetur culpa. Est esse dolore nisi consequat nostrud id nostrud sint sint deserunt dolore.",
		        price: 45000,
		        onOffer: true
		    },
		    {
		        id: "wdc002",
		        name: "Python - Django",
		        description: "Eu non commodo et eu ex incididunt minim aliquip anim. Aliquip voluptate ut velit fugiat laborum. Laborum dolore anim pariatur pariatur commodo minim ut officia mollit ad ipsum ex. Laborum veniam cupidatat veniam minim occaecat veniam deserunt nulla irure. Enim elit sint magna incididunt occaecat in dolor amet dolore consectetur ad mollit. Exercitation sunt occaecat labore irure proident consectetur commodo ad anim ea tempor irure.",
		        price: 50000,
		        onOffer: true
		    },
		    {
		        id: "wdc003",
		        name: "Java - Springboot",
		        description: "Proident est adipisicing est deserunt cillum dolore. Fugiat incididunt quis aliquip ut aliquip est mollit officia dolor ea cupidatat velit. Consectetur aute velit aute ipsum quis. Eiusmod dolor exercitation dolor mollit duis velit aliquip dolor proident ex exercitation labore cupidatat. Eu aliquip mollit labore do.",
		        price: 55000,
		        onOffer: true
		    }
		]

		export default coursesData;

		/*
		Important Note:
			- This will be used as a mock database in place of our MongoDB database created from the Node JS/Express JS sessions.
			- The mock data is used to have the discussion focused on React JS concepts.
			- The MongoDB database will be used in a future session.
		*/

/*
2. Create a "Courses" page and import the mock data.
	Application > src > pages > Courses.js
*/

		// 2a. Create a basic "Courses" page.

			export default function Courses() {
				return(

				)
			}
		
		// 2b. Import the mock data.

			import coursesData from '../data/coursesData';

			export default function Courses() {

				// Checks to see if the mock data was captured
				console.log(coursesData);

				return(
					<h1>Courses</h1>
				)
			}

/*
3. Import the "Courses" page in the "App" component and render it there.
	Application > src > App.js
*/

		/*...*/
		// import Highlights from './components/Highlights';
		import Courses from './pages/Courses';
		import Home from './pages/Home';
		/*...*/

		function App() {
			return (
				<>
					<AppNavbar />
					<Container>
						<Home />
						<Courses />
					</Container>
				</>
			);
		}

		/*...*/

/*
4. Remove the "CourseCard" component from the Home page.
	Application > src > pages > Home.js
*/
		import Banner from '../components/Banner';
		import Highlights from '../components/Highlights';

		export default function Home() {
			return (
				<>
					<Banner />
					<Highlights />
				</>
			)
		}

/*
5. Import and render a "CourseCard" component and pass information to it using props.
	Application > src > pages > Courses.js
*/
		import CourseCard from '../components/CourseCard';
		import coursesData from '../data/coursesData';

		export default function Courses() {

			// Checks to see if the mock data was captured
			console.log(coursesData);
			console.log(coursesData[0]);
		    
		    // The "course" in the CourseCard component is called a "prop" which is a shorthand for "property" since components are considered as objects in React JS
		    // The curly braces ({}) are used for props to signify that we are providing information using JavaScript expressions rather than hard coded values which use double quotes ("")
		    // We can pass information from one component to another using props. This is referred to as "props drilling"
		    return (
		        <>
		            <CourseCard courseProp={coursesData[0]} />
		        </>
		    )
		}

/*
6. Capture and check if the information was properly passed to the "CourseCard" component.
	Application > src > components > CourseCard.js
*/

		/*...*/

		export default function CourseCard(props) {

			// Checks to see if the data was successfully passed
		    console.log(props);
		    // Every component recieves information in a form of an object
		    console.log(typeof props);

		    return (
		        <Card>
		            <Card.Body>
		                <Card.Title>Sample Course</Card.Title>
		                <Card.Subtitle>Description:</Card.Subtitle>
		                <Card.Text>This is a sample course offering.</Card.Text>
		                <Card.Subtitle>Price:</Card.Subtitle>
		                <Card.Text>PhP 40,000</Card.Text>
		                <Button variant="primary">Enroll</Button>
		            </Card.Body>
		        </Card>
		    )
		}

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentations for React JS Props and Props Drilling.
		*/

/*
7. Modify the "CourseCard" component so that it can have actual course data passed in as its prop.
	Application > src > components > Course.js
*/

		// 7a. Print out the values of the course properties in the cards.

			/*...*/

			export default function CourseCard(props) {

				/*...*/

			    return (
			        <Card>
			            <Card.Body>
			                <Card.Title>{props.course.name}</Card.Title>
			                <Card.Subtitle>Description:</Card.Subtitle>
			                <Card.Text>{props.course.description}</Card.Text>
			                <Card.Subtitle>Price:</Card.Subtitle>
			                <Card.Text>PhP {props.course.price}</Card.Text>
			                <Button variant="primary">Enroll</Button>
			            </Card.Body>
			        </Card>
			    )
			}

		// 7b. Deconstruct the "courseProp" properties into their own variables to make the code even shorter.

			/*...*/
			export default function CourseCard({courseProp}) {

				// console.log(props)
				// Deconstruct the course properties into their own variables
			    const {name, description, price} = courseProp;

			    return (
			    	// add margin top
			        <Card className="mt-3">
			            <Card.Body>
			                <Card.Title>{name}</Card.Title>
			                <Card.Subtitle>Description:</Card.Subtitle>
			                <Card.Text>{description}</Card.Text>
			                <Card.Subtitle>Price:</Card.Subtitle>
			                <Card.Text>PhP {price}</Card.Text>
			                <Button variant="primary">Enroll</Button>
			            </Card.Body>
			        </Card>
			    )
			}

/*
8. Create multiple "CourseCard" components using the "map" method.
	Application > src > pages > Courses.js
*/

		/*...*/

		export default function Courses() {

			/*...*/
			console.log(coursesData[0]);

		    // The "map" method loops through the individual course objects in our array and returns a component for each course
		    // Multiple components created through the map method must have a unique key that will help React JS identify which components/elements have been changed, added or removed
		    // Everytime the map method loops through the data, it creates a "CourseCard" component and then passes the current element in our coursesData array using the courseProp
		    const courses = coursesData.map(course => {
		        return (
		            <CourseCard key={course.id} courseProp={course}/>
		        );
		    })
		    
		    return (
		        <>
		            {courses}
		        </>
		    )
		}

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentation for React JS Lists and Keys.
		*/

/*
9. Add "PropTypes" in the "CourseCard" component to validate its props.
	Application > src > components > CourseCard.js
*/

		import PropTypes from 'prop-types';
		// import Card from 'react-bootstrap/Card';
		/*...*/

		export default function CourseCard({courseProp}) {
			/*...*/
		}

		// Check if the CourseCard component is getting the correct prop types
		// Proptypes are used for validating information passed to a component and is a tool normally used to help developers ensure the correct information is passed from one component to the next
		CourseCard.propTypes = {
		    // The "shape" method is used to check if a prop object conforms to a specific "shape"
		    course: PropTypes.shape({
		        // Define the properties and their expected types
		        name: PropTypes.string.isRequired,
		        description: PropTypes.string.isRequired,
		        price: PropTypes.number.isRequired
		    })
		}

		/*
		Important Note:
			- PropTypes are a good way of checking the data type of information passed between components.
			- Refer to "references" section of this file to find the documentation for Typechecking with PropTypes.
		*/

/*
10. Change the values from the mock data to show how the "PropTypes" are used.
	Application > src > data > courses.js
*/

		// 10a. Change the value of "price" into an empty string and show the results.

			const coursesData = [
			    {
			        /*...*/
			        description: "Nostrud velit dolor excepteur ullamco consectetur aliquip tempor. Consectetur occaecat laborum exercitation sint reprehenderit irure nulla mollit. Do dolore sint deserunt quis ut sunt ad nulla est consectetur culpa. Est esse dolore nisi consequat nostrud id nostrud sint sint deserunt dolore.",
			        price: "45000",
			        onOffer: true
			    },
			    {
			        /*...*/
			    },
			    {
			        /*...*/
			    },
			]

			/*...*/

		// 10b. Change the value of "price" back into a number value to avoid any errors from showing in the console.
		
			const coursesData = [
			    {
			        /*...*/
			        description: "Nostrud velit dolor excepteur ullamco consectetur aliquip tempor. Consectetur occaecat laborum exercitation sint reprehenderit irure nulla mollit. Do dolore sint deserunt quis ut sunt ad nulla est consectetur culpa. Est esse dolore nisi consequat nostrud id nostrud sint sint deserunt dolore.",
			        price: 45000,
			        onOffer: true
			    },
			    {
			        /*...*/
			    },
			    {
			        /*...*/
			    },
			]

			/*...*/

/*
11. Use a "state" hook to demonstrate component state by keeping track of the number of enrollees.
	Application > src > components > Course.js
*/

		import { useState } from 'react';
		import PropTypes from 'prop-types';
		/*...*/

		export default function CourseCard({courseProp}) {

			/*...*/
		    const {name, description, price} = courseProp;

		    // Use the state hook for this component to be able to store its state
		    // States are used to keep track of information related to individual components
		    // Syntax
		        // const [getter, setter] = useState(initialGetterValue);
		    const [count, setCount] = useState(0);
		    // Using the state hook returns an array with the first element being a value and the second element as a function that's used to change the value of the first element
		    console.log(useState(0));

		    // Function that keeps track of the enrollees for a course
		    // By default JavaScript is synchronous it executes code from the top of the file all the way to the bottom and will wait for the completion of one expression before it proceeds to the next
		    // The setter function for useStates are asynchronous allowing it to execute separately from other codes in the program
		    // The "setCount" function is being executed while the "console.log" is already completed resulting in the value to be displayed in the console to be behind by one count
		    function enroll(){
		        setCount(count + 1);
		        console.log('Enrollees: ' + count);
		    }

		    return (
		        <Card>
		            <Card.Body>
		                {/*...*/}
		                <Card.Text>PhP {price}</Card.Text>
		                <Card.Text>Enrollees: {count}</Card.Text>
		                <Button className="bg-primary" onClick={enroll}>Enroll</Button>
		            </Card.Body>
		        </Card>
		    )
		}

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentations for React JS States, Understanding Synchronous and Asynchronous Code in Javascript and Is JavaScript Synchronous or Asynchronous.
		*/

/*
==================
[s60] - Activity
==================

Activity References:

React JS States
	https://reactjs.org/docs/hooks-state.html;

Activity:

Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s60"
2. Create a seats state in the Course component and set the initial value to 10.
	
Member 2, 3, 4, & 5:
3. For every enrollment, deduct one to the seats.
	- If the seats reaches zero:
		- Do not add to the count.
		- Do not deduct to the seats.
		- Show an alert that says "no more seats".
	- Add a Seat element using card text inside the card body.

All Members:
4. Check out to your own git branch with git checkout -b <branchName>.
5. Update your local sessions git repository and push to git with the commit message of Add activity code s60.
6. Add the sessions repo link in Boodle for s60.

*/

/*
1. Create a state hook that will represent the number of available seats for a course. Everytime the enroll button is clicked the number of seats will decrease. Once all of the seats are booked for, the enroll button will be disabled and the course cannot be enrolled into.
	Application > src > components > Course.js
*/

		// 1a. Create a "seats" state hook on the "CourseCard" component representing the number of available seats.

			/*...*/

			export default function CourseCard({courseProp}) {

				/*...*/
		    	console.log(useState(0));
		    	// Use state hook for getting and setting the seats for this course
		    	const [seats, setSeats] = useState(10);

		    	function enroll(){
		    		/*...*/
		    	}

			    /*...*/

			}

			/*...*/

		// 1b. Modify the "enroll" function where a seat will be taken and the number of enrollees will go up on clicking the "Enroll" button.

			/*...*/

			export default function CourseCard({courseProp}) {

				/*...*/

		    	function enroll(){
			        setCount(count + 1);
			        console.log('Enrollees: ' + count);
			        setSeats(seats - 1);
			        console.log('Seats: ' + seats);
			    }

			    /*...*/
			}

			/*...*/

		// 1c. Include the number of seats to be printed out in the card.

			/*...*/

			export default function CourseCard({courseProp}) {

				/*...*/

			    return (
			        <Card>
			            <Card.Body>
			                {/*...*/}
			                <Card.Text>PhP {price}</Card.Text>
			                <Card.Text>Seats: {seats}</Card.Text>
			                <Button className="bg-primary" onClick={enroll}>Enroll</Button>
			            </Card.Body>
			        </Card>
			    )
			}

			/*...*/
				
		// 1d. Create a condition that will check if the "seats" is "0" alert the user of no more courses.

			/*...*/

			export default function CourseCard({courseProp}) {

				/*...*/

		    	function enroll(){
			        if (seats > 0) {
			            setCount(count + 1);
			            console.log('Enrollees: ' + count);
			            setSeats(seats - 1);
			            console.log('Seats: ' + seats)
			        } else {
			            alert("No more seats available");
			        };
			    }

			    /*...*/
			}

			/*...*/

/*
====================================
[s61] - React.js - Effects, Events and Forms
====================================
*/

/*
References:
	React JS useEffect Hook
		https://reactjs.org/docs/hooks-effect.html#gatsby-focus-wrapper
	React-Bootstrap Form Component
		https://react-bootstrap.github.io/components/forms/
	React JS Events
		https://reactjs.org/docs/events.html
	React JS Synthetic Events
		https://reactjs.org/docs/events.html
	Mount vs Render
		https://reacttraining.com/blog/mount-vs-render/
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Application - Root folder for the application

*/

/*
==========
Discussion
========== 
*/

/*
1. Students will use the provided API link for fetch requests throughout the discussions in the React sessions.
	Application
*/

	http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1

/*
2. Create a "Register" page to demonstrate event handling and React forms.
	Application > src > pages > Register.js
*/

		import { Form, Button } from 'react-bootstrap';

		export default function Register() {

		    return (
				
				<Form>
				<h1 className="my-5 text-center">Register</h1>
					<Form.Group>
						<Form.Label>First Name:</Form.Label>
						<Form.Control type="text" placeholder="Enter First Name" required/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name:</Form.Label>
						<Form.Control type="text" placeholder="Enter Last Name" required/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email:</Form.Label>
						<Form.Control type="email" placeholder="Enter Email" required/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Mobile No:</Form.Label>
						<Form.Control type="number" placeholder="Enter 11 Digit No." required/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password:</Form.Label>
						<Form.Control type="password" placeholder="Enter Password" required/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password:</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password" required/>
					</Form.Group>
					<Button variant="primary" type="submit">Submit</Button>
						
				</Form>
		    )

		}

/*
3. Render the register page in the App.js
	Application > src > App.js
*/

		/*...*/
		// import Courses from './pages/Courses';
		// import Home from './pages/Home';
		import Register from './pages/Register';
		import './App.css';

		function App() {
			return (
				<>
				  	<NavBar />
					<Container>
						<Register />
					</Container> 
				</>
			);
		}

		/*...*/

/*
4. Define state hooks for all input fields and an "isActive" state for conditional rendering of the submit button.
	Application > src > pages > Register.js
*/

		import { useState } from 'react';
		import { Form, Button } from 'react-bootstrap';

		export default function Register() {

			// State hooks to store the values of the input fields
			const [firstName,setFirstName] = useState("");
			const [lastName,setLastName] = useState("");
			const [email,setEmail] = useState("");
			const [mobileNo,setMobileNo] = useState("");
			const [password,setPassword] = useState("");
			const [confirmPassword, setConfirmPassword] = useState("");
		    // State to determine whether submit button is enabled or not
		    const [isActive, setIsActive] = useState(false);

		    return (
		        <Form>
		            {/*...*/}

		            <Form.Group controlId="password">
		                {/*...*/}
		            </Form.Group>

		            {/* conditionally render submit button based on isActive state */}
            	    { isActive ? 
            	    	<Button variant="primary" type="submit" id="submitBtn">
            	    		Submit
            	    	</Button>
            	        : 
            	        <Button variant="danger" type="submit" id="submitBtn" disabled>
            	        	Submit
            	        </Button>
            	    }

		        </Form>
		    )

		}

/*
5. "Bind" the user input states into their corresponding input fields via the "onChange" JSX event handler and set the values of the form input fields via 2-way binding.
	Application > src > pages > Register.js
*/
		
		// 5a. Bind the input states via 2-way binding.

			/*...*/

			export default function Register() {

			    /*...*/

			    return (
					<Form>
					<h1 className="my-5 text-center">Register</h1>
						<Form.Group>
							<Form.Label>First Name:</Form.Label>
							<Form.Control 
								type="text" 
								placeholder="Enter First Name" 
								required 
								value={firstName} 
								onChange={e => {setFirstName(e.target.value)}}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Last Name:</Form.Label>
							<Form.Control 
							type="text" 
							placeholder="Enter Last Name" 
							required 
							value={lastName} 
							onChange={e => {setLastName(e.target.value)}}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email:</Form.Label>
							<Form.Control 
							type="email" 
							placeholder="Enter Email" 
							required 
							value={email} 
							onChange={e => {setEmail(e.target.value)}}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Mobile No:</Form.Label>
							<Form.Control 
							type="number" 
							placeholder="Enter 11 Digit No." 
							required 
							value={mobileNo} 
							onChange={e => {setMobileNo(e.target.value)}}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password:</Form.Label>
							<Form.Control 
							type="password" 
							placeholder="Enter Password" 
							required 
							value={password} 
							onChange={e => {setPassword(e.target.value)}}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password:</Form.Label>
							<Form.Control 
							type="password" 
							placeholder="Confirm Password" 
							required 
							value={confirmPassword} 
							onChange={e => {setConfirmPassword(e.target.value)}}/>
						</Form.Group>
						{
							isActive
		
							? <Button variant="primary" type="submit">Submit</Button>
							: <Button variant="primary" disabled>Submit</Button>
						}
					</Form>
		
			    )
			}

			/*
			Important Note:
				- Whenever an event is triggered in React JS, an event object is created and can be used to retrieve information regarding the triggered event and gain access to methods that would help in development 
				- Refer to "references" section of this file to find the documentations for React JS Events and React JS Synthetic Events.
			*/

		// 5b. Console log the values of the input fields to check if they were successfully binded.

				/*...*/

				export default function Register() {

				    /*...*/
				    const [isActive, setIsActive] = useState('');

				    // Check if values are successfully binded
					console.log(firstName);
					console.log(lastName);
					console.log(email);
					console.log(mobileNo);
					console.log(password);
					console.log(confirmPassword)
			

				    return (
				        /*...*/
				    )
				}

				/*
				Important Note:
					- Whenever a state of a component changes, the component rerenders the whole component executing any code found in the component. This is the reason why every individual input added to a form input ptints out a console message.
					- The "e.target.value" property allows us to gain access the the input field's current value to be used when submitting form data.
					- Refer to "references" section of this file to find the documentation for Mount vs Render.
				*/

/*
6. Define a "useEffect" for validating user input.
	Application > src > pages > Register.js
*/

		import { useState, useEffect } from 'react';
		import { Form, Button } from 'react-bootstrap';

		export default function Register() {

		    /*...*/
	   		console.log(password);

   			useEffect(()=>{

				if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !=="" && confirmPassword !=="") && (password === confirmPassword) && (mobileNo.length === 11)){
		
					setIsActive(true)
		
				} else {
		
					setIsActive(false)
		
				}
		
			},[firstName,lastName,email,mobileNo,password,confirmPassword])
		
				
		    return (
		        /*...*/
		    )
		}

		/*
		Important Note:
			- useEffect() has two argument, function and dependency
				- function - represents the side effect you want to perform. This will be executed when the component renders.
				- dependency - optional array. The effect will run when there are changes in the component's dependencies. When there is no provided array, the effect will run on every render of the component.
			-
		*/

/*
7. Implement fetch method and clear input fields after registering
	Application > src > pages > Register.js
*/

		/*...*/
		import { Form, Button } from 'react-bootstrap';

		/*...*/

		export default function Register() {

		    /*...*/
		    console.log(password);

        	function registerUser(e) {

        		// Prevents page redirection via form submission
        		e.preventDefault();

        		fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/register',{

        		method: 'POST',
        		headers: {
        			"Content-Type": "application/json"
        		},
        		body: JSON.stringify({

        			firstName: firstName,
        			lastName: lastName,
        			email: email,
        			mobileNo: mobileNo,
        			password: password

        		})
        		})
        		.then(res => res.json())
        		.then(data => {

        		//data is the response of the api/server after it's been process as JS object through our res.json() method.
        		console.log(data);
        		//data will only contain an email property if we can properly save our user.
        		if(data.message === "Registered Successfully"){

        			setFirstName('');
        			setLastName('');
        			setEmail('');
        			setMobileNo('');
        			setPassword('');
        			setConfirmPassword('');

        			alert("Registration successful")

        		} else if (data.error === "Email invalid") {

        			alert("Email is invalid");

        		} else if (data.error === "Mobile number invalid") {

        			alert("Mobile number is invalid");

        		} else if (data.error === "Password must be atleast 8 characters") {

        			alert("Password must be at least 8 characters");

        		} else {
        			
        			alert("Something went wrong.");

        		}

        		})
        	}

	        useEffect(() => {
	        	/*...*/
   		    }, [email, password]);

		    return (
		        <Form onSubmit={(e) => registerUser(e)}>
		            {/*...*/}
		        </Form>
		    )

		    /*
		    IMPORTANT NOTE:
		    	- To test the else if statements for the errors do the following:
		    		- For the invalid email, change the form input field for email to "text" instead of "email"
		    		- For the mobile number, remove the validation for "mobileNo.length === 11" in the useEffect
		    		- For the invalid password, enter matching passwords with less than 8 characters in length 
		    */
		

/*
===============================================
[s61] - React.js - Effects, Events and Forms - Activity
===============================================

Activity References:

React JS useEffect Hook
	https://reactjs.org/docs/hooks-effect.html#gatsby-focus-wrapper
React-Bootstrap Form Component
	https://react-bootstrap.github.io/components/forms/
React JS Events
	https://reactjs.org/docs/events.html
React JS Two-Way Binding
	https://medium.com/front-end-weekly/two-way-binding-will-make-your-react-code-better-f58865923538	

Activity

Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s61"
2. Create all the input states needed for the form and a state for conditionally rendering our button.

Member 2:
3. Add a react-bootstrap form that reflects the fields needed.
4. Conditionally render our button based on our state's value. Wherein, initially, the submit button should be disabled.

Member 3:
5. Apply two-way binding on the input elements using the input states.
6. Add a useEffect that when all the input fields are filled, enable the submit button.

Member 4:
7. Attach a submit event listener to the form.
	- Create a function to be triggered/run by the submit event.
	- In the function of the submit event, send a request using fetch() to login our user.

Member 5:
8. Then, check if the data returned by the fetch() is a token, show an alert message for successful login:
	- "Thank you logging in"
	- Console Log the token in the console.
	- Add an else if statement, to show an alert if the email does not exist
	- "Email does not exist"
	- Add an else statement, to show an alert for unsuccessful login.
	- "Something went wrong"
9. Then, outside the fetch(), but still within submit, set the input states to its initial values.

All Members:
10. Check out to your own git branch with git checkout -b <branchName>.
11. Update your local sessions git repository and push to git with the commit message of Add activity code s61.
12. Add the sessions repo link in Boodle for s61.

*/



/*
1. Create "Login" page with fetch method.
	Application > src > pages > Login.js
*/

		import { Form, Button } from 'react-bootstrap';

		export default function Login() {

		    return (	
			    	
			        <Form>
			        	<h1 className="my-5 text-center">Login</h1>
			            <Form.Group controlId="userEmail">
			                <Form.Label>Email address</Form.Label>
			                <Form.Control 
			                    type="email" 
			                    placeholder="Enter email" 
			                    required
			                />
			            </Form.Group>

			            <Form.Group controlId="password">
			                <Form.Label>Password</Form.Label>
			                <Form.Control 
			                    type="password" 
			                    placeholder="Password" 
			                    required
			                />
			            </Form.Group>

			            <Button variant="primary" type="submit" id="submitBtn">
			            	Submit
			            </Button>
			        </Form>       
		    )
		}

/*
2. Render the "Login" page in the "App" component.
	Application > src > App.js
*/

		/*...*/
		// import Home from './pages/Home';
		import Login from './pages/Login';
		// import Register from './pages/Register';
		/*...*/

		function App() {
			return (
				<>
				  	<NavBar />
					<Container>
						<Login />
					</Container> 
				</>
			);
		}

		/*...*/

/*
3. Simulate a user login by clearing the input fields after login.
	Application > src > pages > Login.js
*/

		// 3a. Define state hooks for all input fields and an "isActive" state for conditional rendering of the submit button.

			import { useState } from 'react';
			import { Form, Button } from 'react-bootstrap';

			export default function Login() {

				// State hooks to store the values of the input fields
				const [email, setEmail] = useState('');
			    const [password, setPassword] = useState('');
			    // State to determine whether submit button is enabled or not
			    const [isActive, setIsActive] = useState(true);

			    return (
			        /*...*/
			    )
			}

		// 3b. Bind the input states via 2-way binding.

			/*...*/

			export default function Login() {

				/*...*/

			    return (
				    	
				        <Form>
				        	<h1 className="my-5 text-center">Login</h1>
				            <Form.Group controlId="userEmail">
				                <Form.Label>Email address</Form.Label>
				                <Form.Control 
				                    type="email" 
				                    placeholder="Enter email"
				                    value={email}
		                			onChange={(e) => setEmail(e.target.value)}
				                    required
				                />
				            </Form.Group>

				            <Form.Group controlId="password">
				                <Form.Label>Password</Form.Label>
				                <Form.Control 
				                    type="password" 
				                    placeholder="Password"
				                    value={password}
		                			onChange={(e) => setPassword(e.target.value)}
				                    required
				                />
				            </Form.Group>

				            <Button variant="primary" type="submit" id="submitBtn">
				                Submit
				            </Button>
				        </Form>
			    )
			}

		// 3c. Define a "useEffect" for validating user input.

			import { useState, useEffect } from 'react';
			import { Form, Button } from 'react-bootstrap';

			export default function Login() {

				/*...*/
				const [isActive, setIsActive] = useState(true);

	    		useEffect(() => {

	    	        // Validation to enable submit button when all fields are populated and both passwords match
	    	        if(email !== '' && password !== ''){
	    	            setIsActive(true);
	    	        }else{
	    	            setIsActive(false);
	    	        }

	    	    }, [email, password]);

			    return (
			        <Form>
			            {/*...*/}
			        </Form>
			    )
			}

		// 3d. Render a clickable button if the "isActive" state is "true" and a disabled button if the "isActive" state is "false".

			export default function Login() {

			    /*...*/

			    return (
			        <Form>
			            {/*...*/}

			            <Form.Group controlId="password">
			                {/*...*/}
			            </Form.Group>

			            { isActive ? 
			                <Button variant="primary" type="submit" id="submitBtn">
			                    Submit
			                </Button>
			                : 
			                <Button variant="danger" type="submit" id="submitBtn" disabled>
			                    Submit
			                </Button>
			            }
			        </Form>
			    )
			}

		// 3e. Create an "authenticate" function that will console log a simple login message and clear the email and password fields.

			/*...*/

			export default function Login() {

				/*...*/
				const [isActive, setIsActive] = useState(true);

		    	function authenticate(e) {

			        // Prevents page redirection via form submission
			        e.preventDefault();
					fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/login',{

					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
		
						email: email,
						password: password
		
					})
				})
				.then(res => res.json())
				.then(data => {

					if(data.access){

						alert(`Thank you for logging in`);
					
					} else if (data.error == "No Email Found") {

						alert(`Email does not exist`);

					} else {

						alert(`Something went wrong`)
					}
				})
				// Clear input fields after submission
				setEmail('');
				setPassword('');


			    }

		    	useEffect(() => {
					/*...*/
		        }, [email, password]);

			    return (
			        <Form onSubmit={(e) => authenticate(e)}>
			        	{/*...*/}
			        </Form>
			    )
			}

/*
==================================================
[s62] - React.js - Routing and Conditional Rendering
==================================================
*/

/*

Reference Material:
	Discussion Slides
		https://docs.google.com/presentation/d/1zmzLfD3Rssj3Q22dNtLMRQAeqtKBH31U6xFO_bRn-Rs/
	Gitlab Repo
		https://gitlab.com/zuitt-coding-bootcamp-curricula/courses/wdc028v1.5b/-/tree/master/fullstack/s50-s55

Other References:
	React Router Dom Documentation
		https://reactrouter.com/web/guides/quick-start
	React Router Dom Primary Components
		https://reactrouter.com/web/guides/primary-components
	React Router Dom Switch Component
		https://reactrouter.com/web/api/Switch
	React Router DOM Route Component
		https://reactrouter.com/web/api/Route
	React Router Dom NavLink Component
		https://reactrouter.com/web/api/NavLink
	JavaScript Web Storage API
		https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
	JabaScript Window.localStorage Property
		https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
	React Router DOM Redirect Component
		https://reactrouter.com/web/api/Redirect
	Creating Git Projects:
			GitLab
				https://gitlab.com/projects/new#blank_project
			GitHub
				https://github.com/new
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Application - Root folder for the application

*/

/*
==========
Discussion
========== 
*/

/*
1. Install the "react-router-dom" package to implement routing.
	Application > terminal
*/

		npm install react-router-dom

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentation for React Router DOM Documentation.
		*/

/*
2. Create routes to allow page navigation.
	Application > src > App.js
*/

		// 2a. Import the "Route" and "Switch" components from "react-router-dom". Also import the "BrowserRouter" component from "react-router-dom" and give it an alias of "Router" for convenience.

			// import { Fragment } from 'react';
			import { Container } from 'react-bootstrap';
			import { BrowserRouter as Router } from 'react-router-dom';
			import { Route, Routes } from 'react-router-dom';
			import AppNavbar from './components/AppNavbar';
			/*...*/

		// 2b. Wrap the "App" component contents within the "Router" component to enable routing within the app and create routes to the different page components.

			/*...*/
			// import Highlights from './components/Highlights';
			import Courses from './pages/Courses';
			import Home from './pages/Home';
			import Login from './pages/Login';
			import Register from './pages/Register';
			import './App.css';

			// React JS is a single page application (SPA)
			// Whenever a link is clicked, it functions as if the page is being reloaded but what it actually does is it goes through the process of rendering, mounting, rerendering and unmounting components
			// When a link is clicked, React JS changes the url of the application to mirror how HTML accesses its urls
			// It renders the component executing the function component and it's expressions
			// After rendering it mounts the component displaying the elements
			// Whenever a state is updated or changes are made with React JS, it rerenders the component
			// Lastly, when a different page is loaded, it unmounts the component and repeats this process
			// The updating of the user interface closely mirrors that of how HTML deals with page navigation with the exception that React JS does not reload the whole page
			function App() {
				return (
					<Router>
						<Container fluid>
						    <AppNavbar/>
						    <Routes>
						        <Route path="/" element={<Home />} />
						        <Route path="/courses" element={<Courses />} />
						        <Route path="/register" element={<Register />} />
						        <Route path="/login" element={<Login />} />
						    </Routes>
						</Container>
					</Router>
				);
			}

			/*...*/

			/*
			Important Note:
				- The `BrowserRouter` component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser.

				- The `Routes` component holds all our Route components. It selects which `Route` component to show based on the URL Endpoint. For example, when the `/courses` is visited in the web browser, React.js will show the `Courses` component to us.

				Try navigating to the routes by changing the URL in the web browser.
				- Refer to "references" section of this file to find the documentation for React Router DOM Primary Components, Mount vs Render, React Router DOM Switch Component and React Router DOM Route Component.
			*/

/*
3. Refactor the links and set the correct URL endpoints in the "AppNavbar" component.
	Application > src > components > AppNavbar.js
*/

		/*...*/
		import Nav from 'react-bootstrap/Nav';
		import { Link, NavLink } from 'react-router-dom';

		export default function AppNavbar() {
			return (
				<Navbar bg="light" expand="lg">
					<Container fluid>
					    <Navbar.Brand as={Link} to="/">Zuitt</Navbar.Brand>
					    <Navbar.Toggle aria-controls="basic-navbar-nav" />
					    <Navbar.Collapse id="basic-navbar-nav">
						    <Nav className="ms-auto">
						        <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
						        <Nav.Link as={NavLink} to="/courses" exact="true">Courses</Nav.Link>
						        <Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
						        <Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
						    </Nav>
					    </Navbar.Collapse>
					</Container>
				</Navbar>
			)
		}

		/*
		Important Note:
			- The "as" prop allows components to be treated as if they are a different component gaining access to it's properties and functionalities.
			- The "to" prop is used in place of the "href" prop for providing the URL for the page.
			- The "exact" prop is used to highlight the active NavLink component that matches the URL.
			- Refer to "references" section of this file to find the documentation for React Router DOM NavLink Component.
		*/

/*
4. Create a "User" state to store information from the user to be used for conditional rendering.
	Application > src > AppNavbar.js
*/

		import { useState } from 'react';
		import Navbar from 'react-bootstrap/Navbar';
		/*...*/

		export default function AppNavbar() {

			// State to store the user information stored in the login page.
			const [user, setUser] = useState(localStorage.getItem("token"));
			console.log(user); //checking if we received the login token

			return (
				<Navbar bg="light" expand="lg">
					<Container fluid>
						{/*...*/}
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
								{/*...*/}
								<Nav.Link as={NavLink} to="/courses" exact="true">Courses</Nav.Link>
								<Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
								<Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			)
		}

/*
5. Store the user email in the localStorage on login.
	Application > src > pages > Login.js
*/

		export default function Login(props) {

		    /*...*/

		    function authenticate(e) {
				/*...*/	

				if(data.access){
				
					// Set the email of the authenticated user in the local storage
		        	// Syntax
		        	// localStorage.setItem('propertyName', value);
					localStorage.setItem('token', data.access);

					alert(`You are now logged in`);
					
				} else {

					alert(`${email} does not exist`)
				}
			})

		        setEmail('');
		        /*...*/

		    }

		    /*...*/

		}

		/*
		Important Note:
			- After adding the localStorage, check the dev tools > Application > Local Storage > localhost (to check if the Key Value was saved.)
			- the "localStorage.setItem" allows us to manipulate the browser's localStorage property to store information indefinitely to help demonstrate conditional rendering and the login and logout features.
			- Because React JS is a single page application, using the localStorage does not trigger rerendering of components and for us to be able to view the effects of this we would need to refresh our browser.
			- The proper solution to this will be discussed in the next session.
			- Refer to "references" section of this file to find the documentations for JavaScript Web Storage API and JavaScript Window.localStorage Property.
		*/

/*
6. Apply conditional rendering in the "AppNavbar" component such that a "Logout" link will be shown instead of "Login" and "Register" when a user is logged in.
	Application > src > components > AppNavbar.js
*/

		/*...*/

		export default function AppNavbar() {

			return (
				<Navbar bg="light" expand="lg">
					<Container fluid>
					  {/*...*/}
					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav className="ms-auto">
					        {/*...*/}
					        <Nav.Link as={NavLink} to="/courses" exact="true">Courses</Nav.Link>
				      	    {(user !== null) ? 
			                    <Nav.Link as={NavLink} to="/logout" exact="true">Logout</Nav.Link>
			                    : 
			                    <React.Fragment>
				                  	<Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
				      				<Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
			                    </React.Fragment>
			                }
					    </Nav>
					  </Navbar.Collapse>
					</Container>
				</Navbar>
			)
		}

		/*
			IMPORTANT NOTE:
				- Once you have implemented conditional rendering in AppNavbar, refresh the browser to see the updated rendering.
				- You can delete the Key Value in localStorage manually. Right click > Delete
		*/

/*
7. Create a logout page that will clear the localStorage of the user details.
	Application > src > pages > Logout.js
*/

		import { Navigate } from 'react-router-dom';

		export default function Logout() {

		    localStorage.clear();

		    // Redirect back to login
		    return (
		        <Navigate to='/login' />
		    )

		}

		/*
		Important Note:
			- Simply refresh the browser to observe the updated navbar whenever you log in or log out.
			- The "localStorage.clear()" method allows us to clear the information in the localStorage ensuring no information is stored in our browser.
			- In order to see this effect we will need to refresh the browser for us to see the changes in our application.
			- The proper solution to this will be discussed in the next session.
			- Closing and reopening the browser and even restarting our devices will make the information in the localStorage persistent.
			- It's always good practice to include code in our application to clear the localStorage when it is no longer needed.
			- Refer to "references" section of this file to find the documentations for JavaScript Window.localStorage Property and React Router DOM Navigate Component.
		*/

/*
==================
[s62] - React.js - Routing and Conditional Rendering - Activity
==================

Activity References:

React Router Routes
https://reactrouter.com/en/main/route/route#elementcomponent

React Props
https://legacy.reactjs.org/docs/components-and-props.html

Activity:

Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s62"
2. Create a route which will be accessed when a user enters an undefined route and display the Error page.

Member 2,3:
3. Refactor the Banner component to be useable for the Error page.

Member 4,5
4. Refactor the Banner component to be useable for the Home page.

All Members:
5. Check out to your own git branch with git checkout -b <branchName>.
6. Update your local sessions git repository and push to git with the commit message of Add activity code s62.
7. Add the sessions repo link in Boodle for s62.

*/

/*
1. Create an "Error" page that will be rendered whenever an undefined route is accessed.
	Application > src > pages > Error.js
*/

		import Banner from '../components/Banner';

		export default function Error() {

		    const data = {
		        title: "404 - Not found",
		        content: "The page you are looking for cannot be found",
		        destination: "/",
		        label: "Back home"
		    }
		    
		    return (
		        <Banner data={data}/>
		    )
		}

		/*
		Important Note:
			- Not providing the "exact" and "path" props to the "Route" component will make it so that any undefined route will be loaded with a specified component.
			- Make sure to highlight this to the students to ensure completion of the session's activity.
		*/

/*
2. Import the "Error" page and add the route.
	Application > src > App.js
*/

		/*...*/
		
		import Home from './pages/Home';
		import Courses from './pages/Courses';
				/*...*/
		import Error from './pages/Error';

		function App () {
		
		return(
				<Router>
		            <NavBar />
		            <Container fluid>
					    <Routes>
					        <Route path="/" element={<Home />} />
					        <Route path="/courses" element={<Courses />} />
					        <Route path="/register" element={<Register />} />
					        <Route path="/login" element={<Login />} />
					        <Route path="*" element={<Error />} />
					    </Routes>
		            </Container> 
		        </Router>
	        );
		}
		
/*
3. Refactor the "Banner" component to receive a "data" prop to be reusable on both the "Error" and "Home" page.
	Application > src > components > Banner.js
*/

		/*...*/
		import { Button, Row, Col } from 'react-bootstrap';
		import { Link } from 'react-router-dom';

		export default function Banner({data}) {

			console.log(data);
		    const {title, content, destination, label} = data;

		    return (
		        <Row>
		            <Col className="p-5 text-center">
	                    <h1>{title}</h1>
	                    <p>{content}</p>
	                    <Link className="btn btn-primary" to={destination}>{label}</Link>
		            </Col>
		        </Row>
		    )
		}

/*
4. Add the "data" for the "Banner" component in the "Home" page to show the previously used information.
	pages > Home.js
*/

		export default function Home() {

		    const data = {
		        title: "Zuitt Coding Bootcamp",
		        content: "Opportunities for everyone, everywhere",
		        destination: "/courses",
		        label: "Enroll now!"
		    }

		    return (
		        <>
		            <Banner data={data}/>
		            <Highlights />
		        </>
		    )
		}

/*
=====================================
[s63] - React.js - App State Management
=====================================
*/

/*

Reference Material:
	Discussion Slides
		https://docs.google.com/presentation/d/1zmzLfD3Rssj3Q22dNtLMRQAeqtKBH31U6xFO_bRn-Rs/
	Gitlab Repo
		https://gitlab.com/zuitt-coding-bootcamp-curricula/courses/wdc028v1.5b/-/tree/master/fullstack/s50-s55

Other References:
	React JS Context
		https://reactjs.org/docs/context.html
	React JS React.createContext Method
		https://reactjs.org/docs/context.html#reactcreatecontext
	React JS Context Provider Component
		https://reactjs.org/docs/context.html#contextprovider
	React JS useContext Hook
		https://reactjs.org/docs/hooks-reference.html#usecontext
	Creating Git Projects:
			GitLab
				https://gitlab.com/projects/new#blank_project
			GitHub
				https://github.com/new
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Application - Root folder for the application

*/

/*
==========
Discussion
========== 
*/

/*
1. Create a "User" state and an "unsetUser" function that will be used in different components within the application.
	To update the server rendering of AppNavbar when the user login.
	Application > src > App.js
*/

		import { useState } from 'react';
		import { Container } from 'react-bootstrap';
		/*...*/

		function App() {

			// State hook for the user state that's defined here for a global scope
			// Initialized as an object with properties from the localStorage
			// This will be used to store the user information and will be used for validating if a user is logged in on the app or not
		    const [user, setUser] = useState({
		        token: localStorage.getItem('token')
		    })

		    // Function for clearing localStorage on logout
		    const unsetUser = () => {
		        localStorage.clear();
		    }

			return (
				/*...*/
			)
		}

/*
2. Use React's Context API to give the authenticated user object to have "global" scope within our application.
	Application > src > UserContext.js
*/
		
		import React from 'react';

		// Creates a Context object
		// A context object as the name states is a data type of an object that can be used to store information that can be shared to other components within the app
		// The context object is a different approach to passing information between components and allows easier access by avoiding the use of prop-drilling
		const UserContext = React.createContext();

		// The "Provider" component allows other components to consume/use the context object and supply the necessary information needed to the context object
		export const UserProvider = UserContext.Provider;

		export default UserContext;

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentations for React JS Context, React JS React.createContext Method and React JS Context Provider Component.
		*/

/*
3. Import the "UserProvider" component from "UserContext" and wrap all components in the app within it to allow re-rendering when the "value" prop changes. Set the "value" of this provider to the "user" state and the "unsetUser" function.
	Application > src > App.js
*/

		/*...*/
		import './App.css';
		import { UserProvider } from './UserContext';

		function App() {
			return (
				<UserProvider value={{ user, setUser, unsetUser }}>
					<Router>
						<AppNavbar />
						<Container fluid>
							<Routes>
							  <Route path="/" element={<Home />} />
							  <Route path="/courses" element={<Courses />} />
							  <Route path="/register" element={<Register />} />
							  <Route path="/login" element={<Login />} />
							  <Route path="/logout" element={<Logout />} />
							  <Route path="*" element={<Error />} />
							</Routes>
						</Container>
					</Router>
				</UserProvider>
			);
		}

		/*
		Important Note:
			- Storing information in a context object is done by providing the information using the corresponding "Provider" component and passing the information via the "value" prop.
			- All information provided to the Provider component can be accessed later on from the context object as properties.
		*/

/*
4. Consume the UserContext object in the Login page using the "useContext" hook to store the user details for future use.
	Application > src > pages > Login.js
*/

		// 4a. Import the "useContext" hook and the "UserContext" object. Deconstruct the "user" state and "setUser" setter function from the "UserContext" object.

			import { useState, useEffect, useContext } from 'react';
			import { Form, Button } from 'react-bootstrap';
			import UserContext from '../UserContext';

			export default function Login() {

				// Allows us to consume the User context object and it's properties to use for user validation 
				const { user, setUser } = useContext(UserContext);

				const [email, setEmail] = useState('');
				/*...*/

			}

			/*
			Important Note:
				- Refer to "references" section of this file to find the documentation for React JS useContext Hook.
			*/

		// 4b. In the "authenticate" function store the user's email in the user state by using the setter function obtained from the User context object. 

			/*...*/

			export default function Login() {

				/*...*/

				//Have students rename their login function as authenticate() 
				function authenticate(e) {

					/*...*/
					
					//data will only contain an email property if we can properly save our user.
					if(data.access){
					/*...*/

						// Storing information in the localStorage will make the data persistent even as the page is refreshed unlike with the use of states where the information is reset when refreshing the page
						localStorage.setItem('token', access);
	
						alert("Thank you for registering!")
	
					} else {
						
						alert("Please try again later.")
					}
	
					}
				}
				/*...*/
				setConfirmPassword('');

			// 4c. Import the "Navigate" component from react-router-dom.

				/*...*/
				import { Form, Button } from 'react-bootstrap';
				import { Navigate } from 'react-router-dom'; 
				import UserContext from '../UserContext';

				/*...*/

			// 4d. Create a conditional statement that will redirect the user to the courses page when a user is logged in.

			/*...*/

			export default function Login() {

				/*...*/

			    return(
			    	
			    	    (user.access !== null) ?
			    	        <Navigate to="/courses" />
			    	    :
			    	        <Form onSubmit={(e) => authenticate(e)}>
			    	         	{/*...*/}
			    	        </Form>
			    	)

			}

			/*
			Important Note:
				- Manually access the "/login" route in the url to demonstrate how this works and how the page will automatically redirect the user to the courses page upon accessing this route.
			*/

/*
5. Refactor the  "AppNavbar" component to use the "User" context object for conditionally rendering the login, register and logout buttons.
	Application > src > components > AppNavbar.js
*/

		import { useState, useContext } from 'react';
		import Navbar from 'react-bootstrap/Navbar';
		/*...*/
		import { Link, NavLink } from 'react-router-dom';
		import UserContext from '../UserContext';

		export default function AppNavbar() {

			const { user } = useContext(UserContext);

			return (
				<Navbar bg="light" expand="lg">
				  {/*...*/}
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ml-auto">
				      {/*...*/}
				      <Nav.Link as={NavLink} to="/courses" exact="true">Courses</Nav.Link>
			      	  {(user.access !== null) ? 
		                  {/*...*/}
		              }
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			)
		}

		/*
		Important Note:
			- Remove the previously created user state and replace it with the context object.
			- Also don't forget to change the condition in the conditional statement to use the "user.access" property
		*/

/*
6. Refactor the Logout page that will use the "User" context object's setUser setter and unsetUser functions to clear the localStorage of the user details and set the user state back to it's original value.
	Application > src > pages > Logout.js
*/

		import { useContext, useEffect } from 'react';
		import { Navigate } from 'react-router-dom';
		import UserContext from '../UserContext';

		export default function Logout() {

		    // Consume the UserContext object and destructure it to access the user state and unsetUser function from the context provider
		    const { unsetUser, setUser } = useContext(UserContext);

		    // Clear the localStorage of the user's information
		    unsetUser();

		    // Placing the "setUser" setter function inside of a useEffect is necessary because of updates within React JS that a state of another component cannot be updated while trying to render a different component
		    // By adding the useEffect, this will allow the Logout page to render first before triggering the useEffect which changes the state of our user 
		    useEffect(() => {
		        // Set the user state back to it's original value
		        setUser({access: null});
		    })

		    // Navigate back to login
		    return (
		        <Navigate to='/login' />
		    )

		}

		/*
		Important Note:
			- At this point you may now test the user login and logout functions and demonstrate the difference between using just the localStorage which requires us to refresh the page with using the "User" context object which now rerenders the page upon login and logout
		*/

/*
===================
[s63] - Activity
===================

Activity References:

Conditional Rendering
https://react.dev/learn/conditional-rendering

Activity:

Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s63"
2. If the user goes to /register route (Registration page) when a user is already logged in, redirect the user to the /courses route (Courses page).

Member 2,3:
3. Create a new page called profile which contains details of the the logged in user.
	- Display temporarily static user details in react elements.
        - First Name
        - Last Name
        - Mobile Number
        - Email Address
    - Add a route with "/profile" 

Member 4:
4. Add conditional rendering that the profile page link should only be visible in the navbar if the user is logged in.

Member 5:
5. Add conditional rendering in the profile page that the page is not accessible if the user is not logged in.

All Members:
6. Check out to your own git branch with git checkout -b <branchName>.
7. Update your local sessions git repository and push to git with the commit message of Add activity code s63.
8. Add the sessions repo link in Boodle for s63.

*/

/*
1. Consume the "user" state from the "User" context object.
	Application > src > pages > Register.js
*/

		import { useState, useEffect, useContext } from 'react';
		import { Form, Button } from 'react-bootstrap';
		import UserContext from '../UserContext';

		export default function Register() {

		    const {user} = useContext(UserContext);

		    /*...*/

		}

/*
2. Import the "Navigate" component from react-router-dom and create a conditional statement that will redirect the user back to the "/courses" route if a user is already logged in.
*/

		/*...*/
		import { Form, Button } from 'react-bootstrap';
		import { Navigate } from 'react-router-dom';
		import UserContext from '../UserContext';

		export default function Register() {

			return(
				(user.access !== null) ?
				    <Navigate to="/courses" />
				:
				    <Form onSubmit={(e) => registerUser(e)}>
				    	{/*...*/}
				    </Form>
			)

		}
/*
3. Profile Page
	Create a new page called Profile which contains details of the logged in user. 
		- Display the logged in user's email in a react element.
		- Display temporarily other static user details in react elements.
			- First Name
			- Last Name
			- Email
			- Mobile Number
*/
import {useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import UserContext from '../UserContext';
import { useNavigate,Navigate } from 'react-router-dom';


export default function Profile(){

    const {user} = useContext(UserContext);

	return (
        (user.access === null) ?
        <Navigate to="/courses" />
        :
		<Row>
			<Col className="p-5 bg-primary text-white">
				<h1 className="my-5 ">Profile</h1>
                <h2 className="mt-3">James Dela Cruz</h2>
				<hr />
				<h4>Contacts</h4>
				<ul>
					<li>Email: jamesDC@mail.com</li>
					<li>Mobile No: 09266772411</li>
				</ul>
			</Col>
		</Row>

	)

}

/*
    AppNavBar
*/

/*...*/

	<Nav className="ml-auto">
	<Nav.Link as={Link} to="/">Home</Nav.Link>
	<Nav.Link as={Link} to="/courses">Courses</Nav.Link>
	{(user.access !== null) ? 
			<>
				<Nav.Link as={Link} to="/profile">Profile</Nav.Link>
				<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
			</>
		: 
			<>
				<Nav.Link as={Link} to="/login">Login</Nav.Link>
				<Nav.Link as={Link} to="/register">Register</Nav.Link>
			</>
	}
	</Nav>

/*...*/


/*
===========================================
[s64] - React.js - API Integration with Fetch
===========================================
*/

/*

Reference Material:
	Discussion Slides
		https://docs.google.com/presentation/d/1zmzLfD3Rssj3Q22dNtLMRQAeqtKBH31U6xFO_bRn-Rs/
	Gitlab Repo - S50 - S55
		https://gitlab.com/zuitt-coding-bootcamp-curricula/courses/wdc028v1.5b/-/tree/master/fullstack/s50-s55
	GitLab Repo - S37 - S41
		https://gitlab.com/zuitt-coding-bootcamp-curricula/courses/wdc028v1.5b/-/tree/master/backend/s37-41

Other References:
	JavaScript fetch API
		https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
	JavaScript fetch Method
		https://developer.mozilla.org/en-US/docs/Web/API/fetch
	Bearer Token
		https://oauth.net/2/bearer-tokens/
	Sweet Alert 2 Package
		https://sweetalert2.github.io/
	React Bootstrap Grid System
		https://react-bootstrap.github.io/layout/grid/
	React Router DOM Route Component
		https://reactrouter.com/web/api/Route
	React Router DOM useParams Hook
		https://reactrouter.com/web/api/Hooks/useparams
	Creating Git Projects:
			GitLab
				https://gitlab.com/projects/new#blank_project
			GitHub
				https://github.com/new
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Frontend - Root folder for the React JS application
	Backend - Root folder for the Express JS application

*/

/*
==========
Discussion
========== 
*/

/*
1. Comment out the page redirection to make it easy to implement the fetch method in our Login page.
	Frontend > src > pages > Login.js
*/

		export default function Login() {

		    /*...*/

		    return (
		        // (user.access !== null) ?
		        //     <Navigate to="/courses" />
		        // :
		            <Form onSubmit={(e) => authenticate(e)}>
		                {/*...*/}
		            </Form>
		    )
		}

/*
3. Create a conditional statement that will store the generated JWT token in the localStorage to allow us to use it in retrieving the users's information when needed.
	Frontend > src > pages > Login.js
*/

		/*...*/

		export default function Login() {

			/*...*/

			function authenticate(e) {

			    /*...*/

			    fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/login', {
			        /*...*/
			    })
			    .then(res => res.json())
			    .then(data => {

			        console.log(data);

			        // If no user information is found, the "access" property will not be available and will return undefined
			        // Using the typeof operator will return a string of the data type of the variable/expression it preceeds which is why the value being compared is in a string data type
			        if (typeof data.access !== "undefined") {

			        	// The JWT will be used to retrieve user information across the the whole frontend application and storing it in the localStorage will allow ease of access to the user's information
			        	localStorage.setItem('token', data.access);

			        };

			    });
			    
			    /*...*/

			}

			/*...*/

		}

/*
4. Remove the previously used "localStorage.setItem('email', email)" and setUser setter function previously used in the discussion.
	Frontend > src > pages > Login.js
*/

		/*...*/

		export default function Login() {

			/*...*/

			function authenticate(e) {

			    /*...*/

			    fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/login', {
			        /*...*/
			    })
			    .then(res => res.json())
			    .then(data => {
					/*...*/
			    });

			    // Clear input fields after submission
        		setEmail('');
			    /*...*/

			}

			/*...*/

		}

		/*
		Important Note:
			- Do not forget do this step to ensure that there will be no conflict with the user information to be stored.
			- The user email will now be changed with the user id coming from the database.
		*/

/*
5. Create a "retrieveUserDetails" function that will convert the JWT retrieved from the fetch request created in the "authenticate" function.
	Frontend > src > pages > Login.js
*/

		/*...*/

		export default function Login() {

			/*...*/

			function authenticate(e) {
			    /*...*/
			}

			const retrieveUserDetails = (token) => {
			    
			    // The token will be sent as part of the request's header information
			    // We put "Bearer" in front of the token to follow implementation standards for JWTs
			    fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/details', {
					headers: {
						Authorization: `Bearer ${ token }`
					}
			    })
			    .then(res => res.json())
			    .then(data => {

			    	console.log(data);

			    	// Changes the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application
			        setUser({
			          id: data.user._id,
			          isAdmin: data.user.isAdmin
			        });

			    })

			};

			useEffect(() => {
				/*...*/
			}, [email, password]);

			/*...*/

		}

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentation for Bearer Token.
		*/

/*
6. Add a "useEffect" hook in the "App" component to check if the information is properly stored upon login and the localStorage is cleared upon logout.
	Frontend > src > pages > App.js
*/
		import { useState, useEffect } from 'react';
		/*...*/

		function App() {

			/*...*/

		    const unsetUser = () => {
		        /*...*/
		    }

		    // Used to check if the user information is properly stored upon login and the localStorage information is cleared upon logout
		    useEffect(() => {
		    	console.log(user);
		    	console.log(localStorage);
		    }, [user])

			return (
				/*...*/
			);
		}

		/*...*/

/*
7. Invoke the "retrieveUserDetails" function when logging in.
	Frontend > src > pages > Login.js
*/

		/*...*/

		export default function Login() {

			/*...*/

			function authenticate(e) {

			    /*...*/

			    fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/login', {
			        /*...*/
			    })
			    .then(res => res.json())
			    .then(data => {

			        console.log(data);

			        // If no user information is found, the "access" property will not be available and will return undefined
			        // Using the typeof operator will return a string of the data type of the variable/expression it preceeds which is why the value being compared is in a string data type
			        if (typeof data.access !== "undefined") {

			        	// The JWT will be used to retrieve user information across the the whole frontend application and storing it in the localStorage will allow ease of access to the user's information
			        	localStorage.setItem('token', data.access);

			        	// function for retrieving details
			        	retrieveUserDetails(data.access);

			        };

			    });
			    
			    /*...*/

			}

			/*...*/

		}

/*
8. Refactor the "App" component user state to store have it's properties contain the "user ID" and the "isAdmin" data.
	Frontend > src > pages > App.js
*/

		/*...*/

		function App() {

		    const [user, setUser] = useState({
				id: null,
				isAdmin: null
			});

		    // Function for clearing localStorage on logout
		    const unsetUser = () => {

				localStorage.clear();
				
		    };


		    //Because our user state's values are reset to null every time the user reloads the page (thus logging the user out), we want to use React's useEffect hook to fetch the logged-in user's details when the page is reloaded. By using the token saved in localStorage when a user logs in, we can fetch the their data from the database, and re-set the user state values back to the user's details.
		    useEffect(() => {

				// console.log(user);
				fetch(`http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/details`, {
					headers: {
						Authorization: `Bearer ${ localStorage.getItem('token') }`
					}
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					// Set the user states values with the user details upon successful login.
					if (typeof data.user !== "undefined") {

						setUser({
							id: data.user._id,
							isAdmin: data.user.isAdmin
						});

					// Else set the user states to the initial values
					} else {

						setUser({
							id: null,
							isAdmin: null
						});

					}

				})

		    }, []);

		    /*...*/

		}

		/*...*/

/*
9. Refactor the "AppNavbar" component to use the id of the user for conditionally rendering the login, register and logout buttons.
	Frontend > src > pages > AppNavbar.js
*/

		export default function AppNavbar() {

			/*...*/

			return (
				<Navbar bg="light" expand="lg">
					<Container>
						{/*...*/}
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								{/*...*/}
								{(user.id !== null) ? 
										{/*...*/}
									: 
										{/*...*/}
								}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			)
		}

/*
10. Refactor the "Login" component to use the id of the user for redirecting the user back to the appropriate page and uncomment the page redirection.
	Frontend > src > pages > Login.js
*/

		/*...*/

		export default function Login() {

			/*...*/

			return (
			    (user.id !== null) ?
			        <Navigate to="/courses" />
			    :
			        <Form onSubmit={(e) => authenticate(e)}>
			            {/*...*/}
			        </Form>
			)

		}

/*
11. Refactor the "Register" component to use the id of the user for redirecting the user back to the appropriate page.
	Frontend > src > pages > Register.js
*/

		/*...*/

		export default function Login() {

			/*...*/

			return (
			    (user.id !== null) ?
			        <Navigate to="/courses" />
			    :
			        <Form onSubmit={(e) => registerUser(e)}>
			            {/*...*/}
			        </Form>
			)

		}

/*
12. Refactor the "Logout" page to use the id of the user for redirecting the user back to the appropriate page.
	Frontend > src > pages > Logout.js
*/

		/*...*/

		export default function Logout() {

		    /*...*/

		    useEffect(() => {
		        // Set the user state back to it's original value
		        setUser({
		        	id: null,
            		isAdmin: null
            	});
		    }, [])

		    /*...*/

		}







/*
13. Install the sweet alert package.
	Frontend > Terminal
*/

		npm install sweetalert2

		/*
		Important Note:
			- Sweet alert 2 is a simple and useful package for generating user alerts with react JS.
		*/

/*
14. Implement the sweet alert package 2 for the login page and add a condition to our "authenticate" function wherein if the login is unsuccessful, generate a user alert to notify them of it.
	Frontend > src > pages > Login.js
*/

		/*...*/
		import { Navigate } from 'react-router-dom';
		import Swal from 'sweetalert2';
		import UserContext from '../UserContext';

		export default function Login() {

		    /*...*/

		    function authenticate(e) {

		        /*...*/

		        fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/login', {
		            method: 'POST',
		            headers: {
		                'Content-Type': 'application/json'
		            },
		            body: JSON.stringify({
		                email: email,
		                password: password
		            })
		        })
		        .then(res => res.json())
		        .then(data => {

		        	/*...*/

		            if (typeof data.access !== "undefined") {

		            	/*...*/
		            	retrieveUserDetails(data.access);

		            	Swal.fire({
		            	    title: "Login Successful",
		            	    icon: "success",
		            	    text: "Welcome to Zuitt!"
		            	});

		            } else {

		                Swal.fire({
		                    title: "Authentication failed",
		                    icon: "error",
		                    text: "Check your login details and try again."
		                });

		            };

		        })

		        /*...*/

		    }

		    /*...*/

		}

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentation for Sweet Alert 2 Package.
		*/

/*
15. Create a ".env.local" file to demonstrate the use of environment variables.
	Frontend > .env.local
*/

		REACT_APP_API_URL=http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1

		/*
		Important Note:
			- The environment variables are important for hiding sensitive pieces of information like the backend API URL which can be exploited if added directly into our code.
			- The environment variables of a React JS app is only applied to an application upon initial start up of the application.
			- Make sure to restart the frontend application after creating this file to ensure that it will be used within the project.
		*/

/*
16. Refactor the "Courses" page to use actual data stored in our database instead of using the mock database.
	Frontend > src > pages > Courses.js
*/

		// 16a. Comment out the importation of the mock database and the "console.log()" methods for checking the information retrieved from the mock database.

			/*...*/
			import CourseCard from '../components/CourseCard';
			// import coursesData from '../data/coursesData';

			export default function Courses() {

				// console.log(coursesData);
				// console.log(coursesData[0]);

				/*...*/

			}

		// 16b. Create a "useEffect" hook and a fetch request that will fetch all of the courses data to be used in the "Courses" page.

			import { useEffect } from 'react';
			import CourseCard from '../components/CourseCard';
			/*...*/

			export default function Courses() {

				/*...*/
				// console.log(coursesData[0]);

			    // Retrieves the courses from the database upon initial render of the "Courses" component
			    useEffect(() => {

			    	//get all active courses
			        fetch(`${process.env.REACT_APP_API_URL}/courses/`)
			        .then(res => res.json())
			        .then(data => {
			            
			            console.log(data);

			        });

			    }, []);
			    
			    
			    const courses = coursesData.activeCourses.map(course => {
			        /*...*/
			    })
			    
			    /*...*/

			}

		// 16c. Create a "courses" state that will store all the courses retrieved from the database and change it's value upon successful fetching of the courses from the database.

			import { useEffect, useState } from 'react';
			import CourseCard from '../components/CourseCard';
			/*...*/

			export default function Courses() {

				/*...*/
				// console.log(coursesData[0]);

				// State that will be used to store the courses retrieved from the database
				const [courses, setCourses] = useState([]);

			    useEffect(() => {
					/*...*/
			    }, []);
			    
			    /*...*/

			}

		// 16d. Move the mapping of the data inside the useEffect hook and refactor it to change the "courses" state.

			/*...*/

			export default function Courses() {

				/*...*/

			    useEffect(() => {

			    	//get all active courses
					fetch(`${process.env.REACT_APP_API_URL}/courses/`)
					.then(res => res.json())
					.then(data => {
					    
					    console.log(data);

					    // Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" components
					    setCourses(data.courses.map(course => {
					        return (
					            <CourseCard key={course._id} courseProp={course}/>
					        );
					    }));

					});

			    }, []);
			    
			    return(
			    	/*...*/
			    )

			}

/*
17. Create a "CourseView" page that will be accessed whenever a user would like to view the more details about a course.
	Application > src > pages > CourseView.js
*/

		import { useState } from 'react';
		import { Container, Card, Button, Row, Col } from 'react-bootstrap';

		export default function CourseView() {

			const [name, setName] = useState("");
			const [description, setDescription] = useState("");
			const [price, setPrice] = useState(0);

			return(
				<Container className="mt-5">
					<Row>
						<Col lg={{ span: 6, offset: 3 }}>
							<Card>
								<Card.Body className="text-center">
									<Card.Title>{name}</Card.Title>
									<Card.Subtitle>Description:</Card.Subtitle>
									<Card.Text>{description}</Card.Text>
									<Card.Subtitle>Price:</Card.Subtitle>
									<Card.Text>PhP {price}</Card.Text>
									<Card.Subtitle>Class Schedule</Card.Subtitle>
									<Card.Text>8 am - 5 pm</Card.Text>
									<Button variant="primary" block="true">Enroll</Button>
								</Card.Body>		
							</Card>
						</Col>
					</Row>
				</Container>
			)
		}

/*
18. Create a route that will render a "CourseView" page to view additional details of a course.
	Application > src > components > App.js
*/

		/*...*/
		import Courses from './pages/Courses';
		import CourseView from './pages/CourseView';
		import Error from './pages/Error';
		/*...*/

		function App() {

			/*...*/

			return (
				<UserProvider value={{ user, setUser, unsetUser }}>
			        <Router>
			            <Container fluid>
			                <AppNavbar/>
			                <Routes>
			                  	<Route path="/" element={<Home />} />
			                  	<Route path="/courses" element={<Courses />} />
			                  	 {/*add the path*/}
			                  	<Route path="/courses/:courseId" element={<CourseView />} />
			                  	<Route path="/register" element={<Register />} />
			                  	{/*....*/}
			                </Routes>
			            </Container>
			        </Router>
			    </UserProvider>
			);
		}

		/*...*/

/*
19. Refactor the "CourseCard" component that will have the button changed to view the details of the course and redirect the user to a "CourseView" page.
	Application > src > components > CourseCard.js
*/

		// import { useState, useEffect } from 'react';
		import PropTypes from 'prop-types';
		/*...*/
		// import Button from 'react-bootstrap/Button';
		import { Card } from 'react-bootstrap';
		import { Link } from 'react-router-dom';

		export default function CourseCard({courseProp}) {

		    /*...*/

		    const {name, description, price} = courseProp;

		    /*...*/
		    // const [count, setCount] = useState(0);
			// console.log(useState(0));
		    // const [seats, setSeats] = useState(10);

		    // function enroll(){
		    //     setCount(count + 1);
		    //     console.log('Enrollees: ' + count);
		    //     setSeats(seats - 1);
		    //     console.log('Seats: ' + seats);
		    // }

		    // useEffect(() => {

		    //     if (seats === 0){
		    //         alert("No more seats available");
		    //     }

		    // }, [seats]);

		    return (
		        <Card>
		            <Card.Body>
		                <Card.Title>{name}</Card.Title>
		                <Card.Subtitle>Description:</Card.Subtitle>
		                <Card.Text>{description}</Card.Text>
		                <Card.Subtitle>Price:</Card.Subtitle>
		                <Card.Text>PhP {price}</Card.Text>
		                <Link className="btn btn-primary" to="/courseView">Details</Link>
		            </Card.Body>
		        </Card>
		    )
		}

		/*
		Important Note:
			- Comment out/remove all other code found in the "CourseCard" component which will no longer be used to simulate an enrollment.
		*/

/*
20. Refactor the "CourseView" route and convert it into a dynamic route.
	Application > src > components > App.js
*/

		/*...*/

		function App() {

			/*...*/

			return (
				<UserProvider value={{user, setUser, unsetUser}}>
					<Router>
						<AppNavbar />
						<Container>
							<Routes>
								{/*...*/}
								<Route exact="true" path="/courses/:courseId" component={CourseView}/>
								{/*...*/}
							</Routes>
						</Container>
					</Router>
				</UserProvider>
			);
		}

		/*...*/

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentation for React Router DOM Route Component.
		*/

/*
21. Refactor the "Details" button of "CourseCard" component to send the course ID via the url.
	Application > src > components > CourseCard.js
*/

		/*...*/

		export default function CourseCard({courseProp}) {

			//add _id
			const {_id, name, description, price} = courseProp;

		    /*...*/

		    return (
		        <Card>
		            <Card.Body>
		                {/*...*/}
		                <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
		            </Card.Body>
		        </Card>
		    )
		}

/*
22. Retrieve the "courseId" via the url using the "useParams" hook from react-router-dom and create a "useEffect" hook to check if the courseId is retrieved properly.
	Application > src > pages > CourseView.js
*/

		import { useState, useEffect } from 'react';
		import { Container, Card, Button, Row, Col } from 'react-bootstrap';
		import { useParams } from 'react-router-dom';

		export default function CourseView() {

			// The "useParams" hook allows us to retrieve the courseId passed via the URL
			const { courseId } = useParams();

			/*...*/
			const [name, setName] = useState("");

			/*...*/

			useEffect(()=> {

				console.log(courseId);

			}, [courseId]);

			return(
				/*...*/
			)
		}

		/*
		Important Note:
			- Refer to "references" section of this file to find the documentation for React Router DOM useParams Hook.
		*/

/*
23. Create a fetch request that will retrieve the details of the course from our database to be displayed in the "CourseView" page.
	Application > src > pages > CourseView.js
*/

		/*...*/

		export default function CourseView() {

			useEffect(()=> {

				console.log(courseId);

				fetch(`${ process.env.REACT_APP_API_URL }/courses/${courseId}`)
				.then(res => res.json())
				.then(data => {

					console.log(data);

					setName(data.course.name);
					setDescription(data.course.description);
					setPrice(data.course.price);

				});

			}, [courseId]);

			return(
				/*...*/
			)
		}

/*
24. Consume the "User" context object to be able to obtain the user ID so we can enroll a user.
	Application > src > pages > CourseView.js
*/

		import { useState, useEffect, useContext } from 'react';
		import { Container, Card, Button, Row, Col } from 'react-bootstrap';
		import { useParams } from 'react-router-dom';
		import UserContext from '../UserContext';

		export default function CourseView() {

			const { user } = useContext(UserContext);

			const [name, setName] = useState("");
			/*...*/

		}

/*
25. Create an "enroll" function that will enroll a user to a specific course and bind it to the "Enroll" button.
	Application > src > pages > CourseView.js
*/

		/*...*/

		export default function CourseView() {

			/*...*/
			const [price, setPrice] = useState(0);

			const enroll = (courseId) => {

				fetch(`${ process.env.REACT_APP_API_URL }/users/enroll`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${ localStorage.getItem('token') }`
					},
					body: JSON.stringify({
						enrolledCourses: [ {courseId} ],
						totalPrice: price
					})
				})
				.then(res => res.json())
				.then(data => {

					console.log(data);

				});

			};

			useEffect(()=> {
				/*...*/
			}, [courseId]);

			return(
				<Container className="mt-5">
					<Row>
						<Col lg={{ span: 6, offset: 3 }}>
							<Card>
								<Card.Body className="text-center">
									{/*...*/}
									<Button variant="primary" onClick={() => enroll(courseId)}>Enroll</Button>
								</Card.Body>		
							</Card>
						</Col>
					</Row>
				</Container>
			)

		}

/*
26. Create a conditional statement that will alert the user of a successful/failed enrollment.
	Application > src > pages > CourseView.js
*/

		/*...*/
		import { useParams } from 'react-router-dom';
		import Swal from 'sweetalert2';
		import UserContext from '../UserContext';

		export default function CourseView() {

			/*...*/

			const enroll = (courseId) => {

				fetch(`${ process.env.REACT_APP_API_URL }/users/enroll`, {
					/*...*/
				})
				.then(res => res.json())
				.then(data => {

					console.log(data.message);

					if (data.error === 'Admin is forbidden') {

						Swal.fire({
							title: "Admin enrollment error",
							icon: 'error',
							text: "You are an administrator you may not enroll to a course."
						});

					} else if (data.message === 'Successfully Enrolled') {

						Swal.fire({
							title: "Successfully enrolled",
							icon: 'success',
							text: "You have successfully enrolled for this course."
						});

					} else {

						Swal.fire({
							title: "Something went wrong",
							icon: "error",
							text: "Please try again."
						});

					}

				});

			};

			/*...*/

		}

/*
27. Import the "useNavigate" hook from react-router-dom and redirect the user back to the "Courses" page after enrolling to a course.
	Application > src > pages > CourseView.js
*/

		/*...*/
		import { Container, Card, Button } from 'react-bootstrap';
		import { useParams,useNavigate, Link } from 'react-router-dom';
		import Swal from 'sweetalert2';

		export default function CourseView() {

			/*...*/
			const { user } = useContext(UserContext);

			// Allows us to gain access to methods that will allow us to redirect a user to a different page after enrolling a course
			//an object with methods to redirect the user
			const navigate = useNavigate();

			const [name, setName] = useState("");
			/*...*/

			const enroll = (courseId) => {

				fetch(`${ process.env.REACT_APP_API_URL }/users/enroll`, {
					/*...*/
				})
				.then(res => res.json())
				.then(data => {

					/*...*/

					if (data === true) {

						Swal.fire({
							/*...*/
						});

						// The navigate hook will allow us to navigate and redirect the user back to the courses page programmatically instead of using a component.
						navigate("/courses");

					} else {
						/*...*/
					}

				});

			};

			/*...*/

		}

/*
28. Create a ternary operator that will conditionally render the enroll button if a user is logged in and a button that will redirect the a user to the "Login" page if they are not logged in.
	Application > src > components > CourseView.js
*/

		/*...*/

		export default function CourseView() {

			/*...*/

			return(
				<Container className="mt-5">
					<Row>
						<Col lg={{ span: 6, offset: 3 }}>
							<Card>
								<Card.Body className="text-center">
									{/*...*/}
									<Card.Text>8 am - 5 pm</Card.Text>
									{ user.id !== null ? 
											<Button variant="primary" block="true" onClick={() => enroll(courseId)}>Enroll</Button>
										: 
											<Link className="btn btn-danger btn-block" to="/login">Log in to Enroll</Link>
									}
								</Card.Body>		
							</Card>
						</Col>
					</Row>
				</Container>
			)

		}

/*

/*
Optional: 28. Refactor the Profile.js to use fetch()
	Application > src > components > Profile.js
*/

import {useState,useEffect, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import UserContext from '../UserContext';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Profile(){

    const {user} = useContext(UserContext);

    const [details,setDetails] = useState({})

    useEffect(()=>{

        fetch(`http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/users/details`, {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			// Set the user states values with the user details upon successful login.
			if (typeof data.user._id !== "undefined") {

				setDetails(data.user);

			} else if (data.error === "User not found") {

				Swal.fire({
	        	    title: "User not found",
	        	    icon: "error",
	        	    text: "Something went wrong, kindly contact us for assistance."
	        	});

			} else {

				Swal.fire({
	        	    title: "Something went wrong",
	        	    icon: "error",
	        	    text: "Something went wrong, kindly contact us for assistance."
	        	});

			}
        });

    },[])

	return (
        // (user.access === null) ?
        // <Navigate to="/courses" />
        // :
        (user.id === null) ?
        <Navigate to="/courses" />
        :
		<Row>
			<Col className="p-5 bg-primary text-white">
				<h1 className="my-5 ">Profile</h1>
                {/* <h2 className="mt-3">James Dela Cruz</h2> */}
				<h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
				<hr />
				<h4>Contacts</h4>
				<ul>
					{/* <li>Email: jamesDC@mail.com</li> */}
                    <li>Email: {details.email}</li>
					{/* <li>Mobile No: 09266772411</li> */}
					<li>Mobile No: {details.mobileNo}</li>
				</ul>
			</Col>
		</Row>

	)

}

/* 
====================
[s64] - Activity
====================

Activity References:

JavaScript fetch API
	https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
JavaScript fetch Method
	https://developer.mozilla.org/en-US/docs/Web/API/fetch
Bearer Token
	https://oauth.net/2/bearer-tokens/
Sweet Alert 2 Package
	https://sweetalert2.github.io/
React Bootstrap Grid System
	https://react-bootstrap.github.io/layout/grid/
React Router DOM Route Component
	https://reactrouter.com/web/api/Route
React Router DOM useParams Hook
	https://reactrouter.com/web/api/Hooks/useparams


Activity
Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s64"
2. Create a new page component called AddCourse. Then, in the app component, create it's route component with endpoint "/addCourse".
3. Create all the input states needed for the form and a state for conditionally rendering our submit button.

Member 2:
4. Add a react-bootstrap form that reflects the fields needed.
5. Conditionally render our button based on our state's value. Wherein, initially, the submit button should be disabled.
6. Apply two-way binding on the input elements using the input states.
7. Add a useEffect that when all the input fields are filled, enable the submit button.

Member 3:
8. Attach a submit event listener to the form.
9. Create a function to be triggered/run by the submit event.
	- In the function of the submit event, send a request using fetch() to add our course.
	- Pass logged-in admin's token from our localStorage.
	- add the details needed for the course in the request body.

Member 4:
10. Then, check if the data returned by the fetch() is an error message of "Course already exists", show a sweetalert message for error with course creation:
	- "Course Already Exists"
	- set the input states to its initial values.
11. Then, check if the data returned by the fetch() is an error message of "Failed to save the course", show a sweetalert message for error with course creation:
	- "Unsuccessful Course Creation"
	- set the input states to its initial values.
12. Then, check if the data returned by the fetch() is the created course with its generated id, show a sweetalert message for successful course creation:
	- "Course Added"
	- Redirect the user to the Courses page upon successful course creation.
	- Add an else statement, to show a sweetalert for unsuccessful course creation.
		- "Unsuccessful Course Creation"
13. Then, outside the fetch(), but still within submit, set the input states to its initial values.

Member 5:
14. Conditionally render a link to the add course page with text "Add Course". 
	- This link should only be visible to a logged-in admin user.
	- It should not be visible to guest users.
15. In the addCourse page, redirect the user to the courses page if the logged-in user is not an admin.
	- Redirect the guest user to the course page.


All Members:
16. Check out to your own git branch with git checkout -b <branchName>.
17. Update your local sessions git repository and push to git with the commit message of Add activity code s59.
18. Add the sessions repo link in Boodle for s59. 

*/


/*
	Add Course Page
*/
import {useState,useEffect, useContext} from 'react';
import {Form,Button} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function AddCourse(){

	const navigate = useNavigate();

    const {user} = useContext(UserContext);

	//input states
	const [name,setName] = useState("");
	const [description,setDescription] = useState("");
	const [price,setPrice] = useState("");
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
        if(name !== '' && description !== '' && price !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

    }, [name, description, price]);

	function createCourse(e){

		//prevent submit event's default behavior
		e.preventDefault();

		let token = localStorage.getItem('token');
		console.log(token);

		fetch('http://ec2-3-14-126-118.us-east-2.compute.amazonaws.com/b1/courses/',{

			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({

				name: name,
				description: description,
				price: price

			})
		})
		.then(res => res.json())
		.then(data => {

			//data is the response of the api/server after it's been process as JS object through our res.json() method.
			console.log(data);

			if(data.error === "Course already exists"){
				

				Swal.fire({

					icon: "error",
					title: "Course already exists.",
					text: data.message

				})

			} else if (data.error === "Failed to save the course") {

				Swal.fire({

					icon: "error",
					title: "Unsuccessful Course Creation",
					text: data.message

				})

			} else {

				Swal.fire({

					icon:"success",
					title: "Course Added"

				})

				navigate("/courses");
			}

		})

        setName("")
        setDescription("")
        setPrice(0);
	}

	return (

            (user.isAdmin === true)
            ?
            <>
                <h1 className="my-5 text-center">Add Course</h1>
                <Form onSubmit={e => createCourse(e)}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={e => {setName(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => {setDescription(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => {setPrice(e.target.value)}}/>
                    </Form.Group>
                    { isActive ? 
                        <Button variant="primary" type="submit" id="submitBtn" className='my-2'> 
                            Submit
                        </Button>
                        : 
                        <Button variant="danger" type="submit" id="submitBtn" className='my-2' disabled>
                            Submit
                        </Button>
                    }
                </Form>
		    </>
            :
            <Navigate to="/courses" />

	)


}


/* AppNavbar */

/*...*/

	<Nav className="ml-auto">
	<Nav.Link as={Link} to="/">Home</Nav.Link>
	<Nav.Link as={Link} to="/courses">Courses</Nav.Link>
	{(user.id !== null) ? 

			user.isAdmin 
			?
			<>
				<Nav.Link as={Link} to="/addCourse">Add Course</Nav.Link>
				<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
			</>
			:
			<>
				<Nav.Link as={Link} to="/profile">Profile</Nav.Link>
				<Nav.Link as={Link} to="/logout">Logout</Nav.Link>
			</>
		: 
			<>
				<Nav.Link as={Link} to="/login">Login</Nav.Link>
				<Nav.Link as={Link} to="/register">Register</Nav.Link>
			</>
	}
	</Nav>
	
/*...*/






/*
===========================================
[s65] - React.js - Feature Development and Common Use Case
===========================================
*/

/*

Reference Material:
	

Other References:
	JavaScript fetch API
		https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
	JavaScript fetch Method
		https://developer.mozilla.org/en-US/docs/Web/API/fetch
	Bearer Token
		https://oauth.net/2/bearer-tokens/
	Sweet Alert 2 Package
		https://sweetalert2.github.io/
	React Bootstrap Grid System
		https://react-bootstrap.github.io/layout/grid/
	React Router DOM Route Component
		https://reactrouter.com/web/api/Route
	React Router DOM useParams Hook
		https://reactrouter.com/web/api/Hooks/useparams
	Creating Git Projects:
			GitLab
				https://gitlab.com/projects/new#blank_project
			GitHub
				https://github.com/new
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Frontend - Root folder for the React JS application
	Backend - Root folder for the Express JS application

*/

/*
==========
Discussion
========== 
*/

/*
1. Add another component where it will show random Courses in the Home Page as "Featured Courses".
	Create a FeaturedCourses component and add the following code.
	Frontend > src > components > FeaturedCourses.js
*/

		import { CardGroup } from 'react-bootstrap'
		import { Link } from 'react-router-dom';

		export default function FeaturedCourses(){

			
			return(
				<>
					<h2 className="text-center">Featured Courses</h2>
					<CardGroup className="justify-content-center">


					</CardGroup>
				</>
			)
		}

/*
2. Add the component "FeaturedCourses" to the Home page.
	Frontend > src > pages > Home.js
*/

		import Banner from '../components/Banner';
		import Highlights from '../components/Highlights';
		import FeaturedCourses from '../components/FeaturedCourses';
		// ...

		export default function Home() {

			// ...

			return (
				<>
					<Banner data={data}/>
					<FeaturedCourses />
					<Highlights />
				</>
			)
		}


/*
3. Create a component "PreviewCourses".
	Frontend > src > components > PreviewCourses.js
*/


		import React from 'react'
		import { Col, Card } from 'react-bootstrap'
		import { Link } from 'react-router-dom'

		export default function Product(){

			return(
				<Col>
					{/*Adding the class cardHighlight for min-height*/}
					<Card className="cardHighlight">
						<Card.Body>
							<Card.Title className="text-center">
								<Link>name</Link>
							</Card.Title>
							<Card.Text>description</Card.Text>
							
						</Card.Body>
						<Card.Footer>
							<h5 className="text-center">₱price</h5>
							<Link className="btn btn-primary d-block">Details</Link>
						</Card.Footer>
					</Card>
				</Col>
			)
		}


/*
4. Add the component "PreviewCourses" to the Home page, then fetch all active courses and randomly show it to Home page 
	Frontend > src > components > FeaturedCourses.js
*/



		import { useState, useEffect } from 'react'
		import { CardGroup } from 'react-bootstrap'
		import PreviewCourses from './PreviewCourses'


		export default function FeaturedCourses(){

			const [previews, setPreviews] = useState([])

			useEffect(() => {
				fetch(`${ process.env.REACT_APP_API_URL}/courses/`)
				.then(res => res.json())
				.then(data => {
					console.log(data)

					// Create two empty arrays to be used to store random numbers and featured course data.
					const numbers = []
					const featured = []


					// This function generates a random number between 0 and the length of the data array (the fetched course data). It checks if the random number has already been added to the numbers array. If not, it adds the random number to the numbers array. If the random number already exists in the numbers array, it recursively calls itself to generate a new random number.
					const generateRandomNums = () => {
						let randomNum = Math.floor(Math.random() * data.length)

						if(numbers.indexOf(randomNum) === -1){
							numbers.push(randomNum)
						}else{
							generateRandomNums()
						}
					}

					// A loop is used to iterate five times (from 0 to 4). Inside the loop, the generateRandomNums function is called to generate a random number and push it into the numbers array.
					for(let i = 0; i < 5; i++){
						generateRandomNums()


						// For each iteration of the loop, the PreviewCourses component is rendered with the corresponding course data from the data array based on the random number. The key prop is set to the _id of the course for React's reconciliation to track components efficiently. The resulting JSX is pushed into the featured array.
						featured.push(

							// the breakPoint here is for columns
							<PreviewCourses data={data[numbers[i]]} key={data[numbers[i]]._id} breakPoint={2} />
							) 
					}

					// After the loop finishes, the setPreviews function is called to update the state of the component with the featured array. This state update triggers a re-render, and the PreviewCourses components are displayed on the page.
					setPreviews(featured)
				})
			}, [])

			return(
				<>
					<h2 className="text-center">Featured Courses</h2>
					<CardGroup className="justify-content-center">	
						{/*add the state here*/}
						{previews}
					</CardGroup>
				</>
			)
		}



/*
5. Add the props from the "FeaturedCourses".
	Frontend > src > components > PreviewCourses.js
*/


		import { Col, Card } from 'react-bootstrap'
		import { Link } from 'react-router-dom'

		export default function Product(props){

		// props is used here to get the data and breakPoint from the FeaturedCourses.js
			const { breakPoint, data } = props

			// Destructure the courses data here
			const { _id, name, description, price } = data

			return(
				<Col xs={12} md={ breakPoint }>

				{/*add spacing for x-axis*/}
					<Card className="cardHighlight mx-2">
						<Card.Body>
							<Card.Title className="text-center">

							{/*Add the specific details of course link*/}
								<Link to={`/courses/${	_id}`}>{ name }</Link>
							</Card.Title>
							<Card.Text>{ description }</Card.Text>
							
						</Card.Body>
						<Card.Footer>
							<h5 className="text-center">₱{ price }</h5>
							<Link className="btn btn-primary d-block" to={`/courses/${	_id}`}>Details</Link>
						</Card.Footer>
					</Card>
				</Col>
			)
		}



/* 
====================
[s65] - Activity
====================

Activity References:

React Bootstrap Grid System
	https://react-bootstrap.github.io/layout/grid/
React Router DOM Route Component
	https://reactrouter.com/web/api/Route


Activity

Modify the Courses.js page
If the user is an Admin, Show the Admin Dashboard
If not, Show the Regular Courses Page

Note: Make sure bootcampers have their admin and non-admin account.

Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s65"
2. Create a components "AdminView.js" and "UserView.js"
3. Modify Courses.js page
	- Add UserContext to get the details of the user if it is an admin or not
	- Modify the useEffect:
		- delete the map function and just add the data on setCourses. 
	- Add a conditional rendering in the return statement:
		- If the user is an Admin:
			- Show the Admin Dashboard
			- Use props named "coursesData" to pass the 'course' 
		- If not:
			- Show the User View (Regular Courses Page)
			- Use props named "coursesData" to pass the 'course' 

Member 2:
4. In UserView.js, get the props from the Courses.js page.
	- Add the props "coursesData" from the Courses.js page.
	- Add a useState to store the courses data.
	- Add useEffect, and create a map function that returns all courses available to CourseCard component.
	- NOTE: If you login as a user, the Courses page in your browser will show the usual courses that we have.

Member 3:
5. In Admin Dashboard, create a Table.
	- add a heading text "Admin Dashboard", center it and add space to top and bottom
	- For the Table, add class striped, bordered, hover and responsive.
	- Add a table heading for:
		- ID
		- Name
		- Description
		- Price
		- Availability
		- Actions (Add a colspan 2)
	- Center the text in table heading 

Member 4 & 5:
6. Use the "coursesData" to get all the courses details and add it to the table row.
- Add useState for courses to store the data
- Add useEffect, and create a map function that returns all courses available
	- return the map function to a table row
	- don't forget to add key for the id
	- get all coursesData:
		- _id
		- name
		- description
		- price
		- isActive
			- Since this is a boolean, create a ternary operator
			- if isActive: true
				- change the text color to success
				- Add a text "Available"
			- if isActive: false
				- change the text color to danger
				- Add a text "Unavailable"
		- Edit Button
		- Archive Button

7. Then, add the courses state to the table body.

All Members:
8. Check out to your own git branch with git checkout -b <branchName>.
9. Update your local sessions git repository and push to git with the commit message of Add activity code s65.
10. Add the sessions repo link in Boodle for s65. 

*/



/*
3. Modify Courses.js page
	- Add UserContext to get the details of the user if it is an admin or not
	- Modify the useEffect:
		- delete the map function and just add the data on setCourses. 
	- Add a conditional rendering in the return statement:
		- If the user is an Admin:
			- Show the Admin Dashboard
			- Use props named "coursesData" to pass the 'course' 
		- If not:
			- Show the User View (Regular Courses Page)
			- Use props named "coursesData" to pass the 'course' 
*/
		// Frontend > src > pages > Courses.js

		import { useEffect, useState, useContext } from 'react';
		import CourseCard from '../components/CourseCard';
		// import coursesData from '../data/coursesData';
		import UserContext from '../UserContext';

		import UserView from '../components/UserView';
		import AdminView from '../components/AdminView';


		export default function Courses() {

			// ...

		    useEffect(() => {

		    	// use the route /all to get all active and not active courses (make sure that this route at the backend doesn't have jwt)
		    	//The fetch will be used to pass the data to Userview and Adminview, where:
		    		//Userview only active courses will be shown
		    		//Adminview shows all active and non-active courses
		    	fetch(`${process.env.REACT_APP_API_URL}/courses/all`)

				// ...

		    }, []);

			return(
				<>
		            {
		            	(user.isAdmin === true) ?
		            		<AdminView coursesData={courses} />

		            		:

		            		<UserView coursesData={courses} />
		        	}
		        </>
			)
		}


/*
4. In UserView.js, get the props from the Courses.js page.
	- Add the props "coursesData" from the Courses.js page.
	- Add a useState to store the courses data.
	- Add useEffect, and create a map function that returns all courses available to CourseCard component.
	- NOTE: If you login as a user, the Courses page in your browser will show the usual courses that we have.
*/ 	
	// Frontend > src > components > UserView.js 

		import { useState, useEffect } from 'react';
		import CourseCard from './CourseCard';


		export default function UserView({coursesData}) {

			const [courses, setCourses] = useState([])

			useEffect(() => {
				const coursesArr = coursesData.allCourses.map(course => {

					//only render the active courses since the route used is /all from Course.js page
					if(course.isActive === true) {
						return (
							<CourseCard courseProp={course} key={course._id}/>
							)
					} else {
						return null;
					}
				})

				//set the courses state to the result of our map function, to bring our returned course component outside of the scope of our useEffect where our return statement below can see.
				setCourses(coursesArr)

			}, [coursesData])

			return(
				<>
					{ courses }
				</>
				)
		}


/*
5. In Admin Dashboard, create a Table.
	- add a heading text "Admin Dashboard", center it and add space to top and bottom
	- For the Table, add class striped, bordered, hover and responsive.
	- Add a table heading for:
		- ID
		- Name
		- Description
		- Price
		- Availability
		- Actions (Add a colspan 2)
	- Center the text in table heading
*/
	// Frontend > src > components > AdminView.js 


		import { Table } from 'react-bootstrap';

		export default function AdminView() {
			return(
				<>
					<h1> Admin Dashboard</h1>

					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
								<th>Availability</th>
								<th>Actions</th>
							</tr>
						</thead>
					</Table>	
				</>

				)
		}



/*
6. Use the "coursesData" to get all the courses details and add it to the table row.
- Add useState for courses to store the data
- Add useEffect, and create a map function that returns all courses available
	- return the map function to a table row
	- don't forget to add key for the id
	- get all coursesData:
		- _id
		- name
		- description
		- price
		- isActive
			- Since this is a boolean, create a ternary operator
			- if isActive: true
				- change the text to success
				- Add a text "Available"
			- if isActive: false
				- change the text to danger
				- Add a text "Unavailable"
		- Edit Button
		- Archive Button

7. Then, add the courses state to the table body.

*/

	// Frontend > src > components > AdminView.js 

		// a. Add useState and useEffect
		import { useState, useEffect } from 'react';
		import { Table } from 'react-bootstrap';

		export default function AdminView({ coursesData }) {

			// b. Add state to store all courses 
			const [courses, setCourses] = useState([])


			//Getting the coursesData from the courses page
			useEffect(() => {
				const coursesArr = coursesData.allCourses.map(course => {
					return (
						<tr key={course._id}>
							<td>{course._id}</td>
							<td>{course.name}</td>
							<td>{course.description}</td>
							<td>{course.price}</td>
							<td className={course.isActive ? "text-success" : "text-danger"}>
								{course.isActive ? "Available" : "Unavailable"}
							</td>
							<td><button className="btn btn-primary ">Edit</button></td>	
							<td><button className="btn btn-danger">Archive</button></td>	
						</tr>
						)
				})

				setCourses(coursesArr)

			}, [coursesData])


			return(
				<>
					<h1 className="text-center my-4"> Admin Dashboard</h1>
					
					<Table striped bordered hover responsive>
						<thead>
							<tr className="text-center">
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
								<th>Availability</th>
								<th colSpan="2">Actions</th>
							</tr>
						</thead>

						<tbody>
							{courses}
						</tbody>
					</Table>	
				</>

				)
		}



/*
===========================================
[s66] - React.js - Admin CRUD
===========================================
*/

/*

Reference Material:
	

Other References:
	JavaScript fetch API
		https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
	JavaScript fetch Method
		https://developer.mozilla.org/en-US/docs/Web/API/fetch
	Bearer Token
		https://oauth.net/2/bearer-tokens/
	Sweet Alert 2 Package
		https://sweetalert2.github.io/
	React Bootstrap Grid System
		https://react-bootstrap.github.io/layout/grid/
	React Router DOM Route Component
		https://reactrouter.com/web/api/Route
	React Router DOM useParams Hook
		https://reactrouter.com/web/api/Hooks/useparams
	Creating Git Projects:
			GitLab
				https://gitlab.com/projects/new#blank_project
			GitHub
				https://github.com/new
	Boodle
		https://boodle.zuitt.co/login/

Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Frontend - Root folder for the React JS application
	Backend - Root folder for the Express JS application

*/

/*
==========
Discussion
========== 
*/

/*
1. Add another component where you can Edit the course. We will use modal. Create an EditCourse.js and just add the button first
	Frontend > src > components > EditCourse.js
*/


	import { Button } from 'react-bootstrap';


	export default function EditCourse() {	
		return(
			<>
				<Button variant="primary" size="sm"> Edit </Button>
			</>
			)
	}


/*
2. Go to AdminView and modify the Update Button
	Frontend > src > components > AdminView.js
*/


	// ...
	// import the EditCourse component
	import EditCourse from './EditCourse';



	export default function AdminView({ coursesData }) {


		// ...

		useEffect(() => {
			const coursesArr = coursesData.allCourses.map(course => {
				return (
					// ...


					// Pass the course id as props
						<td> <EditCourse course={course._id} /> </td>	
					// ...
					)
			})

			setCourses(coursesArr)

		}, [coursesData])

/*
3. Add Modal and Form in EditCourse.js
	Frontend > src > components > EditCourse.js
*/


	/*
	3a. Add a state for courseId for the fetch URL, state for editCourse for opening and closing of modals, and for the Forms.
	*/

		import { useState } from 'react';
		import { Button, Modal, Form } from 'react-bootstrap';


		// Add the props course to get the specific id of the course
		export default function EditCourse({ course }) {

				//state for courseId for the fetch URL
				const [courseId, setCourseId] = useState('');

				//Forms state
				//Add state for the forms of course
				const [name, setName] = useState('');
				const [description, setDescription] = useState('')
				const [price, setPrice] = useState('')

				//state for editCourse Modals to open/close
				const [showEdit, setShowEdit] = useState(false)


			
			return(
				<>
					<Button variant="primary" size="sm"> Edit </Button>


					{/*EDIT MODAL*/}
		            <Modal show={showEdit}>
		                <Form>
		                    <Modal.Header closeButton>
		                        <Modal.Title>Edit Course</Modal.Title>
		                    </Modal.Header>
		                    <Modal.Body>    
		                        <Form.Group controlId="courseName">
		                            <Form.Label>Name</Form.Label>
		                            <Form.Control type="text" required/>
		                        </Form.Group>
		                        <Form.Group controlId="courseDescription">
		                            <Form.Label>Description</Form.Label>
		                            <Form.Control type="text" required/>
		                        </Form.Group>
		                        <Form.Group controlId="coursePrice">
		                            <Form.Label>Price</Form.Label>
		                            <Form.Control type="number" required/>
		                        </Form.Group>
		                    </Modal.Body>
		                    <Modal.Footer>
		                        <Button variant="secondary">Close</Button>
		                        <Button variant="success" type="submit">Submit</Button>
		                    </Modal.Footer>
		                </Form>
		            </Modal>

				</>
				)
		}



/*
4. Add a function for opening the modal while fetching all data of the course
	Frontend > src > components > EditCourse.js
*/

	//function for opening the modal
	const openEdit = (courseId) => {
		//to still get the actual data from the form
		fetch(`${process.env.REACT_APP_API_URL}/courses/${ courseId }`)
		.then(res => res.json())
		.then(data => {
			//populate all the input values with course info that we fetched
			setCourseId(data._id);
			setName(data.course.name);
			setDescription(data.course.description);
			setPrice(data.course.price)
		})

		//Then, open the modal
		setShowEdit(true)
	}


/*
4. Then connect the openEdit function to the button to open the modal.
	Frontend > src > components > EditCourse.js
*/

		return(
				<>
					 <Button variant="primary" size="sm" onClick={() => openEdit(course)}> Edit </Button>

					 {/*...*/}
				</>



/*
5. Add closeEdit function to close the modal.
	Frontend > src > components > EditCourse.js
*/

	const closeEdit = () => {
		setShowEdit(false);
		setName('')
		setDescription('')
		setPrice(0)
	}


/*
6. Add closeEdit in the modal by using OnClick. Add the state rendering of the forms for name, description, and price.
	Frontend > src > components > EditCourse.js
*/

import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


export default function EditCourse({ course }) {

	//...

	return(
		<>
			{/*...*/}

		{/*Edit Modal Forms*/}
			<Modal show={showEdit} onHide={closeEdit}>
				<Form>
					<Modal.Header closeButton>
						<Modal.Title>Edit Course</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control 
								type="text" 
								value={name} 
								onChange={e => setName(e.target.value)} 
								required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control 
								type="text" 
								value={description} 
								onChange={e => setDescription(e.target.value)} 
								required/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control 
								type="number" 
								value={price} 
								onChange={e => setPrice(e.target.value)} 
								required/>
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>
				
			</Modal>
		</>
		)
}


// NOTE: After completion, verify the modal button to ensure that it displays the data retrieved from the openEdit function.



/*
7. Add editCourse function to update the course
	Frontend > src > components > EditCourse.js
*/


// ...
import Swal from 'sweetalert2';


export default function EditCourse({ course }) {

	// ...

	const closeEdit = () => {
		// ...
	}


	//function to update the course
		const editCourse = (e, courseId) => {
			e.preventDefault();

			fetch(`${process.env.REACT_APP_API_URL}/courses/${ courseId }`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify({
					name: name,
					description: description,
					price: price
				})
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)

				if(data.message === "Course updated successfully") {
					Swal.fire({
						title: 'Success!',
						icon: 'success',
						text: 'Course Successfully Updated'
					})
					closeEdit();
					
				} else {
					Swal.fire({
						title: 'Error!',
						icon: 'error',
						text: 'Please try again'
					})
					closeEdit();
					
				}
			})
		}


	return(
		<>
			<Button variant="primary" size="sm" onClick={() => openEdit(course)}> Edit </Button>

		{/*Edit Modal Forms*/}
			<Modal show={showEdit} onHide={closeEdit}>

			{/* Add the onSubmit to connect the editCourse function */}
				<Form onSubmit={e => editCourse(e, courseId)}>
					{/*...*/}
				</Form>
				
			</Modal>
		</>
		)
}


/*
8. To render the data after updating the course, modify the Course.js page
	Frontend > src > pages > Courses.js
*/


export default function Courses() {

	// ...

	// Create a function and add the fetch data here
	const fetchData = () => {

		// Allows to have a dynamic url depending whether the user that's logged in is an admin or not
		let fetchUrl = user.isAdmin === true ? "${process.env.REACT_APP_API_URL}/courses/all" : "${process.env.REACT_APP_API_URL}/courses/"

		// headers is included for both /courses/all and /courses/ to allow flexibility even if it is not needed.
		fetch(fetchUrl, {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			}
		})
		.then(res => res.json())
		.then(data => {
		    
		    console.log(data);
		    console.log(typeof data.message);

		    // Sets the "courses" state to map the data retrieved from the fetch request into several "CourseCard" components
		    // If the data.message is not a string or equal to undefined it will set the courses state with the courses from fetch
		    if (typeof data.message !== "string") {
		    	setCourses(data.courses);
		    } else {
		    	setCourses([]);
		    }

		});
	}


	// Use the useEffect to render all available courses
    useEffect(() => {

		fetchData()

    }, []);


	return(
		<>
            {
            	(user.isAdmin === true) ?

            	// Pass the fetchData as a props
            		<AdminView coursesData={courses} fetchData={fetchData} />

            		:

            		<UserView coursesData={courses} />

        	}
        </>
	)
}



/*
9. Pass the props=fetchData from AdminView to EditCourse.
	Frontend > src > components > AdminView.js
*/

export default function AdminView({ coursesData, fetchData }) {


	// ...


	//Getting the coursesData from the courses page
	useEffect(() => {
		const coursesArr = coursesData.allCourses.map(course => {
			return (
				<tr key={course._id}>
					{/*...*/}

					<td> <EditCourse course={course._id} fetchData={fetchData} /> </td>	
					{/*...*/}
				</tr>
				)
		})

		setCourses(coursesArr)

	}, [coursesData])


/*
10. Add the fetchData in EditCourse and used it to render all courses after updating the content.
	Frontend > src > components > EditCourse.js
*/


export default function EditCourse({ course, fetchData }) {

	// ...

	//function to update the course
		const editCourse = (e, courseId) => {
			
			// ...

			.then(data => {
				console.log(data)

				if(data === true) {
					Swal.fire({
						title: 'Success!',
						icon: 'success',
						text: 'Course Successfully Updated'
					})
					closeEdit();
					// Add this
					fetchData();
					
				} else {
					Swal.fire({
						title: 'Error!',
						icon: 'error',
						text: 'Please try again'
					})
					closeEdit();
					// Add this
					fetchData();
				}
			})
		}


	return(
		// ...
		)
}


/* 
====================
[s66] - Activity
====================

Activity References:

JavaScript fetch API
	https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
JavaScript fetch Method
	https://developer.mozilla.org/en-US/docs/Web/API/fetch
Bearer Token
	https://oauth.net/2/bearer-tokens/
Sweet Alert 2 Package
	https://sweetalert2.github.io/
React Bootstrap Grid System
	https://react-bootstrap.github.io/layout/grid/
React Router DOM Route Component
	https://reactrouter.com/web/api/Route
React Router DOM useParams Hook
	https://reactrouter.com/web/api/Hooks/useparams


Activity

Archive and Activate the course actions.


Member 1:
1. Update your local sessions git repo, push with the commit message, "Add discussion s66"
2. Create a components "ArchiveCourse.js".
3. Import the ArchiveCourse.js to AdminView.js in the table data
	- Pass the course ID, isActive and fetchData to render all courses

Member 2 & 3:
4. Get all the props from the AdminView.
5. Implement a conditional rendering based on the value of the isActive data:
	- When isActive is set to true, display the "Archive" button.
	- When isActive is set to false, show the "Activate" button.

Member 4:
6. Create an "archiveToggle" function to fetch the /archive from the backend.
	- Add SweetAlert for a notification with the text, "Course successfully disabled"

Member 5:
7. Create an "activateToggle" function to fetch the /activate from the backend.
	-  Add SweetAlert for a notification with the text, "Course successfully enabled"


All Members:
8. Check out to your own git branch with git checkout -b <branchName>.
9. Update your local sessions git repository and push to git with the commit message of Add activity code s66.
10. Add the sessions repo link in Boodle for s66. 

*/

/*
SOLUTION:
	Frontend > src > components > ArchiveCourse.js
*/

	import { Button } from 'react-bootstrap';
	import Swal from 'sweetalert2';

	export default function ArchiveCourse({course, isActive, fetchData}) {

		const archiveToggle = (courseId) => {
			fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/archive`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})

			.then(res => res.json())
			.then(data => {
				console.log(data)
				if(data === true) {
					Swal.fire({
						title: 'Success',
						icon: 'success',
						text: 'Course successfully disabled'
					})
					fetchData();

				}else {
					Swal.fire({
						title: 'Something Went Wrong',
						icon: 'Error',
						text: 'Please Try again'
					})
					fetchData();
				}


			})
		}


			const activateToggle = (courseId) => {
			fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/activate`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})

			.then(res => res.json())
			.then(data => {
				console.log(data)
				if(data.message === "Course activated successfully") {
					Swal.fire({
						title: 'Success',
						icon: 'success',
						text: 'Course successfully enabled'
					})
					fetchData();
				}else {
					Swal.fire({
						title: 'Something Went Wrong',
						icon: 'Error',
						text: 'Please Try again'
					})
					fetchData();
				}


			})
		}
	 

		return(
			<>
				{isActive ?

					<Button variant="danger" size="sm" onClick={() => archiveToggle(course)}>Archive</Button>

					:

					<Button variant="success" size="sm" onClick={() => activateToggle(course)}>Activate</Button>

				}
			</>

			)
	}


/*
SOLUTION:
	Frontend > src > components > AdminView.js
*/

	import EditCourse from './EditCourse';
	import ArchiveCourse from './ArchiveCourse';

	export default function AdminView({ coursesData, fetchData }) {


		// ...


		//Getting the coursesData from the courses page
		useEffect(() => {
			const coursesArr = coursesData.allCourses.map(course => {
				return (
					<tr key={course._id}>
						{/*...*/}

						<td> <EditCourse course={course._id} fetchData={fetchData} /> </td>	
						<td><ArchiveCourse course={course._id} isActive={course.isActive} fetchData={fetchData}/></td>
					</tr>
					)
			})

			setCourses(coursesArr)

		}, [coursesData])




/*
===========================================
[s67] - React.js - API Integration with ChatGPT
===========================================
*/

/*

Reference Material:

Other References:


Definition of terms:
	Batch Folder - The batch folder that will store all files of the students throughout the bootcamp. Normally located in the "Documents" folder of the device.
	Frontend - Root folder for the React JS application
	Backend - Root folder for the Express JS application

*/

/*
==========
Discussion
========== 
*/

/*
1. Create a new component called ResetPassword.js in the components folder.
	fullstack > src > components > ResetPassword.js
*/
		/*
			1a. Copy and paste the generated code from the chatGPT conversation.
				fullstack > src > components > ResetPassword.js
		*/
		/*
			1b. Contextualize the generated code to match our application from the chatGPT conversation.
				fullstack > src > components > ResetPassword.js
		*/
			import React, { useState } from 'react';

			const ResetPassword = () => {
			const [password, setPassword] = useState('');
			const [confirmPassword, setConfirmPassword] = useState('');
			const [message, setMessage] = useState('');

			const handleResetPassword = async (e) => {
				e.preventDefault();

				if (password !== confirmPassword) {
				setMessage('Passwords do not match');
				return;
				}

				try {
				//Get the token from localStorage instead
				const token = localStorage.getItem('token'); // Replace with your actual JWT token

				//update the URL to match the endpoint in our API
				const response = await fetch(`${process.env.REACT_APP_API_URL}/users/reset-password`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ password }),
				});

				if (response.ok) {
					setMessage('Password reset successfully');
					setPassword('');
					setConfirmPassword('');
				} else {
					const errorData = await response.json();
					setMessage(errorData.message);
				}
				} catch (error) {
				setMessage('An error occurred. Please try again.');
				console.error(error);
				}
			};

			return (
				<div className="container">
				<h2>Reset Password</h2>
				<form onSubmit={handleResetPassword}>
					<div className="mb-3">
					<label htmlFor="password" className="form-label">
						New Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					</div>
					<div className="mb-3">
					<label htmlFor="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
					</div>
					{message && <div className="alert alert-danger">{message}</div>}
					<button type="submit" className="btn btn-primary">
					Reset Password
					</button>
				</form>
				</div>
			);
			};

			export default ResetPassword;

		/*
			1c. Add the created component in our Profile.js file
				fullstack > src > pages > Profile.js
		*/

		/* ... */

		import ResetPassword from '../components/ResetPassword';	

		/* ... */
		
		//Add the ResetPassword component in a Row Component.
		//Since you now return 2 React Components in the ternary, add a fragment.
		return (
			// (user.access === null) ?
			// <Navigate to="/courses" />
			// :
			(user.id === null) ?
			<Navigate to="/courses" />
			:
			<>
				<Row>
					<Col className="p-5 bg-primary text-white">
						<h1 className="my-5 ">Profile</h1>
						{/* <h2 className="mt-3">James Dela Cruz</h2> */}
						<h2 className="mt-3">{`${details.firstName} ${details.lastName}`}</h2>
						<hr />
						<h4>Contacts</h4>
						<ul>
							{/* <li>Email: jamesDC@mail.com</li> */}
							<li>Email: {details.email}</li>
							{/* <li>Mobile No: 09266772411</li> */}
							<li>Mobile No: {details.mobileNo}</li>
						</ul>
					</Col>
				</Row>
				<Row className='pt-4 mt-4'>
					<Col>
						<ResetPassword />
					</Col>
				</Row>
			</>

/*
2. Create a new component called CourseSearch.js in the components folder.
	fullstack > src > components > CourseSearch.js
*/
		/*
			2a. Copy and paste the generated code from the chatGPT conversation.
				fullstack > src > components > CourseSearch.js
		*/
		/*
			2b. Contextualize the generated code to match our application from the chatGPT conversation.
				fullstack > src > components > CourseSearch.js
		*/

		//Import and use our own CourseCard component to display the result
		import CourseCard from './CourseCard';

		import React, { useState } from 'react';

		const CourseSearch = () => {
		  const [searchQuery, setSearchQuery] = useState('');
		  const [searchResults, setSearchResults] = useState([]);
		
		  const handleSearch = async () => {
			try {
			  const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/search`, {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({ courseName: searchQuery })
			  });
			  const data = await response.json();
			  setSearchResults(data);
			} catch (error) {
			  console.error('Error searching for courses:', error);
			}
		  };
		
		  return (
			<div>
			  <h2>Course Search</h2>
			  <div className="form-group">
				<label htmlFor="courseName">Course Name:</label>
				<input
				  type="text"
				  id="courseName"
				  className="form-control"
				  value={searchQuery}
				  onChange={event => setSearchQuery(event.target.value)}
				/>
			  </div>
			  <button className="btn btn-primary" onClick={handleSearch}>
				Search
			  </button>
			  <h3>Search Results:</h3>
			  <ul>
				{searchResults.map(course => (
					//   <li key={course._id}>{course.name}</li>
					<CourseCard courseProp={course} key={course._id}/>
				))}
			  </ul>
			</div>
		  );
		};
		
		export default CourseSearch;
		
		/*
			2c. Add the created component in our UserView.js file
				fullstack > src > pages > UserView.js
		*/

		/* ... */

		import CourseSearch from './CourseSearch';

		/* ... */

		return(
			<Fragment>
				<CourseSearch />
				{courses}
			</Fragment>
		);
		
/* 
====================
[s67] - Activity
====================

Activity References:


Activity

1. Using chatGPT, generate code to add the following features in our ReactJS Booking Application:

2. Add a component to the profile page for updating the user’s profile.
    a. Include an "Update Profile" heading in the component.
    b. Assign the following IDs to each input element:
        i. firstName
        ii. lastName
        iii. mobileNo
    c. Specify that the firstName, lastName, and mobileNo inputs will be included in the request body.

3. Generate a search functionality for courses. Allow users to search for courses based on price range in the courses page. 
    a. Include an "Search Courses by Price Range" heading in the component.
    b. Assign the following IDs to each input element:
        i. minPrice
        ii. maxPrice
    c. Add that the Price range can be added in request body.
        i. minPrice and maxPrice
    d. Indicate that the token should be added to the headers of the request. 
    e. Create a list to display the search result

4. Update your local sessions repo
5. Push to git with the commit message of Add activity code s64.
6. Add the repo link in Boodle for s64.

*/

/*
	Solution may vary from each student. Try each application for checking.
*/