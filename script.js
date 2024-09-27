function isSwapPossible(obj, closed) {
    const index1 = Number(obj.getAttribute("index"));
    const index2 = Number(closed.getAttribute("index"));

    // Define the valid swaps for each index in the matrix
    const validSwaps = {
        1: [2, 4],
        2: [1, 3, 5],
        3: [2, 6],
        4: [1, 5, 7],
        5: [2, 4, 6, 8],
        6: [3, 5, 9],
        7: [4, 8],
        8: [5, 7, 9],
        9: [6, 8]
    };

    return validSwaps[index1].includes(index2);
}

function swapCols(col, closed) {
    closed.innerHTML = col.innerHTML;
    closed.classList.remove("col-9-closed");
    closed.classList.add(`col-${col.children[0].innerText}`);
    col.classList.add("col-9-closed");
    col.classList.remove(`col-${col.children[0].innerText}`);
    col.innerHTML = ""; // Clear the moved column
}

function isSolved() {
    const cols = document.querySelectorAll(".col");
    for (let i = 0; i < 9; i++) {
        const index = cols[i].getAttribute("index");
        if (index != i + 1 || index != cols[i].classList[1].substring(4, 5)) {
            return false;
        }
    }
    return true;
}

function shuffle(...array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function isSolvable(shuffledCols) {
    let inversions = 0;
    const array = shuffledCols.map(col => Number(col.className.split('-')[1]));

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] !== 0 && array[i] > array[j]) {
                    inversions++;
                }
            }
        }
    }
    return inversions % 2 === 0; // Even number of inversions means solvable
}

function shufflePuzzle() {
    const cols = Array.from(document.querySelectorAll(".col"));
    let shuffledCols = shuffle(...cols);

    const rows = document.querySelectorAll(".row");
    let index = 0;
    rows.forEach(row => {
        row.innerHTML = ''; // Clear the row
        for (let i = 0; i < 3; i++) {
            row.appendChild(shuffledCols[index]);
            shuffledCols[index].setAttribute('index', index + 1);
            index++;
        }
    });

    // Shuffle while ensuring solvability
    if (!isSolvable(shuffledCols)) {
        shufflePuzzle();
    }
}

function isValidURL(input) {
    const purifiedInput = input.trim();
    const urlPattern = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
    return urlPattern.test(purifiedInput);
}

const score = [0, 0, 0]; // current score, lowest score, highest score

function updateScore() {
    score[0]++;
    if (score[0] > Number(localStorage.hclick)) {
        localStorage.hclick = score[0];
    }
    score[2] = Number(localStorage.hclick);
    document.querySelector(".highest-click").innerText = score[2];
    document.querySelector(".click").innerText = score[0];
}

function setScores() {
    score[1] = Number(localStorage.lclick) || 0;
    score[2] = Number(localStorage.hclick) || 0;
    document.querySelector(".lowest-click").innerText = score[1];
    document.querySelector(".highest-click").innerText = score[2];
}
