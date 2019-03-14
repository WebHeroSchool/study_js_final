function startGame() {


const emojiArray = ['🦁', '🐵', '🦊', '🐱', '🐭', '🐹', '🐻', '🐨'];

const getRandomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length -1 )];

console.log(getRandomEmoji);

const animalMink = document.createElement('div');

animalMink.className = "mink__animal";

animalMink.id = "mink-animal";

document.getElementById("mink").appendChild(animalMink);

const animalBox = document.createElement('span');

animalBox.className = "animal-box";

animalBox.id ="animal-box";

document.getElementById("mink-animal").appendChild(animalBox);

const addAnimal = document.createTextNode(getRandomEmoji);


document.getElementById("animal-box").appendChild(addAnimal);

}





































/*document.body.innerText = String.fromCodePoint();*/