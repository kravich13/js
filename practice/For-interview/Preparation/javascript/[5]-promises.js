const promise = new Promise((resolve, reject) => {
  resolve('true')
  reject(new Error('...'))
})
promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
)

new Promise((resolve) => {
  setTimeout(() => resolve('kravich'), 1000)
}).then((result) => console.log(result))

// задача 1 с собеседования
function fn(numb, cb) {
  setTimeout(() => {
    if (numb % 2) cb('error')
    else cb()
  }, 3000)
}

function fn2() {
  //
}

async function fnCall() {
  await fn2(13)
  console.log('после всех манипуляций я тут')
}

function fn(numb, cb) {
  setTimeout(() => {
    if (numb % 2) cb('error')
    else cb()
  }, 3000)
}

function fn2(num) {
  return new Promise((resolve, reject) => {
    function cb(err) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        console.log('Success!')
        resolve()
      }
    }

    return fn(num, cb)
  })
}

async function fnCall() {
  try {
    await fn2(12)
    console.log('после всех манипуляций я тут')
  } catch (err) {
    console.error(err)
  }
}

fnCall()
