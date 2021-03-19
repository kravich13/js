class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Comand {
  constructor(subject) {
    this.subject = subject
    this.commandsExetuted = []
  }

  execute(command) {
    this.commandsExetuted.push(command)
    return this.subject[command]()
  }
}

const x = new Comand(new MyMath(3))

console.log(x.execute('square')) // 9
console.log(x.execute('cube')) // 27

console.log(x.commandsExetuted)
// Array [ "square", "cube" ]
