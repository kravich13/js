// асинхронщина в итераторе

const range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() { // асинхронный итератор

    return {
      current: this.from,
      last: this.to,

      // next() вызывается на каждой итерации цикла for await..of

      async next() { // асинхронная функция next

        await new Promise(resolve => setTimeout(resolve, 1000)) // задержка в одну секунду

        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++
          }
        } 
        else {
          return {
            done: true
          }
        }
      }
    }
  }
}; // должна быть обязательная скобка

(async () => {

  for await (let value of range) {
    console.log(value) // 1,2,3,4,5
  }

})() // вызов стрелочкой функции





// Написать асинхронно перебираемый объект

const range = {
  from: 3, 
  to: 7,

  async *[Symbol.asyncIterator]() { // асинхронный символ (функция)

    for (let value = this.from; value <= this.to; value++) { // асинхронный цикл

      await new Promise (resolve => setTimeout(resolve, 1000)) // сначала задержка в одну секунду

      yield value // после - исполнение yield 
    }
  }
};

(async () => { // асинхронная стрелочная функция 

  for await (let value of range) { // асинхронный перебираемый объект
    console.log(value)
  }
})() // вызов функции

