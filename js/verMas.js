//OBTENER EL CONTENEDOR DEL FORMULARIO DE DEPARTAMENTOS
let formularioDepas = document.getElementById('formularioDepas');

//SE OBTIENE EL FORMULARIO DE DEPARTAMENTOS
let formularioDepas_form = document.getElementById('formularioDepas_form');

//FUNCION QUE SE EJECUTA AL PRESIONAR "VER MAS"
function verMas_mmxx_barranco(x){
    let optionDepa = x.id;
    
    //DATA DEPARTAMENTOS
    let mmxx_barranco = {
        depa53_71: {
            numero : 'S01',
            piso : '01',
            area : '53.71m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '136,963.10',
            precioSoles: '520,459.77',
            tipo: 'loft'
        },
        depa56_24: {
            numero : 'S02',
            piso : '01',
            area : '56.24m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '143,414.72',
            precioSoles: '544,975.94',
            tipo: 'flat'
        },
        depa53_46: {
            numero : 'S03',
            piso : '01',
            area : '53.46m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '136,325.59',
            precioSoles: '518,037.23',
            tipo: 'flat'
        },
        depa57_17: {
            numero : '102',
            piso : '01',
            area : '57.17m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '145,786.27',
            precioSoles: '553,987.81',
            tipo: 'flat'
        },
        depa47_73: {
            numero : '103',
            piso : '01',
            area : '47.73m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '121,713.81',
            precioSoles: '462,512.47',
            tipo: 'flat'
        },
        depa44_95: {
            numero : '104 - 404',
            piso : '01 - 04',
            area : '44.95m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '118,624.67',
            precioSoles: '435,573.76',
            tipo: 'flat'
        },
        depa63_67: {
            numero : '202 - 302',
            piso : '02 - 03',
            area : '63.67m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '162,361.58',
            precioSoles: '616,974.00',
            tipo: 'flat'
        },
        depa92_53: {
            numero : '603',
            piso : '06',
            area : '92.53m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '02',
            bano : '01',
            terraza : '01',
            precioDolares: '235,955.98',
            precioSoles: '896,632.71',
            tipo: 'duplex'
        },
        depa91_28: {
            numero : '604',
            piso : '06',
            area : '91.28m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '02',
            bano : '01',
            terraza : '01',
            precioDolares: '232,768.42',
            precioSoles: '884,519.98',
            tipo: 'duplex'
        }
    }

    formularioDepas.classList.toggle('formulario_depas_fade');

    //VALIDACION DEL FORMULARIO AL HACER SUBMIT Y POSTERIOR
    //SE CREA EL DETALLE DEL DEPARTAMENTO
    formularioDepas_form.addEventListener('submit', function(evento){
        evento.preventDefault();
    
        //INPUTS DEL FORMULARIO
        let nombre = document.getElementById('nombre').value;
        let celular = document.getElementById('celular').value;
        let emailFormDepa = document.getElementById('emailFormDepa').value;
        let mensaje = document.getElementById('mensaje').value;
        let terminos = document.getElementById('terminos').checked;
    
        if(nombre.length == 0 || celular.length == 0 || emailFormDepa.length == 0 || mensaje.length == 0 || terminos == false){
            alert('Para poder continuar debe de completar todos los campos del formulario.');
            return;
        } else{
            let detalleDepa = document.getElementById('detalleDepa');
            detalleDepa.innerHTML = `<div class="container mx-auto">
                                        <div class="detalle_departamento_logo mb-10">
                                            <img src="../../styles/graphics/logo_libre_negro.png" alt="">
                                            <div class="detalle_departamento_logo_x">
                                                <button onclick="enviarFormulario()">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="flex flex-col lg:flex-row detalle_departamento_box">
                                            <div class="detalle_departamento_presentacion w-full text-center lg:text-left">
                                                <h1>Te presentamos al depa:</h1>
                                                <p class="tipo mega">${mmxx_barranco[optionDepa].tipo}</p>
                                                <div class="descripcion mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>descripción</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Número</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].numero}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Piso</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].piso}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Área</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].area}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="descripcion mt-5 mb-10 lg:mb-0 mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>incluye</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Sala</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].sala}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Comedor</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].comedor}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Kitchenette</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].kitchenette}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Dormitorio</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].dormitorio}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Baño</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].bano}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Terraza</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].terraza}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="detalle_departamento_slide w-full">
                                                <div class="detalle_departamento_slide_img">
                                                    <img class="w-full" src="../../styles/proyectos/mmxx_barranco/MMXX Jardin interno 2.png" style="width:100%">
                                                </div>
                                                <div class="detalle_departamento_slide_price flex flex-row justify-around mt-1 gap-x-1">
                                                    <div class="text-center">
                                                        <h1>dolares</h1>
                                                        <h3>$ ${mmxx_barranco[optionDepa].precioDolares}</h3>
                                                    </div>
                                                    <div class="text-center">
                                                        <h1>soles</h1>
                                                        <h3>s/. ${mmxx_barranco[optionDepa].precioSoles}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

            detalleDepa.classList.toggle('detalle_departamento_fade');
            return;
        }
    }); 
}

function verMas_28_julio(x){
    let optionDepa = x.id;
    
    //DATA DEPARTAMENTOS
    let veinti_ocho_julio = {
        depa87_76: {
            numero : '902',
            piso : '09',
            area : '87.76m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '211,501.60',
            precioSoles: '803,706.08',
            tipo: 'flat'
        },
        depa88_61: {
            numero : '302 - 402 - 502 - 602',
            piso : '03 - 04 - 05 - 06',
            area : '81.61m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '213,550.10',
            precioSoles: '811,490.38',
            tipo: 'flat'
        },
        depa116_69: {
            numero : '701 - 801 - 901 - 1001 - 1201 - 1301',
            piso : '07 - 08 - 09 - 10 - 12 - 13',
            area : '116.69m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '281,222.90',
            precioSoles: '1,068,647.02',
            tipo: 'flat'
        },
        depa117_9: {
            numero : '201 - 301 - 501 - 601',
            piso : '02 - 03 - 05 - 06',
            area : '117.9m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '284,139.00',
            precioSoles: '1,079,728.20',
            tipo: 'flat'
        },
        depa127_71: {
            numero : '101',
            piso : '01',
            area : '127.71m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '02',
            bano : '01',
            terraza : '01',
            precioDolares: '307,781.10',
            precioSoles: '1,169,568.18',
            tipo: 'duplex'
        },
        depa108_71: {
            numero : '102902',
            piso : '01',
            area : '108.71m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '261,991.10',
            precioSoles: '995,566.18',
            tipo: 'duplex'
        },
        depa178_91: {
            numero : '1202',
            piso : '12',
            area : '178.91m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '398,074.75',
            precioSoles: '1,512,684.05',
            tipo: 'duplex'
        },
    }

    formularioDepas.classList.toggle('formulario_depas_fade');

    //VALIDACION DEL FORMULARIO AL HACER SUBMIT Y POSTERIOR
    //SE CREA EL DETALLE DEL DEPARTAMENTO
    formularioDepas_form.addEventListener('submit', function(evento){
        //evento.preventDefault();
    
        //INPUTS DEL FORMULARIO
        let nombre = document.getElementById('nombre').value;
        let celular = document.getElementById('celular').value;
        let emailFormDepa = document.getElementById('emailFormDepa').value;
        let mensaje = document.getElementById('mensaje').value;
        let terminos = document.getElementById('terminos').checked;
    
        if(nombre.length == 0 || celular.length == 0 || emailFormDepa.length == 0 || mensaje.length == 0 || terminos == false){
            alert('Para poder continuar debe de completar todos los campos del formulario.');
            return;
        } else{
            let detalleDepa = document.getElementById('detalleDepa');
            detalleDepa.innerHTML = `<div class="container mx-auto">
                                        <div class="detalle_departamento_logo mb-10">
                                            <img src="../../styles/graphics/logo_libre_negro.png" alt="">
                                            <div class="detalle_departamento_logo_x">
                                                <button onclick="enviarFormulario()">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="flex flex-col lg:flex-row detalle_departamento_box">
                                            <div class="detalle_departamento_presentacion w-full text-center lg:text-left">
                                                <h1>Te presentamos al depa:</h1>
                                                <p class="tipo mega">${veinti_ocho_julio[optionDepa].tipo}</p>
                                                <div class="descripcion mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>descripción</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Número</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].numero}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Piso</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].piso}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Área</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].area}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="descripcion mt-5 mb-10 lg:mb-0 mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>incluye</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Sala</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].sala}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Comedor</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].comedor}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Kitchenette</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].kitchenette}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Dormitorio</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].dormitorio}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Baño</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].bano}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Terraza</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].terraza}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="detalle_departamento_slide w-full">
                                                <div class="detalle_departamento_slide_img">
                                                    <img class="w-full" src="../../styles/proyectos/mmxx_barranco/MMXX Jardin interno 2.png" style="width:100%">
                                                </div>
                                                <div class="detalle_departamento_slide_price flex flex-row justify-around mt-1 gap-x-1">
                                                    <div class="text-center">
                                                        <h1>dolares</h1>
                                                        <h3>$ ${veinti_ocho_julio[optionDepa].precioDolares}</h3>
                                                    </div>
                                                    <div class="text-center">
                                                        <h1>soles</h1>
                                                        <h3>s/. ${veinti_ocho_julio[optionDepa].precioSoles}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

            detalleDepa.classList.toggle('detalle_departamento_fade');
            return;
        }
    }); 
}

//FUNCION PARA CERRAR FORMULARIO DE DEPAS
function closeFormularioDepas(){
    formularioDepas.classList.toggle('formulario_depas_fade');
}

//FUNCION PARA ENVIAR EL FORMULARIO DEL DEPARTAMENTO
function enviarFormulario(){
    formularioDepas_form.submit();
}