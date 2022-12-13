const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
} 

btnMobile.addEventListener('click', toggleMenu);  
btnMobile.addEventListener('touchstart', toggleMenu);  // para melhorar o tempo do click acima

let image = document.getElementById('image')
let title = document.getElementById('title2')
image.addEventListener('mouseenter', entrar)
image.addEventListener('mousemove', mover)
image.addEventListener('mouseout', sair)

function entrar() {
    title.style.display = 'block'

}

function mover () {
    
}

function sair() {
    title.style.display = 'none'
  
} 

const menuItems = document.querySelectorAll('.menu a');

console.log(menuItems);

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick() {
    const element = event.target;
}