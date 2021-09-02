const arrOfNumbers: Array<number> = [1,2,3,4,5]
const arrOfStrings: Array<string> = ['hello', 'bye']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrOfNumbers)
reverse(arrOfStrings)