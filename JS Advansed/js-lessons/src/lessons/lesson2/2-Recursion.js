//Recursion - Рекурсия - функция вызывает сама себя

//Stack - стэк  - область памяти в процессе
// (абстрактный тип данных, представляющий собой список элементов, организованных по принципу LIFO (англ. last in — first out, «последним пришёл — первым вышел»).)

const a = () => {
  b()
}

const b = () => {
  const age = 19
  c()
}

const c = () => {}

a("Andrey") //stack frame



//Рекурсия
//2(5) === 2 * 2(4) === 2 * 2 * 2(3) (степень)
const pow = (x , y) => {
  debugger
  if (y === 1) {
    return x
  } else {
    return x * pow(x, y - 1)
  }
}

console.log(
  pow(2,4)
)

/*
let count = 0

const sum = () => {
  /!*const res = []
  for (let i = 0; i < 1000; i++) {
    res.push(i)
  }*!/
  console.log(++count)
  sum()
}

sum()*/
