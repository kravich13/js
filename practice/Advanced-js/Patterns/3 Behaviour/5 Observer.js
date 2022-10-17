class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    // Долбавили нового юзера при подписке
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    // Убрали юзера из подписки
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  fire(action) {
    // Сделать изменение у всех подписок (каждая подписка - класс с методами)
    this.observers.forEach((observer) => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state
    this.initialState = state
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += action.payload
        break
      default:
        this.state = this.initialState
    }
  }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(13)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({ type: 'INCREMENT' })
stream$.fire({ type: 'INCREMENT' })
stream$.fire({ type: 'DECREMENT' })

stream$.fire({ type: 'ADD', payload: 10 })

console.log(obs1.state)
console.log(obs2.state)
