# MongoDB - CRUD Operations
## Discussion Topics List
- Collection.find()
- Collection.insertOne()
- Collection.insertMany()
- Collection.updateOne()
- Collection.updateMany()


## Activity Topics List 
### Discussed
- Collection.find()
- Collection.insertOne()
- Collection.insertMany()
- Collection.updateOne()
- Collection.updateMany()

### Researched
- Collection.replaceOne()
- Collection.deleteOne()
- Collection.deleteMany()
- Collection.findOneAndUpdate()
- Collection.findOneAndDelete()

## Resources

### References

- [Intro to MongoDB](https://docs.mongodb.com/manual/introduction/)
- [mongoexport CLI command](https://docs.mongodb.com/database-tools/mongoexport/)
- [mongoimport CLI command](https://docs.mongodb.com/database-tools/mongoimport/)
- [Databases and Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)
- [Mongo DB Community Server Installation - Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [Mongo DB Community Server Installation - Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Mongo DB Community Server Installation - MacOs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Mongo DB Community Server](https://www.mongodb.com/try/download/community)
- [Mongo DB Account Registration](https://account.mongodb.com/account/register)
- [Google Public DNS](https://developers.google.com/speed/public-dns/docs/using)
- [Open DNS](https://use.opendns.com/)
- [MongoDB Manage mongod process](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)
- [MongoDB Troubleshooting Connection Issues](https://docs.atlas.mongodb.com/troubleshoot-connection/)
- [MongoDB Compass](https://docs.mongodb.com/compass/current/install/)
- [MongoDB insertOne Method](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)
- [MongoDB insertMany Method](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/)
- [MongoDB find Method](https://docs.mongodb.com/manual/reference/method/db.collection.find/)
- [MongoDB pretty Method](https://docs.mongodb.com/manual/reference/method/cursor.pretty/)
- [MongoDB updateOne Method](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/)
- [MongoDB updateMany Method](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/)
- [MongoDB Greater Than Operator](https://docs.mongodb.com/manual/reference/operator/query/gt/)
- [MongoDB Greater Than Or Equal To Operator](https://docs.mongodb.com/manual/reference/operator/query/gte/)
- [MongoDB Less Than Operator](https://docs.mongodb.com/manual/reference/operator/query/lt/)
- [MongoDB Less Than Or Equal To Operator](https://docs.mongodb.com/manual/reference/operator/query/lte/)
- [MongoDB Not Equal Operator](https://docs.mongodb.com/manual/reference/operator/query/ne/)
- [MongoDB In Operator](https://docs.mongodb.com/manual/reference/operator/query/in/)
- [MongoDB Or Operator](https://docs.mongodb.com/manual/reference/operator/query/or/)
- [MongoDB And Operator](https://docs.mongodb.com/manual/reference/operator/query/and/)
- [MongoDB Slice Operator](https://docs.mongodb.com/manual/reference/operator/projection/slice/)
- [MongoDB Regex Operator](https://docs.mongodb.com/manual/reference/operator/query/regex/)
- [MongoDB Field Projection](https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/)
    
### Tools/Technologies Version

- MongoDB Compass ^1.36.4

## Code Discussion

### 1. Step 1: Technology Installation
**MacOS**
#### Terminal
```terminal
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb/brew/mongodb-community
```
**Linux**
#### Terminal
```terminal
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```
**Windows**
#### Google Chrome
```terminal
https://www.mongodb.com/try/download/community
```
### Create MongoDB Account
#### Google Chrome > MongoDB
```
https://account.mongodb.com/account/register
```
**Important Note**
- It is recommended that the students register an account using their professional gmail accounts requested by the CAs upon registration for the bootcamp.
- Make sure that registration is done through this page to ensure that the students may be able to follow along with the registration.
- MongoDB has several pages for creating accounts and some of them redirect the students to adding an organization to their MongoDB accounts.
- Creating an account using their gmail accounts will simplify the process of logging in using the Single Sign-On (SSO) approach where as long as their Google accounts are logged in their devices, they can easily just click on the "Log In With Google" button.
- If this occurs, have the students register any organization name. After this is done, guide the students in by requesting them to share their screen until they reach the cluster setup procedure after creating their accounts.
- Upon setting up of the students' accounts for "Database Access", have the students create an account with the password "admin123" which is equivalent to an 8 letter alphanumeric combination which is easy to remember providing the username as the prefix to the password and numbers starting from 1 to the nth number to complete an 8 character combination.
- Doing this will ease troubleshooting steps ensuring that the students have the same username and password which is easy to remember.
- The Database Access password may be changed anytime upon completion of the bootcamp to provide more security to their accounts.
- Upon setting up of the students' accounts for "Network Access", ensure that they create access to all devices by allowing access to anywhere using the 0.0.0.0/0 IP address which can be access via the following:
    - Browser > MongoDB > Network Access > IP Access List Tab > Add IP Address Button.
- The "IP Access List" may be updated anytime and changed upon completion of the bootcamp to provide more security to their accounts.
- You may refer to the slides provided in the S23 Discussion slides to find the step by step procedure to have this completed.
- Refer to "references" section of this file to find the documentations for Mongo DB Acount Registration and Discussion Slides.

### Run MongoDB Atlas
#### Terminal
```js
// MongoDB Atlas
mongo "<MongoDB Connection String>"
mongo "<MongoDB Connection String>" --username <MongoDB Database Username> --password <MongoDB Database Password>

// MongoDB Connection String
mongodb+srv://<Username>:<Password>@cluster0.7iowx.mongodb.net/<Database Name>?retryWrites=true&w=majority

// local MongoDB
mongo "mongodb://localhost:27017/<Database Name>"
```

### 2. Step 2Folder and File Preparation
Inside the **s35 folder**, create a **discussion folder** and multilple **json files inside** the discussion folder: **users.json**, **courses.json**, and **transactoins.json**.

- Since mongoDB deals with objects as it's structure for documents, we can easily create them by providing objects into our methods.
- The mongo shell also uses JavaScript for it's syntax which makes it convenient for us to understand it's code
- Creating MongoDB syntax in a text editor makes it easy for us to modify and create our code as opposed to typing it directly in the terminal where the whole code is only visible in one line.
- By using a text editor it allows us to type the syntax using multiple lines and simply copying and pasting the code in terminal will make it work.

### Inserting Documents
#### insertOne()
- used to insert a single document into a collection.
- Syntax
    - db.collectionName.insertOne({object});
- JavaScript syntax comparison
    - object.object.method({object});

```js
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
```

#### insertMany()
- used to insert multiple documents into a collection.
- Syntax
    - db.collectionName.insertMany([{object}, {object}, {object}]);
- JavaScript syntax comparison
    - object.object.method([{object}, {object}, {object}]);

```js
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
```
### Reading/Finding Documents
#### findOne()
- If multiple documents match the criteria for finding a document only the FIRST document that matches the search term will be returned
- This is based from the order that documents are stored in a collection
- If a document is not found, the terminal will respond with a blank line
- Syntax
    - db.collectionName.findOne();
    - db.collectionName.findOne({ field: value });

```js
// Finding a single document
// Leaving the search criteria empty will retrieve ALL the documents
db.users.findOne();

db.users.findOne({ firstName: "Stephen" });

// The "pretty" method allows us to be able to view the documents returned by our terminals in a better format
db.users.findOne({ firstName: "Stephen" }).pretty();
```
#### findMany()
- Finding multiple documents
- Syntax
    - db.collectionName.findMany({ fieldA: valueA});
```js
db.users.findMany({ department: "none"}).pretty();

// Finding multiple documents with multiple parameters
/*
- Syntax
    - db.collectionName.findMany({ fieldA: valueA});
*/
db.users.findMany({ department: "none", age: 82}).pretty();
```
### Updating documents (Update)
#### updateOne()
- Syntax
    - db.collectionName.updateOne({ fieldA: valueA }, { $set: { fieldB: valueB } });
```js
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
```
- Just like the "find" method, methods that only manipulate a single document will only update the FIRST document that matches the search criteria.
- Syntax
    - db.collectionName.updateOne( {criteria}, {$set: {field: value}});
```js
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
db.users.findOne({ firstName: "Bill" }).pretty();
```
#### updateMany()
- Syntax
    - db.collectionName.updateMany( {criteria}, {$set: {field: value}});

```js
// Updating multiple documents
db.users.updateMany(
    { department: "none" },
    {
        $set: { department: "HR" }
    }
);

db.users.findMany().pretty();
```
### Comparison Query Operators
#### Greater Than/ Greater Than or Equal to Operator
- Allows us to find documents that have field number values greater than or equal to a specified value.
- Syntax
    - db.collectionName.find({ field : { $gt : value } });
    - db.collectionName.find({ field : { $gte : value } });
```js
db.users.find({ age : { $gt : 50 } });
db.users.find({ age : { $gte : 50 } });
```
#### Less Than/ Less Than or Equal to Operator
- Allows us to find documents that have field number values less than or equal to a specified value.
- Syntax
    - db.collectionName.find({ field : { $lt : value } });
    - db.collectionName.find({ field : { $lte : value } });
```js
db.users.find({ age : { $lt : 50 } });
db.users.find({ age : { $lte : 50 } });
```
#### Not Equal operator
- Allows us to find documents that have field number values not equal to a specified value.
- Syntax
    - db.collectionName.find({ field : { $ne : value } });
```js
db.users.find({ age : { $ne: 82 } });
```
#### In Operator
- Allows us to find documents with specific match critieria one field using different values.
- Syntax
    - db.collectionName.find({ field : { $in : value } });
```js
db.users.find( { lastName: { $in: [ "Hawking", "Doe" ] } } );
db.users.find( { courses: { $in: [ "HTML", "React" ] } } );
```
### Logical Query Operators
#### Or Operator
- Allows us to find documents that match one or more of the specified criteria
- Syntax
    - db.collectionName.find({ $or: [ { fieldA: valueA }, { fieldB: valueB } ] } )
```js
// multiple field value pairs
db.users.find( { $or: [ { firstName: "Neil" }, { age: "25" } ] } );

db.users.find( { $or: [ { firstName: "Neil" }, { age: { $gt: 30 } } ] } );
```
### Field Projection
- Retrieving documents are common operations that we do and by default MongoDB queries return the whole document as a response.
- When dealing with complex data structures, there might be instances when fields are not useful for the query that we are trying to accomplish.
- To help with readability of the values returned, we can include/exclude fields from the response.

#### Inclusion
- Allows us to include/add specific fields only when retrieving documents.
- The value provided is 1 to denote that the field is being included.
- Syntax
    - db.users.find({criteria},{field: 1})
```js
db.users.find( 
    { 
        firstName: "Jane" 
    }, 
    { 
        firstName: 1, 
        lastName: 1,
        contact: 1 
    }
);
```
#### Exclusion
- Allows us to exclude/remove specific fields only when retrieving documents.
- The value provided is 0 to denote that the field is being included.
- Syntax
    - db.users.find({criteria},{field: 0})
```js
db.users.find( 
    { 
        firstName: "Jane" 
    }, 
    { 
        contact: 0, 
        department: 0 
    } 
);
```
#### Suppressing the ID field
- Allows us to exclude the "_id" field when retrieving documents.
- When using field projection, field inclusion and exclusion may not be used at the same time.
- Excluding the "_id" field is the only exception to this rule.
- Syntax
    - db.users.find({criteria},{_id: 0})
```js
db.users.find( 
    { 
        firstName: "Jane" 
    }, 
    { 
        firstName: 1, 
        lastName: 1,
        contact: 1,
        _id: 0
    }
);
```
### Evaluation Query Operators
#### Regex Operator
- Allows us to find documents that match a regular expression
- Syntax
    - db.users.find({ field: $regex: 'pattern', $options: '$optionValue' });
```js
// Case sensitive query
db.users.find({ firstName: { $regex: 'N' } }).pretty();

// Case insensitive query
db.users.find({ firstName: { $regex: 'j', $options: '$i' } }).pretty();
```
**Important Note**
- The database used in the discussion is the same as the database accomplished during the last session.
- If the student does not have the database available locally, you may export the database locally from your machine and provide the student with the file to import it to their device.
- Alternatively the MongoDB Atlas database may also be exported to provide to the student.


## Assignment
### Assignment References

### Assignment Instructions
Continue the discussion codes in answering the following exercises:
1. Using find method, query an embedded document in the collection
2. Using find method,  query a nested field in the collection
3. Using find method, query an array with exact elements in the collection
4. Look up MongoDB the use of $all operator. Using find method and MongoDB $all operator, query an array without regard to order of elements in the collection
5. using insert method, insert a document in the users collection with an array of objects inside.
6. using find method, query an embedded array in the collection

### Assignment Solution
```js
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
```

## Activity
### Activity References

- [MongoDB replaceOne Method](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/)
- [MongoDB deleteOne Method](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/)
- [MongoDB deleteMany Method](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/)
- [MongoDB findOneAndUpdate Method](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/)
- [MongoDB findOneAndDelete Method](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndDelete/)


### Activity Instructions
- Type of Activity:
    - Coding
    - GW

#### Instructions
Member 1:

1. Create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.
2. Create a new database called hotel (MongoDB Compass)
3. In the addOneFunc(), copy and paste your query to insert a single room (insertOne method) in the rooms collection with the following details:
    - name - single
    - accommodates - 2
    - price - 1000
    - description - A simple room with all the basic necessities
    - rooms_available - 10
    - isAvailable - true

4. In the addManyFunc(), copy and paste your query to insert multiple rooms (insertMany method)  in the rooms collection with the following details:

	i.
    - name - double
    - accommodates - 3
    - price - 2000
    - description - A room fit for a small family going on a vacation
    - rooms_available - 5
    - isAvailable - true

	ii.
    -  name - queen
    -  accommodates - 4
    -  price - 4000
    -  description - A room with a queen sized bed perfect for a simple getaway
    -  rooms_available - 15
    -  isAvailable - true

	iii.
    -  name - executive suites
    -  accommodates - 4
    -  price - 9000
    -  description - A room designed with more space for work and relaxation
    -  rooms_available - 2
    -  isAvailable - true

	iv.
    -  name - deluxe King
    -  accommodates - 4
    -  price - 7000
    -  description - A room with a king-sized bed and a comfortable couch for the modern traveler.
    -  rooms_available - 4
    -  isAvailable - true

Member 2:

5. In the findRoom(), copy and paste your query to use the findOne method to search for a room with the name double.
6. In the updateOneFunc(), copy and paste your query to use the updateOne method to update the queen room and set the available rooms to 0.
7. In the replaceOneFunc(), copy and paste your robo3T query to use the replaceOne method to update the availability of the queen room to false.
    - Look up the use and syntax of replaceOne method
    - Look up the use and syntax of $set operator

Member 3:

8. In the findOneAndUpdateFunc(), copy and paste your robo3T query to use the findOneAndUpdate method to delete the queen room's availability property to false.
    - Look up the use and syntax of findOneAndUpdate method
    - Look up the use and syntax of $set operator
9. In the deleteOneFunc(), copy and paste your robo3T query to use the deleteOne method to delete the executive suites room.
    - Look up the use and syntax of deleteOne method

Member 4:

10. In the deleteManyFunc(), copy and paste your robo3T query to use the deleteMany method to delete all rooms that have 0 rooms available.
    - Look up the use and syntax of deleteMany method
11. In the findOneAndDeleteFunc(), copy and paste your robo3T query to use the findOneAndDelete method to delete a room with the name single.
    - Look up the use and syntax of findOneAndDelete method

Member 5:

12. In the findName(), copy and paste your query  to find rooms with letter s in their name or t.
	- Use the $or operator.
	- Show only the name, and description fields and hide the _id field.
13. In the findAccom(), copy and paste your query to find rooms who accommodates more than 2, with price of less than or equal to 7000.
	- Use the $and operator
14. In the findNamePrice(), copy and paste your query to find rooms with the letter d in their name and has price of greater than or equal to 2000.
	- Use the $and, $regex and $gte operators.
	- Show only the name, and price fields and hide the _id field.

All Members

15. Once done with your solution, remove all the comments as these will cause error in checking the output.
16. Update your local backend git repository and push to git with the commit message of Add activity code s36.
17. Add the link in Boodle for s36.

#### Activity Solution:
```
Developer's Note: 
    There are 2 cases possible in activity solution:
    - Activities with exclusive activity folder:
```
- Activity Solution can be found in : [activity/index.js](./activity/index.js)

**Solution**
```js
/* 
1. Create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.
2. Create a new database called hotel (MongoDB Compass)
*/

/* 
3. In the addOneFunc(), copy and paste your query to insert a single room (insertOne method) in the rooms collection with the following details:
    - name - single
    - accommodates - 2
    - price - 1000
    - description - A simple room with all the basic necessities
    - rooms_available - 10
    - isAvailable - true
*/
async function addOneFunc(db) {
   await (db.rooms.insertOne({
       name: "single",
       accommodates: 2,
       price: 1000,
       description: "A simple room with all the basic necessities",
       rooms_available: 10,
       isAvailable: false
   }));

   return(db);

};

/* 
In the addManyFunc(), copy and paste your query to insert multiple rooms (insertMany method)  in the rooms collection with the following details:
	i.
    - name - double
    - accommodates - 3
    - price - 2000
    - description - A room fit for a small family going on a vacation
    - rooms_available - 5
    - isAvailable - true
	ii.
    -  name - queen
    -  accommodates - 4
    -  price - 4000
    -  description - A room with a queen sized bed perfect for a simple getaway
    -  rooms_available - 15
    -  isAvailable - true
	iii.
    -  name - executive suites
    -  accommodates - 4
    -  price - 9000
    -  description - A room designed with more space for work and relaxation
    -  rooms_available - 2
    -  isAvailable - true
	iv.
    -  name - deluxe King
    -  accommodates - 4
    -  price - 7000
    -  description - A room with a king-sized bed and a comfortable couch for the modern traveler.
    -  rooms_available - 4
    -  isAvailable - true
*/
async function addManyFunc(db) {
   await (db.rooms.insertMany([
       {
           name: "double",
           accommodates: 3,
           price: 2000,
           description: "A room fit for a small family going on a vacation",
           rooms_available: 5,
           isAvailable: false
       },
       {
           name: "queen",
           accommodates: 4,
           price: 4000,
           description: "A room with a queen sized bed perfect for a simple getaway",
           rooms_available: 15,
           isAvailable: false
       }
   ]));

   return(db);

};

/* 
5. In the findRoom(), copy and paste your query to use the findOne method to search for a room with the name double.
*/
async function findRoom(db) {
    return await (
        db.rooms.findOne({ name: "double" })
    );
};

/* 
6. In the updateOneFunc(), copy and paste your query to use the updateOne method to update the queen room and set the available rooms to 0.
    - Look up the use and syntax of updateOne method
    - Look up the use and syntax of $set operator
*/
function updateOneFunc(db) {
    db.rooms.updateOne(
        { name: "queen" },
        {
            $set : {
                rooms_available: 0
            }
        }
    )
};

/* 
7. In the replaceOneFunc(), copy and paste your robo3T query to use the replaceOne method to update the availability of the queen room.
    - Look up the use and syntax of replaceOne method
    - Look up the use and syntax of $set operator
*/
async function replaceOneFunc(db) {
    await db.rooms.replaceOne(
        { name: "queen"  },
        { 
            $set: 
            { 
                availability: false
            }
        }
    );
}
 
/* 
8. In the findOneAndUpdateFunc(), copy and paste your robo3T query to use the findOneAndUpdate method to delete the queen room's availability property to false.
    - Look up the use and syntax of findOneAndUpdate method
    - Look up the use and syntax of $set operator
*/
async function findOneAndUpdateFunc(db) {
    await db.rooms.findOneAndUpdate(
        { name: "queen",
          isAvailable: true
        },
        { $set: { isAvailable: false } }
    );
    return (db)
}

/* 
9. In the deleteOneFunc(), copy and paste your robo3T query to use the deleteOne method to delete the executive suites room.
    - Look up the use and syntax of deleteOne method
*/
async function deleteOneFunc(db) {
    await db.rooms.deleteOne(
        { name: "executive" }
    );
}

/* 
10. In the deleteManyFunc(), copy and paste your robo3T query to use the deleteMany method to delete all rooms that have 0 rooms available.
    - Look up the use and syntax of deleteMany method
*/
function deleteManyFunc(db) {
    db.rooms.deleteMany({
        rooms_available: 0
    })
};

/* 
11. In the findOneAndDeleteFunc(), copy and paste your robo3T query to use the findOneAndDelete method to delete a room with the name single.
    - Look up the use and syntax of findOneAndDelete method
*/
async function findOneAndDeleteFunc(db) {
    return await db.rooms.findOneAndDelete(
        { name: "single" }
    );
}

/* 
12. In the findName(), copy and paste your query  to find rooms with letter s in their name or t.
	- Use the $or operator.
	- Show only the name, and description fields and hide the _id field.
*/
async function findName(db) {
    return await(db.rooms.find({ 
        $or: [
            { name: { $regex: 's', $options: 'i' } },
            { name: { $regex: 't', $options: 'i' } }
        ]
    }, { name: 1, name: 1, _id: 0 }));

};

/* 
13. In the findAccom(), copy and paste your query to find rooms who accommodates more than 2, with price of less than or equal to 7000.
	- Use the $and operator
*/
async function findAccom(db) {
    return await (db.rooms.find({ 
            $and: [
                { accommodates: { $gt: 2 } },
                { price: { $lte: 7000 } }
            ]
        }));

};


/* 
14. In the findNamePrice(), copy and paste your query to find rooms with the letter d in their name and has price of greater than or equal to 2000.
	- Use the $and, $regex and $gte operators.
	- Show only the name, and price fields and hide the _id field.

*/
async function findNamePrice(db) {
    return await (db.rooms.find({ 
            $and: [
                { name: { $regex: 'd', $options: 'i' } },
                { price: { $gte: 2000 } }
            ]
        }, { name: 1, price: 1, _id: 0 }));
};


try{
    module.exports = {
        addOneFunc,
        addManyFunc,
        updateOneFunc,
        findRoom,
        deleteManyFunc,
        findName,
        findAccom,
        findNamePrice,
        replaceOneFunc,
        findOneAndUpdateFunc,
        deleteOneFunc,
        findOneAndDeleteFunc
    };
} catch(err){

};
```
