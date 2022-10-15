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

const p = {
  state: 'pending',
  result: undefined
}


const promise = new Promise(() => {})



console.log(promise)
