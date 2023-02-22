'use strict';

/*
Задание 1
Дан объект numbers. 
Необходимо в консоль вывести все значения больше или равные 3.
*/

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};


function printNumbersBiggerThan(obj, num) {
    for (let key in obj) {
        if (obj[key] >= num) {
            console.log(obj[key]);
        }
    }
}

console.log('Задание 1');
printNumbersBiggerThan(numbers, 3);


/*
Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, 
к которым приписан комментарий, в консоль.
*/

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log('Задание 2');
console.log(
    post.author,
    post.comments[0].rating.dislikes,
    post.comments[1].userId,
    post.comments[1].text
);


/*
Задание 3
Дан массив products, необходимо цену каждого продукта 
уменьшить на 15% используя метод forEach.
*/
const productsTask3 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


productsTask3.forEach((obj) => obj.price *= 0.85);

console.log('Задание 3');
console.log(productsTask3);


/*
Задание 4
1. Необходимо вывести в консоль массив продуктов,
 в котором есть хоть одна фотография используя метод filter. 
 Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой,
после чего вывести отсортированный массив в консоль.
*/

const productsTask4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const filteredProducts = productsTask4.filter(
    (obj) => obj.photos && obj.photos.length > 0
);

console.log('Задание 4.1');
console.log(filteredProducts);


productsTask4.sort((a, b) => a.price - b.price);

console.log('Задание 4.2');
console.log(productsTask4);


/*
Задание 5.
Вам необходимо объединить 2 этих массива, чтобы значения первого массива 
были ключами, а значения второго массива — значениями.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница",
            "суббота", "воскресенье"];


/**
 * Создает объект на основе двух массивов.
 * @param {Object} arr1 Массив ключей.
 * @param {Object} arr2 Массив значений.
 * @returns объект.
 */
function createObjFromArrays(keys, values) {
    const obj = {};
    
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }

    return obj;
}


const week = createObjFromArrays(en, ru);
console.log(week);
