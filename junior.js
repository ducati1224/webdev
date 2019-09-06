/**
 * TYPES
 * PREMITIVE vs. OBJECTs
 */

// Primitive types
var a = 3 // Number
var b = a
a = 'hello' // String
a = true // Boolean
a = undefined
a = null
// a = ?, b = ?

// Object types
var obj1 = {
  name: 'Jimmy',
  age: 19,
  gender: 'M',
  numbers: [1, 2, 4],
  obj: {
    a: 1,
    b: 2
  }
}

var obj2 = JSON.parse(JSON.stringify(obj1))
obj1.name = 'Sally'

var arr1 = [1, 2, 3, 4] //Array
var arr2 = arr1
arr2.push(5)
// obj1 = ?, obj2 = ?, arr1 = ?, arr2 = ?

var obj3 = {
  hello: function() {
    console.log('hello')
  },
  hi() {
    console.log('hi')
  }
}
obj3.hi

/**
 * FUNCTION
 */
// Function statement vs. Function expression

function add(num1, num2) {
  return num1 + num2
}

var sub = function(num1, num2) {
  return num1 - num2
}

var calc = function(num1, num2, fn) {
  return fn(num1, num2)
}

calc(1, 2, add)

/**
 * STRING METHODS
 * - includes
 * - indexOf
 * - replace
 * - slice
 * - split
 *
 * Replace 'dog' with 'cat' and obtain the sentence 'over the lazy dog. If the dog' via
 * slice, finally split the sliced sentence into an array with seperator '.'
 */

var str1 =
  'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

str1.replace('dog', 'cat')
console.log(str1.includes('fox')) //true or false
console.log(str1.indexOf('quic')) // -1 4
console.log(str1.replace('fox', 'rabbit'))
console.log(str1.slice(0, 2))
console.log(str1.slice(-3))
console.log(str1.split(' '))

var newStr = str1.replace('dog', 'cat')
var indexStart = newStr.indexOf('over')
var indexEnd = newStr.indexOf('reacted') - 2
var sliced = newStr.slice(indexStart, indexEnd + 1)
var arr = sliced.split('.')

// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// var newStr = str1
//   .replace('dog', 'cat')
//   .slice(str1.indexOf('over'), str1.indexOf('reacted') - 2 + 1)
//   .split('.')

/**
 * NUMBER METHODS
 * - toString
 */
var num = 3.6
console.log(num.toString())

/**
 * ARRAY METHODS
 * - push
 * - pop
 * - shift
 * - unshift
 * - indexOf
 * - concat
 * - slice
 * - splice
 * - forEach
 * - map
 * - filter
 */

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
arr.slice(0, -1)
arr.push('j') //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
arr.pop() // [('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i')]
arr.unshift('0', '1') // ['0', '1', a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
arr.shift() // ['1', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
arr.indexOf('a')
arr.concat(['j', 'k', 'l']) // ['1', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
arr.slice(0, -1) // ['1', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
arr.splice(1, 2, '2') // ['1', '2', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

function square(num, index, arr) {
  return num * num
}

arr.forEach(square)

arr
  .forEach(function(curr, index, array) {
    console.log(curr)
  }) // ['1', '2', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

  [
    // [4, 5, 6]
    (4, 5, 6)
  ].map(square)

arr.filter(function(curr, index, arr) {
  return Number(curr)
})

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

var res = words.filter(word => word.length > 6)

const result = words.filter(word => word.length > 6)

for (var i = 0; i < 5; i++) {}
/**
 * ES6
 * - Default Parameters
 * - Template Literals
 * - Destructuring Assignment
 * - Enhanced Object Literals
 * - Arrow Functions
 * - Promises
 * - Block-Scoped Constructs Let and Const
 * - Classes
 * - Modules
 */

// Default Parameters
function fooES5(a, b) {
  a = a || 1
  b = b || 2
  return a + b
}
function fooES6(a = 1, b = 2) {
  return a + b
}

// Template Literals
var firstName = 'John'
var lastName = 'Doe'
var fullNameES5 = firstName + ' ' + lastName
var fullNameES6 = `${firstName} ${lastName}`

// Destructuring Assignment
var nameArr = ['John', 'Sally', 'Joe', 'Ben', 'Allen']
var [name1, name2] = ['John', 'Sally', 'Joe', 'Ben', 'Allen']
var name1 = nameArr[0]

var personObj = {
  name: 'Hawk',
  age: 20,
  gender: 'M'
}
var { name, age, gender } = personObj

// Enhanced Object Literals
var name = 'Hawk'
var age = 20
var gender = 'M'

var objectES5 = {
  name: name,
  age: age,
  gender: gender
}
var objectES6 = {
  name,
  age,
  gender
}

// Arrow Functions
var multi = (num1, num2) => {
  return num1 * num2
}

var multiArrow = (num1, num2) => {
  // dsada
  // ddad
  // dadasdas
  return num1 * num2
}

var multiArrow = (num1, num2) => num1 * num2

// Block-Scoped

function isTrueES5(flag) {
  if (flag) {
    var answer = 'Correct'
  } else {
    var answer = 'Wrong'
  }
  console.log(answer)
}

function isTrueES6(flag) {
  if (flag) {
    let answer = 'Correct'
  } else {
    const answer = 'Wrong'
  }
  console.log(answer)
}

/**
 * SYNCHRONOUS vs. ASYNCHRONOUS
 */

// CALLBACK

// const getUser = function(username, password) {
//   // API call
//   setTimeout(function() {
//     console.log('Finding user...')
//   }, 2000)
// }
// const login = function(username, password) {
//   console.log('DB transaction start')
//   getUser(username, password)
//   console.log('DB transaction done')
// }

// function getUser (username, password, cb) {

//   function delay(){
//     let temp = 30
//     cb(temp)
//   }

//   setTimeout(delay, 2000)

// }

// function echo (temp) {
//   console.log(temp)
// }
// var name = 'john'
// var pass = '123'

// function login(username, password, cb) {
//   getUser(username, password, cb)
// }

// login(name, pass, echo)

// PROMISE

// new Promise(function(resolve, reject){

// })

var temp

const getUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        temp = 30
        resolve(temp)
      } else {
        temp = 20
        reject(temp)
      }
    }, 2000)
  })
}

const login = (username, password) => {
  getUser()
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
}

// ASYNC / AWAIT  es7
const loginAsyncAwait = async (username, password) => {
  const result = await getUser(username, password)
  console.log(result)
}

// function api1(callback) {
//   setTimeout(() => {
//     console.log('Done with api1')
//     callback()
//   }, 2000)
// }
// function api2(callback) {
//   setTimeout(() => {
//     console.log('Done with api2')
//     callback()
//   }, 1000)
// }
// function main(callback) {
//   api1(() => {
//     api2(() => {
//       callback()
//     })
//   })
// }
// main(() => {
//   console.log('All function is done.')
// })
