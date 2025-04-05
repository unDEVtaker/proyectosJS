//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




//eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
};




//clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gasto = [];
    }

};


class UI {
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;
    };
};

//instanciar

const ui = new UI();
let presupuesto;



//funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');

    console.log(parseFloat(presupuestoUsuario));

    if (presupuestoUsuario ==='' || presupuestoUsuario ===null || isNaN(presupuestoUsuario) ||presupuestoUsuario<=0){
        window.location.reload();
    };

    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);

}