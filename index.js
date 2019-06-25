
// 
const moduleStuff = require('./anime.module');
const characterList = moduleStuff.characters;

// I want to call the sayHello function from the moduleStuff
// but it is exported as 'hello' in the object

moduleStuff.hello('Playfair');

// For loop to go through the array and write to the console 
// something like "Spike is from Cowboy Bebop".

for (character of characterList){
    // Template literal OR string concatenation
    console.log(`${character.name} is from ${character.show}`)
    console.log(character.name + ' is from ' + character.show);
}