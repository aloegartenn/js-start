let weight = +prompt('Ваш вес (в кг)');

let height = +prompt('Ваш рост (в м)');

let index = weight / (height * height);
console.log(`${index}`);
 
alert(`Индекс:${index}`);