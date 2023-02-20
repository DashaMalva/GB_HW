/*Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/


/**
 * Создает массив из числового ряда.
 * @param {number} start Начало числового ряда.
 * @param {number} end Конец числового ряда.
 * @returns Числовой массив.
 */
function createArrayOfNumbers(start, end) {
    const arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr
}


/**
 * Выводит в консоль массив чисел с указанием четности/нечетности.
 * @param {object} arr Числовой массив.
 */
function printNumbersWithCommentsEvenOdd(arr) {
    console.log('0 – это ноль');
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 !== 0) {
            console.log(`${i} – нечетное число`);
        } else {
            console.log(`${i} – четное число`);
        }
    }
}


function doTask1() {
    console.log('Задание 1.');
    const arrayForTask1 = createArrayOfNumbers(0, 11);
    printNumbersWithCommentsEvenOdd(arrayForTask1);
}


doTask1();


/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/


function doTask2() {
    const arrayForTask2 = createArrayOfNumbers(1, 7);
    const newArrayForTask2 = arrayForTask2.slice(0, 3);
    newArrayForTask2.push(arrayForTask2[5], arrayForTask2[6]);
    
    console.log('Задание 2.', arrayForTask2, ' -> ', newArrayForTask2);
}


doTask2();


/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/


/**
 * Возвращает случайное положительное целое число.
 * @param {number} max Верхняя граница для случайных чисел.
 * @returns Положительное целое число.
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function doTask3(maxNumber, arrayLength, numberToFind) {
    const arrayForTask3 = [];
    let sum = 0;
    let min = maxNumber;
    let isNumberInArray = false;

    for (let i = 0; i < arrayLength; i++) {
        arrayForTask3.push(getRandomInt(maxNumber));
        sum += arrayForTask3[i];
        if (arrayForTask3[i] < min) min = arrayForTask3[i];
        if (arrayForTask3[i] === numberToFind) isNumberInArray = true;
    }
    console.log(
        'Задание 3.',
        `Массив случайных чисел ${arrayForTask3}.`,
        `Сумма чисел ${sum}.`,
        `Минимальное число ${min}.`,
        isNumberInArray ? `${numberToFind} найдена.` : `${numberToFind} отсутсвует.`
    )
}


doTask3(9, 5, 3);


/* *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/


function doTask4(rows) {
    console.log('Задание 4.');
    for (let i = 1; i <= rows; i++) {
        console.log('x'.repeat(i));
    }
}


doTask4(20);
