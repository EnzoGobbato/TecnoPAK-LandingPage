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

//Scripts de EmailJS

const btn = document.getElementById('buttonSend');
document.getElementById('formulario')
  .addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_pxiytr7';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      Swal.fire({
          title: 'Correo enviando correctamente! Nos pondremos en contacto con usted lo antes posible para coordinar, saludos equipo de TecnoPAK.-',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
}, (err) => {
  btn.value = 'Enviar Mensaje';
  alert(JSON.stringify(err));
});
});
