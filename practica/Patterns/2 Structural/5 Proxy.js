function networkFetch(url) {
  return `${url} - ответ с сервера`
}

const cashe = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]

    if (cashe.has(url)) return `${url} ответ из кэша`
    else {
      cashe.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('kravich.com')) // ответ с сервера
console.log(proxiedFetch('tinder.com')) // ответ с сервера
console.log(proxiedFetch('kravich.com')) // ответ из кэша
