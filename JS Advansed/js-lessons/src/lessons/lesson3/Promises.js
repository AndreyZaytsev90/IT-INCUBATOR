/*const handlerFetchData = (err, data) => {

}*/

/*const fetchData = (url, callback) => {
  if (!url) {
    callback('url is not defined', null)
  } else {
    callback(null, [{id: 1}])
  }
}*/

/*
fetchData("https://vk.com/users", (err, data) => {
  if (err) {
    throw new Error(err)
  } else {
    /!*console.log(err)*!/
    fetchData("https://vk.com/users/3", (err, data) => {
      if (err) {
        throw new Error(err)
      } else {
        fetchData("https://vk.com/users/3/posts", (err, data) => {
          if (err) {
            throw new Error(err)
          } else {
            fetchData("https://vk.com/users/3/posts/4", (err, data) => {
              if (err) {
                throw new Error(err)
              } else {
              }
            })
          }
        })
      }
    })
  }
})*/

//Promise - a object
// 2 свойства state и result
// 3 состояния: pending, rejected, resoled
// 3 метода: then catch finally

const p = {
  state: 'pending',
  result: undefined
}
const get = {
  getFile() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('File')
        // reject(new Error('File was deleted'))
      }, 3000)
    })
    return promise
  }
}

const promise = get.getFile()
/*console.log(promise)*/

//===================================THEN ======================================
//const learn = (file) => {}

/*promise.then((result) => {
  console.log("Then", result)
})*/

//===================================ERROR ======================================
const learn = (file) => {
}
const cry = (error) => {
}

/*promise.then(
  (result) => {
    console.log('first callback', result)
  },
  (error) => {
    console.log('second callback', error)
  },
)*/

// ======================= Only rejected result =================================

/*promise.catch((error) => {
  console.log('Error!!', error)
})*/


// или, но используется реже

/*
promise.then(
  null,
  (error) => {
    console.log('Error!!', error)
  })*/


//=========================== Finally =================================
// сюда попадаем в любом случае.
/*promise.finally(() => {
  console.log("HELLO, FINALLY!!")
})*/


//================================================================================

/*
let promise2 = promise.then((file) => {
  console.log('then1',file)
  //return 10
  //throw new Error('Some error')
  console.log(age)
})

promise2.then((result) => {
  console.log('then2', result)
})

promise2.catch((err)=> {
  console.log('catch', err)
})*/


promise
  .then((file) => {
    return 20
  })
  .then((result) => {
    console.log(result + 10)
  })
  .catch((error) => {
    console.log(error)
  })
