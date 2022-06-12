// обработчик, handler, подписчик, subscriber, listener, слушатель - > function
// handler будет вызван при наступлении события
// the function will be called with argument ({})
// {} - это объект (содержит сведения о произошедшим событии) -> event, ev, e, evt

const small = document.getElementById("small")

const onClickHandler = (e) => {
    if(e.ctrlKey) {
        alert("CTRL!!!!")
    }
}

//small.onclick = onClickHandler // назначение обработчика
//small.onclick = null // отмена обработчика

small.addEventListener("click", onClickHandler) //функция, как метод объекта (принимает тип события и функцию обработчик
//small.removeEventListener("click", onClickHandler)

// 1.08