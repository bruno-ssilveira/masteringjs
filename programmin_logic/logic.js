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