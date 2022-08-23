let menuMobile_icon = document.getElementById('menuMobile_icon');
let menuMobile_box = document.querySelector('.menuMobile_box');
let menuMobile_iconI = document.querySelector('.menuMobile_icon label');

function menuMobile(){
    
    if(!menuMobile_icon.checked){
        menuMobile_box.style.display = 'block';
        menuMobile_iconI.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else{
        menuMobile_box.style.display = 'none';
        menuMobile_iconI.innerHTML = '<i class="fa-solid fa-bars"></i>';    
    }
}