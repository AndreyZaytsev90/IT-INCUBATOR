const names = ["Андрей", "Petr", 1000, "Andrey", "Olga", "Sergey", "artem",]

// метод сорт
console.log(names.sort().reverse()) // сортировка по таблице Unicod [1000, 'Andrey', 'Olga', 'Petr', 'Sergey', 'artem', 'Андрей'], после реверса ['Андрей', 'artem', 'Sergey', 'Petr', 'Olga', 'Andrey', 1000]

const numbers = [100, 333, 3, 9, 42, 1010, 10]

console.log(numbers.sort())  // метод sort воспинимает числа как строки [100, 1010, 3, 333, 42, 9] . для сортировки чисел непригоден
const compareFunc = (a, b) => {
     if (a <= b) {     // менять ни чего не надо
         return -1     // любое отр. число
     } else {      // менять надо
         return 1   // любое положительное число
     }
}
console.log(numbers.sort(compareFunc))