interface IUser {
  say(): void;
}

interface IDeveloper {
  developProject(): void;
}

class User implements IUser {
  say() {
    console.log('Hello by User');
  }
}

class Developer extends User implements IDeveloper {
  say() {
    console.log('Hello by Developer');
  }

  developProject() {
    console.log('I can develop a project');
  }
}

function callMethodForAll(instance: IUser | User) {
  instance.say();
}

function callMethodForDevelopers(instance: IDeveloper | Developer) {
  instance.developProject();
}

const user = new User();
const developer = new Developer();

callMethodForAll(user); // Hello by User
callMethodForAll(developer); // Hello by Developer

callMethodForDevelopers(developer); // I can develop a project
