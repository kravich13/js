// junior
function checkBrackets(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i]

    if (bracket === '(') stack.push(bracket)
    else if (bracket === ')') {
      const lastElem = stack.pop()
      if (!lastElem) return false
    }
  }

  return !stack.length ?? true
}
checkBrackets('(((()))')

function checkBrackets(str) {
  const arr = str.split('')
  const stack = []

  arr.forEach((elem) => {
    if (elem === '(') stack.push(elem)
    else if (elem === ')') {
      const lastElem = stack.pop()
      if (!lastElem) return false
    }
  })

  return !stack.length
}
checkBrackets('(())')

// middle
function checkBrackets(str) {
  const arr = str.split('')
  const stack = []
  const obj = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  arr.forEach((elem) => {
    if (elem === '(' || elem === '{' || elem === '[') {
      stack.push(elem)
    } else if (elem === ')' || elem === '}' || elem === ']') {
      const lastElem = stack[stack.length - 1]
      if (lastElem === obj[elem]) stack.pop()
      else stack.push(elem)
    }
  })

  return !stack.length
}
console.log(checkBrackets('()[]{}')) // true
console.log(checkBrackets('()[]{)')) // false
console.log(checkBrackets('(()[]{})')) // true
console.log(checkBrackets('{(()[}{}))')) // false

// brother
const checkBrackets = (str) => {
  const arr = str.split('')
  const opening = []

  for (const symbol of arr) {
    // Сохраняем все открывающие скобки в массив
    if (symbol === '[' || symbol === '(' || symbol === '{') {
      opening.push(symbol)
    }
    // Если скобка закрывающая, и тип закрывающей равен типу последней открывающей - все ок, и можно выкинуть последнюю открывающую как получившую свою пару. Если нет - фолс
    else if (symbol === ']' || symbol === ')' || symbol === '}') {
      const lastOpening = opening[opening.length - 1]
      if (
        (symbol === ']' && lastOpening === '[') ||
        (symbol === ')' && lastOpening === '(') ||
        (symbol === '}' && lastOpening === '{')
      ) {
        // Если у нас нет открывающей пары для закрывающей скобки - фолс
        const lastOpening = opening.pop()
        if (!lastOpening) return false
      } else {
        return false
      }
    }
  }

  // Если не выкинуло фолс до этого момента - значит все четко
  return true
}

console.log(checkBrackets('[()[]{}]')) // true
console.log(checkBrackets(']()[')) // false
console.log(checkBrackets('{(})')) // false
console.log(checkBrackets('{()}[{}]')) // true
console.log(checkBrackets('{(lol)}kokosita[omg{}]')) // true
