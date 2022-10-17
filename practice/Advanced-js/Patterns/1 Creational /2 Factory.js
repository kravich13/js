class WorkingTrading {
  constructor(name) {
    this.name = name
    this.worked = 'Трейдером'
  }
}
class WorkingInvestment {
  constructor(name) {
    this.name = name
    this.worked = 'Инвестором'
  }
}
class WorkingProgramming {
  constructor(name) {
    this.name = name
    this.worked = 'Программистом'
  }
}

class MemberFactory {
  static list = {
    trader: WorkingTrading,
    investor: WorkingInvestment,
    programmer: WorkingProgramming
  }

  create(name, work = 'programmer') {
    const Membership = MemberFactory.list[work] || MemberFactory.list.programmer
    const member = new Membership(name)

    member.work = work
    member.define = function () {
      console.log(`${this.name} (${this.work}): работает ${this.worked}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vlad', 'investor'),
  factory.create('Maxim', 'programmer'),
  factory.create('Sergey', 'trader')
]

members.forEach((elem) => elem.define())

// Vlad (investor): работает Инвестором
// Maxim (programmer): работает Программистом
// Sergey (trader): работает Трейдером
