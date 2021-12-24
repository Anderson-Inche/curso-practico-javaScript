//Código del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;

//console.log("Lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado*4;
} 

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado);

function areaCuadrado(lado){
    return lado*lado;
} 
console.log("El área del cuadrado es: " + areaCuadrado);

console.groupEnd();
//Código del triangulo
console.group("Triangulos");
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1+ " cm , "+ ladoTriangulo2 + " cm, "+ baseTriangulo + "cm ");
*/
//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de : " + alturaTriangulo);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 
//console.log("La perímetro del triángulo es : " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El area del triangulo : " + areaTriangulo);

console.groupEnd();

console.group("Circulo");
function diametroCirculo(radio) {
    return radio *2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
    return radio*radio * PI;    
}

console.groupEnd();
function validarTriangulo(lado1,lado2,base) {
    if (lado1 === lado2)
        return 1;
    else if (lado2 === base)
        return 1;
    else if (base === lado1)
        return 1;

    return 0;
}

//AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function validarTrianguloIsosceles() {
    const lado1 = document.getElementById("InputLado1").value;
    const lado2 = document.getElementById("InputLado2").value;
    const base = document.getElementById("InputBase").value;

    const band = validarTriangulo(lado1,lado2,base);
    if (band === 1)
        alert("Es Isósceles");
    else     alert("No es Isósceles");
}
function calcularAltura() {
    const base = document.getElementById("InputBase").value;
    const a = document.getElementById("InputLado2").value;
    const altura = Math.sqrt( (a*a) - ((base*base)/4 ));
    alert(altura);
    return altura;
}
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputLado1").value;
    const lado2 = document.getElementById("InputLado2").value;
    const base = document.getElementById("InputBase").value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const base = document.getElementById("InputBase").value;
    const a = document.getElementById("InputLado2").value;
    const altura = Math.sqrt( (a*a) - ((base*base)/4 ));
    const area = areaTriangulo(base,altura);
    alert(area);
}
