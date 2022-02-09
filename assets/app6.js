
    let a = +prompt('Введите длину первого катета(см)')
    let b = +prompt('Введите длину втрого катета(см)')
    let c = Math.pow((a * a) + (b * b), 0.5)
    console.log(`${c}`)
    alert(`Длина гипотенузы:${c}`)
