// Замыкание и рекурсия

let name = "Andrey"

function sayHi() {
  console.log(`Hello ${name}`)
}

name = "Olga"

sayHi() // выведет Ольга

//Лексическое окружение - это скрытый объект LexicalEnvironment, в нем может быть ссылка на другой объект

/*const lexicalEnvironment = {
  environmentRecords: {
    //
  },
  other: null // | lexicalEnvironment
}*/

// {  } -> null
// {  } -> null
let age;  // { age: undefined } -> null

console.log(age) // undefined

age = 32 // { age: 32 } -> null  // это глобальное лексическое окружение до изменения

console.log(age) // 32

age = 31 // { age: 31 } -> null  // это глобальное лексическое окружение после изменения

console.log(age) // 31



const sayAge = () => {
  let age = 32
  console.log(`Age -> ${age}`)
}
sayAge()


function counterCreator() {

  let count = 0

  return () => {
    console.log(count)
    return count++
  }

}

const couter = counterCreator() // в переменную записалось то, что созвращает функция. В данном случае записалось значение в виде другой функции

couter() //0
couter() //1
couter() //2



//Function Declaration - можно вызывать до того как функция написана
declaration()
function  declaration() {}

//Func Expression - функция в переменной
//expression() - ошибка
const expression = function () {}
const expression2 = () => {}

//Объект не создает лексического окружения
// Блок кода {} - создает лексическое окружение

