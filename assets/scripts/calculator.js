function doAddition() {
    x = prompt('Bведи первое слагаемое');
    y = prompt('Bведи второе слагаемое');
    z = (+x + +y)
    alert(`Результат сложения равен ${z}`)
}

function doSubtraction() {
    x = prompt('Bведи уменьшаемое');
    y = prompt('Bведи вычитаемое');
    z = (+x - +y)
    alert(`Результат вычитания равен ${z}`)
}

function doMultiplication() {
    x = prompt('Bведи первый множитель');
    y = prompt('Bведи второй множитель');
    z = (+x * +y)
    alert(`Результат умножения равен ${z}`)
}

function doDivision() {
    x = prompt('Bведи делимое');
    y = prompt('Bведи делитель');
    z = (+x / +y)
    alert(`Результат деления равен ${z}`)
}