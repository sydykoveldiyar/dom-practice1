let img = document.querySelector('img')
let filterInp = document.querySelector('#filter')
let active
let btns = Array.from(document.querySelectorAll('.btn'))
const blurEffect = () => {
    img.style.filter = `blur(${+filterInp.value}px)`
    active = 'Blur'
}
const sepiaEffect = () => {
    img.style.filter = `sepia(${+filterInp.value}%)`
    active = 'Sepia'
}
const invertEffect = () => {
    img.style.filter = `invert(${+filterInp.value}%)`
    active = 'Invert'
}
const switchActive = (active) => {
    switch(active){
        case 'Blur':
            blurEffect()
            break
        case 'Sepia':
            sepiaEffect()
            break
        case 'Invert':
            invertEffect()
            break
    }
}
btns.forEach(el => {
    el.addEventListener('click', (e) => {
        active = e.target.textContent
        switchActive(active)
    })
})
filterInp.addEventListener('input', () => {
    switchActive(active)
})