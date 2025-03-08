const left = document.querySelector('.left')
const right = document.querySelector('.right')
const center = document.querySelector('.center')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

center.addEventListener('mouseenter', () => {
    container.classList.add('hover-center');
})

center.addEventListener('mouseleave', () => {
    container.classList.remove('hover-center');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})


