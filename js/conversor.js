let nombre = prompt ("Ingresa tu nombre:")
alert ("Bienvenid@ "+nombre+" al conversor de pesos Argentinos a moneda extranjera")
let importe = parseInt(prompt("Ingrese el monto en pesos a convertir (sin agregar $):"))

let c = 0
let dolar =  250
let euro = 260

var tipoconversion = parseInt(prompt("Seleccione la moneda (1- Dolar 2- Euro): "))
if (tipoconversion<1 || tipoconversion>2){
do {
var tipoconversion = parseInt(prompt("Seleccion Incorrecta \nSeleccione la moneda (1- Dolar 2- Euro): "))
} while (tipoconversion<1 || tipoconversion>2);
}else{
    
}
let prueba = tipoconversion
switch(prueba) {
    case 1:
     c = parseFloat(importe/dolar).toFixed(2)
     alert ( nombre+" con $"+importe+" podes comprar "+c+" Dolares")
        break;
    case 2:
     c = parseFloat(importe/euro).toFixed(2)
     alert ( nombre+" con $"+importe+" podes comprar "+c+" Euros")
        break;
    default:
        break;
}