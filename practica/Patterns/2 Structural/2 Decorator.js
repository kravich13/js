class Crypto {
  constructor(crypto, count) {
    this.crypto = crypto
    this.count = count
  }

  get numberOfCoins() {
    return `Кол-во монет ${this.crypto}: ${this.count}`
  }
}

function aws(crypto) {
  crypto.isAWS = true
  crypto.awsINFO = function () {
    return crypto.numberOfCoins
  }
  return crypto
}

function azure(crypto) {
  crypto.isAzure = true
  crypto.count += 3
  return crypto
}

const c1 = aws(new Crypto('ETH', '130'))
const c2 = azure(new Crypto('EOS', '13000'))

console.log(c1.isAWS) // true
console.log(c1.awsINFO()) // Кол-во монет ETH: 130

console.log(c2.isAzure) // true
console.log(c2.numberOfCoins) // Кол-во монет EOS: 130003
