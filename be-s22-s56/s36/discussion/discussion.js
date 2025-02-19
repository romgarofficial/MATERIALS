// CRUD Operations
/*
    - CRUD operations are the heart of any backend application.
    - Mastering the CRUD operations is essential for any developer.
    - This helps in building character and increasing exposure to logical statements that will help us manipulate our data.
    - Mastering the CRUD operations of any language makes us a valuable developer and makes the work easier for us to deal with huge amounts of information.
*/

// [Section] Inserting documents (Create)

// Insert one document
/*
    - Since mongoDB deals with objects as it's structure for documents, we can easily create them by providing objects into our methods.
    - The mongo shell also uses JavaScript for it's syntax which makes it convenient for us to understand it's code
    - Creating MongoDB syntax in a text editor makes it easy for us to modify and create our code as opposed to typing it directly in the terminal where the whole code is only visible in one line.
    - By using a text editor it allows us to type the syntax using multiple lines and simply copying and pasting the code in terminal will make it work.
    - Syntax
        - db.collectionName.insertOne({object});
    - JavaScript syntax comparison
        - object.object.method({object});

    Note: "insert" is already deprecated, use either insertOne or insertMany
*/
db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
        phone: "87654321",
        email: "janedoe@gmail.com"
    },
    courses: [ "CSS", "Javascript", "Python" ],
    department: "none"
});

// Insert Many
/*
    - Syntax
        - db.collectionName.insertMany([ {objectA}, {objectB} ]]);
*/
db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@gmail.com"
        },
        courses: [ "Python", "React", "PHP" ],
        department: "none"
    },
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@gmail.com"
        },
        courses: [ "React", "Laravel", "Sass" ],
        department: "none"
    }
]);

// [Section] Finding documents (Read)
// Find
/*
    - If multiple documents match the criteria for finding a document only the FIRST document that matches the search term will be returned
    - This is based from the order that documents are stored in a collection
    - If a document is not found, the terminal will respond with a blank line
    - Syntax
        - db.collectionName.find();
        - db.collectionName.find({ field: value });
*/

// Finding a single document
// Leaving the search criteria empty will retrieve ALL the documents
db.users.find();

db.users.find({ firstName: "Stephen" });

// The "pretty" method allows us to be able to view the documents returned by our terminals in a better format
db.users.find({ firstName: "Stephen" }).pretty();

// Finding documents with multiple parameters
/*
    - Syntax
        - db.collectionName.find({ fieldA: valueA, fieldB: valueB });
*/
db.users.find({ lastName: "Armstrong", age: 82 }).pretty();

// [Section] Updating documents (Update)

// Updating a single document

// Creating a document to update
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "00000000",
        email: "test@gmail.com"
    },
    courses: [],
    department: "none"
});

/*
    - Just like the "find" method, methods that only manipulate a single document will only update the FIRST document that matches the search criteria.
    - Syntax
        - db.collectionName.updateOne( {criteria}, {$set: {field: value}});
*/
db.users.updateOne(
    { firstName: "Test" },
    {
        $set : {
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "12345678",
                email: "bill@gmail.com"
            },
            courses: ["PHP", "Laravel", "HTML"],
            department: "Operations",
            status: "active"
        }
    }
);

db.users.find({ firstName: "Bill" }).pretty();

// Updating multiple documents
/*
    - Syntax
        - db.collectionName.updateMany( {criteria}, {$set: {field: value}});
*/
db.users.updateMany(
   { department: "none" },
   {
     $set: { department: "HR" }
   }
);

db.users.find().pretty();

// ======================= 
// Assignment
// =======================
// [Section] Advanced queries
/*
    - Retrieving data with complex data structures is also a good skill for any developer to have.
    - Real world examples of data can be as complex as having two or more layers of nested objects and arrays.
    - Learning to query these kinds of data is also essential to ensure that we are able to retrieve any information that we would need in our application
*/

// Query an embedded document
db.users.find({
    contact: {
        phone: "87654321",
        email: "stephenhawking@gmail.com"
    }
}).pretty();

// Query on nested field
db.users.find(
    {"contact.email": "janedoe@gmail.com"}
).pretty();

// Querying an Array with Exact Elements
db.users.find( { courses: [ "CSS", "Javascript", "Python" ] } ).pretty();

// Querying an Array without regard to order
db.users.find( { courses: { $all: ["React", "Python"] } } ).pretty();

// Querying an Embedded Array
db.users.insert({
    namearr: [
        {
            namea: "juan"
        },
        {
            nameb: "tamad"
        }
    ]
});

db.users.find({
    namearr: 
        {
            namea: "juan"
        }
}).pretty();
