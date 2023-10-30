var buttons = document.querySelectorAll('.b1');
var currentPlayer = 'X'; // 'X' or 'O' will represent player turns
var clickCount = 0;
var playerTurnElement = document.getElementById('he1');
const restartButton = document.getElementById('restartButton');
// var Player=document.getElementById('he2')

restartButton.addEventListener('click', restartGame); // Attach event listener for Restart button

function restartGame() {
    // Clear cell contents
    b1s.forEach(b1 => b1.textContent = '');

    // Reset current player to 'X'
    currentPlayer = 'X';
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!button.textContent) {
            button.style.backgroundImage = currentPlayer === 'X' ? "url('download.png')" : "url('download1.png')";
            button.style.backgroundSize = "cover"; // Set background size property
            clickCount++;
            button.disabled = true;

            if (checkWin()) {
                playerTurnElement.textContent = `Player ${currentPlayer} Won`;
                disableButtons();
            } else if (clickCount === 9) {
                playerTurnElement.textContent = "It's a draw!";
                disableButtons();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                playerTurnElement.textContent = `Player ${currentPlayer} Turn`;
            }
        }
    });
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        const buttonA = buttons[a];
        const buttonB = buttons[b];
        const buttonC = buttons[c];

        if (buttonA.style.backgroundImage &&
            buttonA.style.backgroundImage === buttonB.style.backgroundImage &&
            buttonA.style.backgroundImage === buttonC.style.backgroundImage) {
            return true;
        }
    }

    return false;
}


function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}


function restartPage() {
    // Reload the current page
    location.reload(true);
}