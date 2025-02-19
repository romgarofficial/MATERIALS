# Session Objectives

At the end of the session, the students are expected to:

- simulate an interactive web page by using DOM and JSON data.

# Resources

# Lesson Proper

After learning how to manipulate the document objects in a web page, we must learn how to make it more interactive when sample data is thrown into the mix.

For this session, we are going to use data from another resource, another server. For a brief discussion, a server is another machine that processes and handles data. This will be further elaborated in our NodeJS Sessions.

## Reactive DOM with Fetch

Let's refactor our previous code.

```html

    <!DOCTYPE HTML>
    <html>
        <head>
            <title>JavaScript - Reactive DOM with Fetch</title>
        </head>
        <body>
            <h1>Posts</h1>
            <!-- We will add the post items as html elements in this div -->
            <div id="div-post-entries"></div>
        </body>
    </html>
    <!-- ... -->

```

Let's get data from a server into our web page. To do this, we will use JS's built-in fetch method. The fetch() method allows us to get, post, update or even delete data in a server. For now, let's try to retrieve data.

Add the following code in our index.js:

```js

    /*...*/

    //The fetch() method has one argument by default, the url. A url is a representative address of accessing a resource/data in another machine.
    //For now, we will use the jsonplaceholder url, which is a sample server where we can get data from.
    //The .then() method will allow us to process the data we retrieve using fetch in another function.
    //The data returned in our fetch method can be passed into the .then() method where we can receive it as a parameter.
    //response is simply the parameter name. It is however, a convention, indicating that we are now going to process the response from our server.
    //It is a representation of what we "got" from our server. response.json() is a method to parse the incoming data as a proper JS object we can further process.
    //We can then add another .then() method to do something with the processed server response.
    //Note: Do not add anything between a .then() chain. This may result to an error.
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })

```

We can then see that we are able "Get" or retrieve data from another server using the fetch() method and the proper url. We can then further use this array of data and them as html elements in our page.

Let's create a new function called showPosts() which will create html elements using our fetched data.

```js

    /*...*/

    //Receives the fetched data as an argument.
    const showPosts = function(posts) {

    //You can console.log() the received data:
    //console.log(posts);

    //We'll add each post as a string.
    let postEntries = '';
    
    //For each post in the posts array we will create a string that represents html elements.
    posts.forEach(function(post){
        //get the id property of each post to add as part of our element's id's to differentiate them.
        //Add the title and body property as text content for our h3 and p elements.
        //Pass the post id to a delete button. This button will be created with an onclick attribute which triggers a deletePost() method.
        //The onclick attribute is a shortcut to an addEventListener() method. It's value is the function to be run when clicking the element.
        //The deletePost() method will then receive the post id whenever the button is clicked.
        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });

    //let's log the post entries in the console for now.
    console.log(postEntries);
}
```

Update the fetch() method to pass the processed server response to our showPosts() method.

```js
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        return response.json()
    })
    .then(function(data) {

        //console.log(data)
        //This will allow us to trigger the showPosts() function after we fetch() data from our server.
        showPosts(data);

    })
```
We can now see string representations of HTML elements based on the fetched data. However, how can we add this to our actual web page?

Let's update our showPosts() method. Let's try to add that string representation to the innerHTML property of our div-post-entries div.

innerHTML property represents all the elements and text inside of an element as a string.
We can add html elements to another element as a string by updating its innerHTML property. 

```js
    /*...*/
    const showPosts = function() {
        let postEntries = '';
        
        posts.forEach(function(post){
            postEntries += `
                <div id="post-${post.id}">
                    <h3 id="post-title-${post.id}">${post.title}</h3>
                    <p id="post-body-${post.id}">${post.body}</p>
                </div>
            `;
        });

        //console.log(postEntries);

        //innerHTML property represents all the elements and text of an element as a string.
        //We can add html elements to another element as string by updating its innerHTML property. 
        document.querySelector('#div-post-entries').innerHTML = postEntries;
    }
```

We should now be able to display the posts in our web page as HTML elements.

Let's now try to simulate adding data from our webpage to our server. To do this, we will still use our fetch() method. But with notable additions. 

Let's add a form to our page.

**discussion/index.html**

```html
<!-- ... -->
        <form id="form-add-post">
            <span>Title</span><br>
            <input type="text" id="txt-title"/><br>
            <span>Body</span><br>
            <textarea type="text" id="txt-body"></textarea><br>
            <button type="submit">Create</button>
        </form>
    </body>
</html>
```

**discussion/index.js**

```jsx
// Add data to our server.
document.querySelector('#form-add-post').addEventListener('submit', function() {
    console.log("Hello! The form has been submitted!");
});

```
This time let's add an event listener to our form. When a button with type submit is inside a form, we can attach an event listener to it and click that button to interact with our form. 

However, submit and click events have significant differences. One of these is that when a form listens to a form submission event, by default, the page is refreshed.

To prevent this, We can pass the event object as a parameter to our function. This event contains all the information that about the event that we listened to. Yes, even the event is an object according to the JS DOM. Which means it contains its own properties and built-in default methods. We discuss some more of these properties in our later sessions. For now, let's focus on the preventDefault() method.

```jsx
/*...*/
document.querySelector('#form-add-post').addEventListener('submit', function(event) {

    //console.log(event);

    event.preventDefault();

    console.log("Hello! The form has been submitted!");
});

```

As you can now see, the page did not reset even though the form has been submitted. This is because we stopped the submit event default behavior.

Let's then try to capture data input from our input elements.

```js
/*...*/
document.querySelector('#form-add-post').addEventListener('submit', function(event) {

    //console.log(event);

    event.preventDefault();

    //Let's capture the input elements.
    let titleInput = document.querySelector("#txt-title");
    let bodyInput = document.querySelector("#txt-body");

    //Then we can check its value property.
    //The value property contains the current value of an input element.
    console.log(titleInput.value);
    console.log(bodyInput.value);

    console.log("Hello! The form has been submitted!");
});

```

Try to type into the input element and submit the form. You will find that we can now check the current values of the input elements.

We are now able to capture data from both elements. This time, let's send and add that data into our server using the fetch() method.

```js
/*...*/
document.querySelector('#form-add-post').addEventListener('submit', function(event) {

    //console.log(event);

    event.preventDefault();

    //First, capture the input element.
    let titleInput = document.querySelector("#txt-title");
    let bodyInput = document.querySelector("#txt-body");

    //Then we can check its value property.
    //The value property contains the current value of an input element.
    // console.log(titleInput.value);
    // console.log(bodyInput.value);

    //When trying to add, update and delete data to a server, we have to pass another argument to the fetch() method that contains other details.
    //fetch("<URL>",{options})

    //The options object then contains other details like:

    //method: this property tells the server what we intend to do. the value passed here are what we call HTTP methods.
            //Common HTTP Methods are:
            //GET: For getting data in a server.
            //POST: For adding data in a server. We will use POST this time because we want to ADD data to our server.
            //PUT: For updating data in a server.
            //DELETE: For deleting data in a server.

    //body: This property contains the main content that we want to send to our server. Clients and Servers communicate with each other using JSON format data. That is why we will stringify our data first using JSON.stringify(). The body property can be optional. Some actions like deleting do not need a body property.

    //headers: This property contains other details that we need to send to our server. "Content-Type": "application/json" simply tells the server that the incoming data is in json format.

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }),
        headers: { 'Content-type': 'application/json' }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        alert('Successfully added.');


        //Clears the input elements upon submission
        titleInput.value = null;
        bodyInput.value = null;
    });

    //refactor our message as an alert
    alert('Successfully added.');
});

```
We can then check the server's response in our browser console after we successfully passed data into it.

Let's update the post element strings and add delete and edit buttons for each post. So that we will able to simulate editing/deleting a specific post.

```js
    /*...*/
    const showPosts = function(posts) {

    //We'll add each post as a string.
    let postEntries = '';
    
    //For each post in the posts array we will create a string that represents html elements.
    posts.forEach(function(post) {
        /* ... */
        //Pass the post id to a delete button. This button will be created with an onclick attribute which triggers a deletePost() method.
        //The onclick attribute is a shortcut to an addEventListener() method. It's value is the function to be run when clicking the element.
        //The deletePost() method will then receive the post id whenever the button is clicked.
        //The editPost() method will then receive the post id whenever the button is clicked.
        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="edit('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });

    console.log(postEntries);
}
```
Let's create a new form for editing posts. Then let's add another function called editPost() to simulate editing a post.

```html
    <!-- ... -->
        <hr>
        <h1>Edit Post</h1>
        <form id="form-edit-post">
            <input type="text" id="txt-edit-id" hidden/><br>
            <span>Title</span><br>
            <input type="text" id="txt-edit-title"/><br>
            <span>Body</span><br>
            <textarea type="text" id="txt-edit-body"></textarea><br>
            <button type="submit" id="btn-submit-update" disabled>Update</button>
        </form>
        <script src="./index.js"></script>
    </body>
</html>

```

```js

// Edit post. This function will add the id passed from the button and the details from the post to be edited.
const editPost = function(id) {
    let title = document.querySelector(`#post-title-${id}`).innerHTML;
    let body = document.querySelector(`#post-body-${id}`).innerHTML;

    document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value = title;
    document.querySelector('#txt-edit-body').value = body;
    document.querySelector('#btn-submit-update').removeAttribute('disabled');
}
```

In later on's activity, the students will create a function to handle the form submissions for editing posts.

In later on's activity, the students will create a function to handle the form submissions for editing posts.

## Preparation for reactJS.

1. After providing the activity, to ensure a smooth discussion, have the students create a template for the ReactJS application. For users with slow internet connection, this may take some time to download all the files. This will prevent any additional time consumed during the ReactJS discussion to create the template to use for the discussion. Refer to the Google Slides for the steps to setup the ReactJS Template using Vite. The steps can be found at the end of the slides.

[React JS Preparation](https://docs.google.com/presentation/d/1c73JvTawruoziRNmM0P-ZXw_sOA6tEmEdQq-wph6hy0/edit#slide=id.g26fd26313ab_0_0)

# Activity

## Instructions

This activity intends to continue from the codebase used during the discussion. an activity folder will not be neccessary for this activity.


Activity Documentation References

JS querySelector  
https://www.w3schools.com/jsref/met_element_queryselector.asp

JS addEventListener  
https://www.w3schools.com/jsref/met_element_addeventlistener.asp

JS InnerHTML  
https://www.w3schools.com/jsref/prop_html_innerhtml.asp

JS Fetch  
https://www.w3schools.com/jsref/api_fetch.asp

HTTP Methods  
https://doc.oroinc.com/api/http-methods/#:~:text=The%20primary%20or%20most%20commonly,they%20are%20utilized%20less%20frequently.

JSON Placeholder  
https://jsonplaceholder.typicode.com/guide/

s58 - Activity Instructions

Update your local sessions git repository and push to git with the commit message of Add discussion code s58.

---

## A. UPDATE POST

Create a function code to handle form submissions for editing posts. It should utilize the Fetch API to send a PUT request to update a post on a remote server and provide feedback to the user upon successful update.

1. The function should listen for form submission events.
    * it should prevent the default form submission behavior.

2. It should send a PUT request to the specific endpoint, https://jsonplaceholder.typicode.com/posts/1.
    * request body should include: edited post data (id, title, body, userId) formatted as a JSON string.
    * request header should include: 'Content-type': 'application/json'

3. It should handle the response from the server, converting it to JSON format.

4. Upon successful update:
    * it should log a success message to the console.
    * it should trigger an alert with the message \"Successfully updated.\".
    * it should reset the input fields to empty values.
    * it should disable the submit button to prevent multiple submissions.

---

## B. DELETE POST

Complete the necessary code to simulate deleting a post using fetch and removing the element in our page.

1. Update our code so that when the deletePost() method is triggered by the button click, it should be able to use the fetch() method to delete an item from our server.
    * Log the server response in the console.

2. The deletePost() method should be able to trigger an alert with a message when the deletePost() method is triggered by clicking a button.

3. Then, remove the element from the DOM by first selecting the element and using the remove() method.

4. Add another button with id "delete-all".
    * Attach an event listener so that whenever this button is clicked an alert with a message that says "All Posts Deleted" is shown.

5. All content inside element with id #div-post-entries must be deleted whenever the "delete-all" button is clicked.

---

* Check out to your own git branch with git checkout -b <branchName>
* Update your local sessions git repository and push to git with the commit message of Add activity code s58.
* Add the sessions repo link in Boodle for s58.

---


## Solution

### A. UPDATE POST

```js
// Update post. This function will be run when the edit form is submitted.

document.querySelector('#form-edit-post').addEventListener('submit', function(e) {
    e.preventDefault();

    //PUT is the value of method this time because the action to be done is editing/updating.
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: document.querySelector('#txt-edit-id').value,
            title: document.querySelector('#txt-edit-title').value,
            body: document.querySelector('#txt-edit-body').value,
            userId: 1
        }),
        headers: { 'Content-type': 'application/json' }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        alert('Successfully updated.');

        document.querySelector('#txt-edit-id').value = null;
        document.querySelector('#txt-edit-title').value = null;
        document.querySelector('#txt-edit-body').value = null;
        document.querySelector('#btn-submit-update').setAttribute('disabled', true);
    });
});
```

### B. DELETE POST

```html
<!-- ... -->
        <hr>
        <h1>Posts</h1>
        <button id="delete-all">Delete All</button>
        <div id="div-post-entries"></div>
        <hr>
<!-- ... -->
```
```jsx
/*...*/

// Delete post.
const deletePost = function(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/`, { method: 'DELETE' });
    document.querySelector(`#post-${id}`).remove();
}

document.querySelector('#delete-all').addEventListener('click',function() {
    document.querySelector('#div-post-entries').innerHTML = "";
    alert("All Posts Deleted");
})

```


