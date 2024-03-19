const rootEl = document.querySelector('html');

const rangeInputEl = document.querySelector('.range__input');
const rangeValueEl = document.querySelector('.range__value');

const etchFlexContEl = document.querySelector('.etch__flex-cont');

rangeInputEl.addEventListener('change', e => {
    rangeValueEl.textContent = `${e.target.value}x${e.target.value}`;
})

createGrid(16);

function createGrid(range){
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

const etchFlexContElWidth = etchFlexContEl.offsetWidth;
etchFlexContEl.style.height = `${etchFlexContElWidth}px`;
const clearBtnEl = document.querySelector('#clearBtn');


etchFlexContEl.addEventListener('mouseover', e => {
    let eTargetEl = e.target;
    if(eTargetEl.className === 'etch__box') {
        eTargetEl.style.backgroundColor = 'var(--color-black)';
        clearBtnEl.addEventListener('click', e => {
            eTargetEl.style.backgroundColor = '';
        })
    }
})

