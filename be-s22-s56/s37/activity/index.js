/* 1. In the activity folder, create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.

2. Create a database called "business" 2 new collections in the database called sales and customers. Insert a mock data for each collection with the following properties:

- sales
    - product - string
    - category - string
    - quantity - number
    - price - number
	- date - date (Lookup the use of Date())

- customers
    - name - string
    - age - number
    - gender - string
    - region - string
 */
async function insertSales(db){
	return await (db.sales.insertMany([
		{ _id: 1, product: "A", quantity: 2, price: 100, date: new Date() },
		{ _id: 2, product: "B", quantity: 3, price: 50, date: new Date() },
		{ _id: 3, product: "C", quantity: 1, price: 200, date: new Date() }
	  ]));
}
async function insertCustomers(db){
	return await (db.customers.insertMany([
		{ _id: 1, name: "John", age: 35, gender: "Male", region: "North" },
		{ _id: 2, name: "Alice", age: 28, gender: "Female", region: "South" },
		{ _id: 3, name: "Bob", age: 45, gender: "Male", region: "East" },
	]));
}

/* 
3. Calculate total sales revenue for each product category using $group and $sum.
*/
async function totalRevenue(db) {
	return await(db.sales.aggregate([
		{ $group: { _id: "$category", totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } } } }
	]));
};

/* 
4. Identify the regions with most sales revenue using $group, $sum, and $sort.
*/
async function revenuePerRegion(db) {
	return await(db.sales.aggregate([
		{ $group: { _id: "$region", totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } } } },
		{ $sort: { totalRevenue: -1 } }
	  ]);
	  );
};

/* 
5. Analyze customer demographics by age group using $match and $group.
*/
async function demographicsByAge(db) {
	return await(db.customers.aggregate([
		{ $match: { age: { $gte: 20, $lte: 40 } } }, // Filtering customers aged between 20 and 40
		{ $group: { group: null, count: { $sum: 1 } } } // Counting the number of customers within the specified age range
	  ]));
};

/* 
6. Determine average order value using $group and $avg.
    - Look up the use of $avg operator.
*/
async function orderAverage(db) {
	return await(db.sales.aggregate([
		{ $group: { _id: null, averageOrderValue: { $avg: { $multiply: ["$quantity", "$price"] } } } }
	  ]));
};

/* 
7. Explore product popularity trends over time using $project, $group, and $sort.
    - Look up the use of $dateToString operator.
*/
async function productPopularity(db) {
	return await(db.sales.aggregate([
		{ $project: { yearMonth: { $dateToString: { format: "%Y-%m", date: "$date" } }, product: 1 } }, // Extracting year and month from date
		{ $group: { _id: { yearMonth: "$yearMonth", product: "$product" }, count: { $sum: 1 } } }, // Counting sales per product per month
		{ $sort: { "_id.yearMonth": 1 } } // Sorting by year and month
	  ]));
}


/* 
8. Identify outliers in sales data using $project, $match, and $sort.
    - Outliers are data points that are significantly different from the rest of the data.
    - Filter sales with price greater than 1000
	- You may add another document to the sales collection to test the outlier detection.
*/
async function salesOutlier(db) {
	return await(db.sales.aggregate([
		{ $project: { totalPrice: { $multiply: ["$quantity", "$price"] } } }, // Calculate total price for each sale
		{ $match: { totalPrice: { $gt: 1000 } } }, // Filter sales with total price greater than 1000
		{ $sort: { totalPrice: -1 } } // Sort by total price in descending order
	]));
}

/* 
9. Design a schema for storing shipping address considering 1-1 relationship scenarios for customer and shipping address collections.
    - Insert a document inside customers collection with the following properties:
        - name - string
        - age - number
        - gender - string
        - region - string
    - Insert a document inside shipping address collection with the following properties:
        - _id - ObjectId
		- customerId - the same Id as the customer document
		- street - string
		- city - string
		- state - string
		- postalCode - string
		- country - string
    - if the _id of customer is equal to the cusomerId of the shipping address document, return true, otherwise return false.
*/
async function oneToOneRelationship(db){
	db.customers.insertOne({
		_id: "1",
		name: "John Doe",
		email: "john@example.com"
	});

	db.address.insertOne({
		_id: ObjectId("address1"),
		customerId: "1",
		street: "123 Main Street",
		city: "Anytown",
		state: "CA",
		postalCode: "12345",
		country: "USA"
	});
	const customer = await db.customers.findOne({_id: "1"});
	const address = await db.address.findOne({customerId: "1"});
	if (customer._id === address.customerId) {
		return true;
	} else {
		return false;
	}
}

/* 
10. Design a schema for storing customer feedback and reviews, considering 1-Many relationship scenarios.
    - Insert a document inside customers collection with the following properties:
        - name - string
        - age - number
        - gender - string
        - region - string
    - Insert a document inside feedbacks collection with the following properties:
        - _id - ObjectId
		- customerId - the same Id as the customer document
        - rating - number
        - comment - string
    - if the _id of customer is equal to the cusomerId of the newly created objects in the feedbacks collection, return true, otherwise return false.

*/
async function oneToManyRelationship(db){
	db.customers.insertOne({
		_id: "0001",
		name: "John Doe",
		email: "john@example.com"
	});

	db.feedbacks.insertMany([
		{
		  _id: ObjectId(),
		  customerId: "0001",
		  productId: ObjectId("product1"),
		  rating: 4,
		  comment: "Good product."
		},
		{
		  _id: ObjectId(),
		  customerId: "0001",
		  productId: ObjectId("product1"),
		  rating: 3,
		  comment: "Average quality."
		}
	]);
	const customer = await db.customers.findOne({_id: "0001"});
	const feedbacks = await db.feedbacks.findMany({customerId: "0001"});
	if (customer._id === feedbacks[0].customerId && customer._id === feedbacks[1].customerId) {
		return true;
	} else {
		return false;
	}
}

try{
    module.exports = {
		insertSales,
		insertCustomers,
        totalRevenue,
        revenuePerRegion,
        demographicsByAge,
        orderAverage,
        productPopularity,
        salesOutlier,
		oneToOneRelationship,
		oneToManyRelationship
    };
} catch(err){

};
