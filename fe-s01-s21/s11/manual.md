# CSS - Box Model

# References
- [CSS Box Model - w3schools](https://www.w3schools.com/css/css_boxmodel.asp)
- [CSS Box Model - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [CSS Box Model - CSS Tricks](https://css-tricks.com/the-css-box-model/)
- [Inline Blocks](https://www.w3schools.com/css/css_inline-block.asp)
- [Google Fonts - Main Page](https://fonts.google.com/)
- [Google Fonts - Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans)
- [CSS Box Model Diagram - Google Chrome Browser](https://s3.amazonaws.com/viking_education/web_development/web_app_eng/css_box_model_chrome.png)
- [CSS Box Model Diagram - Free Code Camp](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)
- [CSS Box Sizing](https://www.w3schools.com/css/css3_box-sizing.asp)

# Skills Check for PT Batch

1. Create miniactivity.html and miniactivity.css files.

### HTML File Contents

**Batch Folder > groupwork > s08 > discussion >  miniactivity.html**

```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Styling Exercise</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Welcome to My Webpage</h1>
        <h2>Subtitle Here</h2>
        <p>This is a paragraph of text. Below is a list of my favorite things:</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <p>Here is an image:</p>
        <img src="https://placedog.net/300/300" alt="A very scary monster">
        <p>Check out this <a href="https://www.example.com">link</a>!</p>
    </body>
</html>
```

2. in the css file, layout the page as stated below:
- use Arial (sans-serif family) as the font of the body
- for h1 and h2 tags, create underline as text decorations and change the color of the font
- for img tags, use 300x200 width and height
- for ul tags, remove the bullet points of the list
- for a tags, remove any decoration in the text

**Batch Folder > groupwork > s11 > discussion >  miniactivity.css**

```css
body {
    font-family: Arial, sans-serif;
}

h1, h2 {
    text-decoration: underline;
    color: #4CAF50; /* example color */
}

img {
    width: 300px; /* example width */
    height: 200px; /* example height */
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}
```

**IMPORTANT NOTE:**
- Give 5 minutes maximum for the students to finish the activity
- Give commendation to the students after the miniactivity solution is discussed
- Use this as review and springboard going to the next session

# Code Discussion

1. Folder and File Preparation

**batchfolder > groupwork > s11 > discussion > index.html**

Create a file named **index.html** inside the **discussion** folder.

2. Add the required HTML elements to use as the basis for the discussion.

**batchfolder > groupwork > s11 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
    <head>

       <title>CSS Box Model and Flexbox Layouting</title>

       <!-- External CSS -->
       <link rel="stylesheet" href="./index.css">

    </head>
    <body>

        <nav>
            <ul>
                <li class="nav-logo">
                    <img src="https://d3ojsfl21hfxhc.cloudfront.net/assets/zuitt/zuittlogo.png">
                </li>
                <li class="nav">Home</li>
                <li class="nav">Web Dev Program</li>
                <li class="nav">Companies</li>
                <li class="nav">Faq</li>
                <li class="nav">Blog</li>
            </ul>
        </nav>
       
        <section id="intro">
           <h2 class="header">What is Zuitt?</h2>
           <p>Zuitt is the #1 Philippine-based startup offering web development coding bootcamps in Manila. Thanks to our rapid growth, we can now help over 1,000 Filipinos learn web development with our every year. We also equip them with the job hunting skills needed to get hired as Software Engineers.Our secret to success is our belief that Filipinos can do much more with affordable and quality education. If you invest in your education, you can be in the best position to achieve the life you’ve always wanted for yourself and your family.</p>
           <div>
               <button>Apply Now</button>
           </div>
        </section>

        <section id="succeed-info">
            <h2 class="header">Succeed With Zuitt</h2>
            <div>
                <div class="card">
                   <h3>Beginner Friendly</h3>
                   <p>Experienced instructors will guide you from the ultimate beginner’s lesson to your final dynamic website, via a live online instruction with passionate peers and one-on-one Q&A.</p>
                </div>
                <div class="card">
                   <h3>Study Now, Pay Later</h3>
                   <p>We’re confident in your ability to get your dream career after the training. You don’t have to pay for the program while you’re still learning.</p>
                </div>
                <div class="card">
                   <h3>Just 4/6 Months</h3>
                   <p>Join our 4 Month Day Class for completely immersed and dedicated learning, or our 6 Month Night Class so you can learn even while working.</p>
                </div>
            </div>
        </section>

        <section id="pre-footer">
            <div>
               <h3>About Us</h3>
               <p>History</p>
               <p>Mission & Vision</p>
               <p>Founders</p>
               <p>Branches</p>
            </div>
            <div>
               <h3>Careers</h3>
               <p>Junior Developer</p>
               <p>Marketing Associate</p>
               <p>Legal Staff</p>
               <p>Junior Accountant</p>
            </div>
            <div>
               <h3>Follow Us</h3>
               <p>Facebook</p>
               <p>LinkedIn</p>
            </div>
            <div>
               <h3>Contact Us</h3>
               <p>(02) 8 282 9520</p>
               <p>0917 166 8714 (Globe), 0932 868 8713 (Smart)</p>
               <p>helpdesk@zuitt.co</p>
            </div>
        </section>

        <footer>
            <!-- Creates an inline element -->
            <span>Terms of Service</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>&copy; 2017-2019 Zuitt. All Rights Reserved</span>
        </footer>

    </body>
</html>
```

**IMPORTANT NOTE:**
- Provide the students with the HTML file for the discussion.

3. Add a link tag to connect to Google Fonts to use in the styling of the application.

**batchfolder > groupwork > s11 > discussion > index.html**

```html
<!DOCTYPE html>
<html>
    <head>

        <title>CSS Box Model and Flexbox Layouting</title>

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="./index.css">

    </head>
    <body>

        <!-- ... -->
        
    </body>
</html>
```

**IMPORTANT NOTE:**
- The Google Font used for this discussion is the "Open Sans Regular 400".
- Refer to "references" section of this file to find the documentation for Open Sans in Google Fonts.
- In order to add this style, find the documentation for Open Sans in Google Fonts. Browse the styles available and look for the "Regular 400" font and click on the "+ Select this style". A side navbar will appear with the HTML code snippet provided in it.

4. Add a CSS rule to change the font of the application.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*Google Font*/
body {
    font-family: 'Open Sans', sans-serif;
}
```

5. Add the CSS Reset Rule.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /*...*/
}
```

**IMPORTANT NOTE:**
- Every HTML element is considered as a box. Even other objects that are not rectangular/square in shape has an invisible box that is used to layout elements.
- You may open the google chrome browser console and demonstrate this using the following:
    Linux and Windows = Google Chrome Browser > Ctrl + Shift + i (Console) > Ctrl + Shift + c (Inspect Tool)
    Mac = Google Chrome Browser > Ctrl + Shift + i  (Console) > Cmd + Shift + c (Inspect Tool)
- After selecting the inspect tool, hover over the zuitt logo or the rounded button to view it's box model dimensions. The Inspect tool is located in the browser console with an icon of a square with a moust arrow.
- The colors shown on the screen are respective to the colors shown on the CSS Box Model displayed in the Google Chrome Browser (Scroll down on the console to view).
- Refer to "references" section of this file to find the CSS Box Model Diagram.
- The Google Chrome Browser console may also be used to change the style of HTML elements for a quicker view of changes instead of adding them directly to code.
- The "margin" property changes the amount of space between the "border" and it's surrounding elements. This is commonly used to create space between elements.
- Even though a "border" property of an element does not have a value and is not visible in the browser, it serves as a basis to create space between elements.
- The "padding" property changes the amount of space between the "border" and "content" of an element. This is commonly used to position contents of an element.
- All HTML elements have default values for their "margin" and "padding" properties. Giving them the value of "0" makes it easier for us to manipulate the sizes and positioning of elements.
- The "box-sizing" property defines how the width and height of an element are calculated.
. This will allow us to control the measurements of elements better.
- The value "border-box" includes the "padding" and "border" properties of an element to the total height and width in it's computation.
- This can be translated to "The total width/height of an element is (num) WHICH INCLUDES the padding and border." as opposed to it's initial context of "The total width/height of an element is (num) PLUS the padding and the border."
- A practical example of this will be provided in the next step.

6. Create a "box-sizing.html" file and demonstrate the effects of the box-sizing property.

**batchfolder > groupwork > s11 > discussion > box-sizing.html**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Box Sizing Demo</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #box {
            height: 150px;
            width: 150px;
            padding: 50px;
            border: 1px solid black;
            background-color: orange;
        }

        /*Without border-box*/
        /*Border and padding is added on top of width*/
        /*1px border + 50px left padding + 150px width + 50px right padding + 1px border = 252px*/

        /*With border-box*/
        /*Border and padding is included in the total width*/
        /*1px border + 50px left padding + 48px width + 50px right padding + 1px border = 150px*/

    </style>

</head>
<body>

    <div id="box">Hello</div>

</body>
</html>
```

**IMPORTANT NOTE:**
- You may comment and uncomment the box-sizing property to demonstrate how it works.
- You may also open the google chrome browser console and check these computed values using the following:
    Linux and Windows = Google Chrome Browser > Ctrl + Shift + i (Console) > Ctrl + Shift + c (Inspect Tool)
    Mac = Google Chrome Browser > Ctrl + Shift + i  (Console) > Cmd + Shift + c (Inspect Tool)
- After selecting the inspect tool, hover over the div element to view it's box model dimensions (Scroll down on the console to view).
- Alternatively, you can comment and uncomment both the "box-sizing" and the "padding" properties at the same time to demonstrate their similarities in size.

7. Add the a CSS rule for the nav tag.

**batchfolder > groupwork > s11 > discussion > index.css**
```css
/*...*/

body {
    /*...*/
}

nav {
    /*shorthand property*/
    /*Applied padding to all sides*/
    /*Value is 12.8 pixels based on the root element*/
    /*Creates space from between the ul tag and the nav element*/
    padding: 0.8rem;
    /*properties that make up the "padding" property*/
    /*padding-top: 0.8rem;
    padding-right: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 0.8rem;*/
    /*creates space between the nav and the intro section*/
    margin-bottom: 2rem;
    border-bottom: 1px solid gray;
    list-style-type: none;
}

/*margin vs padding*/
/*margin is best used when creating space between elements.*/
/*padding is best used when creating space between an element's border and it's content.*/
```

**IMPORTANT NOTE:**
- The "padding" property is the shorthand for the "padding-top", "padding-right", "padding-bottom" and "padding-left" properties.
- The value "0.8rem" is applied to all sides since only one value is provided in the padding property. The actual value is 12.8px which is based on the 16px default size of the root element.
- This creates space from the ul tag inside the nav element to it's border.
- Up to four values can be provided in the shorthand property corresponding to the top, right, bottom and left spaces respectively.
- If two values are provided it corresponds to the top/bottom and left/right spaces respectively. Three values correspond to top, left/right and bottom spaces respectively.
- Using short hand properties follows the DRY principle (Don't Repeat Yourself). This is a good example shown above since the values of all four spaces are all the same. 
- The "margin-bottom" property only changes the space at the bottom of the element. This is good for instances where a single space is needed to be changed.
- This creates space between the nav and the intro sections.

8. Add the a CSS rule for the nav and the nav-logo classes.

### Add an ordered list.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

nav {
    /*...*/
}

nav .nav, nav .nav-logo {
    margin: 0.5rem;
    /*margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;*/
    /*changes elements to inline elements*/
    display: inline;
}
```

**IMPORTANT NOTE:**
- The "margin" property is the shorthand for the "margin-top", "margin-right", "margin-bottom" and "margin-left" properties.
- It works similarly to the "padding" property.
- This creates space between the ul tag inside the nav element.
- The "inline" property changes the li elements into inline elements. 
- By default li elements are block elements. This makes all the list items appear beside one another.

9. Add the a CSS rule for the section tag with the id of "intro".

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

nav .nav, nav .nav-logo {
    /*...*/
}

/*intro section*/
#intro {
    /*creates space between the contents of the intro section and the it's border*/
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2rem;
    padding-bottom: 3rem;
    /*shorthand property*/
    /*padding: 2rem 10% 3rem;*/
    text-align: center;
}
```

**IMPORTANT NOTE:**
- The "padding-left", "padding-right", "padding-top" and "padding-bottom" may be used in this situation since the values are different. Though the code block is longer, this benefits us because the code is easier to read.
- The value "10%" is used to make the page responsive to the screen size. It generates it's value based on the parent element which is the body tag, which spans the whole width of the page.
- This creates a space from the edges of the page horizontally and from the navbar and the next section.
- The "padding" property is used and not the "margin" property because we are manipulating the h2 and p tags to align properly. We are changing the layout of the contents and not it's relation to the surrounding elements.
- The shorthand "padding" property may also be used.

10. Add the a CSS rule for the h2 tags with the header class.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

/*intro section*/
#intro {
    /*...*/
}

.header {
    /*best used when horizontally aligning text instead of using margin and padding*/
    text-align: center;
}
```

**IMPORTANT NOTE:**
- Even though we have access to the "padding" and "margin" properties when centering text horizontally, the "text-align" property is still better to use. Manipulating the "padding" and "margin" might affect non-text HTML tags to be added in the future which would return unexpected results.

11. Add the a CSS rule for the h2 and p tags in the intro section.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

.header {
    /*...*/
}

#intro h2, #intro p {
    /*creates space between the contents of the intro section*/
    margin-bottom: 1rem;
}
```

**IMPORTANT NOTE:**
- The "margin-bottom" property is used here to create space between the h2 and p tags in the intro section.
- One space may be changed instead of the top and bottom margins to remove unnecessary confusion between margins of different elements.

12. Add the a CSS rule for the button tag in the intro section.

**batchfolder > groupwork > s1 > discussion > index.css**

```css
/*...*/

#intro h2, #intro p {
    /*...*/
}

#intro button {
    color: white;
    /*changes the thickness of text*/
    font-weight: bold;
    background-color: #c2195b;
    border-radius: 25px;
    font-size: 1rem;
    /*creates space between the button text and the border*/
    padding: 1rem;
}
```

**IMPORTANT NOTE:**
- The selector used is a descendant selector even though there is only one button present in the page. This is also appropriate because it helps in code readability telling the developer that the button is located in the intro section.
- The "font-weight" property changes the thickness of text.
- The "padding" property is used here because we want to make the button larger by creating space from the text content to the borders of the button and not it's relation to any other element.

13. Add the a CSS rule for the section tag with the id of "succeed-info".

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

#intro button {
    /*...*/
}

/*succeed info section*/
/*exact same properties as the intro section but can have it's own CSS rule for flexibility.*/
#succeed-info {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2rem;
    padding-bottom: 3rem;
}
```

**IMPORTANT NOTE:**
- The properties of the succeed info section is exactly the same as the intro section. This may be unnecessary because it's a duplicate of the code block targeting a different element. However in the context of a larger application where there are hundreds or thousands of lines of code, this might be a good approach to make the element isolated for future changes.
- Alternatively, you may just add the id name after along with the CSS rule for the intro section.

14. Add the a CSS rule for the h2 tag in the succeed info section.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

#succeed-info {
    /*...*/
}

#succeed-info h2 {
    /*creates space between the header and the card section*/
    margin-bottom: 1rem;
}
```

**IMPORTANT NOTE:**
- The "margin-bottom" property creates space between the header and the card section.

15. Add the a CSS rule for the h3 tags in the succeed info section.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

#succeed-info h2 {
    /*...*/
}

#succeed-info h3 {
    text-align: center;
    margin-bottom: 1rem;
}
```

16. Add the a CSS rule for the div tags with the card class.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

#succeed-info h3 {
    /*...*/
}

#succeed-info .card{
    /*allows the cards to appear beside each other*/
    display: inline-block;
    /*aligns elements with the tallest element in line*/
    /*used with the "inline-block" value*/
    vertical-align: top;
    /*allows for cards to have equal height that adjust with the content*/
    min-height: 175px;
    /*measurement is based on equally dividing the parent container's width*/
    /*only use 30% and not 33.33% because of margin to avoid overflow and horizontal scrolling*/
    width: 30%;
    /*creates horizontal spacing between cards*/
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
```

**IMPORTANT NOTE:**
- The value "inline-block" was applied to the div tags containing the h3 and paragraph tags because we want all 3 card components to appear beside each other.
- You can think of the h3 tags as the headers and the paragraph tags as the content of a "card" which mirrors a real world card caontaining a short descriptive information about a topic.
- The "vertical-align" property changes the vertical alignment of an element.
- The value "top" aligns all elements at the top of the tallest element in the line or in the div property. This is used along with the "inline-block" value to achieve vertically aligned elements. Since the text of the "Beginner Friendly" card is longer it has a taller height compared to the other two cards.
- The "min-height" property is used to define a minimum height for the elements. Unlike the "height" property which is a fixed value, this property allows the element to adjust it's height when the content exceeds it. It doesn't affect the cards. Though it's good practice to assign a min-height property when layouting elements side by side. This prevents inconsistent layouting when other elements are added to the bottom of the container.
- The "width" property uses the "%" value which divides the whole width of the container into 3 parts because we are horizontally aligning 3 components. We don't use the value of "33.33%" which divides the whole width exactly into 3 parts. This is because we are adding margins on the left and right hand sides of the cards. Doing so will push any element that will not fit in the container below, or sometimes this can cause horizontal scrolling.

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [CSS Inline Block](https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/)
- [CSS Vertical Align](https://cssreference.io/property/vertical-align/)
- [CSS Universal Selector](https://www.w3schools.com/cssref/sel_all.php)

## Activity:

**Member 1:**

1. In your sessions folder, in the s08 folder, copy the contents of the discussion folder as a new folder called “activity”.
- Update your local groupwork git repository and push to git with the commit message of Add template code s08.
2. Add a CSS rule for the pre-footer section to create space for the content, change the background and text color.
    - Add at least 1rem of padding to the pre-footer section.
    - Add a white text color.
    - Add a background color with the hex color: #002540.

**Member 2:**

3. Add a selector and a CSS rule set for the div elements inside the pre-footer section to align the elements horizontally but still be allowed to define its width or height.
    - Define the width of each div as 20%

**Member 3:**

4. Add a selector and CSS rule set for all of the elements inside the div element inside the pre-footer section:
    - Add a margin of .3 rem at the top and bottom.
    - Note: You can add classes to elements or use child selectors.

**Member 4:**

5. Add a selector and a CSS rule set for footer element.
    - Add a padding of at least .7rem

**Member 5:**

6. Add a selector and a CSS rule set for all span elements inside the footer element:
    - Add margin of .5 rem at the left and right of each element.
    - Note: You can add classes to elements or use child selectors.

**All Members:**

7. Check out to your own git branch with git checkout -b <branchName>
8. Update your local groupwork git repository and push to git with the commit message of Add activity code s11.
9 .Add the link in Boodle for s11.

# Solution:

1. Add a CSS rule for the section tag with the id "pre-footer".

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

.card{
    /*...*/
}

/*pre-footer*/
#pre-footer {
    /*creates space between the div tags and the pre-footer border*/
    padding: 1rem;
    background-color: #002540;
    /*allows for readability and color contrasting with dark background*/
    color: white;
}
```

**IMPORTANT NOTE:**
- The activity will be a continuation of the discussion file.
- The "padding" property creates space from the border of the pre-footer section and it's div tag contents.
- Provide the students with the hex value of the "background-color" property.
- Change the color of the text to white to achieve color contrasting between the backround and the text for readability.
 
2. Add a CSS rule for the div tags in the pre-footer section.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

/*pre-footer*/
#pre-footer {
    /*...*/
}

#pre-footer > div {
    /*allows the div elements to appear beside each other.*/
    display: inline-block;
    /*makes longer text wrap around (phone numbers)*/
    width: 20%;
}
```

**IMPORTANT NOTE:**
- The "display" property will make the different sub-sections of the pre-footer appear beside each other.
- The "width" property will make it so all sub-sections will have equal dimensions and make long texts wrap around the container such as the case for the phone numbers.

3. Add a CSS rule for the all the tags inside the div tags in the pre-footer section.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

#pre-footer > div {
    /*...*/
}

#pre-footer > div > * {
    /*creates space vertically between all the text elements in the pre-footer*/
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    /*margin: 0.3rem;*/
}
```

**IMPORTANT NOTE:**
- The "margin-top" and "margin bottom" properties will create space between all text tags (h3 and paragraph tags) vertically.
- The shorthand "margin" property may also be used to achieve this.

4. Add the a CSS rule for the footer tag.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

.card {
    /*...*/
}

/*footer*/
footer {
    /*creates space between the span tags and the footer border*/
    padding: 0.7rem;
}
```

**IMPORTANT NOTE:**
- The "padding" property here is used to create space between the border of the box and the content which are the span tags.
- By default, span tags create an inline element that makes the footer elements appear beside each other. This does not require us to change the "display" property of the footer.

4. Add the a CSS rule for the span tags in the footer.

**batchfolder > groupwork > s11 > discussion > index.css**

```css
/*...*/

            /*footer*/
            footer {
                /*...*/
            }

            footer span {
                margin-left: 0.5rem;
                margin-right: 0.5rem;
                /*margin: 0 0.5rem;*/
            }
```

**IMPORTANT NOTE:**
- The "margin-left" and "margin-right" creates space horizontally between the span tags.
- Unlike vertical margin where we sometimes only assign a top or a bottom margin only, it's good practice to add margins on both sides horizonally for equal measurement.
- The shorthand "margin" property may also be used providing a "0" value to the top and bottom spaces to achieve this.