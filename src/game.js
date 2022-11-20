console.log('Running game.js starts');

// initial state
let state = {
    page: 'welcome',
    players: [{}, {}],
    rounds: 3,
    currentPlayer: 0,
};


// view functions

const hideMains = () => document.querySelectorAll('main').forEach(e => e.style.display = 'none');
const showCurrentPage = (s) => document.getElementById(s.page).style.display = 'block';


const displayPlayers = (s) => {
    console.log('display players');
    const root = document.querySelector('.players-list');
    for (let a = 0; a < s.players.length; ++a) {
        // creating span
        const span = document.createElement('span');
        span.innerHTML = 'Player number #' + a;

        // creating input
        const inp = document.createElement('input');

        // wrapping section for span & input
        const sec = document.createElement('section');
        sec.appendChild(span);
        sec.appendChild(inp);

        // append wrapper to root
        root.appendChild(sec);
    }
};


function render(s /*State*/) {
    hideMains();
    showCurrentPage(s);

    if ('players' === s.page) {
        displayPlayers(s);
    }
    if ('game' === s.page) {
        // displayGame
    }
}

// actions (data)

function startNewGame(s) {
    state = {...s, page: 'players'};
}

function letsPlay(s) {
    // read all players names
    // update state with players
    // update state with page
}


// attach events

// start button
const start = document.getElementById('start');
start.addEventListener('click', () => {
    startNewGame(state);
    render(state);
});

const letStart = document.getElementById('let-start');
letStart.addEventListener('click', () => {
    // do something
    letsPlay(state);
    render(state);
});


document.addEventListener('DOMContentLoaded', () => render(state));
console.log('Running game.js ends');
