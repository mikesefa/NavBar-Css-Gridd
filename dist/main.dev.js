"use strict";

//seleccionar elementos del html por su id
var btnDepartamentos = document.getElementById('btn-departamentos'),
    grid = document.getElementById('grid'),
    contEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'); //funcion que almacena si la ventana del navegador es igual o menor a 800px con true o

esDispositivoMovil = function esDispositivoMovil() {
  return window.innerWidth <= 800;
}; //cuando pasemos el cursor sobre departamentos agregar clase activo


btnDepartamentos.addEventListener('mouseover', function () {
  if (!esDispositivoMovil()) {
    grid.classList.add('activo');
  }
});
console.log(esDispositivoMovil()); //cuando sacamos el cursor de departamentos quitar clase activo

grid.addEventListener('mouseleave', function () {
  if (!esDispositivoMovil()) {
    grid.classList.remove('activo');
  }
}); //acceder a todos los elementos de la categoria//

document.querySelectorAll('.menu .categoria a').forEach(function (categoria) {
  //agregar un evento cada vez que el mouse pasa encima de categorias
  categoria.addEventListener('mouseenter', function (e) {
    //recorrer cada subcategoria
    document.querySelectorAll('#menu .contenedor-subcategoria .subcategoria').forEach(function (subcategoria) {
      subcategoria.classList.remove('activo'); //preguntar si el dataset de los elementos iterados son igual al evento creado por el mouse

      if (subcategoria.dataset.categoria === e.target.dataset.categoria) {
        subcategoria.classList.add('activo');
      }

      ;
    });
  });
});
document.querySelector('#btn-menu-barras').addEventListener('click', function (e) {
  e.preventDefault();

  if (contEnlacesNav.classList.contains('activar')) {
    contEnlacesNav.classList.remove('activar');
    document.querySelector('body').style.overflow = 'visible';
  } else {
    contEnlacesNav.classList.add('activar');
    document.querySelector('body').style.overflow = 'hidden';
  }
}); // Click en boton de todos los departamentos (Para version movil).//

btnDepartamentos.addEventListener('click', function (e) {
  e.preventDefault();
  grid.classList.add('activo');
  btnCerrarMenu.classList.add('activo');
}); // Boton de regresar en el menu de categorias

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', function (e) {
  e.preventDefault();
  grid.classList.remove('activo');
  btnCerrarMenu.classList.remove('activo');
});
document.querySelectorAll('#menu .categorias a').forEach(function (elemento) {
  elemento.addEventListener('click', function (e) {
    if (esDispositivoMovil()) {
      contenedorSubCategorias.classList.add('activo');
      document.querySelectorAll('#menu .subcategoria').forEach(function (categoria) {
        categoria.classList.remove('activo');

        if (categoria.dataset.categoria == e.target.dataset.categoria) {
          categoria.classList.add('activo');
        }
      });
    }
  });
}); // Boton de regresar en el menu de categorias

document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    e.preventDefault();
    contenedorSubCategorias.classList.remove('activo');
  });
});
btnCerrarMenu.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelectorAll('#menu .activo').forEach(function (elemento) {
    elemento.classList.remove('activo');
  });
  document.querySelector('body').style.overflow = 'visible';
});