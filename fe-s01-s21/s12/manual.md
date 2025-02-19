# CSS Styling Properties and Positioning

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

1. Create a folder named **s12**, a folder named **discussion** inside the **s12** folder, then a file named **miniactivity.html** and **miniactivity.css** inside the **discussion** folder.

Miniactivity instructions:
Inside **miniactivity.css**, perform the following layout
- use the universal selector to implement CSS reset
- in #box1, make the dimensions 50px * 50px, 10 px for padding on all sides, and 20px margin on all sides as well
- in #box2, change the box-sizing into content-box, make the dimensions 140px * 140px, 20px of padding, and margin of 30px
**Reminder:** use maximum of 5 minutes for the students to finish the activity, then discuss the solution
```css
/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Specific Styling for Each Box */
#box1 {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-color: red;
    margin: 20px;
}

#box2 {
    box-sizing: content-box;
    width: 100px;
    height: 100px;
    padding: 20px;
    border-color: blue;
    margin: 30px;
}
```

**IMPORTANT NOTE:**
- Give 5 minutes maximum for the students to finish the activity
- Give commendation to the students after the miniactivity solution is discussed
- Use this as review and springboard going to the next session

# Code Discussion

1. Folder and File Preparation

**batchfolder > individual > s12 > discussion > index.html**

Create a file named **index.html** inside the **discussion** folder.

2. Inside the index.html file, add the following:

**batchfolder > individual > s12 > discussion > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
       <title>CSS Common Styling Properties</title>
    </head>
    <body>
    </body>
</html>
```

3. Add the following to our index.html to demonstrate the use of display property:

### Styling Properties
### Display

The Display property specifies the display behavior (the type of rendering box) of an element.

The display takes on many different values, but these are most commonly used.
- Block
- Inline
- Inline-block
- None

Let's briefly review inline and block elements.

### What are inline elements?

Inline elements in HTML are elements that are by default displayed within a line of text, alongside other inline elements or within a larger block-level container. They do not start on a new line and only take up as much space as their content requires.

Inline elements can be styled using CSS properties such as color, font-size, and text-decoration. However, they cannot have width or height applied to them directly, and margins and paddings will only affect their surrounding content, not the element itself.

Some common examples of inline elements include span, a, strong, em, and img. 

### What are block elements?

Block elements in HTML are elements that start on a new line and occupy the full width available within their parent container by default. They create a distinct block of content and often represent structural elements such as paragraphs, headings, divs, lists, and so on.

Block elements can have width, height, margins, paddings, and other CSS properties applied to them. They can also contain other block-level and inline elements. By default, block elements will create a line break before and after themselves, separating their content from the surrounding elements.

Unlike inline elements, block elements take up the full width available within their parent container and can have their own dimensions and positioning. They are often used for creating the main structure and layout of a webpage.

Some common examples of block elements include div, p, h1 to h6, ul, ol, and li. 

### Display: Inline vs Block

So, what's the difference? Let's demonstrate the difference between the two, briefly. We can actually change whether an element is inline or block using CSS:

## Add the following to our **index.html** to demonstrate the use of **display** property:

**batchfolder > individual > s12 > discussion > index.html**

```html
<!-- ... -->
<h1>CSS Common Styling</h1>

<!-- Display Property Discussion -->
<h2>Display</h2>
<h4>Display: Inline vs Block</h4>

<!-- You can change the default display properties of elements through the display property in CSS. -->
<div id="div-3">A div can be displayed as inline.</div>
<div id="div-4">A div can be displayed as inline.</div>
<span id="span-3">A span can be displayed as block.</span>
<span id="span-4">A span can be displayed as block.</span>
```

## Add the following rules sets to our **index.css**:

**batchfolder > individual > s12 > discussion > index.css**

```html
/*...*/

#div-3 {
    background-color: skyblue;
    border: 2px solid black;
    height: 200px;
    width: 200px;
}

#div-4 {
    background-color: aquamarine;
    border: 2px solid black;
    height: 200px;
    width: 200px;
}

#span-3 {
    background-color: gray;
    border: 2px solid black;
}

#span-4 {
    background-color: brown;
    border: 2px solid black;
}
```

**IMPORTANT NOTE:**
- You can change elements as either block or inline. To do this, we can update the display properties of elements via CSS.

## Display the divs (which are block elements) as inline. Update the css ruleset and add display:inline; property.

**batchfolder > individual > s12 > discussion > index.css**

```css
/*...*/

#div-3 {
    background-color: skyblue;
    border: 2px solid black;
    height: 200px;
    width: 200px;
    display: inline;
}

#div-4 {
    background-color: aquamarine;
    border: 2px solid black;
    height: 200px;
    width: 200px;
    display: inline;
}
```

**IMPORTANT NOTE:**
- You can now see the divs beside each other as they are now displayed as inline elements. The divs now lose their defined height and width as they are now displayed as inline elements.
- We can then do vise-versa to our span elements in the next step.

## Add display:block; to our css rulesets for the spans.

**batchfolder > individual > s12 > discussion > index.css**

```css
/*...*/

#span-3 {
    background-color: gray;
    border: 2px solid black;
    display: block;
}

#span-4 {
    background-color: brown;
    border: 2px solid black;
    display: block;
}
```

**IMPORTANT NOTE:**
- The span elements now occupy the full length of their parent/the page as they are now block elements. They also are stacked on top of each other.

## Define the height and width of the span elements.

**batchfolder > individual > s12 > discussion > index.css**

```css
/*...*/

#span-3 {
    background-color: gray;
    border: 2px solid black;
    display: block;
    height: 200px;
    width: 200px;
}

#span-4 {
    background-color: brown;
    border: 2px solid black;
    display: block;
    height: 200px;
    width: 200px;
}
```

### Display: Inline-Block
There is a way to combine both, where elements can be displayed side by side but still be able to define its height and width.

## Add the following to index.html and index.css to demonstrate the use of inline-block.

**batchfolder > individual > s12 > discussion > index.html**

```html
<h3>Display: Inline-Block</h3>
<span id="span-5" class="d-inline-block">Span-Inline-Block-1</span>
<span id="span-6" class="d-inline-block">Span-Inline-Block-2</span>
```

**batchfolder > individual > s12 > discussion > index.css**

```css
#span-5 {
    background-color: yellow;
    border: 2px solid black;
}

#span-6 {
    background-color: orange;
    border: 2px solid black;
}
```

## Add display:inline-block; and height and width.

**batchfolder > individual > s12 > discussion > index.css**

```css
#span-5 {
    background-color: yellow;
    border: 2px solid black;
    display: inline-block;
    height: 300px;
    width: 300px;
}

#span-6 {
    background-color: orange;
    border: 2px solid black;
    display: inline-block;
    height: 300px;
    width: 300px;
}
```

**IMPORTANT NOTE:**
- You can see that the span elements are still side by side but we can now define its height and width.

## Add the following to index.html and index.css to demonstrate the use of inline-block to div elements which are block elements by default.

**batchfolder > individual > s12 > discussion > index.html**

```html
<h3>Display: Inline-Block</h3>
<!-- Inline-block can sit on the same line and combines block and inline properties -->
<!-- This means that inline block elements allow us to sit elements in the same line and yet still be able to add width and height properties. -->
<span id="span-5">Span-Inline-Block-1</span>
<span id="span-6">Span-Inline-Block-2</span>
<div id="div-5">Div-Inline-Block-1</div>
<div id="div-6">Div-Inline-Block-2</div>
```

**batchfolder > individual > s12 > discussion > index.css**

```css
#div-5 {
    background-color: pink;
    border: 2px solid black;
    display: inline-block;
    height: 300px;
    width: 300px;
}

#div-6 {
    background-color: violet;
    border: 2px solid black;
    display: inline-block;
    height: 300px;
    width: 300px;
}
```

**IMPORTANT NOTE:**
- We can now see our divs, displayed instead side by side like inline elements, but still be able to add height and width like block elements.
- Summary:
    - display:inline; allows us to display an element as inline. Which means that the element will be displayed side by side. However, we cannot change its dimensions and margin top and bottom.
    - display:block; allows us to display an element as block. Which means that by default, the element occupies the whole width of the page or its parent and we can change the margins and dimensions of the element. However, the elements are displayed on top of one another.
    - display:inline-block; is like the combination of both wherein we can display elements side by side and still be a able to change its dimensions.

4. Demonstrate the use of the display property to hide an element and not show it visually.

## Add a few more elements to the HTML file:

**batchfolder > individual > s12 > discussion > index.html**

```html
<!-- ... -->
<div id="div-7">Divs are block by default.</div>
<div id="div-8">Divs are block by default. Adding display:none; property in a css ruleset hides an element.</div>
<span id="span-7">This is the fifth span.</span>
```

## Hide the div-8 element by adding display:none; to the ruleset.

**batchfolder > individual > s12 > discussion > index.css**

```css
#div-8 {
    background-color: lightcyan;
    border: 2px solid black;
    display: none;
}
```

**IMPORTANT NOTE:**
- In the example, we will then see that the div-8 has been hidden and not displayed at all. We can add this to any element we want to hide.

## Hide the span-7 element.

**batchfolder > individual > s12 > discussion > index.css**

```css
#span-7 {
    background-color: lightgreen;
    border: 2px solid black;
    display: none;
}
```

**IMPORTANT NOTE:**
- There are other display property values like flex, but that will be discussed in the bootstrap sessions.

5. Add the following code to show the output and the difference between px and % in index.html:

**batchfolder > individual > s12 > discussion > index.html**

```html  
<hr>

<h3>CSS Units</h3>

<h4>px vs %</h4>
<div class="box fifty-percent">50%</div>
<div class="box one-hundred-pixels">100px</div>

<br>

<div class="parent">
    <div class="box fifty-percent">50%</div>
    <div class="box one-hundred-pixels">100px</div>
</div>
```

**batchfolder > individual > s12 > discussion > index.css**

```css
.box {
    background-color: red;
    border: 1px solid black;
    margin: 5px;
}

.fifty-percent {
    width:  50%;
}

.one-hundred-pixels {
    width:  100px;
}

.parent {
    width: 135px;
    border: 2px solid navy;
}
```

**IMPORTANT NOTE:**
- Percentage units are often useful to set the width of margins. Percentage represents a percentage of the parent element. Meaning width:50%; allows us to apply width to an element that is equal to 50% of the parent's width.
- **Viewports Units**
    - **VW**: Relative to the viewport’s width
        - 1 VW = 1% of the viewport’s width
        - 50 VW = 50% of the viewport’s width
    - **VH**: Relative to the viewport’s height
        - 1 VH = 1% of the viewport’s height
        - 50 VH = 50% of the viewport’s height

## Add an example for vw and vh in **index.html**:

**batchfolder > individual > s12 > discussion > index.html**

```html  
<div class="box fifty-vw">50vw</div>
<div class="box twenty-five-vh">25vh</div>

<div class="parent">
    /…/
        <div class="box fifty-vw">50vw</div>
        <div class="box twenty-five-vh">25vh</div>
</div>
```

**batchfolder > individual > s12 > discussion > index.css**

index.css:
```css
.fifty-vw {
    width: 50vw;
}

.twenty-five-vh {
    height: 25vh;
}
```

**IMPORTANT NOTE:**
- **VW** is useful for creating full-width elements (100%) that fill up the entire viewport’s width. Of course, you can use any percentage of the viewport’s width to achieve other goals, such as 50% for half the width, etc.
- **VH** is useful for creating full-height elements (100%) that fill up the entire viewport’s height. Of course, you can use any percentage of the viewport’s height to achieve other goals, such as 50% for half the height, etc.

6. Add the code inside index.html to demonstrate the difference between EM and REM.

**batchfolder > individual > s12 > discussion > index.html**

```html  
<div>16px</div>
<div class="one-rem">1rem</div>
<div class="one-em">1em</div>
<div class="two-rem">2rem</div>
<div class="two-em">2em</div>


<div class="parent">
    <div class="one-rem">1rem</div>
    <div class="one-em">1em</div>
    <div class="two-rem">2rem</div>
    <div class="two-em">2em</div>

<!--...-->
        
</div>
```

**batchfolder > individual > s12 > discussion > index.css**

```css
.one-rem {
    font-size: 1rem;
}

.one-em {
    font-size: 1em;
}

.two-rem {
    font-size: 2rem;
}

.two-em {
    font-size: 2em;
}

//add font-size in parent element

.parent {
    width: 135px;
    border: 2px solid navy;
    font-size: 30px;
}
```

**IMPORTANT NOTE:**
- They differ based on inheritance. REM is based on the root element (HTML). Every child element that uses REM will then use the HTML root size as its calculation point, regardless of whether or not a parent element has any different sizes specified.
- EM on the other hand, is based on the font size of the parent element. If a parent element has a different size than the root element, the EM calculation will be based off of the parent element, and not the root element. 

## Percentage (%) can also be used in font-size and it will be the same with EM in **index.html**:

**batchfolder > individual > s12 > discussion > index.html**

```html  
<div class="two-hundred-percent">200%</div>

<div class="parent">
<!--...-->
    <div class="two-em">2em</div>
    <div class="two-hundred-percent">200%</div>
<!--...-->
        
</div>
```

**batchfolder > individual > s12 > discussion > index.css**

```css

.two-hundred-percent {
    font-size: 200%;
}

```

**IMPORTANT NOTE:**
- % is also based on the parent element.

7. Add a section with a class name background in **index.html** to demonstrate the use of the background property.

## Background Property

**background-color** - can change the color background. It can takes #hex value or an rgb value.

**batchfolder > individual > s12 > discussion > index.html**

```html  
<hr>

<section class="background">
    <h3>CSS Background Properties</h3>
</section>
```

**batchfolder > individual > s12 > discussion > index.css**

```css

/*CSS Background Properties*/
.background {
    min-height: 20rem;
    background-color: gray;
    /*you can also use #808080 or rgb(128,128,128)*/
}

```

### background-image: url(URI)

- Takes on the path to your image.
- **if the image is in the same folder:**
    -  To go down one folder, simply type the file name before the image.png. Example: css/image.png.
    -  To go up one folder, type the file name with “../”. 
    Example: ../css/image.png

### Comment out the background-color and add background-image. Provide a sample image link.

**batchfolder > individual > s12 > discussion > index.css**

```css
background {
    min-height: 100vh;
    /*background-color: gray;*/
    background-image: url(https://c4.wallpaperflare.com/wallpaper/43/1003/707/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg);
}
```

### background-repeat property
- Whether you would like the background to repeat if the width exceeds the background size. Other values are repeat, repeat-x and repeat-y.

**batchfolder > individual > s12 > discussion > index.css**

```css
.background {
    min-height: 20rem;
    /*background-color: gray;*/
    background-image: url
(https://cutewallpaper.org/22/your-name-aesthetic-desktop-wallpapers/2954230375.jpg);
    background-repeat : no-repeat;
}
```

**IMPORTANT NOTE:**
- try different values for background-repeat to see the difference with the output.
Value: repeat, no-repeat, repeat-x, repeat-y, space, round

### background-size property
- Specifies the size of the background images.
- There are four different syntaxes you can use with this property: the keyword syntax ("auto", "cover" and "contain").
- The size can also have a number value(500px or 60% 70%)
    - The one-value syntax (sets the width of the image (height becomes "auto").
    - The two-value syntax (first value: width of the image, second value: height).

### Add background-size property:

**batchfolder > individual > s12 > discussion > index.css**

```css
.background {
    min-height: 20rem;
    /*background-color: gray;*/
    background-image: url
(https://cutewallpaper.org/22/your-name-aesthetic-desktop-wallpapers/2954230375.jpg);
    background-repeat : no-repeat;
    background-size: 50%;
}
```

**IMPORTANT NOTE:**
- Try different values: auto, contain, cover, 100%, 60px, 30px

### background-position property
- position of the background relative to the HTML element. 
- Two values are needed here, X and Y, where X is the amount of offset from the left and Y is the amount of offset from the top. Takes on either unit values (as with width and height) or left,center,right and top,center,bottom for left and right respectively.
 
### Add background position:

**batchfolder > individual > s12 > discussion > index.css**

```css
.background {
    min-height: 20rem;
    /*background-color: gray;*/
    background-image: url
(https://cutewallpaper.org/22/your-name-aesthetic-desktop-wallpapers/2954230375.jpg);
    background-repeat : no-repeat;
    background-size: 50%;
    background-position: center top;
}
```

**IMPORTANT NOTE:**
- Try different values: 10% 40%, 50px 100px, left bottom

### background-attachment property

- Sets whether a background image scrolls with the rest of the page or is fixed.

### Add the code to demonstrate the background-attachment property

**batchfolder > individual > s12 > discussion > index.css**

```css
.background {
    min-height: 20rem;
    /*background-color: gray;*/
    background-image: url
(https://cutewallpaper.org/22/your-name-aesthetic-desktop-wallpapers/2954230375.jpg);
    background-repeat : no-repeat;
/*change to 100%*/
    background-size: 100%; 
    background-position: center top;
/*try different value: fixed */
    background-attachment: scroll;
}
```

### Add styling in other elements to demonstrate more uses of the background properties

**batchfolder > individual > s12 > discussion > index.html**
```html
<section class="background">
    <div class="container-bg">
        <h3 class="bg-title">CSS Background Properties</h3>
    </div>
</section>
```

**batchfolder > individual > s12 > discussion > index.css**
```css
.bg-title{
    color: white;
    text-align: center;
    font-size: 5em;
    margin: 0;//to rid the space around the element
    line-height: 35rem;
}


.container-bg {
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 100vh;
}
```

**IMPORTANT NOTE:**
- background-color can also be used along with background-image. rgba is used with opacity of 0.5
- min-height defines the minimum height of an element

# Activity:

Instructions that can be provided to the students for reference:

## Activity References:
- [CSS Inline vs Block vs Inline Block](https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/)
- [CSS Background Image](https://www.w3schools.com/cssref/pr_background-image.php)
- [CSS Background Size](https://www.w3schools.com/cssref/css3_pr_background-size.php)
- [CSS Background Position](https://www.w3schools.com/cssref/pr_background-position.php)
- [CSS Background Repeat](https://www.w3schools.com/cssref/pr_background-repeat.php)
- [CSS Units](https://www.w3schools.com/cssref/css_units.php)

## Activity:

**Member 1:**

1. In the sessions/frontend folder, In the s09 folder, create an activity folder.
    - Copy the template provided by your Instructor and paste it in the in the index.html file.
    - Update your local groupwork git repository and push to git with the commit message of Add template code s12
2. Create an index.css file
3. Add a CSS Reset.
4. Add google font family for all elements.
    - Don’t use Arial or Times New Roman

**Member 2:**

5. Add different google font family for all headings.
    - Don’t use Arial or Times New Roman
6. Select and add a CSS ruleset for the nav element:
    - Add at least 5px padding on all sides.
    - Center all text within the nav element.
    - Add your own background color.

**Member 3:**

7. Select and target the li elements inside the nav element:
    - Add a CSS property which displays the element side by side but still be able to add width and height.
    - Remove text decoration
    - Add .5 rem margin on all sides.
    - Add 3px padding on all sides.
8. Select the element with id “landing” and add background image and properties:
    - Add a background image. Use an online hosted image.
    - Set the background position to center.
    - Set the background size to cover.
    - Set the background to avoid background repeat.
    - Align the text to center.
    - Set the height to 50% of the viewport height.
    - Set text color to white.

**Member 4:**

9. Select the element h1 inside the landing element:
    - Add a padding at the top.
    - Increase the font size to 3rem.
10. Select the element h3 inside the landing element:   
    - Add a 1rem margin on all sides.
11. Select the button inside the landing element:
    - Add at least .5rem as padding on all sides.
    - Add a background color.
    - Add at least a 2px solid border. Add your own color.
    - Add a border-radius.

**Member 5:**

12. Select the element with id “hot”:
    - Align the text to center.
13. Select the element h2 inside the “hot” element: 
    - Add a margin on top and bottom sides.
14. Select the li elements inside the  “hot” element:
    - Add a CSS property which displays the element side by side but still be able to add width and height.
    - Remove text decoration
    - Add at least a 2px solid border. Add your own color.
    - Add a border-radius.
    - Add 3rem padding on all sides.
    - Add .5rem margins on the left and right sides.

**All Members:**

15. Check out to your own git branch with git checkout -b <branchName>
16. Update your local groupwork git repository and push to git with the commit message of Add activity code s12.
17. Add the sessions repo link in Boodle for s12.

# Solution:

1. Provide the HTML template.

**batchfolder > groupwork > s12 > discussion > index.html**

```html
<!DOCTYPE HTML>
<html>
    <head>
        <title>Activity CSS Styling Properties</title>

        <!-- External CSS -->
        <link rel="stylesheet" href="./index.css"/>

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat:wght@400&display=swap" rel="stylesheet">
    </head>
    <body>

        <nav>
            <ul id="navMenu">
                <li class="nav-link" href="#">Home</li>
                <li class="nav-link" href="#">Products</li>
                <li class="nav-link" href="#">Cart</li>
                <li class="nav-link" href="#">Orders</li>
            </ul>
        </nav>


        <!-- landing page -->
        <section id="landing">
            <h1>Welcome to our E-Commerce Website!</h1>
            <h3>Affordable Products for Everyone, Everywhere!</h3>
            <button>Check out our Latest Products!</button>
        </section>
        <!-- end of landing page -->

        <section id="hot">
            <h2>Our Hottest Categories!</h2>
            <ul>
                <li>
                    <h4>Retro Consoles</h4>
                </li>
                <li>
                    <h4>Current Consoles</h4>
                </li>
                <li>
                    <h4>Video Games</h4>
                </li>
            </ul>
            </div>
        </section>

        <!-- Stretch Goals -->
        <!-- footer -->
        <footer>
            <span>For Educational Purposes Only.</span>
            <span>&copy; 2022 Zuitt. All Rights Reserved.</span>
        </footer>
        <!-- end of footer -->


    </body>
</html>
```
 
2. Add a CSS Reset.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
/*Reset*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
```

3. Add google font family for all elements.

**batchfolder > groupwork > s12 > discussion > index.css**

```css

/*Reset*/
* {
    // ...
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
```

4. Add different google font family for all headings.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
* {
    // ...
}

h1,h2,h3,h4,h5 {
    font-family: 'Merriweather', serif;
}
```

5. Select and add a CSS ruleset for the nav element:

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

h1,h2,h3,h4,h5 {
    //...
}

/*Nav*/
nav {
    padding: 5px;
    text-align: center;
    background-color: grey;
}
```

6. Select and target the li elements inside the nav element.

**batchfolder > groupwork > s12 > discussion > index.css**

```css

//...

nav {
    //...
}

nav ul li {
    text-decoration: none;
    display: inline-block;
    margin: 0.5rem;
    padding: 3px;
}
```

7. Select the element with id “landing” and add background image and properties.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

nav ul li {
    //...
}

/* Landing */
#landing {
    background-image: url("https://i.pinimg.com/originals/6a/0d/c6/6a0dc6826b7e238993509561bc60b51a.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    height: 50vh;
    color: white;
}
```

8. Select the element h1 inside the landing element add a padding and increase the font size.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#landing {
    //...
}

#landing > h1 {
    padding-top: 3rem;
    font-size: 3rem;
}
```

9. Select the element h3 inside the landing element and add 1rem margin on all sides.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#landing > h1 {
    //...
}

#landing > h3 {
    margin: 1rem;
}
```

10. Select the button inside the landing element and add padding on all sides, a background color, a border with a different color and a border radius.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#landing > h3 {
    //...
}

#landing > button {
    padding: .8rem;
    background-color: burlywood;
    border: 4px solid white;
    border-radius: 10px;
}
```

11. Select the element with id “hot” and align the text to center

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#landing > button {
    //...
}

#hot {
    text-align: center;
}
```

12. Select the element h2 inside the “hot” element and add a margin on the top and bottom sides.

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#hot {
    //...
}

#hot > h2 {
    margin: 2rem 0;
}
```

13. Select the li elements inside the  “hot” element

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#hot > h2 {
    //...
}

#hot ul li {
    display: inline-block;
    border: 2px solid burlywood;
    border-radius: 10px;
    padding: 3rem;
    margin-left: .5rem;
    margin-right: .5rem;
    text-decoration: none;
}
```

14. Add the stretch goals

**batchfolder > groupwork > s12 > discussion > index.css**

```css
//...

#hot ul li {
    //...
}

/* Stretch Goals */
footer {
    margin-top: 3rem;
    padding: .5rem;
    text-align: center;
    background-color: grey;
}

footer span {
    display: block;
    margin: .4rem 0;
}
```