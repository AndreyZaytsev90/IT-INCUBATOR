/*
setTimeout(() => {
    console.log('timer 1')
}, 1000)
setTimeout(() => {
    console.log('timer 2')
}, 2000)
setTimeout(() => {
    console.log('timer 3')
}, 3000)

console.log(2)
console.log(3)
console.log(4)*/


/*
const button = document.querySelector("#load")

const whileLoop = () => {
    while(true){
        console.log('Hello')
    }
}

const whileSetTimeOutLoop = () => {
    console.log(42)
    setTimeout(whileSetTimeOutLoop, 1)
}

const promiseLoop = () => {
    console.log(666)
    Promise.resolve().then(promiseLoop)
}

button.addEventListener('click', promiseLoop)*/


////==================================Задача


/*
setTimeout(function timeout() {
  console.log(1)
}, 4000)

setTimeout(function timeout() {
  console.log(2)
}, 2000)

setTimeout(function timeout() {
  console.log(3)
}, 1)

new Promise((resolve, reject) => {
  console.log(4)
  resolve()
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)*/
