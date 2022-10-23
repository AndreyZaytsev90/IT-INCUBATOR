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

button.addEventListener('click', promiseLoop)