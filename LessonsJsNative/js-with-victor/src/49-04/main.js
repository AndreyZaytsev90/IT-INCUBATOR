const todoListID_1 = "23vtvt-24r43gf"
const todoListID_2 = "25vtvt-24r45gf"

const todoLists = [
    {
        id: todoListID_1, //"23vtvt-24r43gf"
        title: "What to learn",
        filter: "all",
       /* tasks: [
            {id: "56hf", title: "HTML", isDone: true},
            {id: "57hf", title: "CSS", isDone: true},
            {id: "58hf", title: "REACT", isDone: true}
        ]*/
    },
    {
        id: todoListID_2, //"25vtvt-24r45gf",
        title: "What to buy",
        filter: "all",
      /*  tasks: [
            {id: "59hf", title: "Meat", isDone: true},
            {id: "60hf", title: "Cola", isDone: true},
            {id: "61hf", title: "Beer", isDone: true}
        ]*/
    },
]

const tasks = {    //пара ключ-значение
    [todoListID_1] : [                // "23vtvt-24r43gf"             // id - ключ
        {id: "56hf", title: "HTML", isDone: true},
        {id: "57hf", title: "CSS", isDone: true},
        {id: "58hf", title: "REACT", isDone: true}   // массив - это значение
    ],
    [todoListID_2] : [
        {id: "59hf", title: "Meat", isDone: true},
        {id: "60hf", title: "Cola", isDone: true},
        {id: "61hf", title: "Beer", isDone: true}
    ]
} // ассоциативный массив - объект!

console.log(tasks[todoListID_1])
console.log([...tasks[todoListID_1]])
console.log([...tasks[todoListID_1]] === [...tasks[todoListID_1]])
console.log([...tasks[todoListID_1],  {id: "56hf", title: "HTML", isDone: true}])
console.log(tasks[todoListID_1].filter(tasks => tasks.title === "HTML"))

console.log({...tasks,
    [todoListID_1]: [
        ...tasks[todoListID_1],
        {id: "56hf", title: "HTML", isDone: true}
    ] // создаем новый объект, добавляем массив и делаем его копию массива и там делаем изменения
})

console.log(todoLists)


// reduce - метод массива

const nums = [1,2,3,4,5]
console.log(nums.reduce((sum, element) => sum + element, 0 ))   // 0 - стартовое значение и его можно менять .. // 15

let sum = nums[0]
for (let i = 1; i < nums.length; i++) {
    sum = sum + nums[i]
}

console.log(nums.reduce((max,element) => max > element ? max : element))


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

console.log(students.reduce((sum,student) => sum+student.scores, 0))
console.log(students.reduce((best,student) => best.scores > student.scores ? best : student ))



console.log(students.reduce((arr,student) => {
    //arr.push({...student, scores: student.scores + 10})
  return   arr.concat({...student, scores: student.scores + 10})
}, [] ))


// reduce более прогрессивный метод , многие пользуются ТОЛЬКО им.
console.log(students.reduce((data,student) => {
    data[student.name] = [student.age, student.scores, student.isMarried]
    return data
}, {}))


/*
let data = {}
for (let i = 0; i < students.length; i++) {
    data[students[i].name] = [students[i].age, students[i].scores, students[i].isMarried]

}*/
