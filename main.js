//Ejercicio 1
console.log("--------------Ejercicio 1---------------")
alert("Ejercicio 1: Comparar 2 Números e imprimir el mayor")
let E1numero1 = prompt("Ingresar Primer Número")
let E1numero2 = prompt("Ingresar Segundo Número")

if (E1numero1 > E1numero2) {
    console.log("El primer número es mayor que el segundo.");
} else {
    console.log("El segundo número es mayor que el primero.");
}


//Ejercicio 2  
console.log("--------------Ejercicio 2---------------")
alert("Ejercicio 2: Comparar 2 Números e imprimir si son iguales o no")
let E2numero1 = prompt("Ingresar Primer Número")
let E2numero2 = prompt("Ingresar Segundo Número")

if (E2numero1 === E2numero2) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números son diferentes.");
}


//Ejercicio 3
console.log("--------------Ejercicio 3---------------")
alert("Ejercicio 3: Comparar 2 números e imprimir cual es el mayor o si son iguales.")
let E3numero1 = prompt("Ingresar Primer Número")
let E3numero2 = prompt("Ingresar Segundo Número")

if (E3numero1 > E3numero2) {
    console.log("El primer número es el más grande.");
} else if (E3numero1 < E3numero2) {
    console.log("El segundo número es el más grande.");
} else if ((E3numero1 === E3numero2)) {
    console.log("Los números son iguales.");
}


//Ejercicio 4
console.log("--------------Ejercicio 4---------------")
alert("Ejercicio 4: Comparar 3 números e imprimir cual es el menor.")
let E4numero1 = prompt("Ingresar Primer Número")
let E4numero2 = prompt("Ingresar Segundo Número")
let E4numero3 = prompt("Ingresar Tercer Número")

if (E4numero1 <= E4numero2 && E4numero1 <= E4numero3) {
    E4numeroMenor = E4numero1;
} else if (E4numero2 <= E4numero1 && E4numero2 <= E4numero3) {
    E4numeroMenor = E4numero2;
} else if (E4numero3 <= E4numero1 && E4numero3 <= E4numero2) {
    E4numeroMenor = E4numero3;
}

console.log("El número más chico es: " + E4numeroMenor);


//Ejercicio 5
console.log("--------------Ejercicio 5---------------")
alert("Ejercicio 5: Ingresar información de 2 Usuarios y imprimir cual tiene mayor edad")
let E5userA = {
    nombre: prompt("Ingresar Nombre primer usuario"),
    altura: prompt("Ingresar Altura primer usuario (cm)"),
    edad: prompt("Ingresar Edad Primer Usuario")
}
let E5userB = {
    nombre: prompt("Ingresar Nombre segundo usuario"),
    altura: prompt("Ingresar Altura segundo usuario (cm)"),
    edad: prompt("Ingresar Edad segundo Usuario")
}

let E5userAlto;
if (E5userA.altura > E5userB.altura) {
    E5userAlto = E5userA;
} else {
    E5userAlto = E5userB;
}
let E5userMayor;
if (E5userA.edad > E5userB.edad) {
    E5userMayor = E5userA;
} else {
    E5userMayor = E5userB;
}

console.log(E5userAlto.nombre + " es la persona más alta.");
console.log(E5userMayor.nombre + " es la persona de mayor edad.");


//Ejercicio 6
console.log("--------------Ejercicio 6---------------")
alert("Ejercicio 6: Requisitos para sacar la licencia de conducir")
var E6nombre = prompt("Ingresa tu nombre:");
var E6edad = prompt("Ingresa tu edad:");
var E6altura = prompt("Ingresa tu altura en centímetros:");
var E6vision = prompt("Ingresa tu visión (de 0 a 10):");

if (E6edad >= 18 && E6altura > 150 && E6vision >= 8) {
    console.log(E6nombre + ", estás capacitado para conducir.");
} else {
    console.log(E6nombre + ", no cumples con los requisitos para conducir.");
}


//Eercicio 7
console.log("--------------Ejercicio 7---------------")
alert("Ejercicio 7: Entrada a evento con tipos de pase vip o normal")
let E7nombre = prompt("Ingresa tu nombre:");
let E7pase = prompt("Ingresa tu pase (vip o normal):");
let E7Entrada = confirm("¿Tienes una entrada? (Haz clic en Aceptar para sí y Cancelar para no)");

if (E7nombre === "Jesus" || E7pase === "vip") {
    console.log("¡Bienvenido, " + E7nombre);
    if (E7Entrada) {
        let E7usarEntrada = confirm("¿Deseas utilizar tu entrada? (Haz clic en Aceptar para sí y Cancelar para no)");
        if (E7usarEntrada) {
            console.log("Disfruta del evento");
        } else {
            console.log("Bienvenido, asegúrate de comprar una entrada");
        }
    } else {
        console.log("Recuerda comprar una entrada.");
    }
} else {
    let E7comprarEntrada = confirm("¿Deseas comprar una entrada? (Haz clic en Aceptar para sí y Cancelar para no)");
    if (E7comprarEntrada) {
        let E7dinero = prompt("Ingresa la cantidad de dinero que tienes disponible:");
        if (E7dinero >= 1000) {
            console.log("¡Venta de entrada exitosa! ¡Bienvenido, " + E7nombre);
        } else {
            console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.");
        }
    } else {
        console.log("¡Hasta luego!");
    }
}

//Ejercicio 8
console.log("--------------Ejercicio 8---------------")
alert("Ejercicio 8: Adivina el número del 1 al 10")
let E8numeroIncognita = 7;
E8adivinado = false;
//Intento 1
let E8numeroIngresado = prompt("Intento 1: Ingresa un número del 1 al 10:");
if (E8numeroIngresado == E8numeroIncognita && E8adivinado == false) {
    console.log("¡Ganaste! Has adivinado el número.");
    E8adivinado = true;
}
else if (E8numeroIngresado < E8numeroIncognita && E8adivinado == false) {
    console.log("El número ingresado es menor. Vuelve a intentarlo.");
}
else if (E8adivinado == false) {
    console.log("El número ingresado es mayor. Vuelve a intentarlo.");
}
//Intento 2
if (E8adivinado == false)
    E8numeroIngresado = prompt("Intento 2: Ingresa un número del 1 al 10:");
if (E8numeroIngresado == E8numeroIncognita && E8adivinado == false) {
    console.log("¡Ganaste! Has adivinado el número.");
    E8adivinado = true;
}
else if (E8numeroIngresado < E8numeroIncognita && E8adivinado == false) {
    console.log("El número ingresado es menor. Vuelve a intentarlo.");
}
else if ((E8adivinado == false)) {
    console.log("El número ingresado es mayor. Vuelve a intentarlo.");
}
//Intento 3
if (E8adivinado == false)
    E8numeroIngresado = prompt("Intento 3: Ingresa un número del 1 al 10:");

if (E8numeroIngresado == E8numeroIncognita && E8adivinado == false) {
    console.log("¡Ganaste! Has adivinado el número.");
    E8adivinado = true;
}
else if (E8adivinado == false) {
    console.log("Agotaste tus 3 intentos. El número incógnita era: " + E8numeroIncognita);
}


//Ejercicio 9
console.log("--------------Ejercicio 9---------------")
alert("Ejercicio 9: Clasificar usuario por edad")
let E9edad = prompt("Ingresa tu edad:");


if (E9edad >= 0 && E9edad <= 12) {
    console.log("Eres un infante.");
} else if (E9edad >= 13 && E9edad <= 18) {
    console.log("Eres un adolescente.");
} else if (E9edad >= 19 && E9edad <= 45) {
    console.log("Eres un mayor joven.");
} else if (E9edad > 45 && E9edad <= 100) {
    console.log("Eres un anciano.");
} else if (E9edad > 100) {
    let confirmacion = confirm("¿Realmente tienes " + E9edad + " años?");
    if (confirmacion = true) {
        console.log("Ok");
    } else {
        console.log("Edad no válida.");
    }
}


//Ejercicio 10
console.log("--------------Ejercicio 10---------------")
alert("Ejercicio 10: Piedra, Papel o Tijera")
let E10jugador1 = prompt("Jugador 1, elige piedra, papel o tijera:").toLowerCase();
let E10jugador2 = prompt("Jugador 2, elige piedra, papel o tijera:").toLowerCase();

if ((E10jugador1 == "piedra" || E10jugador1 == "papel" || E10jugador1 == "tijera") && (E10jugador2 == "piedra" || E10jugador2 == "papel" || E10jugador2 == "tijera")) {
    if (E10jugador1 == E10jugador2) {
        console.log("¡Es un empate!");
    }
    else if ((E10jugador1 == "piedra" && E10jugador2 == "tijera") || (E10jugador1 == "papel" && E10jugador2 == "piedra") || (E10jugador1 == "tijera" && E10jugador2 == "papel")) {
        console.log("¡Jugador 1 ha ganado!");
    }
    else {
        console.log("¡Jugador 2 ha ganado!");
    }
} else {
    console.log("Alguien ha hecho trampa. Por favor, elige piedra, papel o tijera.");
}


//Ejercicio 11
console.log("--------------Ejercicio 11---------------")
alert("Ejercicio 11: Colores y descripciones")
let E11color = prompt("Ingresa un color:").toLowerCase();

switch (E11color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.");
        break;
    case "verde":
        console.log("El color de la naturaleza.");
        break;
    case "azul":
        console.log("El color del agua.");
        break;
    case "amarillo":
        console.log("El color del sol.");
        break;
    case "rojo":
        console.log("El color del fuego.");
        break;
    case "marron":
    case "marrón":
        console.log("El color de la tierra.");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
        break;
}


//Ejercicio 12
console.log("--------------Ejercicio 12---------------")
alert("Ejercicio 12: Calculadora")
let E12operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división):").toLowerCase();
let E12numero1 = parseFloat(prompt("Ingresa el primer valor numérico:"));
let E12numero2 = parseFloat(prompt("Ingresa el segundo valor numérico:"));

switch (E12operacion) {
    case "suma":
        console.log("Resultado de la suma: " + (E12numero1 + E12numero2));
        break;
    case "resta":
        console.log("Resultado de la resta: " + (E12numero1 - E12numero2));
        break;
    case "multiplicación":
    case "multiplicacion":
        console.log("Resultado de la multiplicación: " + (E12numero1 * E12numero2));
        break;
    case "división":
    case "division":
        if (E12numero2 !== 0) {
            console.log("Resultado de la división: " + (E12numero1 / E12numero2));
        } else {
            console.log("ERROR: No se puede dividir por 0.");
        }
        break;
}


//Ejercicio 13
console.log("--------------Ejercicio 13---------------")
alert("Ejercicio 13: Ingresar datos de documento de identidad")
let E13numeroDni = prompt("Ingresa el número de tu documento:");
let E13nombre = prompt("Ingresa tu nombre:");
let E13apellido = prompt("Ingresa tu apellido:");
let E13fecha = prompt("Ingresa tu fecha de nacimiento:");
let E13lugar = prompt("Ingresa tu lugar de nacimiento:");

console.log("Número de DNI: " + E13numeroDni);
console.log("Nombre: " + E13nombre);
console.log("Apellido: " + E13apellido);
console.log("Fecha de nacimiento: " + E13fecha);
console.log("Lugar de nacimiento: " + E13lugar);

let confirmacion = confirm("¿Los datos ingresados son correctos? (Haz clic en Aceptar para confirmar o Cancelar para rechazar)");

if (confirmacion == true) {
    let dni = {
        Numero: E13numeroDni,
        Nombre: E13nombre,
        Apellido: E13apellido,
        FechaNacimiento: E13fecha,
        LugarNacimiento: E13lugar
    };

    console.table(dni);
    console.log("Registro exitoso.");
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}