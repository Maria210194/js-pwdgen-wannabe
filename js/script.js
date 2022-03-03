console.log('JS OK');

const nome = parseInt(prompt('Come ti chiami?'));

const cognome = parseInt(prompt('Qual\'è il tuo cognome?'));

const colorePreferito = parseInt(prompt('Qual\'è il tuo colore preferito?'));

console.log('Il tuo nome è' + nome)

document.getElementById('informazioni').innerHTML = 'Il tuo nome è' + nome;
console.log(document.getElementById('informazioni').innerHTML)

