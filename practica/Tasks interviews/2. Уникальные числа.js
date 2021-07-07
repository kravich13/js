const arr = [1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 10, null, null, undefined]

function uniqArr(arr) {
  const map = new Map()
  const arrUniq = []

  arr.forEach((elem) => {
    const possibleValue = map.get(elem)
    !possibleValue ? map.set(elem, 1) : map.set(elem, possibleValue + 1)
  })

  for (const [key, value] of map) {
    if (value === 1) arrUniq.push(key)
  }

  return arrUniq
}
uniqArr(arr)
