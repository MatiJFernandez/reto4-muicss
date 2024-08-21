const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Counter
let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// Reset transition
carouselSlide.addEventListener("transitionend", () => {
  if (images[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (images[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// Activar modal y  mostrar card
function activateModal() {
  // initialize modal element
  var modalEl = document.createElement("div");
  modalEl.style.width = "400px";
  modalEl.style.height = "300px";
  modalEl.style.margin = "100px auto";
  modalEl.style.padding = "20px";
  modalEl.style.backgroundColor = "#fff";
  modalEl.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

  // add content to the modal
  var modalContent = `
      <h2>Número de teléfono</h2>
      <p>+543586018120</p>
      <button class="mui-btn mui-btn--primary button-card-modal" onclick="closeModal()">Aceptar</button>
    `;
  modalEl.innerHTML = modalContent;

  // show modal
  mui.overlay("on", modalEl);
}

function closeModal() {
  mui.overlay("off");
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name === '' || email === '' || phone === '' || message === '') {
      alert('Todos los campos son obligatorios.');
      event.preventDefault();
      return;
  }
  
  if (!/^\d{10}$/.test(phone)) {
      alert('El teléfono debe tener 10 dígitos.');
      event.preventDefault();
      return;
  }
  
  // Si el formulario pasa todas las validaciones, se puede enviar
  alert('Formulario enviado exitosamente.');
});