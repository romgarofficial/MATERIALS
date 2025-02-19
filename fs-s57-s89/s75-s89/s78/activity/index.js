// Question #1: Given an array of objects where each object contains id and value properties, write a function to convert this array into an object where each id is a key, and the corresponding value is the value. Assume all ids are unique.

function arrayToObject(array) {
    const resultObject = {};

    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        resultObject[currentItem.id] = currentItem.value;
    }

    return resultObject;
}

const arrayOfObjects = [
    { id: 'a1', value: 'Apple' },
    { id: 'b2', value: 'Banana' },
    { id: 'c3', value: 'Cherry' }
];

// Question #2: Develop a function that concatenates an array of strings using a given delimiter. The function should return a single string comprised of array elements joined by the delimiter.

function concatenateStrings(strings, delimiter) {
    if (!Array.isArray(strings) || typeof delimiter !== 'string') return '';

    let resultString = '';
    for (let i = 0; i < strings.length; i++) {
        resultString += strings[i];
        if (i < strings.length - 1) resultString += delimiter;
    }
    return resultString;
}

const strings = ['Hello', 'world', 'this', 'is', 'JavaScript'];

// Question #3: Construct a function to identify unique elements within an array. The array can contain primitive data types.

function findUniqueElements(items) {
    if (!Array.isArray(items)) return [];

    const uniqueElements = [];
    for (let i = 0; i < items.length; i++) {
        if (uniqueElements.indexOf(items[i]) === -1) {
            uniqueElements.push(items[i]);
        }
    }
    return uniqueElements;
}
const data = [1, 2, 2, 3, 4, 3, 5];

// Question #4: Create a program that searches through contacts by name. The search should be case-insensitive and partial matches should be returned.

function findContactsByName(contacts, searchString) {
    const searchLower = searchString.toLowerCase();
    const matchedContacts = [];

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name.toLowerCase().includes(searchLower)) {
            matchedContacts.push(contacts[i]);
        }
    }

    return matchedContacts;
}

const officeContacts = [
    { id: 1, name: 'Michael Scott', role: 'Regional Manager' },
    { id: 2, name: 'Dwight Schrute', role: 'Assistant to the Regional Manager' },
    { id: 3, name: 'Jim Halpert', role: 'Sales Representative' },
    { id: 4, name: 'Pam Beesly', role: 'Receptionist' },
    { id: 5, name: 'Ryan Howard', role: 'Temp' }
];

// Question #5: Create a program that adds a new contact, automatically assign a unique id to each new contact, ensuring that the id auto-increments based on the highest existing id in the contacts array.

function addContact(contacts, newContact) {
    let maxId = 0;
    for (let contact of contacts) {
        if (contact.id > maxId) {
            maxId = contact.id;
        }
    }

    const nextId = maxId + 1;
    const contactToAdd = { id: nextId, ...newContact };

    contacts.push(contactToAdd);

    return contacts;
}

let contacts = [
    { id: 1, name: 'Michael Scott', role: 'Regional Manager' },
    { id: 2, name: 'Dwight Schrute', role: 'Assistant to the Regional Manager' },
    { id: 3, name: 'Jim Halpert', role: 'Sales Representative' },
    { id: 4, name: 'Pam Beesly', role: 'Receptionist' }
];

try {
    module.exports = {
        arrayToObject,
        concatenateStrings,
        findUniqueElements,
        findContactsByName,
        addContact,
        arrayOfObjects,
        strings,
        data,
        officeContacts,
        contacts
    };
} catch(err) {
    // Error handling if needed
}