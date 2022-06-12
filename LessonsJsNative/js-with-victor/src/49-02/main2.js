let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85 //+10
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
        scores: 100
    }
]

// const names = ["Bob", "Alex", "Nick", "John"]
// Native
const getStudentsNames = (arr) => {
    const result = []
    const func = (st) => st.name
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}

console.log(getStudentsNames(students))

const getStudentsAge = (arr) => {
    const result = []
    const func = (st) => st.age
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}

console.log(getStudentsAge(students))

const getStudentsScores = (arr) => {
    const result = []
    const func = (st) => ({...st, scores: st.scores + 10})
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}

console.log(getStudentsScores(students))

// добавить всем студентам свойство isStudent

const createIsStudent = students.map(st => ({...st, isStudent: true}))

console.log(createIsStudent)

const finishedStudent = createIsStudent.map((st) => st.age <= 20 ? {...st, isStudent: false} : st)

console.log(finishedStudent)

const filteredStudentStatus = finishedStudent.filter(st => st.isStudent === false)

console.log(filteredStudentStatus)

const filteredStudentAge = finishedStudent.filter(st => st.age >= 20)

console.log(filteredStudentAge)

//44.35

//самодельный MAP

const getMappedArray = (arr, func) => {
    const result = new Array() // функция-конструктор []
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return result
}
console.log(getMappedArray(students, (st) => ({...st, scores: st.scores + 10})))
//===
console.log(students.map((st) => ({...st, scores: st.scores + 10})))


// самодельный фильтр
console.log(students.filter(st => st.scores >= 90))

const myFilter = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

const callBackFn = (st) => st.scores >= 90

//===
function callBackFn2(st) {
    return st.scores >= 90
}

console.log(myFilter(students, callBackFn2))

//самодельный find

const myFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(myFind(students, st => st.age >= 21))
//===
console.log(students.find(st => st.age >= 22))
