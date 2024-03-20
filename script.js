const rootEl = document.querySelector('html');

const rangeInputEl = document.querySelector('.range__input');
const rangeValueEl = document.querySelector('.range__value');
const rangeBtnEl = document.querySelector('.range-btn');

const etchFlexContEl = document.querySelector('.etch__flex-cont');

// Creating first standard grid 16x16

createGrid(16);

// Changing value of rangeValueEl

rangeInputEl.addEventListener('change', e => {
    rangeValueEl.textContent = `${e.target.value}x${e.target.value}`;
})


// Create new grid onclick of rangeBtnEl based on users number of cells 
rangeBtnEl.addEventListener('click', e => {
    createGrid(rangeInputEl.value);
})

function createGrid(range){
    etchFlexContEl.innerHTML = '';
    for(let i = 1; i <= range; i++) {
        const etchFlexRowEl = document.createElement('div');
        etchFlexRowEl.setAttribute('class', 'etch__flex-row');
        for(let j = 1; j <= range; j++) {
            const etchBoxEl = document.createElement('div');
            etchBoxEl.setAttribute('class', 'etch__box');
            etchFlexRowEl.appendChild(etchBoxEl);
        }
        etchFlexContEl.appendChild(etchFlexRowEl);
    }
}

//Adjusting height of etchFlexContEl

const etchFlexContElWidth = etchFlexContEl.offsetWidth;
etchFlexContEl.style.height = `${etchFlexContElWidth}px`;


// Changing between colors

const colorBoxContEl = document.querySelector('.colors');
let currentColor = '#fff';

colorBoxContEl.addEventListener('click', e => {
    const colorIdentifier = e.target.className.split(' ')[1];
    switch(colorIdentifier) {
        case 'color-box--1':
            currentColor = 'var(--monaco-red)';
        break;
        case 'color-box--2':
            currentColor = 'var(--monaco-white)';
        break;
        case 'color-box--3':
            currentColor = 'var(--estonia-blue)';
        break;
        case 'color-box--4':
            currentColor = 'var(--estonia-black)';
        break;
        case 'color-box--5':
            currentColor = 'var(--finland-blue)';
        break;
        case 'color-box--6':
            currentColor = 'var(--czech-red)';
        break;
        case 'color-box--7':
            currentColor = 'var(--uk-dark-blue)';
        break;
        case 'color-box--8':
            currentColor = 'var(--color-yellow)';
        break;
        case 'color-box--9':
            currentColor = 'var(--color-orange)';
        break;
        case 'color-box--10':
            currentColor = 'var(--color-purple)';
        break;
        case 'color-box--11':
            currentColor = 'var(--color-green)';
        break
    }
})

// Color and Clear Grid

const clearBtnEl = document.querySelector('#clearBtn');
etchFlexContEl.addEventListener('mouseover', colorAndClearGrid)

function colorAndClearGrid(e) {
    let eTargetEl = e.target;
    if(eTargetEl.className === 'etch__box') {
        eTargetEl.style.backgroundColor = `${currentColor}`;
        clearBtnEl.addEventListener('click', e => {
            eTargetEl.style.backgroundColor = '';
        })
    }
}


// !!!!!!!!!! mouseover event napravi sa intervalima