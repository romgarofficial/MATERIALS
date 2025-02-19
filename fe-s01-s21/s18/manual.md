# Bootstrap - Components

# References
- [Bootstrap CSS Framework](https://getbootstrap.com/)
- [Introduction to Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Bootstrap local vs. CDN](https://www.belugacdn.com/bootstrap-local-vs-cdn/)
- [Responsive Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
- [Bootstrap Navbar Component](https://getbootstrap.com/docs/4.6/components/navbar/)
- [Auto Indent On Sublime Text 3](https://stackoverflow.com/questions/44803547/autoindent-on-sublime-text)
- [How To Automatically Reindent Code With Sublime Text 3](https://shibulijack.wordpress.com/2015/05/11/how-to-automatically-reindent-code-with-sublime-text-3/)
- [Boostrap Color Utility Classes](https://getbootstrap.com/docs/4.6/utilities/colors/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/4.6/utilities/spacing/)
- [Bootstrap Containers](https://getbootstrap.com/docs/4.6/layout/overview/#containers)
- [Bootstrap Grid System classes](https://getbootstrap.com/docs/4.0/layout/grid/)
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/4.6/utilities/text/)
- [Bootstrap Collapse Component](https://getbootstrap.com/docs/4.6/components/collapse/#accordion-example)
- [Bootstrap Display Utility Classes](https://getbootstrap.com/docs/4.0/utilities/display/)
- [Bootstrap Carousel Component](https://getbootstrap.com/docs/4.6/components/carousel/)
- [How Do You Decrease Carousel Size](https://forum.bootstrapstudio.io/t/how-do-you-decrease-carousel-size/5109)
- [Place Kitten](https://placekitten.com/)
- [Place Bear](https://placebear.com/)
- [Bootstrap Card Component](https://getbootstrap.com/docs/4.6/components/card/)
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Bootstrap Flex Classes](https://getbootstrap.com/docs/4.0/utilities/flex/)
- [Bootstrap Form Component](https://getbootstrap.com/docs/4.6/components/forms/)
- [Bootstrap Modal Component](https://getbootstrap.com/docs/4.6/components/modal/)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s18 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap Components</title>
</head>
<body>

</body>
</html>
```

2. Apply Bootstrap to the project by adding all the dependencies.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>

    <!-- Mobile Responsive Meta Tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Bootstrap Components</title>

</head>
<body>

    <!-- Bootstrap Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>
```

**IMPORTANT NOTE:**
- Upon completion of this material, Bootstrap 5.0 was the latest version.
- To avoid any problems and errors encountered during the discussion, it is advised to implement the same version of Bootstrap.
- An alternative way of implementing Bootstrap is to download it and store a copy in the local project.
- The Responsive Meta Tag is responsible for making Bootstrap work properly. It disables the browser zoom view and allows elements to be rendered to scale to the size of the screen.
- Refer to "references" section of this file to find the documentations for Bootstrap CSS Framework, Bootstrap local vs. CDN, Responsive Meta Tag and Bootstrap Containers.
- Refer to "references" section of this file to find the documentation for Introduction to Bootstrap 5 on where to get the code snippets to apply Bootstrap into our project.

3. Add a navbar component and change the style.

3a. Add a navbar component and change the style.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- Navbar Section Start -->
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<!-- *** Added a div to add container-fluid class -->
    <div class="container-fluid">
		<a class="navbar-brand" href="#">Navbar</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Pricing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
				</li>
			</ul>
		</div>
	</div>
	</nav>
	<!-- Navbar Section End -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Copy the Navbar from the "nav" section of the Bootstrap documentation to create a simple navbar.
- Copying code from Bootstrap documentation creates code that have half indentation. This creates inconsistencies and makes it difficult to read code.
- You may fix the indentation of the elements by doing the following steps:
	- For Mac Users, replace the "ctrl" with the "command" key.
	- Select all the code in the file by pressing "ctrl" + "a".
	- Press "shift" + "tab" numerous times until all the content are justified to the left and no indentation can be seen in the whole file.
	- Save the file by pressing "ctrl" + "s".
	- Close and reopen the file to be indented.
	- Open sublime text editor's command palette by pressing "ctrl" + "shift" + "p" which will open an input field like a search bar.
	- Type "Indentation: Reindent Lines" and press "enter".
	- This will automatically reindent all of the content within the file.
	- Instead of reindenting the whole file, it's also possible to just select a block of code to reindent using this method.
- An alternative solution to reindenting code is to create a keyboard shortcut in the user preferences of Sublime Text 3.
- Refer to "references" section of this file to find the documentations for Bootstrap Navbar Component, Auto Indent On Sublime Text 3 and How To Automatically Reindent Code With Sublime Text 3.

3b. Change the background color and the text of the navbar.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<!-- ... -->
	</nav>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentation for Bootstrap Color Utility Classes.

3c. Position the other links to the right hand side of the navbar and change the text on them.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<!-- ... -->
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">About Me<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tools</a>
                </li>
            </ul>
		</div>
	</nav>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "ms-auto" class will push all the nav links to the right hand side.
- Refer to "references" section of this file to find the documentation for Bootstrap Spacing Utility Classes.

4. Add a "collapse" component and create a side navbar.

4a. Add  div tags for the Main Content Section.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<!-- ... -->
	</nav>

	<!-- Main Content Section Start -->
	<div class="container-fluid text-center">
	    <div class="row">
	    </div>
	</div>
	<!-- Main Content Section End -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentations for Bootstrap Containers, Bootstrap Grid System classes and Bootstrap Text Utility Classes.

4b. Add an accordion component.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<!-- ... -->
	</nav>

	<div class="container-fluid text-center">

	    <div class="row">

 		<!-- *Side Navbar Section Start* -->
			<!-- Insert Accordion here, Source: https://getbootstrap.com/docs/5.0/components/accordion/#example -->

			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
					<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						Accordion Item #1
					</button>
					</h2>
					<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Accordion Item #2
					</button>
					</h2>
					<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingThree">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Accordion Item #3
					</button>
					</h2>
					<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
					</div>
				</div>
				</div>
		<!-- *Side Navbar Section End* -->

	    </div>

	</div>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Copy the Accordion component from the Collapse Component of the Bootstrap documentation to create a side navbar.
- Refer to "references" section of this file to find the documentation for Bootstrap Collapse Component.

4c. Change the size and the content of the Accordion Component.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<div class="container-fluid text-center">
		<div class="row">
  			<div class="accordion col-xl-2 d-none d-xl-block p-0" id="accordionExample">
			<!-- Accordion-item 1 -->
			<!-- Services Section Start -->
				<div class="accordion-item">
				<h2 class="accordion-header" id="headingOne">
					<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					<!-- *** Replace this with Services -->
					Services
					</button>
				</h2>
				<!--  *** Remove show from collapseOne-->
				<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div class="accordion-body">
					<!-- *** Replace text-justify with text-start -->
					<ul class="text-start" style="list-style: none;">
						<li><a href="">Frontend Design</a></li>
						<li><a href="">Backend Server</a></li>
						<li><a href="">Full-Stack Development</a></li>
					</ul>
					</div>
				</div>
				</div>
				<!-- Services Section End -->
				
				<!-- Accordion-item 2 -->
				<!-- Projects Section Start -->
				<div class="accordion-item">
				<h2 class="accordion-header" id="headingTwo">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					<!-- ***Replace this with Projects -->
					Projects
					</button>
				</h2>
				<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					<div class="accordion-body">
					<!-- ***Replace text-justify with text-start -->
					<ul class="text-start" style="list-style: none;">
						<li><a href="">HTML</a></li>
						<li><a href="">Bootstrap</a></li>
						<li><a href="">Node JS Server</a></li>
					</ul>
					</div>
				</div>
				</div>
				<!-- Projects Section End -->
				
				<!-- Accordion-item 3 -->
				<!-- Tools Section Start -->
				<div class="accordion-item">
				<h2 class="accordion-header" id="headingThree">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					<!-- ***Replace this with Tools -->
					Tools
					</button>
				</h2>
				<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					<div class="accordion-body">
					<!-- ***Replace text-justify with text-start -->
					<ul class="text-start" style="list-style: none;">
						<li><a href="">Core Tools</a></li>
						<li><a href="">Other Tools</a></li>
					</ul>
					</div>
				</div>
				</div>
			</div>	
		<!-- *Side Navbar Section End* -->
		</div>
	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The combination of the "col-xl-2", "d-none" and "d-xl-block" classes will change the layout of the side navbar to occupy 2 columns on an extra large screen and will be hidden on medium screens and lower.
- The "p-0" class is added here to remove the padding created by adding the parent "row" class.
- Refer to "references" section of this file to find the documentations for Bootstrap Display Utility Classes.

5. Add div tags for the Side Content and Profile Sections.

5a. Add a div tag for the Side Content Section.

**batchfolder > individual > s18 > discussion > index.html**

```html  
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- Side Navbar Section Start -->
	    	<div class="card col-xl-2 d-none d-xl-block p-0">
	    	</div>
	    	<!-- Side Navbar Section End -->

	    	<!-- Side Content Section Start -->
	    	<div class="col-xl-10 p-0">
	    	</div>
	    	<!-- Side Content Section End -->

	    </div>
	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "col-xl-10" class will change the layout of the side content to occupy 10 columns on an extra large screens and the full width of it's parent element on any other screen size.
- The "p-0" class is added here to remove the padding created by adding the parent "row" class.

5b. Add a div tag and create a simple Profile Section.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	<div class="col-xl-10 p-0">

	    	    <!-- Profile Section Start -->
	    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">

	    	    	<img class="mt-5 mt-md-0 rounded-circle" src="https://i.guim.co.uk/img/media/3656ae6ea2209d4561caf04fa9f172a519908ca3/0_28_2318_1391/master/2318.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=afcc355f47876bc495cdc3c902639bae" width="250">

	    	    	<h1>Ada Lovelace</h1>
	    	    	<h3>Full-Stack Developer</h3>

	    	    	<div class="row mt-5">
	    	    	    <div class="offset-md-2 col-md-8">
	    	    	        <p>
	    	    	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	    	    	        </p>
	    	    	    </div>
	    	    	</div>

	    	    </div>
	    	    <!-- Profile Section End -->

	    	</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "min-vh-100" class will ensure that regardless of the content the size of each section will be at least 100% of the current viewport height.
- The combination of the "offset-md-2" and "col-md-8" classes will change the layout of the Profile text to occupy 8 columns on a medium screen and larger and the full width on smaller screens.
- The combination of the "p-3" and "p-md-5" classes will change the layout of the side content to have a padding 3 on all screen sizes and 5 on a tablet or larger.

5c. Add a div tag that will act as a container for the Carousel Component.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	<div class="col-xl-10 p-0">

	    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">
	    	    	<!-- ... -->
	    	    </div>

	    	    <!-- Carousel Section Start -->
	    	    <div class="row d-none d-md-block mt-md-5">
	    	        <div class="offset-xl-3 col-xl-6">
	    	        </div>
	    	    </div>
	    	    <!-- Carousel Section End -->

	    	</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The outer div with the combination of the "d-none" and "d-md-block will hide the carousel on smaller screen sizes and will display it on tablet and larger screen sizes.
- The combination of the "offset-xl-3" and "col-xl-6" classes will change the layout of the Carousel Component to occupy 6 columns on an extra large screen and the full width on medium and larger screens.\
- There are a number of different ways in order to resize the carousel component. However due to a number of elements working together to create this component, at times it is difficult to manipulate.
- Refer to "references" section of this file to find the documentations for Bootstrap Carousel Component and How Do You Decrease Carousel Size.

5d. Add a Carousel Component.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">

	    	    	<!-- ... -->

	    	    	<h1>Ada Lovelace</h1>
	    	    	<h3>Full-Stack Developer</h3>

	    	    	<div class="row mt-5">
	    	    	    <!-- ... -->
	    	    	</div>

	    	    	<!-- *Carousel Section Start* -->
                       <div class="row d-none d-md-block mt-md-5">
                           <div class="offset-xl-3 col-xl-6">

                            <!-- Insert Carousel Here, Source: https://getbootstrap.com/docs/5.0/components/carousel/#with-captions -->

                               <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                 <div class="carousel-indicators">
                                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                 </div>
                                 <div class="carousel-inner">
                                   <div class="carousel-item active">
                                     <img src="https://res.cloudinary.com/dneeqo5vq/image/upload/v1708477409/2024-Maserati-GranTurismo-Review-550x350_gopzhy.jpg" class="d-block w-100" alt="...">
                                     <div class="carousel-caption d-none d-md-block">
                                         <h5>Slide label</h5>
                                         <p>Some representative placeholder content for the slide.</p>
                                      </div>
                                   </div>
                                   <div class="carousel-item">
                                     <img src="https://res.cloudinary.com/dneeqo5vq/image/upload/v1708477409/2024-Maserati-GranTurismo-Review-550x350_gopzhy.jpg" class="d-block w-100" alt="...">
                                     <div class="carousel-caption d-none d-md-block">
                                         <h5>Slide label</h5>
                                         <p>Some representative placeholder content for the slide.</p>
                                      </div>
                                   </div>
                                   <div class="carousel-item">
                                     <img src="https://res.cloudinary.com/dneeqo5vq/image/upload/v1708477409/2024-Maserati-GranTurismo-Review-550x350_gopzhy.jpg" class="d-block w-100" alt="...">
                                     <div class="carousel-caption d-none d-md-block">
                                         <h5>Slide label</h5>
                                         <p>Some representative placeholder content for the slide.</p>
                                      </div>
                                   </div>
                                 </div>
                                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                   <span class="visually-hidden">Previous</span>
                                 </button>
                                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                   <span class="visually-hidden">Next</span>
                                 </button>
                               </div>
                               
                           </div>
                       </div>
                       <!-- *Carousel Section End* -->
	    	    </div>

	    	</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Copy the Carousel from the "with captions" section of the Bootstrap documentation to create a carousel.
- Don't forget to change the "src" attributes of the image tags.
- It's best practice to use images of the same height and width dimensions to prevent resizing the whole component and ensuring the quality of the images.
- By using the same dimensions on all images, this avoids pixelated and stretched out images that reduces the quality of the output.
- Refer to "references" section of this file to find the documentations for Place Puppy, Place Kitten and Place Bear.

6. Add div tags for the Side Content and Profile Sections.

6a. Add a div tag and create a simple Other Projects Section.

**batchfolder > individual > s18 > discussion > index.html**

```html  
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	<div class="col-xl-10 p-0">

		    	<!-- ... -->	

	    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">

	    	    	<!-- ... -->

	    	    	<!-- Carousel Section Start -->
	    	    	<div class="row d-none d-md-block mt-md-5">
	    	    	    <!-- ... -->
	    	    	</div>
	    	    	<!-- Carousel Section End -->

	    	    	<!-- Other Projects Section Start -->
	    	    	<div class="bg-secondary text-light min-vh-100 p-5">

	    	    	    <h2 class="mb-3">Other Projects</h2>

	    	    	    <!-- Other Projects Container Start -->
	    	    	    <div class="p-md-5">
	    	    	    </div>
	    	    	    <!-- Other Projects Section End -->

	    	    	</div>
	    	    	<!-- Other Projects Section End -->

	    	    </div>

    		</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

6b. Add several Card Components.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	<div class="col-xl-10 p-0">

		    	<!-- ... -->

	    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">

	    	    	<!-- ... -->

	    	    	<div class="bg-secondary text-light min-vh-100 p-5">

	    	    	    <h2 class="mb-3">Other Projects</h2>

	    	    	    <!-- Other Projects Container Start -->
	    	    	    <div class="p-md-5">

	    	    	    	<!-- HTML Card Start -->
	    	    	    	<div class="card" style="width: 18rem;">
	    	    	    		<div class="card-body">
	    	    	    			<h5 class="card-title">Card title</h5>
	    	    	    			<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
	    	    	    			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    	    	    			<a href="#" class="card-link">Card link</a>
	    	    	    			<a href="#" class="card-link">Another link</a>
	    	    	    		</div>
	    	    	    	</div>
	    	    	    	<!-- HTML Card End -->

	    	    	    	<!-- Bootstrap Card Start -->
	    	    	    	<div class="card" style="width: 18rem;">
	    	    	    		<div class="card-body">
	    	    	    			<h5 class="card-title">Card title</h5>
	    	    	    			<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
	    	    	    			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    	    	    			<a href="#" class="card-link">Card link</a>
	    	    	    			<a href="#" class="card-link">Another link</a>
	    	    	    		</div>
	    	    	    	</div>
	    	    	    	<!-- Bootstrap Card End -->

	    	    	    	<!-- Node JS Server Card Start -->
	    	    	    	<div class="card" style="width: 18rem;">
	    	    	    		<div class="card-body">
	    	    	    			<h5 class="card-title">Card title</h5>
	    	    	    			<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
	    	    	    			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    	    	    			<a href="#" class="card-link">Card link</a>
	    	    	    			<a href="#" class="card-link">Another link</a>
	    	    	    		</div>
	    	    	    	</div>
	    	    	    	<!-- Node JS Server Card End -->


	    	    	    </div>
	    	    	    <!-- Other Projects Section End -->

	    	    	</div>

	    	    </div>

    		</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Copy the Card Component from the "Titles, text and links" section of the Bootstrap documentation to create the cards.
- Refer to "references" section of this file to find the documentation for Bootstrap Card Component.

6c. Change the dimensions, add image tags and content of the Card Components.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	<div class="col-xl-10 p-0">

		    	<!-- ... -->

	    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">

	    	    	<!-- ... -->

	    	    	<div class="bg-secondary text-light min-vh-100 p-5">

	    	    	    <h2 class="mb-3">Other Projects</h2>

	    	    	    <!-- Other Projects Container Start -->
	    	    	    <div class="p-md-5">

	    	    	    	<!-- HTML Card Start -->
	    	    	    	<div class="card bg-dark col-xl-4 mb-5 mb-xl-0">
	                            <div class="card-body">
	                            	<img src="https://3.bp.blogspot.com/-7x5c_f1yzsQ/XHv9FZKHrEI/AAAAAAAADrE/4iGl9Lm6K2odX4SdWbU_RN6gZesx4IaGACEwYBhgL/s1600/html.jpg" class="card-img-top" alt="...">
	                                <h5 class="card-title mt-3">HTML</h5>
	                                <h6 class="card-subtitle text-muted mb-2">Programming Basics</h6>
	                                <p class="card-text">
	                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	                                </p>
	                                <a href="#" class="card-link">Link To Project</a>
	                            </div>
	                        </div>
	    	    	    	<!-- HTML Card End -->

	    	    	    	<!-- Bootstrap Card Start -->
	    	    	    	<div class="card bg-dark col-xl-4 mb-5 mb-xl-0 me-xl-5 ms-xl-5">
	                            <div class="card-body">
	                                <img src="https://ezywebbuilding.com/wp-content/uploads/2020/11/bootstrap-img.png" class="card-img-top" alt="...">
	                                <h5 class="card-title mt-3">Bootstrap</h5>
	                                <h6 class="card-subtitle text-muted mb-2">Rapid Prototyping</h6>
	                                <p class="card-text">
	                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	                                </p>
	                                <a href="#" class="card-link">Link To Project</a>
	                            </div>
	                        </div>
	    	    	    	<!-- Bootstrap Card End -->

	    	    	    	<!-- Node JS Server Card Start -->
	    	    	    	<div class="card bg-dark col-xl-4 mb-5 mb-xl-0">
	                            <div class="card-body">
	                                <img src="https://clever-solution.com/wp-content/uploads/2020/04/5625%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-1280x720.png" class="card-img-top" alt="...">
	                                <h5 class="card-title mt-3">Node JS Server</h5>
	                                <h6 class="card-subtitle text-muted mb-2">Backend Basics</h6>
	                                <p class="card-text">
	                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	                                </p>
	                                <a href="#" class="card-link">Link To Project</a>
	                            </div>
	                        </div>
	    	    	    	<!-- Node JS Server Card End -->


	    	    	    </div>
	    	    	    <!-- Other Projects Section End -->

	    	    	</div>

	    	    </div>

	    	</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "col-xl-4" class defines the width of the cards in an extra large screen and allows the cards to occupy the full width of it's parent element in large screens and lower.
- The combination of the "mb-5" and "mb-xl-0" classes on the outer div tags of the cards allows to create a bottom margin on large and smaller screens where the layout of the elements are stacked together and removes the margin on extra large screens.
- The combination of the "me-xl-5" and "ms-xl-5" classes creates a margin on the sides of the Bootstrap Card on extra large screens which is the middle element. The view on extra large screens is where the cards are intended to beside each other.
- Don't forget to add the Image tags for each card and replace the "src" attribute to display images.
- Refer to "references" section of this file to find the documentation for Bootstrap Card Component.

6d. Apply the Flexbox approach to have the cards appear beside each other.

**batchfolder > individual > s18 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<div class="container-fluid text-center">
	    
	    <div class="row">

	    	<!-- ... -->

	    	<div class="col-xl-10 p-0">

		    	<!-- ... -->

		    	    <div class="container-fluid bg-dark text-light min-vh-100 p-3 p-md-5">

		    	    	<!-- ... -->
		    	    	<div class="bg-secondary text-light min-vh-100 p-5">

		    	    	    <h2 class="mb-3">Other Projects</h2>

		    	    	    <div class="d-lg-flex justify-content-center p-md-5">
		    	    	    	<!-- ... -->
		    	    	    </div>

		    	    	</div>

		    	    </div>

	    	</div>

	    </div>

	</div>
	
	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The combination of the "d-lg-flex" and "justify-content-center" classes allows the cards to appear centered and beside each other by changing the child elements into flex items on extra large screens.
- Since the flex property is only applied on extra large screens, on large screens and smaller the cards will appear stacked on each other.
- Refer to "references" section of this file to find the documentations for CSS Flexbox and Bootstrap Flex Classes.

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [Bootstrap Form Classes](https://getbootstrap.com/docs/4.6/components/forms/)
- [Bootstrap Modal Classes](https://getbootstrap.com/docs/4.6/components/modal/)


## Activity:

**Member 1:**

1. Update your local groupwork git repository and push to git with the commit message of Add discussion code s18.
2. Add a div element. Add an id called “contact-section”.
- Add bootstrap classes to make it as a bootstrap fluid container
- Add bootstrap classes to make its bg color bootstrap dark.
- Add paddings on all sides. side.

**Member 2:**

3. Inside the div with id “contact-section”, add an H2 with text Contact Me
4. Add a div which will contain our form.
- Add a bootstrap class to assign as a bootstrap row
- Add bootstrap class to add a margin at the top of the div.
- Put the row's contents to the center by adding Bootstrap Flex Classes to the row.

**Member 3:**

5. Add a column div in the row:
- Adjust the size of the column of the form following the different breakpoints:
- Small sized screens - 12 columns
- Medium and large sized screens - 8 columns
- Extra large sized screens - 4 columns

**Member 4:**

6. Add a form in the column div that will accept the following fields:
- Name (text input)
- Email Address (email input)
- Contact Number (number input)
- Concern (dropdown selection)
- Message (textarea)
- Add a button to the form.
- Add the correct bootstrap class to the button to allow the button to work with the modal.
- Add an id to the form: “form-col”

**Member 5:**

7. Add a Modal Component to the portfolio that opens when the form button is pressed.
- Make sure to add an id called modalDiv to the modal div.
- Make sure the form button is type button so that the modal can work.

**All Members:**

8. Check out to your own git branch with git checkout -b <branchName>
9. Update your local groupwork git repository and push to git with the commit message of Add activity code s18.
10. Add the sessions repo link in Boodle for s18.

# Solution:

```html
<!DOCTYPE HTML>
<html>
    <!--...-->
<body>

    <!--...-->

    <!-- Main Content Section Start -->
    <div class="container-fluid text-center">

        <div class="row">

            <!-- Side Navbar Section Start -->
            <div class="card col-xl-2 d-none d-xl-block p-0">
                
                <!--...-->

                <!-- Activity -->
                <!-- Contact Form Section Start -->
                <div class="bg-dark container-fluid p-5"  id="contact-section">

                    <h2 class="text-light">Contact Me</h2>

                    <div class="row mt-3 justify-content-center">
                        <div class="col-12 col-md-8 col-xl-4" id="form-col">
                            <form class="bg-primary p-3 rounded">
                                <div class="form-group">
                                    <label class="text-light" for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Your Name">
                                </div>
                                <div class="form-group">
                                    <label class="text-light" for="email">Email address</label>
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                </div>
                                <div class="form-group">
                                    <label class="text-light" for="contact">Contact Number</label>
                                    <input type="number" class="form-control" id="contact" placeholder="+63 900 000 0000">
                                </div>
                                <div class="form-group">
                                    <label class="text-light" for="concern">Concern</label>
                                    <select class="form-control" id="concern">
                                        <option>Quotation</option>
                                        <option>Appointment</option>
                                        <option>Follow-Up</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="text-light" for="message">Message</label>
                                    <textarea class="form-control" id="message" rows="7"></textarea>
                                </div>
                                <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#modalDiv">Send Email</button>
                            </form>
                        </div>
                    </div>

                </div>
                <!-- Contact Form Section End -->

                 <!-- *** Revise Modal, Source: https://getbootstrap.com/docs/5.0/components/modal/#static-backdrop -->
                   <!-- *** Mostly appended bs to modal classes -->
                   <div class="modal fade" id="modalDiv" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                       <div class="modal-dialog">
                           <div class="modal-content">
                               <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">Thank you for contacting us!</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                 </button>
                             </div>
                             <div class="modal-body">
                               Message Successfully Sent
                           </div>
                           <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                           </div>
                       </div>
                   </div>
                   <!-- Modal End -->

                
            </div>
            <!-- Side Content Section End -->

        </div>

    </div>
    <!-- Main Content Section End -->

    <!--...-->

</body>
</html>
```