
    let people = +prompt('Введите кол-во населения:')
    let teriotory = +prompt('Введите площадь територии (км^2):')
    let soscietyDensity = people / teriotory
    console.log(`${soscietyDensity}`)
    alert(`Плотность население${soscietyDensity}`)