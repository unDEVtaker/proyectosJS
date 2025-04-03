//variables

const carrito = document.querySelector('#carrito');

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const listaCursos = document.querySelector('#lista-cursos');

const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    //btn agregar al carrito
    listaCursos.addEventListener("click", agregarCurso);

    //eliminar cursos
    carrito.addEventListener("click",eliminarCurso);

    //mostrar cursos local Storage

    document.addEventListener("DOMContentLoaded", ()=> {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    vaciarCarritoBtn.addEventListener("click",() =>{
        articulosCarrito = [];
        limpiarHTML();
    });
    
};


//functions

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log('OK! Curso agregado');

        leerDatosCursos(cursoSeleccionado);
    }
}


//eliminar cursos
function eliminarCurso(e) {
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
    };

    carritoHTML();
}


function leerDatosCursos(curso) {
    console.log(curso);

    //objeto

    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute('data-id'),
        cantidad: 1,
    }


    //revisa si esta duplicado
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe) {
        const cursos =articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        articulosCarrito = [...cursos]
    } else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    // console.log(infoCurso);

    //agregar elementos

    
    console.log(articulosCarrito);

    carritoHTML();
}

//carrito html

function carritoHTML() {

    // limpiar html
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const {imagen,titulo,precio,cantidad } = curso;

        const row = document.createElement("tr");
        
        row.innerHTML = `
        <td><img src ="${imagen}" width = "100";</td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">x</a></td> 
        `;
        //agregar el html en el tbody
        contenedorCarrito.appendChild(row);
    });

    //agregar carrito al storage
    sincronizarStorage(); 
}

    function sincronizarStorage(){
        localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
    }

//eliminar los cursos del tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}