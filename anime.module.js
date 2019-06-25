const characters = [{
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

let something = 'blah';

function sayHello(name){
    console.log(`Hello ${name}`);
}

//has to be after the array
module.exports = {
    characters: characters,
    something: something,
    hello: sayHello
}
