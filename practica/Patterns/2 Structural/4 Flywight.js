class Phone {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class PhoneFactory {
  constructor() {
    this.phone = []
  }

  create(model, price) {
    const candidate = this.getPhone(model)
    if (candidate) return candidate

    const newPhone = new Phone(model, price)
    this.phone.push(newPhone)
    return newPhone
  }

  getPhone(model) {
    return this.phone.find((phone) => phone.model === model)
  }
}

const factory = new PhoneFactory()

const iPhone12 = factory.create('iphone', '1000')
const xiaomiNote6 = factory.create('xiaomi', '200')
const iPhone11 = factory.create('iphone', '750')

console.log(iPhone12)
console.log(xiaomiNote6)
console.log(iPhone11)

// Object { model: "iphone", price: "1000" }
// Object { model: "xiaomi", price: "200" }
// Object { model: "iphone", price: "1000" }
