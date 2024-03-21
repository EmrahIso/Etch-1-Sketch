const rootEl = document.querySelector('html');

const rangeInputEl = document.querySelector('.range-input');
const rangeValueEl = document.querySelector('.range-value');
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


// Random Color 

const randomColorBtnEl = document.querySelector('#etch__random-colorBtn');
let activateRandomMode = false;

randomColorBtnEl.addEventListener('click', e => {
    activateRandomMode = true;
});

function chooseRandomColor() {
    randomNumber = Math.round(Math.random()*10);
    console.log(randomNumber);
}

// Changing between colors

const colorBoxContEl = document.querySelector('.etch__colors');
const colorBoxEls = document.querySelectorAll('.etch__color-box');
let currentColor = '';

colorBoxContEl.addEventListener('click', e => {
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    })
    e.target.classList.add('is-used');
    activateRandomMode = false;
    const colorIdentifier = e.target.className.split(' ')[1];
    switch(colorIdentifier) {
        case 'etch__color-box--1':
            currentColor = 'var(--monaco-red)';
        break;
        case 'etch__color-box--2':
            currentColor = 'var(--estonia-blue)';
        break;
        case 'etch__color-box--3':
            currentColor = 'var(--estonia-black)';
        break;
        case 'etch__color-box--4':
            currentColor = 'var(--finland-blue)';
        break;
        case 'etch__color-box--5':
            currentColor = 'var(--czech-red)';
        break;
        case 'etch__color-box--6':
            currentColor = 'var(--uk-dark-blue)';
        break;
        case 'etch__color-box--7':
            currentColor = 'var(--color-yellow)';
        break;
        case 'etch__color-box--8':
            currentColor = 'var(--color-orange)';
        break;
        case 'etch__color-box--9':
            currentColor = 'var(--color-purple)';
        break;
        case 'etch__color-box--10':
            currentColor = 'var(--color-green)';
        break;
    }
})

// Color and Clear Grid

const clearBtnEl = document.querySelector('#etch__clearBtn');
etchFlexContEl.addEventListener('mouseover', colorAndClearGrid)

function colorAndClearGrid(e) {
    let eTargetEl = e.target;
    if(eTargetEl.className === 'etch__box') {
        if(activateRandomMode){
            let randomNumber = Math.round(Math.random() * 10);
            switch(randomNumber) {
                case 1:
                    currentColor = 'var(--monaco-red)';
                break;
                case 2:
                    currentColor = 'var(--estonia-blue)';
                break;
                case 3:
                    currentColor = 'var(--estonia-black)';
                break;
                case 3:
                    currentColor = 'var(--finland-blue)';
                break;
                case 5:
                    currentColor = 'var(--czech-red)';
                break;
                case 6:
                    currentColor = 'var(--uk-dark-blue)';
                break;
                case 7:
                    currentColor = 'var(--color-yellow)';
                break;
                case 8:
                    currentColor = 'var(--color-orange)';
                break;
                case 9:
                    currentColor = 'var(--color-purple)';
                break;
                case 10:
                    currentColor = 'var(--color-green)';
                break;
            }
        }
        eTargetEl.style.backgroundColor = `${currentColor}`;
        clearBtnEl.addEventListener('click', e => {
            eTargetEl.style.backgroundColor = '';
        })
    }
}


// Custom Clear Grid

const customClearBtnEl = document.getElementById('etch__custom-clearBtn');

customClearBtnEl.addEventListener('click', e => {
    currentColor = 'transparent';
})

// !!!!!!!!!! mouseover event napravi sa intervalima