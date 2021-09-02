class TypeScript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: TS version is ${this.version}`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel // Можно перезаписать только внутри конструктора
//   }
// }

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) {}
}

//---------------------------------------

// Модификаторы

class Animal {
  protected voice: string = '' // Доступны в данном классе и во всех классов которые наследуются от этого класса
  public color: string = 'black'

  constructor() {
    this.go()
  }
  
  private go() { // Доступны только в классе, котором были определены
    console.log('GO')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color) 

//--------------------------------------

// Абстрактные классы

abstract class Component {
  abstract render(): void
  abstract info(): string
} // От абстрактных классов можно наследоваться, но они не компилируются

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}