// string, number, boolean, null, NaN, undefined, infinity(число/0), Symbol, BigInt - примитивы
// object, array, function - объекты

// 1. У объектов сложная структура
// 2. Ссылочный тип данных -

// type of - не является прямым инст. для опр. типа данных (нужна интерпритация) - но это базовый способ.
// Браузер обрезает ковычки в typeof ( возвращает всегда строку ) в console.log
// для массива .isArray
// для числа .isNaN

console.log(Number.isFinite(15))



let num = 35
let nextNum = num // 35
nextNum = 44 // в num 35 остается

//const user = {} // литераль объекта записывает в память, а в user записывается ссылка на объект (№64)


/*const nextUser = user // (№64)
nextUser.name = "Bob"
console.log(user)*/

const user = {} // (№64)
const nextUser = {} // (№65)

console.log(user === nextUser) // false


console.log({} === {}) // false ( разные объекты , разные ссылки (№64) и (№65))




