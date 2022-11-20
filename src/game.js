console.log('Running game.js starts');
// const mains = ['welcome', 'players', 'game', 'scores'];
// helpers functions (shortcuts)
const qas = document.querySelectorAll.bind(document);
const byId = document.getElementById.bind(document);

// initial state
let state = {
    page: 'welcome',
    players: [],
    rounds: 3,
    currentPlayer: 0,
    x: {}
};
console.log('Initial state', state);

// view functions

const hideMains = () => qas('main').forEach(e => e.style.display = 'none');
const showCurrentPage = (s) => byId(s.page).style.display = 'block';

const playerForm = (n) => {
    const sec = document.createElement('section');
    const span = document.createElement('span');
    const inp = document.createElement('input');
    sec.append(span);
    sec.append(inp);
    return sec;
};

const playersForm = () => {

};

function render(s) {
    hideMains();
    showCurrentPage(s);

}

// actions (data)

function startNewGame(s) {
    return {...s, page: 'players'};
}

// attach events

// start button
const start = document.getElementById('start');
start.addEventListener('click', () => {
    state = startNewGame(state);
    render(state);
});


document.addEventListener('DOMContentLoaded', () => render(state));
console.log('Running game.js ends');
