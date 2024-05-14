for (let i = 1; i <= 15 ; i++){
    let salida = (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '');
    console.log(salida || i); 
}   