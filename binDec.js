function invertBinary(binario) {
    // Invertir el número binario de abajo hacia arriba
    var binaryInverted = binario.split('').reverse().join('');
    return binaryInverted;
}

function decimalToBinaryGame() {
    var randomInt = Math.floor(Math.random() * 50) + 1;
    var randomBin = randomInt.toString(2);

    var gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    var inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    gameContainer.appendChild(inputContainer);

    var label = document.createElement('label');
    label.textContent = "Convierte este número (" + randomInt + ") a binario:";
    inputContainer.appendChild(label);

    var input = document.createElement('input');
    input.type = 'text';
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkDecimalToBinaryAnswer(input.value, randomBin);
        }
    });
    inputContainer.appendChild(input);

    var resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    gameContainer.appendChild(resultContainer);

    var restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', startGame);
    gameContainer.appendChild(restartButton);

    function checkDecimalToBinaryAnswer(answer, correctAnswer) {
        if (answer === correctAnswer || answer === invertBinary(correctAnswer)) {
            resultContainer.textContent = "Correcto, el resultado es '" + answer + "'!";
        } else {
            resultContainer.textContent = "Incorrecto. El número '" + randomInt + "' en binario es '" + correctAnswer + "'";
        }
        input.disabled = true;
        restartButton.style.display = 'block';
    }
}

function binaryToDecimalGame() {
    var randomInt = Math.floor(Math.random() * 50) + 1;
    var randomBin = randomInt.toString(2);

    var gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';

    var inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    gameContainer.appendChild(inputContainer);

    var label = document.createElement('label');
    label.textContent = "Convierte este número binario (" + randomBin + ") a decimal:";
    inputContainer.appendChild(label);

    var input = document.createElement('input');
    input.type = 'text';
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkBinaryToDecimalAnswer(input.value, randomInt);
        }
    });
    inputContainer.appendChild(input);

    var resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    gameContainer.appendChild(resultContainer);

    var restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', startGame);
    gameContainer.appendChild(restartButton);

    function checkBinaryToDecimalAnswer(answer, correctAnswer) {
        var decimalValue = parseInt(randomBin, 2);
        if (answer === decimalValue.toString()) {
            resultContainer.textContent = "Correcto, el resultado es '" + answer + "'!";
        } else {
            resultContainer.textContent = "Incorrecto. El número binario '" + randomBin + "' en decimal es '" + decimalValue + "'";
        }
        input.disabled = true;
        restartButton.style.display = 'block';
    }
}

var games = [decimalToBinaryGame, binaryToDecimalGame];
var gameContainer = document.getElementById('game-container');

function startGame() {
    gameContainer.innerHTML = '';
    var randomGame = games[Math.floor(Math.random() * games.length)];
    randomGame();
}

startGame();  