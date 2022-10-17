class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }
  sign() {
    return 'Stop'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }
  sign() {
    return 'Ready'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }
  sign() {
    return 'Run'
  }
}
class TrafficLight {
  constructor() {
    this.states = [new RedLight(), new YellowLight(), new GreenLight()]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex((light) => light === this.current)

    this.current = index + 1 < total ? this.states[index + 1] : this.states[0]
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()

for (let i = 0; i < 6; i++) {
  console.log(traffic.sign())
  traffic.change()
}
