let opcion;
const listaDeTalles = [];
const tablaDeTalles = [
    { medida: 22, talle: 35 },
    { medida: 23, talle: 36 },
    { medida: 24, talle: 37 },
    { medida: 25, talle: 38 },
    { medida: 26, talle: 39 },
    { medida: 27, talle: 40 },
    { medida: 28, talle: 41 },
    { medida: 29, talle: 42 },
    { medida: 30, talle: 43 },
    { medida: 31, talle: 44 },
    { medida: 32, talle: 45 },
];

function verTallesGuardados() {
    if (listaDeTalles.length === 0) {
        alert("No hay talles guardados");
    } else {
        alert("Estos son los talles guardados:\n" + listaDeTalles.join("\n"));
    }
}

function registrarTalle() {
    const medidaPie = parseFloat(prompt("Ingrese la medida de su pie en cm"));
    const talleEncontrado = tablaDeTalles.find(t => t.medida === medidaPie);
    
    if (talleEncontrado) {
        alert("Su talle de calzado es: " + talleEncontrado.talle);
        const guardar = confirm("¿Desea guardar este talle?");
        if (guardar) {
            listaDeTalles.push("Medida: " + medidaPie + " cm - Talle: " + talleEncontrado.talle);
            alert("Tu talle se guardado exitosamente, utiliza el codigo #ZAPAS15 para obtener tu descuento en la proxima compra");
        }
    } else {
        alert("No se encontró un talle para esa medida de pie");
    }
}

do {
    opcion = parseInt(prompt("Registrá tu talle y accede a un 15% de descuento en futuras compras\n\n1. Ver todos los talles guardados \n2. Registrar mi talle\n\nPara salir ingrese 0."));

    switch (opcion) {
        case 0:
            alert("Gracias por visitarnos!");
            break;
        case 1:
            verTallesGuardados();
            break;
        case 2:
            registrarTalle();
            break;
        default:
            alert("Opción Invalida");
            break;
    }
} while (opcion !== 0);
