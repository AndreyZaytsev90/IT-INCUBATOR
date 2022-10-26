//This

// 'use-strict' this -> undefined, null, number, false


// !'use-strict' this -> {?} - это объект

//1 Global scope -> global object (window, global)
//2 Arrow functions
//3 Function (not arrow) -> watch how function called
// - like constructor -> new Function()
// - .call() .bind() .apply()
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

const user = {
  name: "Andrey",
  showName() {
    console.log(this.name)
  }
}

user.showName() // Andrey

const func = user.showName
func() //

const olga = {
  name: "Olga",
  showName: user.showName
}

olga.showName() // Olga



const car = {
  runEngine(){
    console.log(`By ${this.name}`)
  }
}

olga.runCar = car.runEngine

olga.runCar()
