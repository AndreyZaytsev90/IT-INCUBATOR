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
    if(event.target.tagName === "BUTTON"){
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





