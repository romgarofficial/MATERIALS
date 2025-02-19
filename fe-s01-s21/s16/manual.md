# Bootstrap - Flex

# References
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/5.0/utilities/text/)
- [Boostrap Color Utility Classes](https://getbootstrap.com/docs/5.0/utilities/colors/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [CSS display Property](https://www.w3schools.com/cssref/pr_class_display.asp)
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Bootstrap Flex Classes](https://getbootstrap.com/docs/5.0/utilities/flex/)
- [CSS justify-content Property](https://www.w3schools.com/cssref/css3_pr_justify-content.asp)
- [CSS align-items Property](https://www.w3schools.com/cssref/css3_pr_align-items.asp)
- [CSS flex-direction Property](https://www.w3schools.com/cssref/css3_pr_flex-direction.asp)
- [Bootstrap CSS Framework](https://getbootstrap.com/)
- [Introduction to Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap local vs. CDN](https://www.belugacdn.com/bootstrap-local-vs-cdn/)
- [Responsive Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
- [Bootstrap Containers](https://getbootstrap.com/docs/5.0/layout/containers/)
- [Bootstrap Grid System classes](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s16 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS and Bootstrap Flex</title>
</head>
<body>

</body>
</html>
```

2. Create an external CSS stylesheet named "index.css" file and create CSS rules that will mirror Bootstrap classes.

**batchfolder > individual > s16 > discussion > index.css**

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

.h-25 {
    height: 25%;
}

.p-3 {
    padding: 15px;
}

.bg-success {
    background-color: forestgreen;
}

.bg-warning {
    background-color: orange;
}

.bg-danger {
    background-color: darkred;
}
```

**IMPORTANT NOTE:**
- The style tag will not work in an external CSS file and is only used here for code readability and instruction. Omit this and add the CSS syntax instead.
- The CSS rules created here mirror Bootstrap classes and are done for the appreciation of the students.
- You may have the students copy the CSS rules for a faster discussion.
- Refer to "references" section of this file to find the documentations for Bootstrap's Text, Color and Spacing Utility classes.

3. Add the link tag to connect the external CSS file with the HTML file.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
<head>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="index.css">

    <title>CSS and Bootstrap Flex</title>

</head>
<body>

</body>
</html>
```

4. Create a container, center the text elements and add another header tag and some text.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!-- ... -->
<body>

    <div class="text-center">

        <h1>Bootstrap Flex</h1>
        <p>Use the d-flex class to create a flex container and transform direct children into flex items.</p>

    </div>

</body>
<!-- ... -->
```

5. Create several div tags and apply some style and color for visual reference.

**batchfolder > individual > s16 > discussion > index.html**

```html  
<!-- ... -->
<body>

    <div class="text-center">

        <!-- ... -->
        <p>Use the d-flex class to create a flex container and transform direct children into flex items.</p>

        <h2>Centering elements</h2>
        <div style="height: 500px;" class="bg-secondary p-3">  
            <div class="h-25 p-3 bg-success">Flex Item A</div>
            <div class="h-25 p-3 bg-warning">Flex Item B</div>
            <div class="h-25 p-3 bg-danger">Flex Item C</div>
        </div>

    </div>

</body>
<!-- ... -->
```

6. Create a "d-flex" CSS rule that will mirror Bootstrap's Flex class.

**batchfolder > individual > s16 > discussion > index.css**

```css  
.bg-danger {
    /*...*/
}

/*CSS and Bootstrap Flexbox*/
.d-flex {
    display: flex;
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

7. Apply the "d-flex" class.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!-- ... -->
<body>

    <div class="text-center">

        <!-- ... -->

        <h2>Centering elements</h2>
        <div style="height: 500px;" class="bg-secondary p-3 d-flex">  
            <!-- ... -->
        </div>

    </div>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The "d-flex" class will change all the child div elements into flex items.
- The flex items will only occupy space enough for the element's content allowing is more flexibility to manipulate our elements.

8. Create a "justify-content-center" CSS rule that will mirror Bootstrap's Flex class.

**batchfolder > individual > s16 > discussion > index.css**

```css
<!-- ... -->
/*...*/

.d-flex {
    /*...*/
}

.justify-content-center{
    justify-content: center;
}
```

**IMPORTANT NOTE:**
- The CSS "justify-content" property allows us to manipulate the positioning of elements horizontally.
- Refer to "references" section of this file to find the documentations for CSS justify-content Property and Bootstrap Flex Classes.

9. Apply the "justify-content-center" class.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!-- ... -->
<body>

    <div class="text-center">

        <!-- ... -->

        <h2>Centering elements</h2>
        <div style="height: 500px;" class="bg-secondary p-3 d-flex justify-content-center">  
            <!-- ... -->
        </div>

    </div>

</body>
<!-- ... -->
```

**IMPORTANT NOTE**
- The CSS "justify-content" property may only be applied if the element has a "flex" value for it's "display" property.
- The "justify-content-center" class will horizontally center all child elements.
- There may be instances that justify-content property may not work due to a lack of width on it's parent element.
- Using the combination of the CSS "width" property and the justify-content property helps align elements horizontally.

10. Create an "align-items-center" CSS rule that will mirror Bootstrap's Flex class.

**batchfolder > individual > s16 > discussion > index.css**

```css
/*...*/

.justify-content-center{
    /*...*/
}

.align-items-center {
    align-items: center;
}
```

**IMPORTANT NOTE:**
- The CSS "align-items" property allows us to manipulate the positioning of elements vertically.
- Refer to "references" section of this file to find the documentations for CSS align-items Property and Bootstrap Flex Classes.

11. Apply the "align-items-center" class.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!-- ... -->
<body>

    <div class="text-center">

        <!-- ... -->

        <h2>Centering elements</h2>
        <div style="height: 500px;" class="bg-secondary p-3 d-flex justify-content-center align-items-center">  
            <!-- ... -->
        </div>

    </div>

</body>
<!-- ... -->
```

**IMPORTANT NOTE:**
- The CSS "align-items" property may only be applied if the element has a "flex" value for it's "display" property.
- The "align-items-center" class will vertically center all child elements.
- There may be instances that align-items property may not work due to a lack of height on it's parent element.
- Using the combination of the CSS "height" property and the align-items property helps align elements vertically.

12. Create a "flex-column" and "flex-column-reverse" CSS rule that will mirror Bootstrap's Flex class.

**batchfolder > individual > s16 > discussion > index.css**

```css
/*...*/

.align-items-center {
    /*...*/
}

.flex-column {
    flex-direction: column;
}

.flex-column-reverse {
    flex-direction: column-reverse;
}
```

**IMPORTANT NOTE:**
- The CSS "flex-direction" property allows us to manipulate the direction of how elements are positioned inside a flex container.
- The "column-reverse" value will display the elements vertically.
- Refer to "references" section of this file to find the documentations for CSS flex-direction Property and Bootstrap Flex Classes.

13. Apply the "flex-column" or "flex-column-reverse" class.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!-- ... -->
<body>

    <div class="text-center">

        <!-- ... -->

        <h2>Centering elements</h2>
        <div style="height: 500px;" class="bg-secondary p-3 d-flex justify-content-center align-items-center flex-column">  
            <!-- ... -->
        </div>

    </div>

</body>
<!-- ... -->
```

**IMPORTANT NOTE**
- The CSS "flex-direction" property may only be applied if the element has a "flex" value for it's "display" property.
- The "flex-column" class will display elements on top of each other.
- A practical application of this might be to create a side navbar or centered items that should stack on top of each other.
- Using the combination of the CSS "height" property and the align-items property helps align elements vertically.

14. Apply Bootstrap to the project by adding all the dependencies, comment out the external CSS and apply a container-fluid class to the outer div.

**batchfolder > individual > s16 > discussion > index.html**

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

    <title>CSS and Bootstrap Flex</title>

</head>
<body>

    <div class="container-fluid text-center">
        <!-- ... -->
    </div>

    <!-- Bootstrap Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- End of Bootstrap Script -->

</body>
</html>
```

**IMPORTANTE NOTE:**
- By creating the CSS rules in the external CSS to mirror the class names used in Bootstrap, this will help reinforce the concept of how the Bootstrap Grid System works and the output using both the external CSS and Bootstrap will result to a similar output.
- Upon completion of this material, Bootstrap 4.6 was the latest version.
- To avoid any problems and errors encountered during the discussion, it is advised to implement the same version of Bootstrap.
- An alternative way of implementing Bootstrap is to download it and store a copy in the local project.
- The Responsive Meta Tag is responsible for making Bootstrap work properly. It disables the browser zoom view and allows elements to be rendered to scale to the size of the screen.
- Refer to "references" section of this file to find the documentations for Bootstrap CSS Framework, Bootstrap local vs. CDN, Responsive Meta Tag and Bootstrap Containers.
- Refer to "references" section of this file to find the documentation for Introduction to Bootstrap 4.6 on where to get the code snippets to apply Bootstrap into our project.


15. Create div elements and apply the "flex-row" and "flex-row-reverse" classes.

**batchfolder > individual > s16 > discussion > index.html**

```html
<!-- ... -->
<body>

    <div class="container-fluid text-center">

        <!-- ... -->

        <h2>Centering elements</h2>
        <div style="height: 500px;" class="bg-secondary p-3 d-flex justify-content-center align-items-center flex-column">  
            <!-- ... -->
        </div>

        <h2>Flex Row</h2>
        <div class="bg-dark p-3 d-flex flex-row">  
            <div class="p-3 bg-success">Flex Item A</div>
            <div class="p-3 bg-warning">Flex Item B</div>
            <div class="p-3 bg-danger">Flex Item C</div>
        </div>

        <h2>Flex Row Reverse</h2>
        <div class="bg-dark p-3 d-flex flex-row-reverse">  
            <div class="p-3 bg-success">Flex Item A</div>
            <div class="p-3 bg-warning">Flex Item B</div>
            <div class="p-3 bg-danger">Flex Item C</div>
        </div>

    </div>

    <!-- ... -->

</body>
<!-- ... -->
```

**IMPORTANT NOTE**
- The "flex-row" and "flex-row-reverse" classes may only be applied if the element has a "flex" value for it's "display" property.
- The CSS "flex-row" and "flex-row-reverse" classes changes how the elements are displayed horizontally.

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [CSS display Property](https://www.w3schools.com/cssref/pr_class_display.asp)
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Bootstrap Flex Classes](https://getbootstrap.com/docs/5.0/utilities/flex/)
- [CSS justify-content Property](https://www.w3schools.com/cssref/css3_pr_justify-content.asp)
- [CSS align-items Property](https://www.w3schools.com/cssref/css3_pr_align-items.asp)


## Activity:

**Member 1:**

1. In the s16 folder, create an activity folder.
- Copy the template provided by your Instructor and paste it in the in the index.html file.
- Update your local groupwork git repository and push to git with the commit message of Add template code s13.
2. Apply Bootstrap to the project by adding all the dependencies.
3. Apply Bootstrap classes to the Navbar Section with the following layout:
    - Using bootstrap flex, arrange the child elements of the navbar in a row.
    - Position the element with id brand to the left of its parent. You can add an automatic margin to the right.
    - Using bootstrap flex, arrange the child elements of the nav links div in a row.

**Member 2:**

4. Apply Bootstrap classes to the div with id “main” to make it as a fluid container and add a padding.
5. Apply Bootstrap classes to the div with id “other-projects” to make it as a row. 
    - Then, Add a bootstrap flex class to make sure the divs inside it are arranged with equal spaces around each child div.
    - Then, Add a bootstrap flex direction class to reverse the order of the divs but only from the medium screen.

**Member 3:**

6. Then, apply classes to the elements with id: bootstrap, html, nodejs :
    - When in a medium screen or larger screen, the 3 divs should appear side by side with 3 columns each.
    - When in a small screen, the contents should appear on top of each other.
    - Center the text inside the cards.
    - You can use bootstrap grid classes.

**Member 4:**

7. Apply Bootstrap Flex classes to the Core Tools Section with the following layout:
    - Make sure that the div with id core-tools is using flex and its 2 children are arranged in a column.
    - Make sure that the div id html-img is using flex and its children are centered horizontally using bootstrap flex classes.
    - Make sure that the div with id  css-js is using flex and its children are centered horizontally using bootstrap flex classes.

**Member 5:**

8. Apply Bootstrap Flex classes to the Other Tools Section with the following layout:
    - Make sure that the div with id other-tools is using flex and its 2 children are arranged in a column but only from the medium screen.
    - Make sure that the div with id tools-1 is using flex but only from the medium screen and its children are centered horizontally using bootstrap flex classes.
    - Make sure that the div with id tools-2 is using flex but only from the medium screen and its children are centered horizontally using bootstrap flex classes.

**All Members:**

9. Check out to your own git branch with git checkout -b <branchName>
10. Update your local groupwork git repository and push to git with the commit message of Add activity code s16.
11. Add the sessions repo link in Boodle for s16.

# Solution:

1. Provide the students with the template.html file

**batchfolder > groupwork > s16 > activity > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>

        <title>Developer Portfolio: Other Projects and Tools</title>

    </head>
    <body>

        <div>
            <div>Ada Lovelace</div>
            <div>
                <div>About Me</div>
                <div>Projects</div>
                <div>Tools</div>
            </div>
        </div>

        <div>

            <h3>Other Projects</h3>

            <!-- Other Projects Start -->
            <div>

                <!-- HTML Card Start -->
                <div>
                    <img src="./images/html-card.png">
                    <h5>HTML</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- HTML Card End -->

                <!-- Bootstrap Card Start -->
                <div>
                    <img src="./images/bootstrap-card.png">
                    <h5>Bootstrap</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- Bootstrap Card End -->

                <!-- Nose JS Server Card Start -->
                <div>
                    <img src="./images/nodejs-card.png">
                    <h5>Node JS Server</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- Node JS Server Card End -->

            </div>
            <!-- Other Projects End -->

            <!-- Tools Section Start -->
            <div>

                <!-- Core Tools Section Start -->
                <h3>Core Tools</h3>

                <div>
                    <div>
                        <img width="150" src="images/logo-html5.png"/>
                    </div>
                    <div>
                        <img width="150" src="images/logo-css3.png"/>
                        <img width="150" src="images/logo-javascript.png"/>
                    </div>
                </div>
                <!-- Core Tools Section End -->
                
                <!-- Other Tools Section Start -->
                <h3>Other Tools</h3>

                <div>
                    <div>
                        <img width="150" src="images/logo-mongodb.png"/>
                        <img width="150" src="images/logo-nodejs.png"/>
                        <img width="150" src="images/logo-expressjs.png"/>
                        <img width="150" src="images/logo-react.png"/>
                        <img width="150" src="images/logo-heroku.png"/>
                    </div>
                    <div class="mt-3">
                        <img width="150" src="images/logo-git.png"/>
                        <img width="150" src="images/logo-sublime-text-3.png"/>
                        <img width="150" src="images/logo-postman.png"/>
                        <img width="150" src="images/logo-gitlab-ci-cd.png"/>
                    </div>
                </div>
                <!-- Other Tools Section End -->
                
            </div>
            <!-- Tools Section End -->

        </div>
        
    </body>
</html>
```

2. Apply Bootstrap to the project by adding all the dependencies.

**batchfolder > groupwork > s16 > activity > index.html**

```html
<!DOCTYPE html>
<html>
<head>

    <!-- Mobile Responsive Meta Tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Developer Portfolio: Other Projects and Tools</title>

</head>
<body>

    <!-- ... -->

    <!-- Bootstrap Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- End of Bootstrap Script -->

</body>
</html>
```

3. Apply Bootstrap classes to the Navbar Section.

**batchfolder > groupwork > s16 > activity > index.html**

```html
<!-- ... -->
<body>

    <!-- Navbar Section Start -->
    <div class="bg-primary text-light d-flex">
        <div class="p-3 mr-auto">Ada Lovelace</div>
        <div class="d-flex">
            <div class="p-3">About Me</div>
            <div class="p-3">Projects</div>
            <div class="p-3">Tools</div>
        </div>
    </div>
    <!-- Navbar Section End -->

    <div>
        <!-- ... -->
    </div>

    <!-- ... -->

</body>
</html>
```

4. Apply Bootstrap classes to the outer div tag of the Main Content Section to create a fluid container and add a padding.

**batchfolder > groupwork > s16 > activity > index.html**

```html
<!-- ... -->
<body>

    <div class="bg-primary text-light d-flex">
        <!-- ... -->
    </div>

    <!-- Main Content Section Start -->
    <div class="container-fluid p-3">
        <!-- ... -->
    </div>
    <!-- Main Content Section Start -->

</body>
<!-- ... -->
```

5. Apply Bootstrap classes to the Other Projects Section.

**batchfolder > groupwork > s16 > activity > index.html**

```html
<!-- ... -->
<body>

    <div class="bg-primary text-light d-flex">
        <!-- ... -->
    </div>

    <!-- Main Content Section Start -->
    <div class="container-fluid p-3">

        <h3 class="text-center">Other Projects</h3>

        <!-- Other Projects Start -->
        <div class="d-md-flex justify-content-around">

            <!-- HTML Card Start -->
            <div class="col-md-4 text-center">
                <img class="img-fluid" src="./images/html-card.png">
                <h5>HTML</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <!-- HTML Card End -->

            <!-- Bootstrap Card Start -->
            <div class="col-md-4 text-center">
                <img class="img-fluid" src="./images/bootstrap-card.png">
                <h5>Bootstrap</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <!-- Bootstrap Card End -->

            <!-- Nose JS Server Card Start -->
            <div class="col-md-4 text-center">
                <img class="img-fluid" src="./images/nodejs-card.png">
                <h5>Node JS Server</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>
```

**IMPORTANT NOTE:**
- The "d-md-flex" class will apply a "flex" value to the "display" property on a "medium" sized screen and larger.
- On smaller screens flex will not be applied to the parent element making it so elements will stack on top of each other.
- The "col-md-4" will change the width of the child elements to occupy 4 out of 12 columns of it's parent container on medium screens and larger but will occupy the full width on mobile phones.
- Refer to "references" section of this file to find the documentations for Bootstrap Grid System and Image Utility Classes.

6. Apply Bootstrap classes to the Tools Section.

**batchfolder > groupwork > s16 > activity > index.html**

```html
<!-- ... -->
<body>

    <div class="bg-primary text-light d-flex">
        <!-- ... -->
    </div>

    <div class="container-fluid p-3">

        <h3 class="text-center">Other Projects</h3>

        <div class="d-md-flex justify-content-around">
            <!-- ... -->
        </div>

        <!-- Tools Section Start -->
        <div class="mb-4">

            <!-- Core Tools Section Start -->
            <h3 class="text-center">Core Tools</h3>

            <div class="d-flex flex-column">
                <div class="d-flex justify-content-center">
                    <img width="150" src="images/logo-html5.png"/>
                </div>
                <div class="d-flex justify-content-center">
                    <img width="150" src="images/logo-css3.png"/>
                    <img width="150" src="images/logo-javascript.png"/>
                </div>
            </div>
            <!-- Core Tools Section End -->
            
            <!-- Other Tools Section Start -->
            <h3 class="text-center mt-3">Other Tools</h3>

            <div class="d-flex flex-md-column">
                <div class="d-md-flex justify-content-center">
                    <img width="150" src="images/logo-mongodb.png"/>
                    <img width="150" src="images/logo-nodejs.png"/>
                    <img width="150" src="images/logo-expressjs.png"/>
                    <img width="150" src="images/logo-react.png"/>
                    <img width="150" src="images/logo-heroku.png"/>
                </div>
                <div class="d-md-flex justify-content-center mt-3">
                    <img width="150" src="images/logo-git.png"/>
                    <img width="150" src="images/logo-sublime-text-3.png"/>
                    <img width="150" src="images/logo-postman.png"/>
                    <img width="150" src="images/logo-gitlab-ci-cd.png"/>
                </div>
            </div>
            <!-- Other Tools Section End -->
            
        </div>
        <!-- Tools Section End -->

    </div>

    <!-- ... -->

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