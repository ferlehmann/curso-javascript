let opcion;
const listaDeTalles = [];
const tablaDeTalles = [
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
    let opciones = "Seleccione la medida de su pie:\n1. 29 cm\n2. 30 cm\n3. 31 cm\n4. 32 cm";
    let seleccion = parseInt(prompt(opciones));

    if (seleccion >= 1 && seleccion <= 4) {
        let opcion = seleccion - 1;
        let medidaPie = tablaDeTalles[opcion].medida;
        let talleEncontrado = tablaDeTalles[opcion].talle;

        alert("Su talle de calzado es: " + talleEncontrado);
        const guardar = confirm("¿Desea guardar este talle?");
        if (guardar) {
            listaDeTalles.push("Medida: " + medidaPie + " cm - Talle: " + talleEncontrado);
            alert("Tu talle se guardado exitosamente, utiliza el codigo #ZAPAS15 para obtener tu descuento en la proxima compra");
        }
    } else {
        alert("Opción inválida");
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
            alert("Opción inválida");
            break;
    }
} while (opcion !== 0);