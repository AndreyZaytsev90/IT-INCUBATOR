const names = ["Андрей", "Petr", 1000, "Andrey", "Olga", "Sergey", "artem", ""]

// метод сорт
console.log(names.sort()) // сортировка по таблице Unicod [1000, 'Andrey', 'Olga', 'Petr', 'Sergey', 'artem', 'Андрей'], после реверса ['Андрей', 'artem', 'Sergey', 'Petr', 'Olga', 'Andrey', 1000]

const numbers = [190, 3, 333, -9, -42, 1010, 10]

//console.log(numbers.sort())  // метод sort воспинимает числа как строки [100, 1010, 3, 333, 42, 9] . для сортировки чисел непригоден
const compareFunc = (a, b) => {
    if (a <= b) {     // менять ни чего не надо
        return -1     // любое отр. число
    } else {      // менять надо
        return 1   // любое положительное число
    }
}

const compareIncreaseFunc = (a, b) => a - b    // возвращает любое отр. или любое положительное число

//console.log(numbers.sort(compareIncreaseFunc) === numbers ) // true

// если нужно не мутировать массив. создаем копию и далее сортируем.
/*console.log([...numbers].sort(compareIncreaseFunc) === numbers )// false

console.log(numbers.sort(compareIncreaseFunc).reverse())*/

// сортировка массива по св-вам объекта ( сравниваем значения свойств, а переставляем объекты)
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 89
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
        scores: 121
    },
    {
        name: "john",
        age: 19,
        isMarried: false,
        scores: 121
    }
];


console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1))

//    Часть 2 ( для собесов важно)
// сортировка пузырьком
for (let j = 0; j < numbers.length - 1; j++) {
    console.log(j)
    let isArraySorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        console.log(i)
        if (numbers[i] > numbers[i + 1]) {
            isArraySorted = false; // тут нужна ;
            // меняем местами 2 элемента массива:
            /*let tepm = numbers[i + 1]          1.38 объяснение в видео от -03.02.2022
            numbers[i + 1] = numbers[i]
            numbers[i] = tepm*/
            [numbers[i+1], numbers[i]] = [numbers[i], numbers[i+1]]
        }
    }
    if(isArraySorted)break
}
console.log(numbers)