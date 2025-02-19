# S33 - MongoDB - Data Modeling and Translation
### Discussion Topics List

### Activity Topics List

## Resources

### References

- [Data Model Design](https://docs.mongodb.com/manual/core/data-model-design/)
- [Diagrams.net](https://www.diagrams.net/)
- [Entity Relationship Diagram Symbols](https://www.lucidchart.com/pages/ER-diagram-symbols-and-meaning)
- [Normalizing with Entity Relationship Diagramming](https://tdan.com/normalizing-with-entity-relationship-diagramming/4583)

### Tools/Technologies Version

## Code Discussion

### 1. Folder and File Preparation
Inside the **s35 folder**, create a **discussion folder** and multilple **json files inside** the discussion folder: **users.json**, **courses.json**, and **transactoins.json**.
### 2. Code along

- After the discussion on Identifying Relationships Between Data Models create a "users.json" file that and discuss how to translate data models into actual code.
#### batchfolder > individual > s35 > discussion > users.json.js

```json
{
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Smith",
    "email": "johnsmith@mail.com",
    "password": "johnhandsome",
    "isAdmin": false,
    "mobileNumber": "09221231234",
    "enrollments": ["601ccbe89bcd482ee8fa2c99", "507f191e810c19729de860ea"],
    "datetimeRegistered": "2020-03-15T15:00:00.00Z"
}

{
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@zuitt.com",
    "password": "johnhandsome",
    "isAdmin": true,
    "mobileNumber": "09277365528",
    "enrollments": [],
    "datetimeRegistered": "2020-03-15T15:00:00.00Z"
}
```

- Create a "courses.json" file that and discuss how to translate data models into actual code.
#### batchfolder > individual > s35 > discussion > courses.json.js
```json
{
    "_id": "601ccbe89bcd482ee8fa2c99",
    "name": "HTML",
    "description": "Learn the basics and how to code.",
    "price": 1000,
    "isActive": true,
    "slots": "20",
    "enrollees": ["507f1f77bcf86cd799439011"],
    "datetimeCreated": "2020-03-10T15:00:00.00Z"
}

{
    "_id": "507f191e810c19729de860ea",
    "name": "CSS",
    "description": "Let's make our applications look cool!",
    "price": 2000,
    "isActive": false,
    "slots": "20",
    "enrollees": ["507f1f77bcf86cd799439011"],
    "datetimeCreated": "2021-08-15T15:00:00.00Z"
}

{
    "_id": "601ccc169bcd482ee8fa2c9a",
    "name": "JavaScript",
    "description": "Make websites fun and interactive!",
    "price": 4000,
    "isActive": true,
    "slots": "15",
    "enrollees": [],
    "datetimeCreated": "2022-02-01T15:00:00.00Z"
}
```

- Create a "transactions.json" file that and discuss how to translate data models into actual code.
#### batchfolder > individual > s35 > discussion > transactions.json.js

```json
{
    "_id": "6062a8eb834de22e84600edd",
    "userId": "507f1f77bcf86cd799439011",
    "courseId": "601ccbe89bcd482ee8fa2c99",
    "isPaid": true,
    "paymentMethod": "PayPal",
    "datetimeCreated": "2020-03-12T15:00:00.00Z"
}

{
    "_id": "603e10d3b30fd23b081a94eb",
    "userId": "507f1f77bcf86cd799439011",
    "courseId": "507f191e810c19729de860ea",
    "isPaid": true,
    "paymentMethod": "American Express - Credit",
    "datetimeCreated": "2020-03-12T15:00:00.00Z"
}
```


## Activity
- Two types of activities will be given in this session:
    - Form/Individual
    - Coding/GW

### Activity References
```
Developer's Note:
Include references to aid bootcampers in research and activity development.
```
Sample:
- [MongoDb ObjectId()](https://www.mongodb.com/docs/manual/reference/method/ObjectId/)

### Activity 1
1. Provide the students with the link to the Google Form for them to complete and serve as the activity for this session.
- Link: 

### Activity 2 Instructions
Member 1:
1. In the s35 folder, create an activity folder and users.json, products.json, orderProducts.json, and orders.json files inside of it.
    - Copy the template from any code sharing platforms and paste it in each json file.
    - Update your local sessions git repository and push to git with the commit message of Add template code s35.

Member 2: 

2. In users.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - firstName - String
    - lastName - String
    - email - String
    - password - String
    - isAdmin - Boolean
    - mobileNumber - String

Member 3:

3. In products.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - name - String
    - description - String
    - price - Number
    - stocks - Number
    - isActive - Boolean
    - sku - String

Member 4:

4. In orderProducts.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - userId - String (Look up ObjectId format), must be the same with a user id
    - productId - String (Look up ObjectId format), must be the same with a course id
    - quantity - Number
    - price - Number
    - subtotal - Number

Member 5:

5. In orders.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - userId - String (Look up ObjectId format), must be similar to an id of a user
    - datetimeCreated - Date/String
    - isPaid - Boolean
    - total - Number

All Members:

6. Add your changes.
7. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s35 activity".
8. Add the link in Boodle for s35.

#### Activity Solution:

**Solution**

- In users.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - firstName - String
    - lastName - String
    - email - String
    - password - String
    - isAdmin - Boolean
    - mobileNumber - String
#### batchfolder > individual > s35 > discussion > users.json
```json
{
    "_id": "61194035bcf86cd799439013",
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@mail.com",
    "password": "john1234",
    "isAdmin": false,
    "mobileNo": "09237593671"
}

```

- In products.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - name - String
    - description - String
    - price - Number
    - stocks - Number
    - isActive - Boolean
    - sku - String
#### batchfolder > individual > s35 > discussion > products.json
```json
{
    "_id": "61194035bcf86cd799439015",
    "name": "Humidifier",
    "description": "Make your home smell fresh any time.",
    "price": 300,
    "stocks": 1286,
    "isActive": true,
    "sku": "052321-SMHMD"
}

```

- In orderProducts.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - userId - String (Look up ObjectId format), must be the same with a user id
    - courseId - String (Look up ObjectId format), must be the same with a course id
    - quantity - Number
    - price - Number
    - subtotal - Number
#### batchfolder > individual > s35 > discussion > orderProducts.json
```json
{
    "_id_": "61194035bcf86cd799439014",
    "userId": "61194035bcf86cd799439013",
    "productId": "61194035bcf86cd799439015",
    "quantity": 1,
    "price": 300,
    "subTotal": 300
}

```

- In orders.json, insert multiple json objects inside with the following properties and their values
    - _id - String (Look up ObjectId format)
    - userId - String (Look up ObjectId format), must be similar to an id of a user
    - datetimeCreated - Date/String
    - isPaid - Boolean
    - total - Number
#### batchfolder > individual > s35 > discussion > users.json.js
```json
{
    "id": "501ccbe89ecf182ee8fa4d89",
    "userId": "61194035bcf86cd799439013",
    "transactionDate": "08-15-2021",
    "status": "paid",
    "total": 1500
}

```
