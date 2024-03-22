const rootEl = document.querySelector('html');

const rangeInputEl = document.querySelector('.range-input');
const rangeValueEl = document.querySelector('.range-value');
const rangeBtnEl = document.querySelector('.range-btn');
const allEls = document.querySelectorAll('*');

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
    allEls.forEach(el => {
        el.classList.remove('is-used');
    })
}

//Adjusting height of etchFlexContEl

const etchFlexContElWidth = etchFlexContEl.offsetWidth;
etchFlexContEl.style.height = `${etchFlexContElWidth}px`;

// Opacity Mode *1

const opacityModeBtn = document.querySelector('#etch__opacityBtn');

// Random Color *1

const randomColorBtnEl = document.querySelector('#etch__random-colorBtn');
let activateRandomMode = false;

// Changing between colors and Color and Clear Grid and Custom Clear Grid

const customClearBtnEl = document.getElementById('etch__custom-clearBtn');


const etchGameModesEl = document.querySelector('.etch__game-modes');
const clearBtnEl = document.querySelector('#etch__clearBtn');

const colorBoxContEl = document.querySelector('.etch__colors');
const colorBoxEls = document.querySelectorAll('.etch__color-box');
let currentColor = '';

colorBoxContEl.addEventListener('click', e => {
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    })
    clearBtnEl.classList.remove('is-used');
    customClearBtnEl.classList.remove('is-used');
    randomColorBtnEl.classList.remove('is-used');
    opacityModeBtn.classList.remove('is-used');
    let colorClassArray = Array.from(e.target.classList);
    if(colorClassArray.includes('etch__colors')) {} else {
        e.target.classList.add('is-used');
    }
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
            activateRandomMode = false;
            eTargetEl.style.backgroundColor = '';
            e.target.classList.add('is-used');
            currentColor = '';
            colorBoxEls.forEach(colorBoxEl => {
                colorBoxEl.classList.remove('is-used');
            })
            opacityModeBtn.classList.remove('is-used');
            customClearBtnEl.classList.remove('is-used');
            randomColorBtnEl.classList.remove('is-used');
        })
        customClearBtnEl.addEventListener('click', e => {
            activateRandomMode = false;
            e.target.classList.add('is-used');
            clearBtnEl.classList.remove('is-used');
            randomColorBtnEl.classList.remove('is-used');
            opacityModeBtn.classList.remove('is-used');
            colorBoxEls.forEach(colorBoxEl => {
                colorBoxEl.classList.remove('is-used');
            })
            currentColor = 'transparent';
        })
    }
}

// Removing class when click on whitespace

document.addEventListener('click', e => {
    let classArray = Array.from(e.target.classList);
    if(!classArray.includes('is-used')){
        activateRandomMode = false;
        customClearBtnEl.classList.remove('is-used');
        clearBtnEl.classList.remove('is-used');
        randomColorBtnEl.classList.remove('is-used');
        opacityModeBtn.classList.remove('is-used');
        colorBoxEls.forEach(colorBoxEl => {
            colorBoxEl.classList.remove('is-used');
        })
        currentColor = '';
    }
})

// Random Color *2

randomColorBtnEl.addEventListener('click', e => {
    activateRandomMode = true;
    e.target.classList.add('is-used');
    clearBtnEl.classList.remove('is-used');
    opacityModeBtn.classList.remove('is-used');
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    });
    customClearBtnEl.classList.remove('is-used');
});

// Opacity Mode *2

opacityModeBtn.addEventListener('click', e => {
    e.target.classList.add('is-used');
    activateRandomMode = false;
    randomColorBtnEl.classList.remove('is-used');
    clearBtnEl.classList.remove('is-used');
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    });
    customClearBtnEl.classList.remove('is-used');
    currentColor = '';
})

// !!!!!!!!!! mouseover event napravi sa intervalima