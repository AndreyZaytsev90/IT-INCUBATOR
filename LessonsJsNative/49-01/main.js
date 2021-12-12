// string, number, boolean, null, NaN, undefined, infinity(число/0), Symbol, BigInt - примитивы
// object, array, function - объекты

// 1. У объектов сложная структура
// 2. Ссылочный тип данных -

// type of - не является прямым инст. для опр. типа данных (нужна интерпритация) - но это базовый способ.
// Браузер обрезает ковычки в typeof ( возвращает всегда строку ) в console.log
// для массива .isArray
// для числа .isNaN

console.log(Number.isFinite(15))



/*let num = 35
let nextNum = num // 35
nextNum = 44 ;// в num 35 остается*/

//const user = {} // литераль объекта записывает в память, а в user записывается ссылка на объект (№64)


/*const nextUser = user // (№64)
nextUser.name = "Bob"
console.log(user)*/

/*
const user = {} // (№64)
const nextUser = {} // (№65)

console.log(user === nextUser) // false
*/


//console.log({} === {}) // false ( разные объекты , разные ссылки (№64) и (№65))


/*/!*const userList= [{
    name: "Alex"*!/
}]*/ // (№67)
//const nextUserList = [] // (№68)
//const user = {
  //  name: "bob"
//}
//userList.push(user) // (№67)

//nextUserList.push(user) // (№68)

//const nextUserList = [...userList, user]
//nextUserList.push(user) // или nextUserList.concat(user)
//console.log(CopyUser)
/* 1. делаем копию
2. меняем копию
3. передаем в реакт*/


/*const nextUserList = [...userList]
const CopyUser = {...user, age: 31, friends: [], }
console.log(nextUserList)*/

/*const nextUserList = [...userList]
const user = {age: 31, name: "Helen", friends: ["Bob", "Alex"]} // ссылка №333


const copyUser = {...user, friends: [...user.friends]} //  ( Глубокая копия)

copyUser.friends.push("Donald")
console.log(copyUser)
console.log(user)*/

const users = [
    {
        name: "Alex",
        age: 23 // 24
    },
    {
        name: "Bob",
        age: 25
    },
    {
        name: "Andrey",
        age: 31
    },
    {
        name: "Olga",
        age: 33
    }
]

/*const mapUsers = users.map(user => {
    if (user.name === "Alex") {
        return {...user, age: 24}
    }
    return user
})*/
const mapUsers = users.map(user => user.name === "Alex" ? {...user, age: 24}: user) // тернарное выражение ( создается новый объект в котором копируется users и меняется age на 24 , остальное все возвращается без изменения)
console.log(users)
console.log(mapUsers)
console.log(mapUsers === users) // false новый массив заполнени результатим и преобрахования элементов  спомощью  callback функции

// map - отображение, преобразование

console.log(mapUsers[0] === users[0]) // false
console.log(mapUsers[1] === users[1]) // true - т.к. менялся только [0]

const mapUsers2 = users.map(user => ({...user}))
console.log(mapUsers2[1] === users[1]) // создан новый массив, по этому false


const greetings = users.map (user => `Hi! I'm ${user.name}, I'm ${user.age} years old`)
console.log(greetings)