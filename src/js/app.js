//DISPOSITIVOS PEQUEÑOS
const toggleAbrir = document.querySelector('.abrir');
const toggleCerrar = document.querySelector('.cerrar');
const menu = document.querySelector('.menu_none');

//ABRIR MENÚ
function abrirMenu(){
    if(toggleAbrir){
        menu.classList.replace('menu_none', 'menu');
    }
}

//CERRAR MENU
function cerrarMenu(){
    if(toggleCerrar){
        menu.classList.replace('menu', 'menu_none');
    }
}

const toggleEnlacesUp = document.querySelector('.toggle_enlaces-up');
const toggleEnlacesDown = document.querySelector('.toggle_enlaces-down');
const contentEnlaces = document.querySelector('.content_enlaces-hoy');

//ABRIR LISTA ENLACES
function abrirEnlaces(){
    if(toggleEnlacesUp){
        toggleEnlacesUp.style.display = "none";
        toggleEnlacesDown.style.display = "block";
        contentEnlaces.classList.add('mostrar_enlaces-hoy');
    }
}

//CERRAR ENLACES
function cerrarEnlaces(){
    if(toggleEnlacesDown){
        toggleEnlacesUp.style.display = "block";
        toggleEnlacesDown.style.display = "none";
        contentEnlaces.classList.remove('mostrar_enlaces-hoy');
    }
}

//DISPOSITIVOS GRANDES
const toggleCategoriasUp = document.querySelector('.toggle_categorias-up');
const toggleCategoriasDown = document.querySelector('.toggle_categorias-down');
const categorias = document.querySelector('.categorias');

//MOSTRAR MENU
function abrirMenuCategorias(){
    if(toggleCategoriasUp){
        categorias.classList.add('categorias_up');
        toggleCategoriasUp.style.display = "none";
        toggleCategoriasDown.style.display = "block";
    }
}

//CERRAR MENÚ
function cerrarMenuCategorias(){
    if(toggleCategoriasDown){
        categorias.classList.remove('categorias_up');
        toggleCategoriasUp.style.display = "block";
        toggleCategoriasDown.style.display = "none";
    }
}

