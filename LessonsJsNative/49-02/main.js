let students = [
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
//передаем в качестве параметра функции, которая будет описывать какое преобразование будем делать с каждым элементом исх. массива
function getStudentName(item, i) {
    return `Index: ${i}: ${item.name}.`
}

const map = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i)
    }
    return newArray

}
//console.log(students.map((item, i) => `Index: ${i}: ${item.name}.`))
console.log(students.map(getStudentName))
console.log(map(students, getStudentName))
// function можно обьявить в любом месте кода ,а const в начале

console.log(students.map(s => s)) // поверхностная копия => ([...students])
console.log(students.map(s => ({...s}))) // глубокая копия

