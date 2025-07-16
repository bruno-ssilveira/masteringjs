// CPF Validation
const cpf = '705.484.450-51';
//const cpf = '070.987.720-03';
//const cpf = '111.222.333-44';

function validaCpf(cpf) {
    // First digit test
    const withoutTwoDigits = [10,9,8,7,6,5,4,3,2];
    // Second digit test
    const withoutOneDigit = [11,10,9,8,7,6,5,4,3,2];
    
    // Transform CPF in just numbers
    const cleanCpf = cpf.replace(/\D+/g, '');

    // Invalid input from users test
    if(typeof cleanCpf === 'undefined') return console.log('Invalid CPF');
    if(cleanCpf.length !== 11) return console.log('Invalid CPF');
    if(/^(\d)\1{10}$/.test(cleanCpf)) return 'Invalid CPF';

    // Transform CPF in Array
    cpfArray = Array.from(cleanCpf);

    // Calculation
    let sumWithoutTwoDigits = 0;
    for(let i = 0; i < withoutTwoDigits.length; i++) {
        let mult = Number(withoutTwoDigits[i]) * Number(cpfArray[i]);
        sumWithoutTwoDigits += mult;
    };

    let sumWithoutOneDigit = 0;
    for(let i = 0; i < withoutOneDigit.length -1; i++) {
        let mult = Number(withoutOneDigit[i]) * Number(cpfArray[i]);
        sumWithoutOneDigit += mult;
    };

    let digito1 = 11 - (sumWithoutTwoDigits % 11);
    let digito2 = 11 - (sumWithoutOneDigit % 11);
    digito1 = digito1 > 9 ? '0' : String(digito1);
    digito2 = digito2 > 9 ? '0' : String(digito2);
    
    return cleanCpf === cleanCpf.slice(0, -2) + digito1 + digito2 ? 'Valid CPF' : 'Invalid CPF';
}

//validaCpf(cpf);