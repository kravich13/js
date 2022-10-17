class MySum {
  constructor(initialValue = 13) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    return this
  }
}

const sum1 = new MySum()
// Последовательная цепочка вызовов в одной строке с возвратом переменной
console.log(sum1.add(7).add(5).add(10).add(13).sum) // 48
