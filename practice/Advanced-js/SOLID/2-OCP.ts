interface IAttacker {
  attack: () => void;
}

class Weapon implements IAttacker {
  damage: number;
  range: number;

  constructor(damage: number, range: number) {
    this.damage = damage;
    this.range = range;
  }

  attack() {}
}

class Sword extends Weapon {
  attack() {
    console.log(`Удар мечом с уроном ${this.damage}`);
  }
}

class Crossbow extends Weapon {
  attack() {
    console.log(`Выстрел из арбалета с уроном ${this.damage}`);
  }
}

const sword = new Sword(13, 3);
const crossbow = new Crossbow(15, 5);

sword.attack(); // Удар мечом с уроном 13
crossbow.attack(); // Выстрел из арбалета с уроном 15
