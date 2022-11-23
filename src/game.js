
const someButton = document.querySelector('.start');
console.log(someButton);

const state = {
    playing: false,
    player: 'X',
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
}

function clickOnTile(e) {
    if (!state.playing) {
        return;
    }
    const col = Number(e.target.getAttribute('attr-col'));
    const row = parseInt(e.target.getAttribute('attr-row'));
    state.board[col][row] = state.player;
    state.player = state.player === 'X' ? 'O' : 'X';

    // checkForWins();
    render();
}

function checkForWin() {
    const b = state.board;
    for (let i=0 ; i<3 ; ++i) {
        if (b[i][0] === b[i][1] && b[i][1] === b[i][2]) {
            // line win
        }
        if (b[0][i] === b[1][i] && b[1][i] === b[2][i]) {
            // row win
        }
    }
    if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
        // left diagonal win
    }
    if (b[2][0] === b[1][1] && b[1][1] === b[0][2]) {
        // right diagonal win
    }
}


// const sButton = document.querySelector('.start');


const startButton = () => document.querySelector('.start');
const endButton = () => document.querySelector('.end');
const tds = () => document.querySelectorAll('td');

// every action changed the data (state) and call "render"

function load() {
    state.playing = false;
    render();
}

function start() {
    state.playing = true;
    state.player = 'X';
    state.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    render();
}

function end() {
    state.playing = false;
    render();
}



function render() {
    startButton().style.display = state.playing ? 'none' : 'inline-block';
    endButton().style.display = state.playing ? 'inline-block' : 'none';

    tds().forEach(function (td) {
        const col = Number(td.getAttribute('attr-col'));
        const row = parseInt(td.getAttribute('attr-row'));
        td.innerHTML = state.board[col][row];
    });
}


// **ALL** our application events (inputs)

// document.addEventListener('DOMContentLoaded', function () {
//     startButton().addEventListener('click', () => start());
//     endButton().addEventListener('click', () => end());
//
//     for (const td of tds()) {
//         td.addEventListener('click', clickOnTile);
//     }
//     load();
// });


