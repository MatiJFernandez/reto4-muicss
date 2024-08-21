document.addEventListener('DOMContentLoaded', function() {
    // Función para activar el modal
    function activarModal() {
      const modal = document.getElementById('modal');
      if (modal) {
        modal.style.display = 'block';
      }
    }
  
    // Función para cerrar el modal
    function cerrarModal() {
      const modal = document.getElementById('modal');
      if (modal) {
        modal.style.display = 'none';
      }
    }
  
    // Agregar eventos a los botones
    document.querySelectorAll('.js-show-sidedrawer').forEach(button => {
      button.addEventListener('click', function() {
        activarModal();
      });
    });
  
    document.querySelectorAll('.js-hide-sidedrawer').forEach(button => {
      button.addEventListener('click', function() {
        cerrarModal();
      });
    });
  
    // Cerrar el modal si se hace clic fuera del modal
    window.addEventListener('click', function(event) {
      const modal = document.getElementById('modal');
      if (modal && event.target === modal) {
        cerrarModal();
      }
    });
  });