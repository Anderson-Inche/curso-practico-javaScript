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
    return lado1 + lado2+ base;
} 
//console.log("La perímetro del triángulo es : " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (baseTriangulo * alturaTriangulo) / 2;
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
