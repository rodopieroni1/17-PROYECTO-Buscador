//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);// muestra los autos en la parte de abajo
    llenarSelect();// llena con datos el select de Años
})

//Event Listener
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
});

console.log(datosBusqueda)

//Funciones
function mostrarAutos(autos) {
    limpiarHTML
    autos.forEach(
        auto => {
            const { marca, modelo, year, puertas, transmision, precio, color } = auto;
            const autoHTML = document.createElement('p');
            autoHTML.textContent = `${marca}-${modelo}-${year}-${puertas}-${transmision}-${precio}-${color}`;
            resultado.appendChild(autoHTML);
        })
}

//generar los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);// agrega las opciones de año al select    
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtradoMarca).filter(filtradoYear);
    //console.log(resultado);
    mostrarAutos(resultado);
}

function filtradoMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtradoYear(auto){
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year); // se convierteen int por que year viene desde el select como string
    }
    return auto;
}