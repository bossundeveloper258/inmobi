const tipoDepa = document.getElementById('tipoDepa');
tipoDepa.addEventListener("change", selectTipo);

const pisoDepa = document.getElementById('pisoDepa');
pisoDepa.addEventListener('change', selectTipo);

function selectTipo(){
    let option = tipoDepa.options[tipoDepa.selectedIndex];
    let filter = option.text;

    let option2 = pisoDepa.options[pisoDepa.selectedIndex];
    let filter2 = option2.text;

    let depaBox = document.querySelectorAll('.departamentos_container_box');
    let index = 0;
    let length = depaBox.length;

    for(; index < length; index++){
        depaBox[index].classList.remove('hidden');
        
        if(depaBox[index].classList.contains(filter) && depaBox[index].classList.contains(filter2)){
            depaBox[index].classList.add('block');
        } else{
            depaBox[index].classList.add('hidden');
        }
    }
}