interface Rect {
  readonly id: string // Только для чтения
  color?: string // Необязательный параметр "?"
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 100,
    height: 50
  },
  color: '#00000'
}

const rect2: Rect = {
  id: '1234567',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black'
// rect2.id = '231231' // readonly property

const rect3 = {} as Rect
const rect4 = <Rect>{}

//----------------------------

// Наследование интерфейса

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

//--------------------------

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

//------------------------------------

//Интерфейс для объекта с большим кол-вом динамических ключей

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5x'
}