

const todoListId_1 = "23vt-43gf"
const todoListId_2 = "24vt-43gf"

const todoList = [
    {
        id: todoListId_1,
        title: "Want to learn",
        filter: "all",
    },
    {
        id: todoListId_2,
        title:"Want to buy",
        filter: "all",
    },
]

const tasks = {
    [todoListId_1]: [ // В качестве ключа мы используем значение внутри переменной
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "REACT", isDone: false}
    ],
    [todoListId_2]: [
        {id: 4, title: "Meat", isDone: true},
        {id: 5, title: "Cheese", isDone: true},
        {id: 6, title: "Bread", isDone: true}
    ]
}

console.log(tasks[todoListId_2][0].title) //meat
console.log(tasks)

//reduce - метод массива

const numbs = [10, 20, 30]

//reduce - принимает 2 параметра - коллбэк фунцию и стартовое значение ( по умолчанию параметры - это 0 и 1 элементы массива)
console.log(numbs.reduce((acc, el) => acc+el, 0))    // acc - результат предыдущего вызова callback функции
// 0, 10 => 10
// 10, 20 => 30
// 30, 30 => 60

console.log(numbs.reduce((acc, el)=> acc > el ? acc : el)) // показывает наибольший элемент массива

// 10 20 => 20
// 20 30 => 30

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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
// у кого больше очков?
console.log(students.reduce((acc, st) => acc.scores > st.scores ? acc : st))
// сумма всех очков студентов
console.log(students.reduce((acc, st) => acc + st.scores, 0))
// всем студентам +10 очков
console.log(students.reduce((acc, st) => {
    acc.push({...st, scores: st.scores + 10})
    return acc
}, []))
