// menu.js

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '250px';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '0';
});
