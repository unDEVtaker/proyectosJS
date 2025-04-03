//variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//resultados
const resultado = document.querySelector("#resultado");



const max = new Date().getFullYear();
const min = max - 10;

//objeto la busqueda


const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}
//eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrasAutos(autos);


    llenarSelect();
})

//listener busquedas

marca.addEventListener("change", e=>{
    datosBusqueda.marca= e.target.value;
    console.log(datosBusqueda);

    filtrarAuto();
})

year.addEventListener("change", e=>{
    datosBusqueda.year= e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

minimo.addEventListener("change", e=>{
    datosBusqueda.minimo= e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

maximo.addEventListener("change", e=>{
    datosBusqueda.maximo= e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

puertas.addEventListener("change", e=>{
    datosBusqueda.puertas= e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

transmision.addEventListener("change", e=>{
    datosBusqueda.transmision= e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

color.addEventListener("change", e=>{
    datosBusqueda.color= e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();

})

//functions
function mostrasAutos(autos){

    limpiarHTML();

    autos.forEach(auto => {
        const {marca, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
            ${marca} -
            ${year} -
            ${puertas} -
            ${transmision} -
            ${precio} -
            ${color} -
        `;

        //resultaod  

        resultado.appendChild(autoHTML);
    });
}

//limpiar

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for (let i = max; i >= min; i--) {
        console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}


function filtrarAuto(){
    const resultado = 
    autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    //console.log(resultado);
    if(resultado.length > 0){
        mostrasAutos(resultado);
    } else{
        noResultado();
    }

    
}


function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement("div");

    noResultado.classList.add('alert','error');
    noResultado.textContent = "No hay resultados";
    resultado.appendChild(noResultado);
};

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if( marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo ;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio < maximo ;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}