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


/*
function counterCreator() {
  let count = 0
  return () => {
    count++
  }
}

const coun = counterCreator()

coun()
coun()
coun()*/
