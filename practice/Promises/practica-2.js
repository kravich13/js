// Перезапись с помощью async/await

function loadJson (url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }
  
loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404


// 1
async function loadJson (url) {
    const response = await fetch(url)
    
    if (response.status === 200) {
        const json = await response.json()
        return json
    }
    
    throw new Error(response.status)
}

loadJson('no-such-user.json') // (3)
    .catch(alert) // Error: 404




// Перезапись с помощью async/await

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
async function loadJson(url) {
  const response = await fetch(url)

  if (response.status === 200) {
    return response.json()
  }

  throw new HttpError(response)

}
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  
  let user

  while(true) {
    const name = prompt("Введите логин?", "iliakan")

    try {
      user = await loadJson(`https://api.github.com/users/${name}`)
      break; // ошибок не было, выходим из цикла
    } 
    catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // после alert начнётся новая итерация цикла
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
      } 
      else {
        // неизвестная ошибка, пробрасываем её
        throw err
      }
    }
  }


  alert(`Полное имя: ${user.name}`)
  return user
}

demoGithubUser()




// Вызовите async–функцию из "обычной"

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    return 10
  }

function f() {
    wait().then (result => console.log(result))
}












function resolveLater (res) { // результат положительный
    console.log('Resolve executor!')
      setTimeout(function () {
      res(true)
      }, 1000)
  }
  
  function rejectLater (res = null, rej) { // результат отрицательный
    console.log('Reject executor!')
      setTimeout(function () {
          rej(new Error('Error'))
      }, 1000)
  }
  
  const p1 = Promise.resolve('foo') 
  const p2 = p1.then (function () {
      // Return promise that will be resolved to `true` in 1 s
      return new Promise(resolveLater)
  })
  p2.then (function (v) {
      console.log('resolved', v)    // "resolved", true
  }).catch(err => console.warn(err))
  
  const p3 = p1.then(function () {
      // Return promise that will be rejected with 'Error' in 1 s
      return new Promise(rejectLater)
  })
  p3.then (function (v) {  // will not be called
      console.log('resolved', v)
  }).catch(err => console.warn(err))  // "rejected", 'Error'