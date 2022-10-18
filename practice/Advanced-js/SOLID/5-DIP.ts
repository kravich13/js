interface IService {
  say: () => void;
}

class EnglishService implements IService {
  say() {
    console.log('I am English client');
  }
}

class Client {
  private readonly service: IService;

  constructor() {
    this.service = new EnglishService();
  }

  sayHi() {
    this.service.say();
  }
}

const englishClient = new Client();

// GOOD
// interface IService {
//   say: () => void;
// }

// class EnglishService implements IService {
//   say() {
//     console.log('I am English client');
//   }
// }

// class FrenchService implements IService {
//   say() {
//     console.log('I am French client');
//   }
// }

// class Client {
//   private readonly service: IService;

//   constructor(service: IService) {
//     this.service = service;
//   }

//   sayHi() {
//     this.service.say();
//   }
// }

// const frenchClient = new Client(new FrenchService());
// const englishClient = new Client(new EnglishService());

// frenchClient.sayHi();
// englishClient.sayHi();
