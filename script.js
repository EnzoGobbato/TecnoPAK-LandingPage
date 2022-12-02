const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = '¡Bienvenido a nuesto sitio web!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

// Scripts para contacto sector venta / servicio tecnico

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container2')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))