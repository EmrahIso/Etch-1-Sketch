const rootEl = document.querySelector('html');

const rangeInputEl = document.querySelector('.range__input');
const rangeValueEl = document.querySelector('.range__value');
const rangeBtnEl = document.querySelector('.range-btn');

console.log(rangeBtnEl);

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


// Color and Clear Grid

const clearBtnEl = document.querySelector('#clearBtn');
etchFlexContEl.addEventListener('mouseover', colorAndClearGrid)

function colorAndClearGrid(e) {
    let eTargetEl = e.target;
    if(eTargetEl.className === 'etch__box') {
        eTargetEl.style.backgroundColor = 'var(--color-black)';
        clearBtnEl.addEventListener('click', e => {
            eTargetEl.style.backgroundColor = '';
        })
    }
}