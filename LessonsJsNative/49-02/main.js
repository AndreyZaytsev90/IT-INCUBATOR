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
//передаем в качестве параметра функции, которая будет описывать какое преобразование будем делать с каждым элементом исх. массива
function getStudentName(item, i) {
    return `Index: ${i}: ${item.name}.`
}

const mapIt = (array, callback) => {
   /* 1) возвращает новый массив
    2) не меняет кол-во эл-тов исходного массива
    3) принимает (функцию) в кач-ве параметра.
    4) Коллбек выполняет обработку и/или преобразование каждого эл-та исходного массива
    5) Новый массив состоит из return нашего callback
    6) Исходный массив не изменяется (не мутирует)*/

    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i)
    }
    return newArray

}
//console.log(students.map((item, i) => `Index: ${i}: ${item.name}.`))
console.log(students.map(getStudentName))
console.log(mapIt(students, getStudentName))
// function можно обьявить в любом месте кода ,а const в начале

console.log(students.map(s => s)) // поверхностная копия => ([...students])
console.log(students.map(s => ({...s}))) // глубокая копия

console.log(students.map(s => s.name === "Bob" ? {...s, scores: s.scores + 10} :s ))
/*
console.log(students.map(s => {

    if (s.name === "Bob") {
        return {...s, scores: s.scores + 10}
    }
    return s
}))
*/



const filterIt = (array, callback) => {

/*    Filter
    1) возвращает новый массив
    2) возможно, меняет кол-во эл-тов
    3) Filter принимает (функцию) в кач-ве параметра.
    4) Коллбек выполняет обработку каждого эл-та исходного массива
    5) Коллбек возвращает булево значение (true/false) если false - элемент фильтр не прошел.
    6) Новый массив состоит из элементов исходного массива
    7) Исходный массив не изменяется (не мутирует)*/

    const newArray = []
    for (let i = 0; i < array.length; i++) {
       if (callback(array[i]) === true)  {
           newArray.push(array[i])
          // callback(array[i]) && newArray.push(array[i]) - тоже самое
       }
    }
    return newArray

}

console.log(students.filter(s => s.scores >= 100))
//по виду одинакого , но сущности разные
//console.log({} === {}) - false
console.log(filterIt(students, s => s.scores >= 100))



const findIt = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return (array[i])
        }
    }
}

console.log(students.find(s => s.name === "Bob"))
console.log(findIt(students, s => s.name === "Bob"))

