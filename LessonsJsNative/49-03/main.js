// обработчик (handler) событий - это функция callback ("повесить обработчик")


const small = document.getElementById("small")
const med = document.getElementById("medium")
const big = document.getElementById("big")

const onClickHandler = (event) => {   // event или просто (e)- это объект, у которого есть свойства
    event.stopPropagation()                     // - остановка распространения ( стоит использовать всегда для подстраховки
    if (event.currentTarget.id === "small") {       // currentTarget - предпочтительный вариан
        console.dir(event.currentTarget.id)
    }
    //console.dir(event.currentTarget)
}

//small.onclick = onClickHandler
/*med.onclick = (event) => {
    event.stopPropagation() // - остановка распространения
    alert("YO")
}
big.onclick = () => alert("HEY")*/
//small.onclick = null*/


/*const removeUser = (event) => {
    console.log(event.currentTarget.id)
}*/

const removeUser = (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.id)
    }
}

small.onclick = removeUser
const a = document.getElementById("a")
a.onclick = (event) => {
    event.preventDefault() // предотвратить поведенике по-умолчанию
    alert("Golden egg")
}


//small.onclick = () => {alert("yo")}

/*
const handler = () => {alert("hey")}
//small.addEventListener("click", () => {alert("yo")} ) // позволяет вешать много обработчиков
small.addEventListener("click", handler)

//small.onClick = () => {alert("yo")}

small.removeEventListener("click", handler)*/


// Рекурсия - функция вызывает сама себя   a->n

function factorial(n) { // 1*2*3 = 3!
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result *= i
    }
    return result
}

console.log(factorial(3))

//factorial(4)*5 = 5!
//factorial(3)*4

function recFactorial(n) {
    if (n === 0) {
        return 1
    } else {
        return recFactorial(n - 1) * n
    }
}

console.log(recFactorial(5))

// сумма N первых чисел
// sum(N-1) + N

function recSum(n) {
    /* if (n === 0) {
         return 0
     } else {
         return recSum(n - 1) + n
     }*/
    return n === 0 ? 0 : recSum(n - 1) + n
}

console.log(recSum(5)) // сумма первых пяти чисел


const user = {
    name: "Bob",
    age: 32,
    friend: {
        name: "Alex",
        age: 23,
        address: {
            city: "Moscow",
            street: "Lipchanskogo"
        }
    }
}

function copyObject(obj) { //копия объекта
    const keys = Object.keys(obj) // keys - это массив  ["name", "age"]
    const newObj = {}
    for (let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] === "object") {
            newObj[keys[i]] = copyObject(obj[keys[i]])
        }else {
            newObj[keys[i]] = obj[keys[i]]
        }
    }
    return newObj
}
const copy = copyObject(user)
console.log(copy.friend === user.friend)
console.log(copy)