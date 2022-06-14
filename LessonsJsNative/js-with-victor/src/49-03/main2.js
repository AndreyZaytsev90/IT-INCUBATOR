// обработчик, handler, подписчик, subscriber, listener, слушатель - > function
// handler будет вызван при наступлении события
// the function will be called with argument ({})
// {} - это объект (содержит сведения о произошедшим событии) -> event, ev, e, evt

const small = document.getElementById("small")
const medium = document.getElementById("medium")
const big = document.getElementById("big")
const a = document.getElementById("a")

const onClickHandlerSmall = (e) => {
    e.stopPropagation() // событие далее не распространяется
    alert("Hello!")
}

const anchorHandler = (e)=> {
    e.preventDefault()
    alert("Hello!")
}
//small.onclick = onClickHandler // назначение обработчика
//small.onclick = null // отмена обработчика

small.addEventListener("click", onClickHandlerSmall) //функция, как метод объекта (принимает тип события и функцию обработчик
//small.removeEventListener("click", onClickHandler)

medium.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log(e.currentTarget.id)
})
big.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Cool!")
})

a.addEventListener("click", anchorHandler)