// Menu adaptable para pantallas pequenas
const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu');

botonMenu.addEventListener('click', function () {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
});

menu.addEventListener('click', function (evento) {
  if (evento.target.tagName === 'A') {
    menu.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
  }
});

// Pestanas de calzado (damas y caballeros)
const pestanas = document.querySelectorAll('.pestana');

pestanas.forEach(function (pestana) {
  pestana.addEventListener('click', function () {
    pestanas.forEach(function (p) {
      const activa = p === pestana;
      p.setAttribute('aria-selected', activa);
      document.getElementById(p.getAttribute('aria-controls')).hidden = !activa;
    });
  });
});

// Validacion del formulario de contacto
const formulario = document.getElementById('formulario');
const estado = document.getElementById('estado');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  let valido = true;

  formulario.querySelectorAll('[required]').forEach(function (campo) {
    const correcto = campo.checkValidity();
    campo.classList.toggle('invalido', !correcto);
    if (!correcto) { valido = false; }
  });

  if (valido) {
    estado.textContent = 'Gracias, tu mensaje fue registrado correctamente.';
    formulario.reset();
  } else {
    estado.textContent = 'Revisa los campos marcados e intenta de nuevo.';
  }
});
