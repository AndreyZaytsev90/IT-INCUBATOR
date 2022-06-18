const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(user===copyUser) //что должно быть в консоли?
console.log(user.friends===copyUser.friends) //что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
console.log(user===deepCopyUser) // что должно быть в консоли?
console.log(user.friends===deepCopyUser.friends) // что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents) // что должно быть в консоли?
console.log(students[0] === copyStudents[0])  // что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map((student) => {
    return {...student}
})
console.log(deepCopyStudents)
//Проверка:
console.log(students === deepCopyStudents)  // что должно быть в консоли?
console.log(students[1].name === deepCopyStudents[1].name) // что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a,b)=> a.name > b.name? 1 : -1)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a,b) => a.scores < b.scores? 1: -1)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter((student)=> student.scores > 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0,3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents)
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter((st) => st.isMarried === true)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = [...students].map((st) => st.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = [...studentsNames].join(' ')
console.log(nameWithSpace)
let namesWithComma = [...studentsNames].join(',')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = [...students].map((st) => ({...st, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = [...students].map(st => st.name === "Nick"? {...st, isMarried: true} : st)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = [...students].find(st => st.name === "Ann")
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce +
// - не испльзуя методы массивов и Math.max() -
let bestStudent = [...students].reduce((acc, st) => acc.scores > st.scores ? acc : st)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

let sumScoresStudent = [...students].reduce((acc, st) => acc+st.scores, 0)
console.log(sumScoresStudent)

// И поднимаем руку!!!!

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   return [...students].map(st => ({...st, friends: students.filter(n => st.name !== n.name)})) //+
}
console.log(addFriends(students));









