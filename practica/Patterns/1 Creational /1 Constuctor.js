class User {
  constructor(name, money) {
    this.name = name
    this.money = money
  }
  getInfo() {
    return `Имя: ${this.name}, деньги: ${this.money}`
  }
}

const user1 = new User('Влад', '13000000')

console.log(user1.getInfo())
// Имя: Влад, деньги: 13000000
