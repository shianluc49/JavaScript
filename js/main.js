// mensajes en consola */
/* console.log("Bienvenidos") */

// Variables 01*/

/* let numero = 10;
let frase = "glt";
let llave = true;

console.log(numero + 13); */

// Variables 02*/

/* let nombre;

nombre = "Gian";

console.log(nombre)  */

// let nombreIngresado = prompt("Ingrese su nombre")

/* alert("Bienvenido " + nombreIngresado);
console.log("Bienvenido " + nombreIngresado);  */

// const valorDolar = 314;

/* let montoIngresado = prompt("Ingrese monto a comprar ($" + valorDolar + " c/u)");
let dolaresAComprar = Number(montoIngresado) / valorDolar;

alert("Usted a comprado " + parseFloat(dolaresAComprar).toFixed(2) + " Dolares");

console.log("Usted a comprado " + parseFloat(dolaresAComprar).toFixed(2) + " Dolares"); */

// Contrtol de flujo 

/* console.log("Control-de-Flujo");

let nombre = "Gian";
let edad = 23;
let vivo = true; */

// Condicional

/* if (nombre == "Gian") {
    console.log("Hola Gian");
} */

// Condicional en una linea sin llaves

/* if (nombre == "Gian") console.log("Hola Gian");

if (edad == 23) console.log("Si es la edad de Gian");
if (edad == "23") console.log("Si la variable existe");

if (edad === "23") console.log("Te aseguras que sea string");
if (edad === 23) console.log("Te aseguras que sea numero"); */

// Else If

/* let pais = "Argentina";
let paisMayusculas = pais.toUpperCase();

console.log(pais);
console.log(paisMayusculas);

if (pais === "Argentina") {
    console.log("Bienvenido a Argentina");
} else if (pais === "Peru") {
    console.log("Bienvenido a Peru")
} else {
    console.log("De donde sos?");
} */

// Numeros

/* let numero = 10;
let esMayor5 = (numero >= 5);


if (esMayor5) {
    alert("Es boolean true")
} 

let numero = 11;
if (numero != 10) {
    console.log("No es igual a 10")
} */

// Usuarios

/* let nombreUsuario = prompt("Ingrese nombre de usuario");


if (nombreUsuario === "") {
    alert("Debe ingresar usuario");
} else if (nombreUsuario === null) {
    alert("Debe ingresar usuario");
} else {
    alert("Hola " + nombreUsuario);
} */

// Usuarios 02

/* let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado != "") && (apellidoIngresado != "")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
} */

/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}
 */


// Actividad

/* let numero = prompt("Ingrese numero mayor a 1000")
let esMayor = (numero >= 1000);


if (numero == "") {
    alert("Ingrese numero");
} else if (numero = esMayor) {
    alert("El numero es mayor a Mil!");
} else {
    alert("Su numero es menor a Mil")
}
 */

/* let saludo = prompt("Saludame!")


if ((saludo == "Hola") || (saludo == "hola") || (saludo == "HOLA")) {
    console.log("Hola bienvenido");
} else if (saludo == "") {
    alert("Que grosero");
} else {
    alert("Que grosero")
} */

// FOR

/* for ( desde ; hasta ; actualizacion) {
    ...
} */

/* for (let i = 0; i < 10; i++) {
    console.log("esta es la " + i + " vez que pasa por esta linea")
} */

/* ARRAYS */

// Declaraciòn de array vacío
/* const arrayA = []; */
// Declaracion de array con nùmeros
/* const arrayB = [1, 2]; */
// Declaracion de array con strings
/* const arrayC = ["C1", "C2", "C3"]; */
// Declaracion de array con booleanos
/* const arrayD = [true, false, true, false]; */
// Declaracion de array mixto
/* const arrayE = [1, false, "C4"]; */

/* CAMBIO DOLAR/EURO */
function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 314;
    let euro = 308;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio a Dolares es: $ " + resultado);
    } else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio a Euros es: $ " + resultado);
    } else {
        alert("Seleccione una moneda")
    }
}


/* Cifrador */

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if (wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then(() => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] :
                charSinCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if (cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifrador.onsubmit = submit;