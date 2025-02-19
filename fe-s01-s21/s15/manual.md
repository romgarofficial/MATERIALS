# Bootstrap - Grid System

# References
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/5.0/utilities/text/)
- [Boostrap Color Utility Classes](https://getbootstrap.com/docs/5.0/utilities/colors/)
- [Bootstrap Border Utility Classes](https://getbootstrap.com/docs/5.0/utilities/borders/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [CSS display Property](https://www.w3schools.com/cssref/pr_class_display.asp)
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [CSS calc Function](https://www.w3schools.com/cssref/func_calc.asp)
- [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
- [Bootstrap CSS Framework](https://getbootstrap.com/)
- [Introduction to Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap local vs. CDN](https://www.belugacdn.com/bootstrap-local-vs-cdn/)
- [Responsive Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
- [Bootstrap Grid System - Bootstrap Documentation](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Bootstrap Grid System - tutorialrepublic](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php)
- [Bootstrap Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
- [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s15 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap Grid System</title>
</head>
<body>

</body>
</html>
```

2. Create an external CSS stylesheet named "index.css" file and create CSS rules that will mirror Bootstrap classes.

**batchfolder > individual > s15 > discussion > index.css**

```css
/*CSS Reset*/
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/*Bootstrap Font*/
body {
	font-family: "Helvetica Neue", sans-serif;
}

.text-center {
	text-align: center;
}

.bg-primary {
	background-color: dodgerblue;
}

.bg-secondary {
	background-color: lightslategrey;
}

.text-light {
	color: white;
}

.border {
	border: 1px solid gray;
}

.border-dark {
	border-color: black;
}

.pt-3 {
	padding-top: 20px;
}

.pb-3 {
	padding-bottom: 20px;
}
```

**IMPORTANT NOTE:**
- The style tag will not work in an external CSS file and is only used here for code readability and instruction. Omit this and add the CSS syntax instead.
- The CSS rules created here mirror Bootstrap classes and are done for the appreciation of the students.
- This is to show students how easy it is to build applications and websites through the use of Bootstrap.
- This will be more relevant in the following steps where the Bootstrap Grid System classes will be done in CSS and then achieved using bootstrap classes.
- These CSS rules will allow students to better visualize Bootsrap's Grid System.
- Refer to "references" section of this file to find the documentations for Bootstrap's Text, Color, Border and Spacing Utility classes.

3. Add the link tag to connect the external CSS file with the HTML file.

**batchfolder > individual > s14 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>

	<!-- Custom CSS -->
	<link rel="stylesheet" href="index.css">

	<title>Bootstrap Grid System</title>

</head>
<body>

</body>
</html>
```

4. Create a header tag and center all the text elements.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center">

    <h1>Bootstrap Introduction and Simple Styles</h1>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The discussion and the activity is done mainly using Bootstrap classes only to showcase the capabilities of Bootstrap and to give the students more experience in utilizing the different classes.
- The "text-center" class centers all text, images and button elements.

5. Create another header tag and a div tag.

**batchfolder > individual > s15 > discussion > index.html**

```html  
<!-- ... -->
<body class="text-center">

    <h1>Bootstrap Introduction and Simple Styles</h1>

    <!-- Two Columns Start-->
    <h2>Two Columns</h2>
    <div>
    </div>

</body>
<!-- ... -->
```

6. Create CSS rules that will mirror Bootstrap's Grid System classes.

**batchfolder > individual > s15 > discussion > index.css**

```css  
/*...*/

.pb-3 {
	/*...*/
}

/*Bootstrap Grid Classes*/
.row {
	display: flex;
	flex-wrap: wrap;
}

.col-1 {
	width: calc(100% / 12);
}

.col-2 {
	width: calc((100% / 12)*2);
}

.col-3 {
	width: calc((100% / 12)*3);
}

.col-4 {
	width: calc((100% / 12)*4);
}

.col-5 {
	width: calc((100% / 12)*5);
}

.col-6 {
	width: calc((100% / 12)*6);
}

.col-7 {
	width: calc((100% / 12)*7);
}

.col-8 {
	width: calc((100% / 12)*8);
}

.col-9 {
	width: calc((100% / 12)*9);
}
.col-10 {
	width: calc((100% / 12)*10);
}

.col-11 {
	width: calc((100% / 12)*11);
}

.col-12 {
	width: calc((100% / 12)*12);
}
```

**IMPORTANT NOTE:**
- The "flex" value of the "display" property will change the element into a block-level flex container.
- This will make all the child elements become "flexible" that allows them to occupy space enough for the content of an element and at the same time will have the elements appear beside each other.
- The "flex-wrap" property with the value of "flex" will allow elements that exceed the width of the screen to "wrap" around and be pushed below previous elements in the same block.
- This prevents elements that exceed the width of the screen to create a horizonal scroll.
- This will be discussed further in the next session for CSS and Bootstrap Flexbox.
- The CSS "calc" function will allow us to apply calculations to the width of an element.
- The Bootstrap Grid System works by dividing the width of an element into 12 columns for layouting.
- The full width of a parent element which is "100%" is divided by "12" and multiplied to a certain number based on the amount of columns we would like a specific element to occupy.
- Bootstrap's "col-2" class will make it so that it will occupy 2 out of 12 columns of it's parent container, "col-3" will make an element occupy 3 out of 12 columns of it's parent container and so on.
- Refer to "references" section of this file to find the documentations for CSS display Property, CSS Flexbox and CSS calc Function.

7. Create a section and div tags for displaying 2 equal columns.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center">

    <h1>Bootstrap Introduction and Simple Styles</h1>

    <!-- Two Columns Start-->
    <h2>Two Columns</h2>
    <div>

    	<!--Row with two equal columns-->
    	<h3>1:1 Ratio</h3>

    	<div class="text-light row">
    	    <div class="bg-primary pt-3 pb-3 border border-dark col-6">6 Col</div>
    	    <div class="bg-secondary pt-3 pb-3 border border-dark col-6">6 Col</div>
    	</div>

    </div>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- Applying all the previously created CSS rules will help visualize how the Bootstrap Grid System works by applying different colors to the div tags and a border to help distinguish the columns.

8. Add the "row" and "col" classes to demonstrate how the Bootstrap Grid System works.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center">

    <!-- ... -->
    <div>

    	<h3>1:1 Ratio</h3>

    	<div class="text-light row">
    	    <div class="bg-primary pt-3 pb-3 border border-dark col-6">6 Col</div>
    	    <div class="bg-secondary pt-3 pb-3 border border-dark col-6">6 Col</div>
    	</div>

    </div>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "row" class will make all child elements appear side by side stating that all child elements should appear in a row.
- The "col-6" class will define the width of the child elements to occupy 6 columns for a total of 12.
- Exceeding the total value of 12 columns will display elements in another layer. This will be demonstrated in latter steps of the discussion.

9. Create sections and div tags for displaying 2 unequal columns.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body class="text-center">

    <!-- ... -->
    <div>

    	<!-- ... -->

    	<div class="text-light row">
    	    <!-- ... -->
    	</div>

    	<!--Row with two columns divided in 1:2 ratio-->
    	<h3>1:2 Ratio</h3>

    	<div class="text-light row">
    	    <div class="bg-primary pt-3 pb-3 border border-dark col-4">4 Col</div>
    	    <div class="bg-secondary pt-3 pb-3 border border-dark col-8">8 Col</div>
    	</div>
    	
    	<!--Row with two columns divided in 1:3 ratio-->
    	<h3>1:3 Ratio</h3>

    	<div class="text-light row">
    	    <div class="bg-primary pt-3 pb-3 border border-dark col-3">3 Col</div>
    	    <div class="bg-secondary pt-3 pb-3 border border-dark col-9">9 Col</div>
    	</div>

    </div>

	<!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE**
- You may have the students copy and paste the block of codes and change the column class names used for a faster discussion.
- The "col-4" class will define the width of one of the element to occupy 4 columns and the "col-8" class will define the width of one element to occupy 8 columns for a total of 12 columns for one row.
- The "col-3" class will define the width of one of the element to occupy 3 columns and the "col-9" class will define the width of one element to occupy 9 columns for a total of 12 columns for one row.

10. Add a CSS media query to demonstrate how Bootstrap will implement column sizing with different screen breakpoints.

**batchfolder > individual > s15 > discussion > index.css**

```css
/*...*/

.col-12 {
	/*...*/
}

/*Mobile First Approach*/
/* Small Devices */
@media (min-width: 576px){

	body {
		background-color: lightyellow;
	}

}

/* Medium Devices */
@media (min-width: 768px) {

	body {
		background-color: lightgreen;
	}

}

/* Large Devices */
@media (min-width: 992px) {

	body {
		background-color: lightblue;
	}

}
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentations for What is Mobile First Design and CSS @media Rule.

11. Apply Bootstrap to the project by adding all the dependencies and comment out the external CSS.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>

	<!-- Mobile Responsive Meta Tag -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap Link -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

	<!-- Custom CSS -->
	<!-- <link rel="stylesheet" href="index.css"> -->

	<title>Bootstrap Grid System</title>

</head>
<body>

	<!-- ... -->

	<h2>Two Columns</h2>
	<div>
		<!-- ... -->
	</div>

	<!-- Bootstrap Script -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<!-- End of Bootstrap Script -->

</body>
</html>
```

**IMPORTANT NOTE:**
- By creating the CSS rules in the external CSS to mirror the class names used in Bootstrap, this will help reinforce the concept of how the Bootstrap Grid System works and the output using both the external CSS and Bootstrap will result to a similar output.
- Upon completion of this material, Bootstrap 5.0 was the latest version.
- To avoid any problems and errors encountered during the discussion, it is advised to implement the same version of Bootstrap.
- An alternative way of implementing Bootstrap is to download it and store a copy in the local project.
- The Responsive Meta Tag is responsible for making Bootstrap work properly. It disables the browser zoom view and allows elements to be rendered to scale to the size of the screen.
- Refer to "references" section of this file to find the documentations for Bootstrap CSS Framework, Bootstrap local vs. CDN, Responsive Meta Tag and Bootstrap Grid System.
- Refer to "references" section of this file to find the documentation for Introduction to Bootstrap 5.0 on where to get the code snippets to apply Bootstrap into our project.

12. Add a "container-fluid" class to the external div for the "two columns" section.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<h2>Two Columns</h2>
	<div class="container-fluid">
		<!-- ... -->
	</div>

	<!-- Bootstrap Script -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<!-- End of Bootstrap Script -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "container-fluid" class makes all the child element span the full width of their parent containers removing any horizontal spaces/padding compared to using a "container" class.
- This will also help demonstrate Bootstrap's Grid System and column sizes.
- Refer to "references" section of this file to find the documentation for Bootstrap Containers.

13. Create sections and div tags for displaying 3 columns.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<h2>Two Columns</h2>
	<div class="container-fluid">
		<!-- ... -->
	</div>

	<!-- Three Columns Start -->
	<h2>Three Columns</h2>
	<div class="container-fluid">

        <!--Row with three equal columns-->
        <h3>1:1:1 Ratio</h3>

        <div class="text-light row">
            <div class="bg-primary pt-3 pb-3 border border-dark col-4">4 Col</div>
            <div class="bg-secondary pt-3 pb-3 border border-dark col-4">4 Col</div>
            <div class="bg-primary pt-3 pb-3 border border-dark col-4">4 Col</div>
        </div>
        
        <!--Row with three columns divided in 1:2:1 ratio-->
        <h3>1:2:1 Ratio</h3>

        <div class="text-light row">
            <div class="bg-primary pt-3 pb-3 border border-dark col-3">3 Col</div>
            <div class="bg-secondary pt-3 pb-3 border border-dark col-6">6 Col</div>
            <div class="bg-primary pt-3 pb-3 border border-dark col-3">3 Col</div>
        </div>
        
        <!--Row with three columns divided in an uneven ratio-->
        <h3>Uneven Ratio</h3>

        <div class="text-light row">
            <div class="bg-primary pt-3 pb-3 border border-dark col-3">3 Col</div>
            <div class="bg-secondary pt-3 pb-3 border border-dark col-7">7 Col</div>
            <div class="bg-primary pt-3 pb-3 border border-dark col-2">2 Col</div>
        </div>
        
    </div>
	<!-- Three Columns End-->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANT NOTE**
- This approach is good for elements that break the look of our application on different screen sizes.
- The "col-" class will apply the specified number of columns to all screen sizes.

14. Create a section and div tags for displaying automatically resizing columns.

**batchfolder > individual > s15 > discussion > index.html**

```html
<!-- ... -->
<body>

	<!-- ... -->

	<h2>Three Columns</h2>
	<div class="container-fluid">
		<!-- ... -->
    </div>

	<!-- Automatic Sizing Start -->
	<h2>Automatic Sizing</h2>
	<div class="container-fluid">
	    <div class="text-light row">
	        <div class="bg-primary pt-3 pb-3 border border-dark col">Auto</div>
	        <div class="bg-secondary pt-3 pb-3 border border-dark col">Auto</div>
	        <div class="bg-primary pt-3 pb-3 border border-dark col">Auto</div>
	        <div class="bg-secondary pt-3 pb-3 border border-dark col">Auto</div>
	        <div class="bg-primary pt-3 pb-3 border border-dark col">Auto</div>
	    </div>
	</div>
	<!-- Automatic Sizing End -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
<!-- ... -->
```

**IMPORTANTE NOTE:**
- This approach is good for elements that we would like to automatically resize to achieve an equal width on elements in a row.

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [Responsive Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
- [Bootstrap Grid System - Bootstrap Documentation](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Bootstrap Grid System - tutorialrepublic](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php)
- [Bootstrap Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
- [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)
- [Bootstrap Orders](https://getbootstrap.com/docs/5.0/layout/columns/#order-classes)
- [Offsetting columns](https://getbootstrap.com/docs/5.0/layout/columns/#offsetting-columns)


## Activity:

**Member 1:**

1. In the S15 folder, create an activity folder.
- Copy the template provided by your Instructor and paste it in the in the index.html file.
- Update your local groupwork git repository and push to git with the commit message of Add template code s12
2. Apply Bootstrap to the project by adding all the dependencies.
3. Apply a bootstrap class to all img elements in the page to avoid overflowing from its container.

**Member 2:**

4. Apply Bootstrap classes to the outer div tag with “projects” id to create a fluid container, center the text elements and add a padding on all sides.
5. Add bootstrap classes to the divs with id “api” and “react” to make them bootstrap rows.
- Add bootstrap classes to the divs to add margins at the top and bottom.

**Member 3:**

6. Apply Bootstrap classes to the “api” and “react” rows’ column divs with the following layout:
- From the smallest screen, each column div occupies all columns in the row.
- From the medium screen, each column div occupies half of the row.
- Note: Indicate the number of columns from smallest screen.

**Member 4:**

7. Apply Bootstrap classes to the “api” row change the order of the column divs:
- From the medium screen, At the api row, the left side column div contains the text and the right side column div contains the image.
- From the smallest screen the image should be shown first before the text.
8. Apply Bootstrap classes to the “react” row to change the order of the column divs:
- From the medium screen, At the react row, the left side column div contains the image and the right side column div contains the text.
- From the smallest screen the image should be shown first before the text.

**Member 5:**

9. Apply Bootstrap classes to the other projects Section to make it a bootstrap row.
10. Apply Bootstrap classes to the other projects row’s column divs with the following layout:
- From the smallest screen, each project card must occupy the row.
- From the medium screen, the three project card must equally divide the row.
- Note: Indicate the number of columns from smallest screen.

**All Members:**

11. Check out to your own git branch with git checkout -b <branchName>
12. Update your local groupwork git repository and push to git with the commit message of Add activity code s15.
13. Add the sessions repo link in Boodle for s15.

# Solution:

```html
<!DOCTYPE HTML>
<html>
    <head>

        <!-- Mobile Responsive Meta Tag -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap Link -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>

        <title>Developer Portfolio: Projects</title>

    </head>
    <body>

        <div class="container-fluid text-center p-4" id="projects">
    
            <h3>Projects</h3>

            <!-- Web API Ecommerce Start -->
            <div class="row mt-3 mb-4 p-4" id="api">
                <div class="col-12 col-md-6 order-2 order-md-1">
                    <h5 class="pt-3">Web API (Ecommerce)</h5>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2">
                    <img id="apiImg" class="img-fluid" src="https://www.cloudways.com/blog/wp-content/uploads/Rest-API-introduction.jpg"/>
                </div>
            </div>
            <!-- Web API Ecommerce End -->

            <!-- React Frontend Ecommerce Start -->
            <div class="row mb-4 p-4" id="react">
                <div class="col-12 col-md-6 order-2 order-md-2">
                    <h5 class="pt-3">React Frontend (Ecommerce)</h5>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-1">
                    <img id="reactImg" class="img-fluid" src="https://d6vdma9166ldh.cloudfront.net/media/images/1455b5c8-4887-43a8-8214-de77543414c9.jpg"/>
                </div>
            </div>
            <!-- React Frontend Ecommerce End -->

            <h3>Other Projects</h3>

            <!-- Other Projects Start -->
            <div class="row" id="other-projects">

                <!-- HTML Card Start -->
                <div class="col-12 col-md-4 p-5">
                    <img class="img-fluid" src="https://3.bp.blogspot.com/-7x5c_f1yzsQ/XHv9FZKHrEI/AAAAAAAADrE/4iGl9Lm6K2odX4SdWbU_RN6gZesx4IaGACEwYBhgL/s1600/html.jpg">
                    <h5>HTML</h5>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- HTML Card End -->

                <!-- Bootstrap Card Start -->
                <div class="col-12 col-md-4 p-5">
                    <img class="img-fluid" src="https://www.10bestdesign.com/blog/content/images/2018/03/14.png">
                    <h5>Bootstrap</h5>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- Bootstrap Card End -->

                <!-- Nose JS Server Card Start -->
                <div class="col-12 col-md-4 p-5">
                    <img class="img-fluid" src="https://clever-solution.com/wp-content/uploads/2020/04/5625%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-1280x720.png">
                    <h5>Node JS Server</h5>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- Node JS Server Card End -->

            </div>
            <!-- Other Projects End -->

        </div>

        <!-- Bootstrap Script -->
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

    </body>
</html>
```html