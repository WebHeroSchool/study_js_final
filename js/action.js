//Посмотреть правила игры

function showRules() {
    document.getElementById("rules").style.display = "flex";
}

function accept() {
    document.getElementById("rules").style.display = "none";
}

//Запустить игру

function startGame() {
    let game = new Game;
    game.start();
}

class Game {
    constructor() {
        this.stepsCount = 0;
        this.started = false;
        this.animalsList = ['🐭', '🦁', '🐵', '🐭', '🐼', '🦊', '🐭', '🐷', '🐱', '🐭', '🐹','🐻', '🐭', '🐨', '🐸', '🐭'];
        this.currentAnimalIndex = undefined;
        this.timerId = 0;
        this.minksList = document.querySelectorAll( '.zone__mink' );
        this.currentMinkIndex = undefined;
        this.clickHandle = this.handleClick.bind(this);
        }

    start() {
        this.timerId = setInterval(() => {
            this.step();
          }, 1500 );
        this.started = true;
        console.log("Игра запущена");
        
        document.getElementById("btn").disabled = true;
    }

    stop() {
        for (var i = 0; i < this.minksList.length; i++) {
            this.minksList[this.currentMinkIndex].classList.add('animal-box');
            this.minksList[this.currentMinkIndex].innerHTML = this.animalsList[this.currentAnimalIndex];
            this.minksList[this.currentMinkIndex].addEventListener('click', this.clickHandle, false);
            this.minksList[i].classList.remove('animal-box');
            this.minksList[i].innerHTML = ""; 
        }

        this.started = false;
        clearInterval(this.timerId);
        console.log("Игра остановлена");
    }

    reset() {
        if (this.isStarted === true) {
            this.stop;
        }
    }

    isStarted() {
        return this.started;
    }

    step() {

        if (this.currentMinkIndex !== undefined) {
            this.minksList[this.currentMinkIndex].removeEventListener('click', this.clickHandle, false);
            this.minksList[this.currentMinkIndex].classList.remove('animal-box');
            this.minksList[this.currentMinkIndex].innerHTML = "";
        }

        this.currentAnimalIndex = Math.floor( Math.random() * this.animalsList.length );
        this.currentMinkIndex = Math.floor( Math.random() * this.minksList.length );
        this.minksList[this.currentMinkIndex].classList.add('animal-box');
        this.minksList[this.currentMinkIndex].innerHTML = this.animalsList[this.currentAnimalIndex];
        this.minksList[this.currentMinkIndex].addEventListener('click', this.clickHandle, false);
        
        this.stepsCount++;
        console.log('Шаг ' + this.stepsCount);
        if (this.stepsCount == 13)
        {
            this.stop();
        }
    }

    handleClick() {
        if (this.animalsList[this.currentAnimalIndex] == '🐭') {
            console.log("Мышь!");
        }
        else if (this.animalsList[this.currentAnimalIndex] !== '🐭') {
            console.log("Не мышь!");
        }
    }
}