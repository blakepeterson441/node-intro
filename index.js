const characters = [
    {
        name: "Spike",
        show: "Cowboy Bebop"
    },
    {
        name: "L",
        show: "Death Note"
    },
    {
        name: "Goku",
        show: "Dragonball Z"
    }, 
    {
        name: "Gon",
        show: "Hunter X Hunter"
    }
];

// For loop to go through the array and write to the console 
// something like "Spike is from Cowboy Bebop".

for (character of characters ){
    //console.log(`${character.name} is from ${character.show}`)
    console.log(character.name + ' is from ' + character.show);
}