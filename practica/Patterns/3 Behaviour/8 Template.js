class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsesibilies() {}

  work() {
    return `${this.name} выполняет ${this.responsesibilies()}`
  }

  getPaid() {
    return `${this.name} имеет зп ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsesibilies() {
    return `процесс создания программ`
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsesibilies() {
    return `процесс тестирования`
  }
}

const dev = new Developer('Максим', 100000)

console.log(dev.getPaid())
console.log(dev.work())
// Максим имеет зп 100000
// Максим выполняет процесс создания программ

const tester = new Tester('Анна', 50000)
console.log(tester.getPaid())
console.log(tester.work())
// Анна имеет зп 50000
// Анна выполняет процесс тестирования
