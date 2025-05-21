/* Operadores
    && -> AND
    || -> OR
    ! -> NOT
*/

/* Valores que JavaScript avalia como false
    0, ``, '', "", null, undefined, NaN
*/
console.log('eu' && '' && 'i')//returns at first false
console.log('eu' && 'me' && 'i') //all true, returns the last
const falaOi = () => {
    return 'Oi'
}
let vaiExecutar;
console.log(vaiExecutar && falaOi())

//true or false, returns the first true value with OR ||... IT`S almost a coalesce in sql
const corUsuario = '';
const corPadrao = 'black';
console.log(corUsuario || corPadrao);


// appendChild()
// Aplica dentro alguma outra tag etc html
const resultado = document.querySelector('.resultado');
const p = document.createElement('p');
p.innerHTML = 'qualquer coisa';
p.classList.add('paragrafo'); //adiciona classe na tag p
resultado.appendChild(p);

// Operador Ternário ? :


// Objeto Date
const data = new Date();
const data2 = new Date('2020-01-01 12:10:23.100');
console.log(data.getMonth() + 1); // Mês começa do zero, como array
console.log(data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data);