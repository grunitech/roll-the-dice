console.log('Running game.js starts');

// initial state
let state = {
    page: 'welcome',
    players: [{}, {}],
    rounds: 3,
    currentPlayer: 0,
    x: {}
};
console.log('Initial state', state);

// view functions

const hideMains = () => document.querySelectorAll('main').forEach(e => e.style.display = 'none');
const showCurrentPage = (s) => document.getElementById(s.page).style.display = 'block';

const displayPlayerForm = (n/*Index*/) => {
    console.log('display player');

    // span with text
    const span = document.createElement('span');
    span.innerHTML = 'Player number #' + n;

    // input with handler
    const inp = document.createElement('input');
    // inp.addEventListener('keyup', () => {
    //     setPlayerName(state, n, inp.value);
    //     console.log(state.players);
    // });

    // wrapper
    const sec = document.createElement('section');
    sec.append(span);
    sec.append(inp);
    return sec;
};

const displayPlayers = (s) => {
    console.log('display players');
    const root = document.querySelector('.players-list');
    for (let a = 0; a < s.players.length; ++a) {
        root.appendChild(displayPlayerForm(a));
    }
};

function render(s /*State*/) {
    console.log('Render', s);
    hideMains();
    showCurrentPage(s);

    if ('players' === s.page) {
        displayPlayers(s);
    }
}

// actions (data)

function startNewGame(s) {
    state = {...s, page: 'players'};
}

function setPlayerName(state, player/*Number*/, name/*String*/) {
    state.players[player].name = name;
}

// attach events

// start button
const start = document.getElementById('start');
start.addEventListener('click', () => {
    startNewGame(state);
    render(state);
});


document.addEventListener('DOMContentLoaded', () => render(state));
console.log('Running game.js ends');
