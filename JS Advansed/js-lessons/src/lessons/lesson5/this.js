//This

// 'use-strict' this -> undefined, null, number, false -> примитивы превращаются в объекты


// !'use-strict' this -> {?} - это объект

//1 Global scope -> global object (window, global)
//2 Arrow functions
//3 Function (not arrow) -> watch how function called
// - like constructor -> new Function()
// - .call() .bind() .apply() - методы функции
// someObject <----.function()
// function() // !use-strict this -> window | in use-strict this -> undefined


//================================ARROW FUNCTIONS=======================
/*
const func = () => {
  console.log(this)
  this.age = 40
}
func()*/

/*this.age = 40 // window.age = 40

const user = {
  name: "Andrey",
  age: 32,
  showAge: ()=> {
    console.log(this.age)
  }
}

user.showAge()*/


//=================================== GLOBAL SCOPE ===============================
/*console.log(this) // -> window
console.log(this === window) // -> true

this.age = 32
console.log(window.age)*/


//================================FUNCTIONS=======================

//'use strict';

/*function foo() {
  console.log(this) // window
}

foo()*/

/*const andrey = {
  name: "Andrey",
  showName() {
    //console.log(a,b)
    //console.log(this.name)
  }
}*/

/*user.showName() // Andrey*/

/*const func = user.showName
func() //*/

/*const olga = {
  name: "Olga",
 // showName: user.showName
}*/

/*
olga.showName() // Olga
*/


/*
const car = {
  runEngine(){
    console.log(`By ${this.name}`)
  }
}

olga.runCar = car.runEngine

olga.runCar()
*/
/*
andrey.showName.call(olga, 1, 2)
andrey.showName.apply(olga, [1,2])
andrey.showName.bind(olga, 1)(2)*/


//========================================== CONSTRUCTORS =============================

function User(name, age) {
    //this -> {}
    this.name = name
    this.age = age
    // return this
}

const andrey = new User('Andrey', 32)

console.log(andrey)