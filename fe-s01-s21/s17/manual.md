# Bootstrap - Layout and Best Practices

# References
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s17 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Bootstrap - Layout and Best Practices</title>
</head>
<body>

</body>
</html>
```

2. Apply Bootstrap to the project by adding all the dependencies.

**batchfolder > individual > s17 > discussion > index.html**

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
- Some of the materials are still using Bootstrap 4.6.
- To avoid any problems and errors encountered during the discussion, it is advised to implement the same version of Bootstrap.
- An alternative way of implementing Bootstrap is to download it and store a copy in the local project.
- The Responsive Meta Tag is responsible for making Bootstrap work properly. It disables the browser zoom view and allows elements to be rendered to scale to the size of the screen.
- Refer to "references" section of this file to find the documentations for Bootstrap CSS Framework, Bootstrap local vs. CDN, Responsive Meta Tag and Bootstrap Containers.
- Refer to "references" section of this file to find the documentation for Introduction to Bootstrap 5 on where to get the code snippets to apply Bootstrap into our project.

3. Create 3 elements with borders and a background for visual purposes.

**batchfolder > individual > s17 > discussion > index.html**

```html
<div>
    <div class="bg-light border">Item 1</div>
    <div class="bg-light border">Item 2</div>
    <div class="bg-light border">Item 3</div>
</div>
```

4. Add a padding using Bootstrap Spacing.

**batchfolder > individual > s17 > discussion > index.html**

```html
<div>
    <div class="p-2 bg-light border">Item 1</div>
    <div class="p-2 bg-light border">Item 2</div>
    <div class="p-2 bg-light border">Item 3</div>
</div>
```

**IMPORTANT NOTE:**
- You can use other sizes to demonstrate it to students.

5. Add a margin and padding using Bootstrap Spacing.

**batchfolder > individual > s17 > discussion > index.html**

```html  
<div class="m-5">
    <div class="p-2 bg-light border ms-5">Item 1</div>
    <div class="p-2 bg-light border me-5">Item 2</div>
    <div class="p-2 bg-light border mx-5">Item 3</div>
</div>
```

**IMPORTANT NOTE:**
- You can use other sizes to demonstrate it to students.
- The sides of p is also the same with m. Let the students explore the use of spacing sides and sizes.

6. Add a display: grid of gap utilities on the parent container.

**batchfolder > individual > s17 > discussion > index.html**

```html  
div class="m-5 d-grid gap-3">
    <div class="p-2 bg-light border ms-5">Item 1</div>
    <div class="p-2 bg-light border me-5">Item 2</div>
    <div class="p-2 bg-light border mx-5">Item 3</div>
</div>
```

**IMPORTANT NOTE:**
- You can use other sizes to demonstrate it to students.

7. Add horizontal centering on the parent container.

**batchfolder > individual > s17 > discussion > index.html**

```html
<div class="m-5 d-grid gap-3 mx-auto" style="width: 500px;">
    <div class="p-2 bg-light border ms-5">Item 1</div>
    <div class="p-2 bg-light border me-5">Item 2</div>
    <div class="p-2 bg-light border mx-5">Item 3</div>
</div>
```

8. Comment out the content of the body, then add this template to layout our page using the Bootstrap.

**batchfolder > individual > s17 > discussion > index.html**

```html
<html>
    <head>
        <!-- Bootstrap Link -->
        <!-- ... -->
    
        <title>Bootstrap - Layout and Best Practices</title>
    
        <style>
            .sample-image {
              background-image: url("https://res.cloudinary.com/dneeqo5vq/image/upload/v1708476814/389388_prev_390_389388_bus4vh.jpg");
              background-size: cover;
              height: 400px;
            }
        
        </style>
    </head>
    <body>
        <main>
            <header>
                <div>
                    <h1>Welcome to My Website</h1>
                </div>
            </header>
     
            <nav>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>    
            </nav>
                       
            <section>
                <figure>
                    <div>
                        <img src="https://res.cloudinary.com/dneeqo5vq/image/upload/v1708477409/2024-Maserati-GranTurismo-Review-550x350_gopzhy.jpg">
                    </div>
                </figure>
                <figcaption>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum risus sed arcu commodo, at cursus magna porttitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </figcaption>
            </section>
            
            <section>
                <div>
                    <div>
                        <h3>Feature 1</h3>
                    </div>
                </div>
    
                <div>
                    <div>
                        <h3>Feature 2</h3>
                    </div>
                </div>
    
                <div>
                    <div>
                        <h3>Feature 3</h3>
                    </div>
                </div>
            </section>
            
            <footer>
                <div>Footer</div>
                <div>|</div>
                <div>Terms of Use</div>
                <div>|</div>
                <div>Copyright 2023</div>
            </footer>
        </main>
    
    
        <!-- Bootstrap Script -->
        <!-- ... -->
    </body>
</html>
```


9. Add a class container in the main tag to add a margin.

**batchfolder > individual > s17 > discussion > index.html**

```html
<html>
    <!-- ... -->
    <body>
    <main class="container">
        <!-- ... -->
    </main>
</body>
</html>
```

10. Set the row and column of the header then add margin and center the text.

**batchfolder > individual > s17 > discussion > index.html**

```html
<html>
    <!-- ... -->
    <body>
        <main class="container">
            <header class="row mt-5">
                <div class="col-lg-12">
                    <h1 class="text-center">Welcome to My Website</h1>
                </div>
            </header>
        </main>
    </body>
</html>

```

**IMPORTANT NOTE:**
- This Grid System is made of three components namely:
    - Container: A ‘<div>’ or any container element effectively holds rows and columns and plays a vital role in offering the correct width to a particular layout.
    - Rows: It is a class .row component that discharges the padding menu and acts as a wrapper all over the columns.
    - Columns: In Bootstrap, different column class prefixes are used for the diverse sizes of devices.
- Adding the Grid System makes it is easy to make layouts, leading to achieving the required milestone. Creating columns of similar heights and widths is a major knack of this grid system, which makes it unique and helps you achieve much more realistic columns. This will provide a consistent layout. It will be easy to use and customize whenever we want to modify it.
- Working with the Bootstrap grid system brings in a certain set of important rules comprising:
    - Columns should be the instant child of the Rows.
    - The Rows should only consist of Columns.
    - The correct position of Rows is inside the Container.

11. Add the display: flex and spacing needed in nav element.

**batchfolder > individual > s17 > discussion > index.html**

```html
<!-- ... -->
<body>
    <!-- add the class one at a time to demonstrate each behavior -->
    <nav class="d-flex justify-content-center d-grid gap-5 bg-warning p-2">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>    
    </nav>

    <!-- Check the responsiveness by opening the inspect in your browser. -->

    <!-- ... -->
</body>
<!-- ... -->
```

12. For the 1st section, create a two columns to separate the image and its text.

**batchfolder > individual > s17 > discussion > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
        <section class="row mt-5">
            <figure class="col-lg-6">
                <div class="sample-image"></div>
            </figure>
            <figcaption class="col-lg-6">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum risus sed arcu commodo, at cursus magna porttitor. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </figcaption>
        </section>
        <!--...-->
    </body>
</html>
```

**IMPORTANT NOTE:**
- Bootstrap's grid system allows up to 12 columns across the page. Since we just need a 2 column, we add a size of 6 per column
- Check the responsiveness by opening the inspect in your browser.

13. Add grid system in Feature section.

**batchfolder > individual > s17 > discussion > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
        
        <section class="row mt-5 text-center">
            <div class="col-lg-4 col-md-6">
                <div class="p-5 border">
                    <h3>Feature 1</h3>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="p-5 border">
                    <h3>Feature 2</h3>
                </div>
            </div>

            <div class="col-lg-4 col-md-12">
                <div class="p-5 border">
                    <h3>Feature 3</h3>
                </div>
            </div>
        </section>
        
        <!--...-->
    </body>
</html>
```

**IMPORTANT NOTE**
- By adding sizes lg and md, we can control the layout per screen sizes. 
    - We added 4 for each lg sizes to set the width equally
    - To achieve equal sizing for the two columns, we incorporated md-6, while md-12 was utilized to set it to full width.
    - The default will be applied to sm so no need to add its size.

14. Add grid system in the Footer section.

**batchfolder > individual > s17 > discussion > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
        
        <footer  class="d-flex justify-content-center d-grid gap-3 m-5">
            <div>Footer</div>
            <div>|</div>
            <div>Terms of Use</div>
            <div>|</div>
            <div>Copyright 2023</div>
        </footer>
    </body>
</html>
```

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/4.6/utilities/text/)
- [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Bootstrap Border Utility Classes](https://getbootstrap.com/docs/5.0/utilities/borders/)
- [Bootstrap Sizing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/sizing/)
- [HTML Blocks - tutorialspoint](https://www.tutorialspoint.com/html/html_blocks.htm)
- [HTML Blocks - w3schools](https://www.w3schools.com/html/html_blocks.asp)
- [HTML Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element)
- [Bootstrap Position Utility Classes](https://getbootstrap.com/docs/5.0/utilities/position/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [Bootstrap Display Utility Classes](https://getbootstrap.com/docs/5.0/utilities/display/)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)


## Activity:

**Member 1:**

1. In the S17 folder, create an activity folder.
- Copy the template provided by your Instructor and paste it in the in the index.html file.
- Update your local groupwork git repository and push to git with the commit message of Add template code s17
2. Apply Bootstrap to the project by adding all the dependencies.
3. Add bootstrap classes to the element "nav” to with the id "navbar":
    - Have all elements to appear as inline elements
    - Add a dark background color with white text
    - Add padding. The horizontal padding should have a greater value than the vertical padding

**Member 2:**

4. Add bootstrap classes to the div element with the id "navlinks":
    - Create space between the navlinks and the "My Website" text using the margin class.
    - Create space between the navlink elements using display grid and gap classes
5. Add bootstrap class to Banner Section with the id "banner":
    - Add a spacing on all sides using padding.
    - Change the background to danger.
    - Change the text to white.

**Member 3:**

6. Add bootstrap classes to the About Section with the id of "about":
    - Add space on top and bottom sides.
    - Divide the columns into two:
        - About Us on the left side. 
        - The image on the right side.
        - Both columns should be equal in size on large screens.

**Member 4:**

7. Add bootstrap classes to the Services Section with the id of "section":
    - Divide the columns into three for the large size screens
    - For md size, equal sizing for the first two columns, and set the last column to full width.
    - Center the text
    - Add border and spacing to the cards

**Member 5:**

8. Add a bootstrap to the Footer Section:
    - Apply a dark background and white text
    - Have all elements to appear as inline elements
    - Add spacing to the elements using display grid and gap classes

**All Members:**

9. Check out to your own git branch with git checkout -b <branchName>
10. Update your local groupwork git repository and push to git with the commit message of Add activity code s17.
11. Add the sessions repo link in Boodle for s17.

# Solution:

1. Create an activity folder and an index.html file. Add the Bootstrap dependencies.

**batchfolder > groupwork > s17 > activity > index.html**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <title>Bootstrap - Layout and Best Practices</title>

    </head>
    <body>
        

        <!-- Bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</html>
```

2. Update the navbar section.

**batchfolder > groupwork > s17 > activity > index.html**

```html
<html>
    <!--...-->
    <body>
        <!-- Navbar -->
        <nav class="d-flex justify-content-center px-5 py-3 bg-dark text-white" id="navbar">
            <div>My Website</div>
            <div class="ms-auto d-flex justify-content-center d-grid gap-5" id="navlinks">
                <div>About</div>
                <div>Services</div>    
            </div>      
        </nav>
        
        <!--...-->
    </body>
</html>

```

3. Update the banner section.

**batchfolder > groupwork > s17 > activity > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
        
        <!-- Banner Section -->
        <section class="bg-danger text-white p-5" id="banner">
            <h1>Welcome to My Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        
        <!--...-->
    </body>
</html>

```

4. Update the about section

**batchfolder > groupwork > s17 > activity > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
        
        <!-- About Section -->
        <section class="py-5">
            <div class="container" id="about">
                <div class="row" id="about-row">
                    <div class="col-lg-6" id="about-col-1">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nisi et sem eleifend aliquet. Fusce interdum rutrum ipsum, non feugiat risus consectetur eu. Nulla sodales orci et mi ultrices, at mattis leo gravida. Curabitur non dapibus orci.</p>
                    </div>
                    <div class="col-lg-6" id="about-col-2">
                        <img src="https://res.cloudinary.com/dneeqo5vq/image/upload/v1708477409/2024-Maserati-GranTurismo-Review-550x350_gopzhy.jpg" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
        
        <!--...-->
    </body>
</html>

```

5. Update the services section.

**batchfolder > groupwork > s17 > activity > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
       
        <!-- Services Section -->
        <section class="container" id="section">
            <div class="row my-5 text-center" id="section-row">
                <div class="col-lg-4 col-md-6" id="section-col-1">
                    <div class="p-5 border" id="section-web-dev">
                        <h3>Web Development</h3>
                        <p>We provide professional web development services.</p>
        
                    </div>
                </div>
        
                <div class="col-lg-4 col-md-6" id="section-col-2">
                    <div class="p-5 border" id="section-design">
                        <h3>Graphic Design</h3>
                        <p>Our talented designers create stunning graphics for your brand.</p>
                    </div>
                </div>
        
                <div class="col-lg-4 col-md-12" id="section-col-3">
                    <div class="p-5 border" id="section-marketing">
                        <h3>Digital Marketing</h3>
                        <p>We help businesses grow their online presence.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!--...-->
    </body>
</html>
```

6. Update the footer section.

**batchfolder > groupwork > s17 > activity > index.html**

```html
<html>
    <!--...-->
    <body>
        <!--...-->
        
        <!-- Footer -->
        <footer  class="d-flex justify-content-center d-grid gap-3 py-3 bg-dark text-white" id="footer">
            <div>&copy;  2023 My Website.</div>
            <div>|</div>
            <div>All rights reserved.</div>
        </footer>
    </body>
</html>

```

**IMPORTANT NOTE**
- The combination of the "d-flex and "flex-column" classes allows the images be displayed stacked on top of each other.
- The combination of the "d-flex" and "justify-content-center" classes in the Core Tools Section allows to center the images horizontally in their respective containers.
- The "d-" classes only applies to it's child elements and not to it's grandchild elements.
- This is the reason why multiple "d-" classes are needed in order to align elements in nested div tags.
- The combination of the "d-md-flex" and "justify-content-center" classes in the Other Tools Section allows to center the images horizontally in their respective containers on medium screens and larger.
- On smaller screens flex will not be applied to the parent element making it so elements will stack on top of each other.
- Refer to "references" section of this file to find the documentations for Bootstrap Grid System and Image Utility Classes.