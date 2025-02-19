/* 1. In the activity folder, create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.

2. Create 2 new collections in the database called sales and customers. Insert a mock data for each collection with the following properties:

- sales
    - product - string
    - category - string
    - quantity - number
    - price - number

- customers
    - name - string
    - age - number
    - gender - string
    - region - string
 */
async function insertSales(db){
	return await (

	)
}
async function insertCustomers(db){
	return await (

	)
}

/* 
3. Calculate total sales revenue for each product category using $group and $sum.
*/
async function totalRevenue(db) {
	return await(
		
	);
};

/* 
4. Identify the regions with most sales revenue using $group, $sum, and $sort.
*/
async function revenuePerRegion(db) {
	return await(
		
	);
};

/* 
5. Analyze customer demographics by age group using $match and $group.
*/
async function demographicsByAge(db) {
	return await(
		
	);
};

/* 
6. Determine average order value using $group and $avg.
	- Look up the use of $avg operator.
*/
async function orderAverage(db) {
	return await(
	
	);
};

/* 
7. Explore product popularity trends over time using $project, $group, and $sort.
	- Look up the use of $dateToString operator.
*/
async function productPopularity(db) {
	return await(
		
	);
}


/* 
8. Identify outliers in sales data using $project, $match, and $sort.
	- Outliers are data points that are significantly different from the rest of the data.
	- Filter sales with price greater than 1000
*/
async function salesOutlier(db) {
	return await(
		
	);
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
	
	const customer = await db.customers.findOne({});
	const address = await db.address.findOne({});
	if () {

	} else {
		
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
