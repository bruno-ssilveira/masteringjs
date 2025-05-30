function retornaMaior(x, y) {
    return x > y ? x : y
};
console.log(retornaMaior(10,20));


const max = (x, y) => x > y ? x : y;
console.log(max(10,20));

const photoWidescreen = (width, height) => width > height;
console.log(photoWidescreen(1920, 1080));




function fizzBuzz(n) {
    if(typeof n === 'number'){
        if(n%3 === 0 && n%5 === 0) {return 'FizzBuzz'}
        else if(n%5 === 0) {return 'Buzz'}
        else if(n%3 === 0) {return 'Fizz'}
        else return n
    } return n
};
console.log(fizzBuzz(14));