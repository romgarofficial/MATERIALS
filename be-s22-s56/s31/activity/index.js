// console.log("Hello World");

// Create an object using object literals
let trainer = {};

// Initialize/add the object properties and methods

// Properties
trainer.name = 'Ash Ketchum';
trainer.age = 10;
trainer.pokemon = ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur'];
trainer.friends = {
	kanto: ['Brock', 'Misty'],
	hoenn: ['May', 'Max']
}

// Methods
trainer.talk = function() {
	console.log('Pikachu! I choose you!');
	return 'Pikachu! I choose you!';
}

// Check if all properties and methods were properly added
console.log(trainer);

// Access object properties using dot notation
console.log('Result of dot notation:');
console.log(trainer.name);
// Access object properties using square bracket notation
console.log('Result of square bracket notation:');
console.log(trainer['pokemon']);
// Access the trainer "talk" method
console.log('Result of talk method');
trainer.talk();

// Create a constructor function for creating a pokemon
function Pokemon(name,level, type) {

	// Properties
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;
	this.type = [type];
	this.skills = ["Tackle"];

	// Methods
	// Will accept an object as a target and the skill to be used
	this.useSkill = function(target, skill) {
		console.log(this.name + " used " + skill + "!");
	    // Reduces the target object's health property by subtracting and reassigning it's value the the pokemon's attack
	    target.health -= this.attack;
	    // If the health of the target is less than or equal to 0
	    if (target.health <= 0) {
	    	// Invokes the faint method from the target object
	        return target.faint()
	    } else {
	    	// Prints the target's name and message after it has been reassigned a different value
	    	return target.name +"'s health is now reduced to " + target.health;
	    }

	};

	// Method is invoked in the tackle method
	this.faint = function(){
	    console.log( this.name +" fainted");
	    return this.name +" fainted"
	}

}

// Create/instantiate a new pokemon
let pikachu = new Pokemon("Pikachu",12, "Electric");
console.log(pikachu);

// Create/instantiate a new pokemon
let geodude = new Pokemon("Geodude", 8, "Rock");
console.log(geodude);

// Create/instantiate a new pokemon
let mewtwo = new Pokemon("Mewtwo", 50, "Psychic");
console.log(mewtwo);

// Create/instantiate a new pokemon
let pidgey = new Pokemon("Pidgey", 5, "Normal");
console.log(pidgey);

// Invoke the useSkill method and target a different object
geodude.useSkill(pikachu, geodude.skills[0]);
console.log(pikachu);

// Invoke the useSkill method and target a different object
mewtwo.useSkill(geodude, mewtwo.skills[0]);

// create catch method to catch pokemon with <= 10 health
trainer.catch = function(pokemon){
	if (pokemon.health <= 10){
		console.log("Success! You caught "+ pokemon.name + "!")
		trainer.pokemon.push(pokemon.name)
		console.log("Your pokemons are "+ trainer.pokemon)
		return "Your pokemons are "+ trainer.pokemon
	}else{
		console.log("Oh no! "+ pokemon.name + " ran away!")
		return "Oh no! "+ pokemon.name + " ran away!"
	}
}
trainer.catch(pidgey)

// add a method inside the Pokemon that will allow the pokemon to add/replace skills array
Pokemon.prototype.addSkill = function(newSkill) {
	//check if the skill already exists
	if(this.skills.includes(newSkill) == false){
		// checks if the length of the skills array is 4
		if(this.skills.length <= 4){
			// add the skill if it's not yet in the skills array
			this.skills.push(newSkill)
			console.log("You added " + newSkill + " to " + this.name + "'s skills!")
		}else{
			// print a message if the pokemon already has 4 skills
			console.log(this.name + " already has 4 skills! Changing the first skill to " + newSkill + "!")
			// replace the first skill in the skills array with the new skill
			this.skills[0] = newSkill
		}
	}
	else{
		// print a message if the skill is already in the skills array
		console.log("This pokemon already has " + newSkill + "!")
	}
	return this;
}

// add method that will allow a pokemon to evolve. this will change the name of the pokemon as well as the attack value
Pokemon.prototype.evolve = function(newName, newAttack, newType, newSkill) {
	console.log("Something is happening to "+ this.name + "!")
	console.log("Suddenly, "+ this.name + " is glowing!")
    this.name = newName;
    this.attack = newAttack;
	// check if the pokemon's type is already in the type array
	if (!this.type.includes(newType)) {
		// add the new type to the type array
	    this.type.push(newType);
	    console.log("Added " + newType + " to " + this.name + "'s type array!");
	}
	console.log("Your pokemon evolved into " + this.name + "!")
	// add the new skill
	this.addSkill(newSkill)
	return this;
}

let pidgeotto = pidgey.evolve("Pidgeotto", 30, "Normal", "Wing Dance");
console.log(pidgeotto);

// create NPC object using object Literals 
const NPC = {
	name: "Jenny",
	pokemon: "Clefairy",
}
console.log (NPC);
Object.freeze(NPC);
NPC.name = "Nurse Jenny"
console.log (NPC);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null,
		NPC: typeof NPC !== 'undefined' ? NPC : null

    }
} catch(err){

}