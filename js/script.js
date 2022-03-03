console.log('JS OK');

const nome = (prompt('Come ti chiami?'));

const cognome = (prompt('Qual\'è il tuo cognome?'));

const colorePreferito = (prompt('Qual\'è il tuo colore preferito?'));
/*
console.log('Il tuo nome è' + nome);
document.getElementById('name').innerHTML = 'Il tuo nome è' + nome;
console.log(document.getElementById('name').innerHTML)

console.log('Il tuo cognome è' + cognome);
document.getElementById('surname').innerHTML = 'Il tuo cognome è' + cognome;
console.log(document.getElementById('surname').innerHTML)


console.log('Il tuo colore preferito è' + colorePreferito);
document.getElementById('favoriteColor').innerHTML = 'Il tuo colore preferito è' + colorePreferito;
console.log(document.getElementById('favoriteColor').innerHTML)

*/

console.log(nome + cognome + colorePreferito);
document.getElementById('informazioni').innerHTML = nome + cognome + colorePreferito + '21';