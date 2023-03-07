// This is a JavaScript file

function calcularteste() {

var marca = document.getElementById('marca').value;
var modelo = document.getElementById('modelo').value;
var km = document.getElementById('km').value;
var gas  = document.getElementById('gas').value;

var consumo = km / gas 

//alert(consumo)

let exibir = `A Marca do Veiculo é ${marca} seu Modelo é de: ${modelo} e seu consumo de Gasolina é de ${consumo}Km/L`;

document.querySelector('h1').innerHTML = exibir;

}