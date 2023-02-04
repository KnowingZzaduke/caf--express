//Mostrar menú
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