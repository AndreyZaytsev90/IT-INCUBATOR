//Array.prototype.sort

/*
const array1 = [1, 2, 3, 4]
//===
const array2 = new Array(1,2,3,4) // глобальный объект ( функция-конструктор для создания массивов)
console.log(array2)*/

const names = ["Andrey", "Olga", "Petr", "Sergey", '101', 'alesha', 'юрий']

console.log(names.sort())

const numbers = new Array(-5, 150, 11, 8, 98)

// Нужна функция сравнения
// return 10 - переместить
// return -10, 0 - порядок элементов нас устраиввает

const compareFunc = (a, b) => b >= a ? -1 : 1 // по возрастанию  ( a, b ) - элементы массива по порядку
 /* if( b >= a ) {
      return -1
  } else {
      return 1
  }*/
const compareFunc2 = (a, b) => b >= a ? 1 : -1 // по убыванию

console.log(numbers.sort((a,b) => a-b)) // по возрастанию  ( a, b ) - элементы массива по порядку

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "john",
        age: 19,
        isMarried: false,
        scores: 121
    }
];

console.log(students.sort((a,b)=> a.age-b.age)) // по возрастанию
console.log(students.sort((a,b)=> b.scores-a.scores).reverse()) // по убыванию по очкам (по возрастанию)
console.log(students.sort((a,b)=> a.name < b.name ? -1 : 1)) // по алфавиту
console.log(students.sort((a,b)=> a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)) // по алфавиту