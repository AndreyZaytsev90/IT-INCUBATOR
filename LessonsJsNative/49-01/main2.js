//Копии
// {} - curly braces

/*
const user = { // user - ссылка на объект #4567
    name: "Andrey",
    age: 32,
    isMarried: true,
    address: {
        country: "Russia",
        city: "Moscow",
        street: "Lipchansky",
        number: 1
    }
}

const copyUser = user // объект не создался . Это ссылка на тотже адрес объекта в операт. памяти браузера  #4567

//new Object(...) - функция конструктор

user.name = "Olga"
console.log(copyUser.name) // нарушение принципа иммутабельности
user.name = "Andrey"

const realCopyUser = {...user, age: 3, isMarried: false, height: 103} // #4568 - новый объект
realCopyUser.name = "Petr"
console.log(user)
console.log(realCopyUser)

console.log(realCopyUser === user) // false
console.log(user === copyUser) // true

const cloneUser = structuredClone(user) // новый метод глубокого копирования

console.log(cloneUser)
cloneUser.name = "Olga"
cloneUser.address.country = "USSR"
console.log(cloneUser) // country = "USSR"
console.log(user) // country = "Russia"*/


/*
const user = { // user - ссылка на объект #4567
    name: "Andrey",
    age: 32,
    isMarried: true,
    address: {
        country: "Russia",
        city: "Moscow",
        street: "Lipchansky",
        number: 1
    },
    friends: [ "Nikita", "Nikolay", "Rustam" ]
}
console.log(user)

const cloneUser = structuredClone(user)

console.log(cloneUser)

cloneUser.friends[2] = "Sergey"

const deepCopyCloneUser = {...cloneUser, address: {...cloneUser.address}, friends: [...cloneUser.friends]}


console.log(deepCopyCloneUser)

deepCopyCloneUser.friends.push("Afanasiy")*/

const students = [
    {name: "Andrey"},
    {name: "Rustam"},
    {name: "Sveta"},
]

/*
const deepCopyStudents = [...students]

console.log(deepCopyStudents)

students[1] = {name: "Afanasiy"}

console.log(deepCopyStudents)
console.log(students)

deepCopyStudents[3] = {name: "Denis"}

console.log(deepCopyStudents)*/

/*
const deepCopyStudents = []

for (let i = 0; i < students.length; i++) {
    deepCopyStudents[i] = {...students[i]}
}
*/

const deepCopyStudents = students.map(student => ({...student}))

console.log(deepCopyStudents)