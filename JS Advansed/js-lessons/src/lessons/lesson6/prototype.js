
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



