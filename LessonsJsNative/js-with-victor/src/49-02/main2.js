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
    },{
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

const createIsStudent =  students.map(st => ({...st, isStudent: true}))

console.log(createIsStudent)

const finishedStudent = createIsStudent.map((st) => st.age <= 20 ? {...st, isStudent: false}: st)

console.log(finishedStudent)

const filteredStudentStatus = finishedStudent.filter(st => st.isStudent === false)

console.log(filteredStudentStatus)

const filteredStudentAge = finishedStudent.filter(st => st.age >= 20)

console.log(filteredStudentAge)

//44.35