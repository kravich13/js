const promise = new Promise((resolve, reject) => {
  reject(new Error('...'))
  resolve('true')
})
promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
)

new Promise((resolve) => {
  setTimeout(() => resolve('kravich'), 1000)
}).then((result) => console.log(result))
