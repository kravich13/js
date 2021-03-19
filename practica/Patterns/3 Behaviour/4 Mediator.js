class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  // Сообщение отправлено от
  send(message, to) {
    this.room.send(message, this, to)
  }
  // Сообщение отправлена для
  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }
  send(message, from, to) {
    if (to) to.receive(message, from)
    else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const vlad = new User('Vlad')
const max = new User('Max')
const anna = new User('Anna')

const room = new ChatRoom()

room.register(vlad)
room.register(max)
room.register(anna)

vlad.send('Ку', max)
vlad.send('Скачал тунки?', vlad)
anna.send('Привет мальчики')

// Vlad => Max: Ку
// Vlad => Vlad: Скачал тунки?
// Anna => Vlad: Привет мальчики
// Anna => Max: Привет мальчики
