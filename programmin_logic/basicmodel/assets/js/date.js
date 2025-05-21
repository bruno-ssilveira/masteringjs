// const resultado = document.querySelector('.resultado');

// function getDayByExtense(day) {
//     switch (day) {
//         case 0:
//             return 'domingo'
//         case 1:
//             return 'segunda-feira'
//         case 2:
//             return 'terça-feira'
//         case 3:
//             return 'quarta-feira'
//         case 4:
//             return 'quinta-feira'
//         case 5:
//             return 'sexta-feira'
//         case 6:
//             return 'sábado'
//     }
// }

// function getMonthByExtense(month) {
// 		months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
// 		return months[month];
// }

// function zeroToLeft(n) {
//     return n < 10 ? `0${n}` : `${n}`
// }

// const date = new Date();
// const day = getDayByExtense(date.getDay());
// const month = getMonthByExtense(date.getMonth());
// const year = date.getFullYear();
// const hour = zeroToLeft(date.getHours());
// const minute = zeroToLeft(date.getMinutes());

// console.log(day);

// resultado.style.display = 'block';
// resultado.textContent = `${day}, ${date.getDate()} de ${month} de ${year} ${hour}:${minute}`;

const resultado = document.querySelector('.resultado');
const data = new Date();
resultado.style.display = 'block';
resultado.textContent = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});