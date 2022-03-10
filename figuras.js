//Código del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) { 
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del Triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, " 
//     + baseTriangulo + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del triángulo es de: " + perimetroCuadrado + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del Círculo
console.group("Círculos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
} 
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


//Aquí interactuamos con HTML


function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    //const value = input.value;
    const perimetro = perimetroCuadrado(input.value);
    alert("Total: " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.querySelector("#inputCuadrado");
    const lado = input.value;
    const areaCuadrado = lado * lado;
    alert("Total: " + areaCuadrado);
}

function calcularAreaCirculo() {
    const value = document.getElementById("inputCirculo").value;
    const circunferencia = (document.getElementById("inputCirculo").value * 2);
    console.log("El area del circulo es: " + circunferencia);
}