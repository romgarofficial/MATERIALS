# CSS - Introduction and CSS Selectors

# References
- [CSS Introduction](https://www.w3schools.com/css/css_intro.asp)
- [What is CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
- [Getting Started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
- [CSS Naming Conventions](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)
- [Differences between inline, internal and external CSS](https://www.hostinger.ph/tutorials/difference-between-inline-external-and-internal-css)
- [CSS Properties Reference](https://www.w3schools.com/cssref/)
- [Web Safe Fonts for HTML and CSS](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
- [Color Picker](https://htmlcolorcodes.com/color-picker/)
- [Image Color Picker](https://imagecolorpicker.com/en)
- [CSS Units of Measurement](https://www.w3schools.com/cssref/css_units.asp)
- [CSS Position Property](https://www.w3schools.com/cssref/pr_class_position.asp)

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s10 > discussion > index.html**

Create a file named **index.html** inside the **discussion** folder.

2. Add the required HTML elements.

**batchfolder > individual > s10 > discussion > index.html**

```html
<!-- html + "Tab" key -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CSS Introduction</title>
    </head>
    <body>

    </body>
</html>
```

3. Add a header tag.

**batchfolder > individual > s10 > discussion > index.html**

```html
<!-- html + "Tab" key -->
<!DOCTYPE html>
<html>
    <!-- ... -->
    <body>

        <h1>Hello World</h1>

    </body>
</html>
```

4. Add an inline styling to the header tag.

```html
<!-- html + "Tab" key -->
<!DOCTYPE html>
<html>
    <!-- ... -->
    <body>

        <h1 style="color:blue;">Hello World</h1>

    </body>
</html>
```

5. Add an internal styling and remove the inline styling.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <head>
        <!-- ... -->
        <title>CSS Introduction</title>

        <!-- Internal CSS -->
        <style>
            h1 {
                color: blue;
            }
        </style>

    </head>
    <body>

        <h1>Hello World</h1>

    </body>
</html>
```

**IMPORTANT NOTE:**
- Refer to "references" section of this file to find the documentation for a list of CSS Properties.

6. Demonstrate the use of external styling.

### Comment the style tag to avoid conflicts in styling.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <head>

        <!-- ... -->
        <!-- 
        <style>
            h1 {
                color: blue;
            }
        </style>
        -->

    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

**IMPORTANT NOTE:**
- We commented out the style tag and removed the internal styling of the header element because of CSS' Specificity Rule which will be discussed later in the session.

### Add the link tag to connect the external CSS file with the HTML file.

**batchfolder > individual > s10 > discussion > index.html**
```html
<html>
    <head>
        <!-- ... -->
        <title>CSS Introduction</title>

        <!-- External CSS -->
        <link rel="stylesheet" href="./index.css"/>

        <!-- Internal CSS -->
        <!-- 
        <style>
            ...
        </style>
        -->
    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

### Add the styling in the external CSS.

**batchfolder > individual > s10 > discussion > index.css**
```css
/*
CSS Rules
selector {
    property: value;
}
*/

/*h1 { color: yellow; }*/

/*Type Selector*/
/*tag-name*/
h1 {
    color: yellow;
}
```

**IMPORTANT NOTE:**
- The style tag will not work in an external CSS file and is only used here for code readability and instruction. Omit this and add the CSS syntax instead.
- Comments in CSS can be done using the same method in HTML.
- The "h1" is a "type selector" and is used to target elements with a specified type/tag name.
- The "color" property changes the color of text.
- Comments may be done using the following:
    Linux and Windows = Click on the line of code to be commented out + ctrl + / (forward slash)
    Mac = Click on the line of code to be commented out + cmd + / (forward slash)
- For code blocks, you can highlight portions of the code by holding the left click and dragging to sections to be commented.
- Make sure that the file has been saved for the changes to be applied to the output.
- Another useful way of using comments in programming is we can utilize it to comment and uncomment lines/blocks of code for testing. You may demonstrate this by commenting and uncommenting the style applied to the h1 tag.
- CSS syntax may be written in one line and it will still work. Using the multi line syntax is done for better code readability.

7. Add a universal selector and change the font.

**batchfolder > individual > s10 > discussion > index.css**
```css
/*...*/

/*h1 { color: yellow; }*/

/*Universal Selector*/
* {
    font-family: "Courier New", monospace;
    font-size: 20px;
}

h1 {
    /*...*/
}
```

**IMPORTANT NOTE:**
- The "*" symbol is a "universal selector" and is used to target all elements.
- When changing the style of elements, apply the changes per line and show the students the output.
- Multiple properties may be added for different CSS Rules.
- Some properties may also accept multiple values.
- The "font-family" property changes the style of the font.
- The value "Courier New" is used as the primary font and the value "monospace" is used as a secondary font when a browser is unable to use the primary font.
- The "font-size" property changes the size of text.
- The value "20px" refers to 20 pixels in size.
- Refer to "references" section of this file to find the documentation for web safe fonts that are available on most browsers.

8. Add additional content in the HTML file and add an id selector.

### Add header tags.

**batchfolder > individual > s10 > discussion > index.html**
```html
<html>
    <!-- ... -->
    <body>

        <h1>Hello World</h1>

        <h2>Welcome to Zuitt!</h2>
        <h3 id="zuitt-motto">Opportunities for everyone, everywhere!</h3>

    </body>
</html>
```

**IMPORTANT NOTE:**
- The "id" attribute is used to target elements with unique styling. This is a good approach to use for elements that have their own unique style across the whole application.
- Refer to "references" section of this file to find the documentation for CSS Naming Conventions.

### Add an id selector and change the spaces in between the letters.

**batchfolder > individual > s10 > discussion > index.css**
```css
/*...*/

h1 {
    /*...*/
}

/*ID Selector*/
/*#id-name*/
#zuitt-motto {
    letter-spacing: 5px;
}
```

**IMPORTANT NOTE:**
- The "letter-spacing" property changes the spaces in between characters of a text.

9. Add additional content in the HTML file and add an id selector.

### Add an ordered list.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
<!-- ... -->
<body>

    <!-- ... -->
    <h3 id="zuitt-motto">Opportunities for everyone, everywhere!</h3>

    <ol>
        <li class="offering-item">Day classes</li>
        <li class="offering-item">Night classes</li>
        <li class="offering-item">Short Courses</li>
    </ol>

</body>
</html>
```

**IMPORTANT NOTE:**
- The "class" attribute is used to target elements with similar styling. This is a good approach to use for elements that have similar styles across the whole application.

### Add a class selector and change the font casing.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/
#zuitt-motto {
    /*...*/
}

/*Class Selector*/
/*.class-name*/
.offering-item {
    text-transform: uppercase;
}
```
**IMPORTANT NOTE:**
- The "text-transform" property changes font to a certain case.
- The value "uppercase" changes the text to all capitalized letters.

10. Demonstrate the CSS Specificity rule.

### Add a type selector for the h3 element and change the spacing values.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/

#zuitt-motto {
    /*...*/
}

h3 {
    letter-spacing: 25px;
}

.offering-item {
    /*...*/
}
```

**IMPORTANT NOTE:**
- ID Selectors have the highest priority for selectors. In this example, the styling of the h3 type selector will not work because it has a lesser priority.

### Uncomment the style tag in the html file.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <head>

        <!-- ... -->
        <style>
            h1 {
                color: blue;
            }
        </style>
       

    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

**IMPORTANT NOTE:**
- Internal styling has a higher priority compared to external styling. In this example, the styling of the h1 type selector in the external css will not work because it has a lesser priority.

11. Add the "!important" property to demonstrate how to override CSS styling.
 
### Add the "!important property" to the h1 selector in the external CSS.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/

h1 {
    color: yellow !important;
}

/*...*/
```

**IMPORTANT NOTE:**
- The "!important" property has the highest priority. Using this will prioritize the property.
- This is useful for overriding CSS styling that are persistent. This will be useful in the Bootstrap discussion where manipulating the style of an element is difficult due to Bootstrap's resources that we do not have a complete idea of what properties and selectors were used.

### Add the !important property to the h1 selector in the internal CSS.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <head>

        <!-- ... -->
        <style>
            h1 {
                color: black !important;
            }
        </style>
       

    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

**IMPORTANT NOTE:**
- When several "!important" properties are present for multiple stylings targeting the same element, the CSS Specificity Rule is followed for all rules with the "!important" property.

12. Add an image tag and an adjacent sibling selector.

### Add an image tag.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
<!-- ... -->
<body>

    <!-- ... -->
    <h3 id="zuitt-motto">Opportunities for everyone, everywhere!</h3>

    <img src="https://res.cloudinary.com/dneeqo5vq/image/upload/v1708476814/389388_prev_390_389388_bus4vh.jpg">

    <ol>
        <!-- ... -->
    </ol>

</body>
</html>
```

### Add an adjacent sibling selector and change the dimensions of the image.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/

h3 {
    /*...*/
}

/*Adjacent Sibling Selector*/
/*selector + selector*/
h3 + img {
    height: 300px;
    width: 300px;
    border-radius: 150px;
}

/*
#zuitt-moto + img {
    height: 300px;
    width: 300px;
    border-radius: 150px;
}
*/

.offering-item {
    /*...*/
}
```

**IMPORTANT NOTE:**
- The selectors used for combinator selectors aren't restricted to type selectors only. ID, class, attribute and universal selectors may also be used.
- The "height" property changes the vertical dimensions of an element.
- The "width" property changes the horizontal dimensions of an element.
- The "border-radius" property changes the corners of an element from a sharp to a rounded corner. The higher the value the more rounded the corners are.

13. Add an id attribute to the ol tag and a descendant selector.

### Add an id attribute to the ol tag.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->

        <ol id="bootcamp-learning-list">
            <!-- ... -->
        </ol>

        <!-- ... -->

    </body>
</html>
```

### Add a descendant selector and change the color of the text.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/

.offering-item {
    /*...*/
}

/*Descendant Selector*/
/*selector selector*/
#bootcamp-learning-list li {
    color: #075966;
}
```

**IMPORTANT NOTE:**
- The "color" property and similar properties that change color can also accept hex values. Hexadecimal values consist of the pound (#) sign in combination with 6 alphanumeric characters.
- Refer to "references" section of this file to find the documentation for an online color picker app which you can use for hex values.

14. Add anchor tags and a general sibling selector.

### Create a basic navbar with an id attribute of top.

**batchfolder > individual > s10 > discussion > index.html**

```html
    <html>
        <!-- ... -->
        <body>
    
            <nav id="top">
                <a href="#landing">Zuitt</a>
                <div>
                    <a href="#landing">Landing</a>
                    <a href="#offerings">Courses</a>
                </div>
            </nav>
    
            <h1 style="color: red;">Hello World!</h1>
    
            <!-- ... -->
    
        </body>
    </html>
```

### Add anchor tags that will link to the top element.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->

        <ol id="bootcamp-learning-list">
            <!-- ... -->
        </ol>

        <a href="#top">Back to Top</a>

        <h2>Register</h2>
        <form>
            <!-- ... -->
        </form>

        <a href="#top">Back to Top</a>

    </body>
</html>
```

### Add a general sibling selector and change the text-decoration of the anchor tags.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/

#bootcamp-learning-list li {
    /*...*/
}

/*General Sibling Selector*/
/*selector ~ selector*/
h2 ~ a {
    text-decoration: none;
}

input[required] {
    /*...*/
}
```

**IMPORTANT NOTE:**
- The "text-decoration" property changes lines included in text (e.g. overline, underline and strike through). By default, anchor tags have an underline.
- The value "none" will remove the underline from links.

15. Add additional content in the HTML file.

### Add an offerings ordered lists.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->
            <h2>Courses</h2>
            <h3>Frontend Development</h3>
            <ol>
                <li>Git</li>    
                <li>HTML</li> 
                <li>CSS</li> 
            </ol>
            <h3>Backend Development</h3>
            <ol>
                <li>JavaScript</li>    
                <li>MongoDB</li> 
                <li>Node.js</li> 
                <li>Express.js</li> 
            </ol>
            <h3>Full-Stack Development</h3>
            <ol>
                <li>MongoDB</li> 
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li> 
            </ol>
    </body>
</html>
```

**IMPORTANT NOTE:**
- the h3 added are affected by the css ruleset added for h3 in the css. Show trainees the effect of tag selectors.

### Add a class on the h3 elements and add specify a different letter-spacing.

**batchfolder > individual > s10 > discussion > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->
            <h2>Courses</h2>
            <h3 class="modules">Frontend Development</h3>
            <ol>
                <li>Git</li>    
                <li>HTML</li> 
                <li>CSS</li> 
            </ol>
            <h3 class="modules">Backend Development</h3>
            <ol>
                <li>JavaScript</li>    
                <li>MongoDB</li> 
                <li>Node.js</li> 
                <li>Express.js</li> 
            </ol>
            <h3 class="modules">Full-Stack Development</h3>
            <ol>
                <li>MongoDB</li> 
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li> 
            </ol>
    </body>
</html>
```

### Add a css rulesset using the "modules" class selector and add specify a different letter-spacing.

**batchfolder > individual > s10 > discussion > index.css**

```css
/* ... */
            
.modules {
    letter-spacing: 3px;
}
```

16. Add more CSS rules to complete the output.

**batchfolder > individual > s10 > discussion > index.css**

```css
/*...*/

* {
    /*...*/
}

body {
    /*The "background-color" property changes the background color of an element.*/
    background-color: skyblue;
}

html {
    /* The "scroll-behavior" property changes the scrolling behavior when clicking on anchor tags */
    /* The value "smooth" changes the scrolling behavior of a page jumping from one section to the next to smoothly scroll to a section */
    scroll-behavior: smooth;
}

/*navigation bar*/
nav {
    background-color: white;
}

div {
    /* The "float" property changes the horizontal alignment of an element to float either to the left or right of it's container */
    float: right;
}

h1 {
    /* The "font-size" property changes the size of text. */
    /* The value "rem" is based on the "font-size" property of the "root element". In this case, the "font-size" of the root element is at "20px" defined by the Universal Selector. The rem value acts as a multiplier of this value. "2rem" is equivalent to "20px". Using this value for text allows us to implement consistency within text styles instead of providing varying pixel values to text. 
    The default value of the root element is at 16px. */
    color: yellow !important;
    text-align: center;
    font-size: 2rem;
}

/*sections*/
section {
    /* The value "vh" refers to viewport height. This value is based on a percentage of the browser's screen size and is good to use for elements that we want to have a responsive change in size referencing the browser's screen. */
    /* Which means that 100vh is about 100% of the browser screen's height  */
    height: 100vh;
    /* The "text-align" property changes the horizontal alignment of text or all nested text elements */
    text-align: center;
}

h2 {
    font-size: 1.5rem;
}

#zuitt-motto {
    /*...*/
}

/*...*/

h3 + img {
    /*...*/
}

ol {
    /* The "list-style-type" property changes the bullet points/numbers used in a list. */
    /* The value "none" will remove the bullet points/numbers from a list. */
    list-style-type: none;
    /* "padding" property allows us to define the spaces within an element. In this case, we used "padding:0;" to define all default padding values in the element to zero. */
    padding: 0;
}

.offering-item {
    /*...*/
}

#bootcamp-learning-list li {
    /*...*/
}

/* CSS rules may be applied to multiple selectors using a comma (,). Add the a tag after the Generic Sibling Selector (h2 ~ a, a) to also apply the properties defined in the rule to apply to a tags and remove the underline. */
h2 ~ a, a {
    /*...*/
}
```

# Activity:
Instructions that can be provided to the students for reference:
## Activity References:
- [CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [CSS Child Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)
- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Borders](https://getbootstrap.com/docs/4.6/utilities/sizing/)

## Activity:

**Member 1:**

1. In the S10 folder, create an activity folder and an index.html file.
- Clone/copy the template provided by your instructor and paste it in the in the index.html file.
- Update your local groupwork git repository and push to git with the commit message of Add template code s10
2. Apply inline styling to a paragraph tag and make its text color red.
    - Use only the html color red.
3. Add an internal CSS and Apply internal styling to a paragraph tag and make its text color orange.
    - Add an id to a paragraph element called “internal”
    - Add a css ruleset using the internal id selector in the internal css.
    - Use only the html color orange.

**Member 2:**

4. Create an index.css file.
5. Apply an external styling to a paragraph tag to color the text yellow.
    - Add an id to a paragraph element called “external”
    - Add a css ruleset using the external id selector in the external css.
    - Use only the html color yellow.
6. Change the font-family and the font size of all elements using the universal selector.
    - Change the font to Verdana, sans-serif
    - Change the font size to 20px

**Member 3:**

7. Change the font-size of h1 tags using a type selector.
    - Change to font-size to 3rem
8. Change the text to all uppercase letters for h2 tags using an id selector.
    - Add an id called sub-header
    - Transform the text using css to uppercase letters.
9. Change the background colors of the languages to be learn list items using a class selectors.
    - Add a class called text-green.
    - Using the class selectors, update all element with text-green class to have a green background.
    - Use only the HTML color green.

**Member 4:**

10. Change the border of the tools to be used list items using attribute selectors.
    - Add a class called border-blue to the tools to be used list items.
    - Using attribute selectors, update all element with border-blue class to have a 2px solid blue border.
    - Use only the HTML color blue.
11. Remove the list style type of the other things to be learned list using an adjacent sibling selector.
    - Using an adjacent sibling selector, select the ul itself.
12. Change the dimensions of the image tag using a descendant selector.
    - Using a descendant selector, select the image inside the section.
    - Change the image height and width to 20vh.
    - Set a border-radius of 100px.

**Member 5:**

13. Change the alignment of the last paragraph using a general sibling selector.
    - Using a general sibling selector, select the general sibling paragraph element of the other things to be learned list.
    - Center its text.
14. Change the letter spacing of the other things to be learned list items using a child selector.
    - Using a child selector, specify the list items that is a child of a ul which is also a child of a section.
    - Add a 10px letter spacing.

**All Members:**

15. Check out to your own git branch with git checkout -b <branchName>
16. Update your local groupwork git repository and push to git with the commit message of Add activity code s10.
17. Add the sessions repo link in Boodle for s10.

# Solution:

1. Provide the students with the contents of the HTML file.

**batchfolder > individual > s10 > activity > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Activity: CSS Introduction</title>
    </head>
    <body>

        <!-- Different ways to include CSS -->
        <p>Apply inline styling here.</p>
        <p>Apply internal styling here.</p>
        <p>Apply external styling here.</p>

        <!-- CSS Selectors -->
        <h1>CSS Introduction Activity</h1>

        <h2>The following are things you will learn in this bootcamp:</h2>

        <h3>Languages to be Learned</h3>
        <ol>
            <li>Hypertext Markup Language</li>
            <li>Cascading Style Sheet</li>
            <li>JavaScript</li>
        </ol>

        <h3>Tools to be Used</h3>
        <ol>
            <li>Sublime Text</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>GitLab</li>
        </ol>

        <!-- Combinator Selectors -->
        <section>
            <h4>Other Things to be Learned</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png">
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
            </ul>
            <p>Web development is a continuous process. Never stop learning and always look for ways to innovate.</p>
        </section>

    </body>
</html>
```

2. Apply inline styling to a paragraph tag.

**batchfolder > individual > s10 > activity > index.html**

```css
<html>
        <!-- ... -->
        <body>

            <!-- Different ways to include CSS -->
            <p style="color: red;">Apply inline styling here.</p>
            <!-- ... -->

        </body>
    </html>
```

3. Apply internal styling to a paragraph tag

### Add an id attribute of internal to the paragraph tag.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->
        <p id="internal">Apply internal styling here.</p>
        <!-- ... -->

    </body>
</html>
```

### Add a style tag and change the color of the paragraph.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <head>
        <title>Activity: CSS Introduction</title>
    
        <!-- internal styling -->
        <style>
            #internal {
                color: orange;
            }
        </style>
    
    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

4. Create an "index.css" file.

**batchfolder > individual > s10 > activity > index.css**

5. Apply an external styling to a paragraph tag.

### Add an id attribute of external to the paragraph tag.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->
        <p id="external">Apply external styling here.</p>

        <!-- ... -->

    </body>
</html>
```

### Add a link tag to connect the CSS file.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <head>
        <!-- ... -->

        <style>
            <!-- ... -->
        </style>

        <!-- external styling -->
        <link rel="stylesheet" href="./index.css"/>

    </head>
    <body>
        <!-- ... -->
    </body>
</html>
```

### Add a css rule and change the color of the paragraph.

**batchfolder > individual > s10 > activity > index.css**

```css
/*CSS Specificity Rule*/
#external {
    color: yellow;
}
```

6. Change the font-family and the font size of all elements using the universal selector.

**batchfolder > individual > s10 > activity > index.css**

```css
#external {
    /*...*/
}

/*CSS Selectors*/
/*Universal Selector*/
* {
    font-family: 'Verdana', sans-serif;
    font-size: 20px;
}
```

7. Change the font-size of h1 tags using a type selector.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

* {
    /*...*/
}

/*Type Selector*/
h1 {
    font-size: 3rem;
}
```

8. Change the text to all uppercase letters for h2 tags using an id selector.

### Add an id attribute of sub-header to the h2 tag.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->

        <h2 id="sub-header">The following are things you will learn in this bootcamp:</h2>

        <!-- ... -->

    </body>
</html>
```

### Add a CSS rule and change the text to uppercase letters.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

h1 {
    /*...*/
}

/*ID Selector*/
#sub-header {
    text-transform: uppercase;
}
```

9. Change the background colors of the languages to be learn list items using a class selectors.

### Add class attributes of text-green to the li tags.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->

        <ol>
            <li class="text-green">Hypertext Markup Language</li>
            <li class="text-green">Cascading Style Sheet</li>
            <li class="text-green">JavaScript</li>
        </ol>

        <!-- ... -->

    </body>
</html>
```

### Add a CSS rule and change the background-color to green.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

#sub-header {
    /*...*/
}

/*Class Selector*/
.text-green {
    background-color: green;
}
```

10. Change the border of the tools to be used list items using a attribute selectors.

### Add class attributes of border-blue to the li tags.

**batchfolder > individual > s10 > activity > index.html**

```html
<html>
    <!-- ... -->
    <body>

        <!-- ... -->

        <ol>
            <li class="border-blue">Hypertext Markup Language</li>
            <li class="border-blue">Cascading Style Sheet</li>
            <li class="border-blue">JavaScript</li>
        </ol>

        <!-- ... -->

    </body>
</html>
```

### Add a CSS rule and change the border to blue.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

.text-green {
    /*...*/
}

/*Attribute Selector*/
li[class="border-blue"] {
    border: 2px solid blue;
}
```

**IMPORTANT NOTE:**
The attribute selector only works based on the exact attribute syntax provided in the HTML tag. It's also case sensitive.

11. Change the list style type of the other things to be learned list using an adjacent sibling selector.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

li[class="border-blue"] {
    /*...*/
}

/*CSS Combinator Selectors*/
/*Adjacent Sibling Selector*/
img + ul {
    list-style-type: none;
}
```

12. Change the dimensions of the image tag using a descendant selector.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

img + ul {
    /*...*/
}

/*Descendant Selector*/
section img {
    /* The value "vh" refers to viewport height. This value is based on a percentage of the browser's screen size and is good to use for elements that we want to have a responsive change in size referencing the browser's screen. */
    /* Which means that 20vh is about 20% of the browser screen's height  */
    height: 20vh;
    width: 20vh;
    border-radius: 100px;
}
```

13. Change the alignment of the last paragraph using a generic sibling selector.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

section img {
    /*...*/
}

/*Generic Sibling Selector*/
ul ~ p {
    text-align: center;
}
```

14. Change the letter spacing of the other things to be learned list items using a child selector.

**batchfolder > individual > s10 > activity > index.css**

```css
/*...*/

ul ~ p {
    /*...*/
}

/*Child Selector*/
section > ul > li {
    letter-spacing: 10px;
}
```