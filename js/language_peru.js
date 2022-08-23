let peru = document.getElementById('peru');
let peru_box = document.getElementById('peru_box');
let eeuu = document.getElementById('eeuu');
let eeuu_box = document.getElementById('eeuu_box');
let peru_mobile = document.getElementById('peru_mobile');
let peru_box_mobile = document.getElementById('peru_box_mobile');
let eeuu_mobile = document.getElementById('eeuu');
let eeuu_box_mobile = document.getElementById('eeuu_box_mobile');

eeuu_box.style.display = 'none';
eeuu_box.style.width = '170px';
eeuu_box.style.position = 'absolute';
eeuu_box.style.bottom = '-50px';
eeuu_box.style.left = '0';

eeuu_box_mobile.style.display = 'none';
eeuu_box_mobile.style.width = '130px';
eeuu_box_mobile.style.position = 'absolute';
eeuu_box_mobile.style.bottom = '-35px';
eeuu_box_mobile.style.left = '0';

function peruFunction(){
    
    if(peru.checked){
        eeuu_box.style.display = 'none';
    } else{
        eeuu_box.style.display = 'block';
    }

    if(peru_mobile.checked){
        eeuu_box_mobile.style.display = 'none';
    } else{
        eeuu_box_mobile.style.display = 'block';
    }
}