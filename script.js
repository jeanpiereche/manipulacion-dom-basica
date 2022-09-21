const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', sumarValue);

function sumarValue(event) {
    console.log({event});
    event.preventDefault();
    result.innerText = input1.value + input2.value;
}