const userPrototype = {
  name: "userPrototype",
  showName() {
    console.log(this.name)
  }
}


const andrey = {
  name: "Andrey",
  //showName: userPrototype.showName
}

const olga = {
  name: "Olga",
  // showName: userPrototype.showName
}
andrey.__proto__ = userPrototype

console.log(andrey.name)

//andrey.showName()

olga.__proto__ = userPrototype
olga.showName()


// ============== Цепочка прототипов ======================

const prototype = {
  name: "Prototype!"
}
prototype.__proto__ = null

const basePrototype = {
  age: 32
}

basePrototype.__proto__ = prototype

const superPrototype = {}

superPrototype.__proto__ = basePrototype

const user = {}

user.__proto__ = superPrototype

//=-=================================================



