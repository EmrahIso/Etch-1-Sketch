const rootEl = document.querySelector('html');

const rangeInputEl = document.querySelector('.range-input');
const rangeValueEl = document.querySelector('.range-value');
const rangeBtnEl = document.querySelector('.range-btn');
const allEls = document.querySelectorAll('*');

const etchFlexContEl = document.querySelector('.etch__flex-cont');

// Creating first standard grid 16x16

createGrid(16);

// Changing value of rangeValueEl

rangeInputEl.addEventListener('input', e => {
    rangeValueEl.textContent = `${e.target.value} x ${e.target.value}`;
    let rangeValue = e.target.value;
    e.target.style.background = `linear-gradient(to right, var(--color-green-light) ${rangeValue}%, var(--color-black-2) ${rangeValue}%)`;
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

const colorBoxEls = document.querySelectorAll('.etch__color-box');
// Opacity Mode *1

const opacityModeBtn = document.querySelector('#etch__opacityBtn');

// Random Color *1

const randomColorBtnEl = document.querySelector('#etch__random-colorBtn');
let activateRandomMode = false;

// Changing between colors and Color and Clear Grid and Custom Clear Grid

const customClearBtnEl = document.getElementById('etch__custom-clearBtn');


const clearBtnEl = document.querySelector('#etch__clearBtn');

const colorBoxContEl = document.querySelector('.etch__colors');
let currentColor = 'var(--estonia-black)';

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
            currentColor = 'var(--estonia-black)';
            e.target.style.outline = '3px solid var(--estonia-black)';
        break;
        case 'etch__color-box--2':
            currentColor = 'var(--uk-dark-blue)';
            e.target.style.outline = '3px solid var(--uk-dark-blue)';
        break;
        case 'etch__color-box--3':
            currentColor = 'var(--finland-blue)';
            e.target.style.outline = '3px solid var(--finland-blue)';
        break;
        case 'etch__color-box--4':
            currentColor = 'var(--estonia-blue)';
            e.target.style.outline = '3px solid var(--estonia-blue)';
        break;
        case 'etch__color-box--5':
            currentColor = 'var(--color-green)';
            e.target.style.outline = '3px solid var(--color-green)';
        break;
        case 'etch__color-box--6':
            currentColor = 'var(--czech-red)';
            e.target.style.outline = '3px solid var(--czech-red)';
        break;
        case 'etch__color-box--7':
            currentColor = 'var(--monaco-red)';
            e.target.style.outline = '3px solid var(--monaco-red)';
        break;
        case 'etch__color-box--8':
            currentColor = 'var(--color-purple)';
            e.target.style.outline = '3px solid var(--color-purple)';
        break;
        case 'etch__color-box--9':
            currentColor = 'var(--color-orange)';
            e.target.style.outline = '3px solid var(--color-orange)';
        break;
        case 'etch__color-box--10':
            currentColor = 'var(--color-yellow)';
            e.target.style.outline = '3px solid var(--color-yellow)';
        break;
    }
})

// Set color to etch__box elements

let over = false;
let eTargetEl;

etchFlexContEl.addEventListener('mouseover', e => {
    over = true;
    eTargetEl = e.target;
});

setInterval(() => {
    if(over) {
        colorAndClearGrid();
    }
    over = false;
}, 35)

function colorAndClearGrid(e) {
    let targetClassListArray = Array.from(eTargetEl.classList);
    if(opacityModeBtn.className == 'is-used') {
        if(targetClassListArray.includes('etch__box')) {
            if(!targetClassListArray.includes('op-10')) {
                eTargetEl.classList.add('op-10');
            }  else if(!targetClassListArray.includes('op-20') && targetClassListArray.includes('op-10')) {
                eTargetEl.classList.add('op-20');
            } else if(!targetClassListArray.includes('op-30') && targetClassListArray.includes('op-20')) {
                eTargetEl.classList.add('op-30');
            } else if(!targetClassListArray.includes('op-40') && targetClassListArray.includes('op-30')) {
                eTargetEl.classList.add('op-40');
            } else if(!targetClassListArray.includes('op-50') && targetClassListArray.includes('op-40')) {
                eTargetEl.classList.add('op-50');
            } else if(!targetClassListArray.includes('op-60') && targetClassListArray.includes('op-50')) {
                eTargetEl.classList.add('op-60');
            } else if(!targetClassListArray.includes('op-70') && targetClassListArray.includes('op-60')) {
                eTargetEl.classList.add('op-70');
            } else if(!targetClassListArray.includes('op-80') && targetClassListArray.includes('op-70')) {
                eTargetEl.classList.add('op-80');
            } else if(!targetClassListArray.includes('op-90') && targetClassListArray.includes('op-80')) {
                eTargetEl.classList.add('op-90');
            } else if(!targetClassListArray.includes('op-100') && targetClassListArray.includes('op-90')) {
                eTargetEl.classList.add('op-100');
            }
        } 
    } else {
        eTargetEl.classList.remove('op-10');
        eTargetEl.classList.remove('op-20');
        eTargetEl.classList.remove('op-30');
        eTargetEl.classList.remove('op-40');
        eTargetEl.classList.remove('op-50');
        eTargetEl.classList.remove('op-60');
        eTargetEl.classList.remove('op-70');
        eTargetEl.classList.remove('op-80');
        eTargetEl.classList.remove('op-90');
        eTargetEl.classList.remove('op-100');
    }
    if(targetClassListArray.includes('etch__box')) {
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
                case 4:
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
    }
}

// Clear Mode 

function clearBtnFunc(e) {
    activateRandomMode = false;
    currentColor = '';
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    })
    opacityModeBtn.classList.remove('is-used');
    customClearBtnEl.classList.remove('is-used');
    randomColorBtnEl.classList.remove('is-used');
    let etchBoxEls = document.querySelectorAll('.etch__box');
    etchBoxEls.forEach(etchBoxEl => {
        etchBoxEl.style.backgroundColor = '';
        etchBoxEl.classList.remove('op-10');
        etchBoxEl.classList.remove('op-20');
        etchBoxEl.classList.remove('op-30');
        etchBoxEl.classList.remove('op-40');
        etchBoxEl.classList.remove('op-50');
        etchBoxEl.classList.remove('op-60');
        etchBoxEl.classList.remove('op-70');
        etchBoxEl.classList.remove('op-80');
        etchBoxEl.classList.remove('op-90');
        etchBoxEl.classList.remove('op-100');
    })
}

// Custom Btn Mode

function customBtnFunc(e) {
    activateRandomMode = false;
    e.target.classList.add('is-used');
    clearBtnEl.classList.remove('is-used');
    randomColorBtnEl.classList.remove('is-used');
    opacityModeBtn.classList.remove('is-used');
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    })
    currentColor = 'transparent';
}



// Random Color *2

function randomColorFunc(e) {
    activateRandomMode = true;
    e.target.classList.add('is-used');
    clearBtnEl.classList.remove('is-used');
    opacityModeBtn.classList.remove('is-used');
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    });
    customClearBtnEl.classList.remove('is-used');
}

// Opacity Mode *2

function opacityModeFunc(e) {
    e.target.classList.add('is-used');
    activateRandomMode = false;
    randomColorBtnEl.classList.remove('is-used');
    clearBtnEl.classList.remove('is-used');
    colorBoxEls.forEach(colorBoxEl => {
        colorBoxEl.classList.remove('is-used');
    });
    customClearBtnEl.classList.remove('is-used');
    currentColor = 'var(--color-black)';
}

//Events

// Removing class when click on whitespace

clearBtnEl.addEventListener('click', clearBtnFunc);
customClearBtnEl.addEventListener('click', customBtnFunc);

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

randomColorBtnEl.addEventListener('click', randomColorFunc);
opacityModeBtn.addEventListener('click', opacityModeFunc);