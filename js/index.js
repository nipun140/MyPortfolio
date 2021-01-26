////////////////////////////////////// navbar////////////////////////////////////////
const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const firstSlider = document.querySelector('.slider.first');
const secondSlider = document.querySelector('.slider.second');
const thirdSlider = document.querySelector('.slider.third');
const sliders = document.querySelectorAll('.slider');
const modalMenu = document.querySelector('.modalMenu');

function showSlides() {
    console.log('showslide')
    setTimeout(() => {
        firstSlider.classList.add('animateSlider')
    }, 500)
    setTimeout(() => {
        secondSlider.classList.add('animateSlider')
    }, 600)
}

openBtn.addEventListener('click', () => {
    modalMenu.classList.remove('animateClose');
    modalMenu.classList.add('animateOpen');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    showSlides();
})

closeBtn.addEventListener('click', () => {
    modalMenu.classList.remove('animateOpen')
    modalMenu.classList.add('animateClose')
    for (i = 0; i < sliders.length; ++i) { //remove animate class from all sliders
        sliders[i].classList.remove("animateSlider");
    }
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';


})

///////////////////////////////////////////////// welcome div//////////////////////////////////////
letterH = document.querySelector('.letters.one')
letterE = document.querySelector('.letters.two')
letterL1 = document.querySelector('.letters.three')
letterL2 = document.querySelector('.letters.four')
letterO = document.querySelector('.letters.five')

setTimeout(() => {
    letterH.classList.add('animateShow')
}, 600)
setTimeout(() => {
    letterE.classList.add('animateShow')
}, 800)
setTimeout(() => {
    letterL1.classList.add('animateShow')
}, 1000)
setTimeout(() => {
    letterL2.classList.add('animateShow')
}, 1200)
setTimeout(() => {
    letterO.classList.add('animateShow')
}, 1400)

//////////////////////////////////////////////// skills //////////////////////////////////////////
const skillsCont = document.querySelector('.skillsCont');
const skillsId = document.querySelector('.skills');
const skillc = document.querySelector('.skill.c .innerBar');

skillsId.addEventListener('transitionend', () => {
        showPerc();
    })
    // if (skillsId.style.opacity == '1') {
    //     console.log('called')
    //     showPerc();
    // }

function showPerc() {
    setTimeout(() => {
        skillc.style.width = '61%'
    }, 600)
    setTimeout(() => {
        document.querySelector('.skill.cplusplus .innerBar').style.width = '61%'
    }, 700)
    setTimeout(() => {
        document.querySelector('.skill.java .innerBar').style.width = '71%'
    }, 800)
    setTimeout(() => {
        document.querySelector('.skill.javascript .innerBar').style.width = '64%'
    }, 900)
    setTimeout(() => {
        document.querySelector('.skill.html .innerBar').style.width = '84%'
    }, 1000)
    setTimeout(() => {
        document.querySelector('.skill.css .innerBar').style.width = '80%'
    }, 1100)
    setTimeout(() => {
        document.querySelector('.skill.react .innerBar').style.width = '51%'
    }, 1200)
    setTimeout(() => {
        document.querySelector('.skill.node .innerBar').style.width = '55%'
    }, 1300)
    setTimeout(() => {
        document.querySelector('.skill.express .innerBar').style.width = '55%'
    }, 1400)
    setTimeout(() => {
        document.querySelector('.skill.php .innerBar').style.width = '70%'
    }, 1500)
    setTimeout(() => {
        document.querySelector('.skill.sql .innerBar').style.width = '88%'
    }, 1600)
    setTimeout(() => {
        document.querySelector('.skill.mongodb .innerBar').style.width = '84%'
    }, 1700)
}