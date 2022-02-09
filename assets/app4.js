 
    let weight = +prompt('Введите массу вещества (кг)');
    let volume = +prompt('Введите объем вещества (м^3):');
    let density = weight / volume;
    console.log(`${density}`);
    alert(`Плотность вещества:${density}`);