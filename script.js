let blur = document.querySelector('#blur')
let sepia = document.querySelector('#sepia')
let invert = document.querySelector('#invert')

let img = document.querySelector('img')

let filterInp = document.querySelector('#filter')

let active

blur.addEventListener('click', () => {
    img.style.filter = `blur(${+filterInp.value}px)`
    active = blur
})
sepia.addEventListener('click', () => {
    img.style.filter = `sepia(${+filterInp.value}%)`
    active = sepia
})
invert.addEventListener('click', () => {
    img.style.filter = `invert(${+filterInp.value}%)`
    active = invert
})

filterInp.addEventListener('input', () => {
    active.click()
})