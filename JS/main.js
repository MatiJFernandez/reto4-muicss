document.addEventListener('DOMContentLoaded', function () {
    var bodyEl = document.body;
    var sidedrawerEl = document.getElementById('sidedrawer');

    function showSidedrawer() {
        // Crear overlay
        var overlayEl = document.createElement('div');
        overlayEl.className = 'overlay';
        overlayEl.addEventListener('click', function () {
            hideSidedrawer();
        });
        document.body.appendChild(overlayEl);

        // Mover sidedrawer al overlay y mostrarlo
        overlayEl.appendChild(sidedrawerEl);
        setTimeout(function () {
            sidedrawerEl.classList.add('active');
        }, 20);
    }

    function hideSidedrawer() {
        bodyEl.classList.toggle('hide-sidedrawer');
        var overlayEl = document.querySelector('.overlay');
        if (overlayEl) {
            overlayEl.remove();
        }
        sidedrawerEl.classList.remove('active');
        document.body.appendChild(sidedrawerEl);
    }

    var showButtons = document.querySelectorAll('.js-show-sidedrawer');
    showButtons.forEach(function (button) {
        button.addEventListener('click', showSidedrawer);
    });

    var hideButtons = document.querySelectorAll('.js-hide-sidedrawer');
    hideButtons.forEach(function (button) {
        button.addEventListener('click', hideSidedrawer);
    });
});

function activarModal() {

    // Crear el modal
    var modal = document.createElement('div');
    modal.style.width = '400px';
    modal.style.height = '300px';
    modal.style.margin = '100px auto';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    modal.style.position = 'relative';

    // Crear el formulario
    var form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '10px';

     // Crear el mensaje de ingreso
    var loginMessage = document.createElement('h2');
    loginMessage.innerText = 'Bienvenido!';
    loginMessage.style.marginBottom = '20px';
    loginMessage.style.textAlign = 'center';

    // Crear el campo de texto para el nombre de usuario
    var usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.style.padding = '10px';
    usernameInput.style.border = '1px solid #ccc';
    usernameInput.style.borderRadius = '4px';

    // Crear el campo de texto para la contraseña
    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.style.padding = '10px';
    passwordInput.style.border = '1px solid #ccc';
    passwordInput.style.borderRadius = '4px';

    //Crear div botones

    var divBotones = document.createElement('div');
    divBotones.style.border = "solid 3px red"


    // Crear el botón de envío
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Ingresar';
    submitButton.className = 'mui-btn mui-btn--primary';
    

    // Crear el botón de cierre
    var closeButton = document.createElement('button');
    closeButton.className = 'mui-btn mui-btn--danger';
    closeButton.type = 'button';
    closeButton.innerHTML = 'Registrarse';
    closeButton.style.width = '100%';
    closeButton.style.backgroundColor = 'White';
    closeButton.style.color = 'Green'
    

    // Agregar los campos al formulario
    form.appendChild(loginMessage);
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    // Agregar el formulario al modal
    modal.appendChild(form);


    // Agregar el evento de cierre
    closeButton.addEventListener('click', function() {
        mui.overlay('off');
    });

    // Agregar el botón de cierre al modal
    modal.appendChild(closeButton);

    // Mostrar el modal
    mui.overlay('on', modal);
}